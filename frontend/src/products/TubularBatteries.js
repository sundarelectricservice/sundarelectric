import { useState } from "react";
import HomeContainer from "../containers/HomeContainer";
import photo1 from "../assets/trolley1.jpg";
import photo2 from "../assets/trolley2.jpg";
import Footer from "../containers/Footer";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal";

const TubularBatteries = () => {
    const [selectedImage, setSelectedImage] = useState(photo1);
    const [createContactModalOpen, setContactModalOpen] = useState(false);

    const images = [
        { src: photo1, alt: "Tubular Batteries 1" },
        { src: photo2, alt: "Tubular Batteries 2" },
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
                        <h1 className="text-2xl font-bold">Tubular Battery Trolley</h1>
                        <p className="text-lg">
                            <strong>Brand:</strong> Luminous, Exide Batteries, Autobat Batteries
                        </p>
                        <p>
                        The leader in UPS brings Trolley for an elegant look for home and safety for children. A trolley is also known as Inverter battery cover or case, It is elegant, movable, safe and made from long-lasting material. It provides home an elegant look, stops the damage of flooring from acid spillage and provides safety to children. The battery is kept inside trolley and Inverter / UPS is placed on top of it, thus taking less space.
                        </p>
                        <ul className="list-disc pl-4">
                            <li>Silver color trolley made from highly durable plastic</li>
                            <li>Protects the Floor from acid spillage and overflow</li>
                            <li>Protection from Shocks and Safety for Children</li>
                            <li>5 wheels including one wheel in the center to give maximum support to the heavy battery</li>
                            <li>Elegant look for your Home</li>
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

export default TubularBatteries;
