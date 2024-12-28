import { useState } from "react";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { Link, useNavigate } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import Footer from "../containers/Footer";

const Upload = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState("");
    const [pname, setPname] = useState("");
    const [quantity, setQuantity] = useState("");
    const [pid, setPid] = useState("");
    const [warranty, setWarranty] = useState("");
    const [ordno, setOrdno] = useState("");
    const [dealer, setDealer] = useState("");
    const [price, setPrice] = useState("");
    const [selling, setSelling] = useState("");

    const navigate = useNavigate();

    const submit = async () => {
        const data = { name, email, message, number, address, date, pname, quantity, pid, warranty, ordno, dealer, price, selling };
        const response = await makeAuthenticatedPOSTRequest("/song/create", data);
        if (response.err) {
            alert("Could not create");
            return;
        }
        navigate("/admin");
    };

    return (
        <div>
            <HomeContainer />
            <div className="content p-8 pt-0 overflow-auto font-lora">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold mb-5 text-black mt-8">
                    Upload
                </div>
                <div className="text-l font-semibold mb-5 text-white bg-red-900 mt-8 p-2 rounded-full">
                    <Link to="/admin">Admin</Link>
                </div>
                </div>
                {/* Container for the form */}
                <div className="w-full flex flex-col lg:flex-row gap-8">
                    {/* Left side (First 5 fields) */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        <TextInput
                            label="Date"
                            labelClassName="text-black"
                            placeholder="Date"
                            value={date}
                            setValue={setDate}
                        />
                        <TextInput
                            label="Name"
                            labelClassName="text-black"
                            placeholder="Name"
                            value={name}
                            setValue={setName}
                        />
                        <TextInput
                            label="Email"
                            labelClassName="text-black"
                            placeholder="Email"
                            value={email}
                            setValue={setEmail}
                        />
                        <TextInput
                            label="Number"
                            labelClassName="text-black"
                            placeholder="Number"
                            value={number}
                            setValue={setNumber}
                        />
                        <TextInput
                            label="Retail Dealer"
                            labelClassName="text-black"
                            placeholder="Retail Dealer"
                            value={dealer}
                            setValue={setDealer}
                        />
                        <TextInput
                            label="Selling Price"
                            labelClassName="text-black"
                            placeholder="Selling Price"
                            value={selling}
                            setValue={setSelling}
                        />
                        <TextArea
                            label="Address"
                            labelClassName="text-black"
                            placeholder="Address"
                            value={address}
                            setValue={setAddress}
                        />
                    </div>

                    {/* Right side (Second 5 fields) */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        <TextInput
                            label="Product Name"
                            labelClassName="text-black"
                            placeholder="Product Name"
                            value={pname}
                            setValue={setPname}
                        />
                        <TextInput
                            label="Order No"
                            labelClassName="text-black"
                            placeholder="Order No"
                            value={ordno}
                            setValue={setOrdno}
                        />
                        <TextInput
                            label="Product Quantity"
                            labelClassName="text-black"
                            placeholder="Product Quantity"
                            value={quantity}
                            setValue={setQuantity}
                        />
                        <TextInput
                            label="Product Id"
                            labelClassName="text-black"
                            placeholder="Product Id"
                            value={pid}
                            setValue={setPid}
                        />
                        <TextInput
                            label="Warranty"
                            labelClassName="text-black"
                            placeholder="Warranty"
                            value={warranty}
                            setValue={setWarranty}
                        />
                        <TextInput
                            label="Purchase Price"
                            labelClassName="text-black"
                            placeholder="Purchase Price"
                            value={price}
                            setValue={setPrice}
                        />
                        <TextArea
                            label="Message"
                            labelClassName="text-black"
                            placeholder="Message"
                            value={message}
                            setValue={setMessage}
                        />
                    </div>
                </div>

                <div className="w-full flex items-center justify-end">
                <div
                    className="bg-red-900 sm:w-35 lg:w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold mt-6 text-white"
                    onClick={submit}
                >
                    Submit
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Upload;
