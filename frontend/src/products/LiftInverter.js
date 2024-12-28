import { useState } from "react";
import HomeContainer from "../containers/HomeContainer";
import photo1 from "../assets/lift1.webp";
import photo2 from "../assets/lift2.webp";
import Footer from "../containers/Footer";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";

const LiftInverter = () => {
    const [selectedImage, setSelectedImage] = useState(photo1);
    const [createContactModalOpen, setContactModalOpen] = useState(false);

    const images = [
        { src: photo1, alt: "Lift Inverter 1" },
        { src: photo2, alt: "Lift Inverter 2" },
    ];

    return (
        <div>
            <HomeContainer />
            <div className="flex flex-col md:flex-row mt-4 p-4 space-y-4 md:space-y-0 md:space-x-6">
                {createContactModalOpen && (
                    <ContactModal
                        closeModal={() => {
                            setContactModalOpen(false);
                        }}
                    />
                )}
                {/* Selection Bar */}
                <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-4 items-center md:items-start">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-16 h-16 border rounded-md overflow-hidden cursor-pointer hover:opacity-75"
                            onMouseEnter={() => setSelectedImage(image.src)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                    {/* Main Image */}
                    <div className="border rounded-md w-full md:w-1/2 h-80 flex justify-center items-center">
                        <img
                            src={selectedImage}
                            alt="Selected Inverter"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Product Information */}
                    <div className="flex flex-col space-y-4 md:w-1/2 text-gray-800 md:pl-6 px-2 md:px-0">
                        <h1 className="text-2xl font-bold">Innovative Lift Inverters</h1>
                        <p className="text-lg">
                            <strong>Brand:</strong> Swastik, Utl
                        </p>
                        <p>
                        Ensure uninterrupted elevator operations with our innovative lift inverters.
                        </p>
                        <ul className="list-disc pl-4">
                            <li>Superior load management during power outages</li>
                            <li>Advanced safety and reliability features</li>
                            <li>Seamless integration with lift systems</li>
                            <li>High energy efficiency and durability</li>
                            <li>Designed for both residential and commercial buildings</li>
                        </ul>
                        <p className="text-sm text-gray-600">
                            Perfect for home and commercial use, our inverters are designed to
                            deliver optimal performance under various conditions.
                        </p>
                        <div className="flex justify-center md:justify-end pb-4 lg:pr-6">
                            <div
                                className="p-3 bg-red-900 text-white rounded-full text-center w-full md:w-auto hover:bg-red-800 transition-all"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setContactModalOpen(true);
                                }}
                            >
                                Yes, I am Interested
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LiftInverter;
