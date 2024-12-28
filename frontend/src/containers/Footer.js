import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="bg-red-900 text-white w-full h-full ">
            <div className='flex pb-2 gap-2 pt-2 pb-2 pl-2' onClick={() => window.location.href = 'tel:+918108295414'}>
                <Icon icon="fluent:call-16-filled" className="text-white" style={{ fontSize: '24px' }}/>
                <Link to="">+91 81082 95414</Link>
            </div>
            <div className='flex gap-2 pl-2'>
            <div>
            <Icon icon="weui:location-filled" className="text-white" style={{ fontSize: '24px' }}/>
            </div>
            <div className='flex gap-2'>
            <Link to="/contact">Bharat Complex, Shop No.18, Sector-18, Near MAFCO Market, Vashi, Navi iumbai-400 706.</Link>
            </div>
            </div>
            <div className='flex gap-2 pt-2 pl-2'>
            <div>
            <Icon icon="hugeicons:pin-code" className="text-white" style={{ fontSize: '24px' }}/>
            </div>
            <div className='flex gap-2 pb-4'>
            <Link to="/contact">Brands We Deal In Fuji Electric, Luminious, Exide, Autobat, Microtek, Quanta, UTL, Numeric, Vertiv, APC | Dealer, Supplier, Distributor of Power UPS Systems in Navi Mumbai</Link>
            </div>
            </div>
        </div>
    );

}

export default Footer;