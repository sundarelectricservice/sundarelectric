import { useState } from "react";
import { useCookies } from "react-cookie";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import logo from "../assets/logo.png";
import bgImage from "../assets/logo.png";
import WrongInfoModal from "../components/WrongInfoModal.js";

const SignupComponent = () => {
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState({});
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();
    const [createUnAuthModalOpen, setCreateUnAuthModalOpen] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const signUp = async () => {
        const newError = {};

        if (!validateEmail(email)) {
            newError.email = "Invalid email format. Please include '@' and a domain.";
        }

        if (password !== confirmPassword) {
            newError.confirmPassword = "Passwords do not match.";
        }

        if (Object.keys(newError).length) {
            setError(newError);
            return;
        }

        const data = { email, password, username, firstName, lastName };
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, { path: "/", expires: date });

            navigate("/home");
        } else {
            setCreateUnAuthModalOpen(true);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-full ">
            {createUnAuthModalOpen && (
                <WrongInfoModal
                    closeModal={() => {
                        setCreateUnAuthModalOpen(false);
                    }}
                />
            )}

            {/* Left Section (Form + Logo) */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-start px-8 py-10 lg:px-16">
                {/* Logo */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    <img src={logo} alt="Logo" className="w-12 h-12" />
                    <div className="text-xl font-bold text-black">
                        <Link to="/home">Sundar Electric Service</Link>
                    </div>
                </div>

                {/* Form Container */}
                <div className="w-full max-w-lg bg-black text-white p-8 rounded-lg shadow-lg">
                    <div className="font-bold text-l mb-4 text-center">Sign Up</div>
                    <TextInput
                        label="Email address"
                        labelClassName={"text-white"}
                        placeholder="Enter your email"
                        className={`mt-6 ${error.email ? "border-red-500" : ""}`}
                        value={email}
                        setValue={setEmail}
                    />
                    {error.email && (
                        <div className="text-red-500 text-sm">{error.email}</div>
                    )}

                    <TextInput
                        label="Username"
                        labelClassName={"text-white"}
                        placeholder="Enter your username"
                        value={username}
                        setValue={setUsername}
                    />

                    <PasswordInput
                        label="Create Password"
                        placeholder="Enter a strong password"
                        className={`mb-6 ${error.confirmPassword ? "border-red-500" : ""}`}
                        value={password}
                        setValue={setPassword}
                    />

                    <PasswordInput
                        label="Confirm Password"
                        placeholder="Enter your password again"
                        className={`mb-8 ${error.confirmPassword ? "border-red-500" : ""}`}
                        value={confirmPassword}
                        setValue={setConfirmPassword}
                    />
                    {error.confirmPassword && (
                        <div className="text-red-500 text-sm">{error.confirmPassword}</div>
                    )}

                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <TextInput
                            label="First Name"
                            labelClassName={"text-white"}
                            placeholder="Enter Your First Name"
                            className="my-2 w-full"
                            value={firstName}
                            setValue={setFirstName}
                        />
                        <TextInput
                            label="Last Name"
                            labelClassName={"text-white"}
                            placeholder="Enter Your Last Name"
                            className="my-2 w-full"
                            value={lastName}
                            setValue={setLastName}
                        />
                    </div>

                    <div className="w-full flex items-center justify-center my-4">
                        <button
                            className="text-white font-semibold p-3 px-10 rounded-full w-full border-2 border-white"
                            onClick={(e) => {
                                e.preventDefault();
                                signUp();
                            }}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section (Background Image) */}
            <div
                className="hidden lg:block lg:w-1/2 h-full bg-cover bg-right"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: "center",
                }}
            ></div>
        </div>
    );
};

export default SignupComponent;
