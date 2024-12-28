import { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";
import WrongInfoModal from "../components/WrongInfoModal.js";
import logo from '../assets/logo.png';
import bgImage from '../assets/logo.png'; 

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const [createUnAuthModalOpen, setCreateUnAuthModalOpen] = useState(false);

    const login = async () => {
    const data = { email, password };
    
    try {
        // Make the POST request to the backend with the credentials
        const response = await fetch("https://sundarelectricbackend.onrender.com/auth/login", {
            method: "POST",
            credentials: "include", // Ensure cookies are included in the request
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        // Check if the response is OK (status code 200-299)
        if (response.ok) {
            const result = await response.json(); // Parse JSON response
            const token = result.token; // Assuming the token is in the response

            // Set the token in cookies with expiration date
            const date = new Date();
            date.setDate(date.getDate() + 30); // Token expiration in 30 days
            setCookie("token", token, { path: "/", expires: date });

            // Navigate to the admin page
            navigate("/admin");
        } else {
            // If login fails, open the error modal
            setCreateUnAuthModalOpen(true);
        }
    } catch (error) {
        console.error("Login error:", error);
        setCreateUnAuthModalOpen(true); // Open modal on error
    }
};


    return (
        <div className="relative w-full h-screen flex p-4 bg-gray-100">
            {createUnAuthModalOpen && (
                <WrongInfoModal
                    closeModal={() => {
                        setCreateUnAuthModalOpen(false);
                    }}
                />
            )}

            
            <div
                className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-right hidden lg:block"
                style={{ backgroundImage: `url(${bgImage})`,
                backgroundPosition: "right 20px center",   
            }}
            ></div>

            
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-start px-8 py-10 lg:px-16">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <img src={logo} alt="Logo" className="w-12 h-12" />
                    <div className="text-min-sm text-max-xl text-black font-roboto">
                        <Link to="/home">
                            <b>Sundar Electric Service</b>
                        </Link>
                    </div>
                </div>
                <div className="inputRegion w-full py-10 px-8 flex flex-col items-center bg-black text-white rounded-lg shadow-lg">
                    <div className="font-bold text-center mb-4">To continue, log in.</div>
                    <TextInput
                        label="Email address"
                        labelClassName={"text-white"}
                        placeholder="Email address"
                        className="my-4 w-full"
                        value={email}
                        setValue={setEmail}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        className="my-4 w-full"
                    />
                    <div className="w-full flex items-center justify-end mt-6 pb-10 pt-5">
                        <button
                            className="text-white font-semibold p-3 px-10 border-2 border-white rounded-full w-full"
                            onClick={(e) => {
                                e.preventDefault();
                                login();
                            }}
                        >
                            LOG IN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
