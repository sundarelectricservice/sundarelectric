import {Link, Navigate} from "react-router-dom";
import logo from '../assets/logo.png';
import { Icon } from '@iconify/react';

const HomeContainer = () => {
    const refreshPage = () => {
        window.location.reload(); 
    };
    return (
        <div className="h-full w-full">
            <div className="h-30 w-full flex items-center justify-between text-black bg-red-900 p-8">
            
            <div className="flex items-center justify-between text-white text-bold gap-8">
                <div className="cursor-pointer hover:text-customWhite"><Link to="/home">Home</Link></div>
                <div className="cursor-pointer hover:text-customWhite"><Link to="/about">About</Link></div>
                <div className="cursor-pointer hover:text-customWhite"><Link to="/contact">Contact</Link></div>
                {/* <div className='flex pb-2 pt-2 pr-5 text-white text-sm'>
                    <Icon icon="fluent:call-16-filled" className="text-white" style={{ fontSize: '20px' }}/>
                    <Link to="/contact">8108295414</Link>
                </div> */}
            </div>
            <div className='flex pb-2 pt-2 '>
                    <Icon icon="material-symbols-light:mail" className="text-white cursor-pointer hover:text-customWhite" style={{ fontSize: '26px' }} onClick={() => window.location.href = "mailto:sundarelectricservice@gmail.com?subject=Inquiry&body=Hello,"}/>
            </div>
        </div>
        <div className="logoDiv pl-6 pt-6 flex items-center justify-between" onClick={refreshPage}>
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
                    <div className="text-min-sm text-max-l text-black font-roboto"><Link to="/home"><b>Sundar Electric Service</b></Link></div>
                </div>
                <div className="flex items-center pr-2">
                
                <div className='flex pb-2 pt-2 pr-5'>
                    <Icon icon="zmdi:whatsapp" className="text-green-600 cursor-pointer hover:text-green-800" style={{ fontSize: '26px' }} onClick={() => window.open('https://wa.me/918108295414?text=Hello, I am interested in your services.', '_blank')}/>
                </div>
                </div>
            </div>
        </div>
    );
};
export default HomeContainer;