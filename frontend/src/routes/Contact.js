import HomeContainer from "../containers/HomeContainer";
import Footer from "../containers/Footer";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState("");
    return(
        <div>
            <HomeContainer></HomeContainer>
            <div className="flex flex-col justify-center items-center">
            <div className="flex text-3xl text-bold text-red-900 pl-6 pt-8 pb-4 items-center justify-center" >Contact Us</div>
            <div className="flex item-center justify-center w-2/3 border-t-2 border-t-red-900 pb-6"></div>
            <div className="pl-8 pr-8 pb-6">We deal in industry-leading brands such as <b>Fuji Electric, Luminous, Exide, Autobat, Microtek, Quanta, UTL, Numeric, Vertiv, and APC</b>. Feel free to contact us for an optimum-quality collection of <b>UPS systems, voltage stabilizers, isolation transformers, lift inverters, tubular inverter batteries, UPS batteries, commercial UPS units, SMF batteries, single-phase online UPS, and three-phase online UPS</b>, among others.</div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:w-full pt-6">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-2 pl-2">
                        <div className="flex gap-2">
                            <Icon icon="weui:location-filled" className="text-red-900 cursor-pointer" style={{ fontSize: '24px' }} />
                            <div className="text-red-900 cursor-pointer">Address</div>
                        </div>
                        <div className="flex gap-2 pl-8">
                            <Link to="/contact">Bharat Complex, Shop No.18, Sector-18, Near MAFCO Market, Vashi, Navi iumbai-400 706.</Link>
                        </div>
                    </div>
            <div className="flex flex-col pb-2 gap-2 pt-4 pl-2">
                <div className="flex gap-2 cursor-pointer" onClick={() => window.location.href = 'tel:+918108295414'}>
                    <Icon icon="ion:call" className="text-red-900 cursor-pointer" style={{ fontSize: '20px' }} />
                    <div className="text-red-900 cursor-pointer">Call us</div>
                </div>
                <div className="flex gap-2 pl-8 cursor-pointer">
                    <Icon icon="zmdi:whatsapp" className="text-green-600 cursor-pointer hover:text-green-800" style={{ fontSize: '20px' }} onClick={() => window.open('https://wa.me/918108295414?text=Hello, I am interested in your services.', '_blank')} />
                    <div onClick={() => window.location.href = 'tel:+918108295414'}>
                        <Link to="/contact">+91 81082 95414</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 pt-2 pl-2">
                <div className="flex gap-2 cursor-pointer" onClick={() => window.location.href = "mailto:sundarelectricservice@gmail.com?subject=Inquiry&body=Hello,"}>
                    <Icon icon="material-symbols-light:mail" className="text-red-900 cursor-pointer" style={{ fontSize: '24px' }} />
                    <div className="text-red-900 cursor-pointer">Email us</div>
                </div>
                <div className="flex gap-2 pl-8 pb-8 cursor-pointer" onClick={() => window.location.href = "mailto:sundarelectricservice@gmail.com?subject=Inquiry&body=Hello,"}>
                    <Link to="/contact">sundarelectricservice@gmail.com</Link>
                    
                </div>
            </div>
            </div>
            </div>
            
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Contact;