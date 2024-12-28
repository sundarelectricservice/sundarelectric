import {useContext, useState} from "react";


const DataCard = ({info, playSound}) => {
    const [currentSong, setCurrentSong] = useState("");

    return (
        <div
            className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm"
            onClick={() => {
                setCurrentSong(info);
            }}
        >
            <div className="flex w-full text-black">
                <div className="text-black bg-gray-200 flex justify-center flex-col p-4 w-full">
                    <div className=" cursor-pointer hover:underline text-red-900 pb-2 font-semibold">
                        Order Number: #{info.ordno}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                        <b>Date:</b> {info.date}
                    </div>
                    <div className="cursor-pointer hover:underline">
                    <b>Name:</b> {info.name}   
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Number:</b> {info.number}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Email:</b> {info.email}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Address:</b> {info.address}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Product Name:</b> {info.pname}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Quantity:</b> {info.quantity}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Product Id:</b> {info.pid}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Warranty:</b> {info.warranty}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Retail Dealer:</b> {info.dealer}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Purchase Price:</b> ₹{info.price}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Selling Price:</b> ₹{info.selling}
                    </div>
                    <div className=" cursor-pointer hover:underline">
                    <b>Message:</b> {info.message}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataCard;