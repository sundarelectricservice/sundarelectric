import HomeContainer from "../containers/HomeContainer";
import Footer from "../containers/Footer";

const About = () => {
    return (
        <div className="bg-white text-gray-800">
            <HomeContainer />
            <div className="flex flex-col justify-center items-center">
                <div className="text-3xl font-bold text-red-900 pt-8 pb-4 text-center">About Us</div>
                <div className="w-4/5 text-justify text-lg space-y-6 leading-8">
                    <p>
                        Sundar Electric Service is regarded amongst the eminent distributor, dealer, wholesaler, retailer, and trader of an optimum quality collection of Charging Batteries, UPS Systems, Voltage Stabilizers, Isolation Transformers, Solar Inverters, and more. All our offered products are precisely developed using supreme quality components and progressive techniques at our vendors' manufacturing units.
                    </p>
                    <p>
                        Our products are available in several sizes and specifications to fulfill the precise demands and needs of our valued customers. The provided products are widely demanded and applauded for their precision engineering, resistance to rust and corrosion, trouble-free performance, simple installation, power efficiency, and longer service life. Moreover, these products are available at industry-leading prices.
                    </p>
                    <p>
                        Due to the support of our well-known and experienced vendors in the industry, we have been able to provide unmatched quality products to our customers. Moreover, with the enormous support of our vendors and dedicated professionals, we efficiently cater to urgent and bulk orders. Our products are rigorously inspected by expert quality examiners on several parameters to ensure their faultlessness.
                    </p>
                    <p>
                        We ensure to maximize client satisfaction by providing quality-approved products in various specifications. Our honesty in dealings and moral business practices have enabled us to attain a reliable status in this domain.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center pt-8 pb-8 bg-gray-100">
                <div className="text-2xl font-bold text-red-900 pb-4">Why Choose Us?</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
                    <ul className="list-disc list-inside text-justify leading-7 space-y-2">
                        <li>Authentic vendor base ensuring the best quality products.</li>
                        <li>Quality-approved products at economical prices.</li>
                        <li>Easy payment modes for customer convenience.</li>
                        <li>A team of dexterous professionals dedicated to excellence.</li>
                        <li>Moral trade practices and honesty in business dealings.</li>
                    </ul>
                    <ul className="list-disc list-inside text-justify leading-7 space-y-2">
                        <li>Wide range of product specifications to meet diverse needs.</li>
                        <li>Reliable after-sales support and customer service.</li>
                        <li>Timely delivery of products for complete customer satisfaction.</li>
                        <li>Strong reputation built over years of reliable service.</li>
                        <li>Commitment to sustainability and eco-friendly practices.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;