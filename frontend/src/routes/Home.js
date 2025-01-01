import { useNavigate } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import Footer from "../containers/Footer";
import photo1 from "../assets/inverter1.jpg";
import photo2 from "../assets/ups1.jpg";
import photo3 from "../assets/trolley1.jpg";
import photo4 from "../assets/microtek.webp";
import photo5 from "../assets/smf2.webp";
import photo6 from "../assets/single2.jpg";
import photo7 from "../assets/three2.webp";
import photo8 from "../assets/vol1.webp";
import photo9 from "../assets/iso1.webp";
import photo10 from "../assets/lift1.webp";

const Trending = [
    {
        imgUrl: photo1,
        title: "Inverter",
        description: "Reliable power backup for homes and offices with compact and efficient design.",
        route: "/inverter",
    },
    {
        imgUrl: photo2,
        title: "UPS/Tubular Inverter Batteries",
        description: "Durable batteries offering long backup and low maintenance.",
        route: "/upsinverterbattery",
    },
    {
        imgUrl: photo3,
        title: "Tubular Battery Trolley",
        description: "Silver color trolley made from highly durable plastic elegant look for your home.",
        route: "/tubularinverterbattery",
    },
    {
        imgUrl: photo4,
        title: "Commercial UPS",
        description: "Powerful UPS systems for consistent energy in commercial settings.",
        route: "/commercialups",
    },
    {
        imgUrl: photo5,
        title: "SMF Batteries",
        description: "Maintenance-free batteries with high efficiency and leak-proof design.",
        route: "/smfbattery",
    },
    {
        imgUrl: photo6,
        title: "Single Phase Online UPS",
        description: "Seamless power backup for homes and small offices with advanced features.",
        route: "/singlephaseups",
    },
    {
        imgUrl: photo7,
        title: "Three Phase Online UPS",
        description: "Reliable UPS systems for industrial and large-scale operations.",
        route: "/threephaseups",
    },
    {
        imgUrl: photo8,
        title: "Voltage Stabilizers",
        description: "Servo Oil Cooled and Air Cooled Stabilizers for voltage regulation and protection.",
        route: "/voltagestablizer",
    },
    {
        imgUrl: photo9,
        title: "Isolation Transformer",
        description: "Safe and noise-free transformers for sensitive applications.",
        route: "/isolationtransformer",
    },
    {
        imgUrl: photo10,
        title: "Lift Inverter",
        description: "Specialized inverters ensuring uninterrupted elevator operation.",
        route: "/liftinverter",
    },
];

const Home = () => {
    return (
        <div className="bg-white">
            <HomeContainer></HomeContainer>
            <div className="flex flex-col justify-center items-center space-y-4">
                <div className="text-l text-red-900 font-bold text-center pt-10">
                    Welcome to Sundar Electric Services
                </div>
                <div className="flex item-center w-2/3 border-t-2 border-t-red-900"></div>
            </div>
            <div className="flex flex-col pt-8 gap-2">
                <div className="pl-8 pr-8">
                    <b>We are a leading trader and supplier of a wide range of Online UPS Batteries in Navi Mumbai, Maharashtra, India</b>. Our products are in line with the latest market trends and are manufactured by trusted vendors using advanced machinery at their production units. You can purchase them from us at the best prices in the industry.
                </div>
                <div className="pl-8 pr-8">
                    We are recognized as a prominent distributor, dealer, wholesaler, retailer, and trader of high-quality <b>UPS Systems, Voltage Stabilizers, Isolation Transformers, Lift Inverters, Tubular Inverter Batteries, UPS Batteries, Commercial UPS, SMF Batteries, Single Phase Online UPS, Three Phase Online</b>, and more.
                </div>
            </div>
            <PlaylistView titleText="" cardsData={Trending} />
            <Footer></Footer>
        </div>
    );
};

const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className="text-white">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                {cardsData.map((item) => (
                    <Card
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        imgUrl={item.imgUrl}
                        route={item.route} // Pass the route prop
                    />
                ))}
            </div>
        </div>
    );
};

const Card = ({ title, description, imgUrl, route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <div
            className="bg-customWhite bg-opacity-95 p-4 rounded-lg cursor-pointer"
            onClick={handleClick}
        >
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt={title} />
            </div>
            <div className="text-red-900 font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

export default Home;
