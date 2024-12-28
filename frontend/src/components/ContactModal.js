import { Icon } from '@iconify/react';

const ContactModal = ({ closeModal }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
        >
            <div
                className="bg-red-900 w-10/12 sm:w-3/4 max-w-2xl rounded-md p-6 sm:p-10 shadow-lg"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex flex-col sm:flex-row justify-around items-center text-white space-y-6 sm:space-y-0 sm:divide-x divide-white">
                    {/* WhatsApp Section */}
                    <div className="flex flex-col items-center space-y-3 w-full sm:w-1/2">
                        <Icon
                            icon="zmdi:whatsapp"
                            className="text-green-500 cursor-pointer hover:text-green-700"
                            style={{ fontSize: '48px' }}
                            onClick={() =>
                                window.open(
                                    'https://wa.me/918108295414?text=Hello, I am interested in your services.',
                                    '_blank'
                                )
                            }
                        />
                        <p className="text-sm sm:text-base text-center cursor-pointer hover:text-gray-300" onClick={() =>
                                window.open(
                                    'https://wa.me/918108295414?text=Hello, I am interested in your services.',
                                    '_blank'
                                )
                            }>Chat with Us on WhatsApp</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block border-l border-white h-25"></div>

                    {/* Email Section */}
                    <div className="flex flex-col items-center space-y-3 w-full sm:w-1/2">
                        <Icon
                            icon="material-symbols-light:mail"
                            className="text-white cursor-pointer hover:text-gray-300"
                            style={{ fontSize: '48px' }}
                            onClick={() =>
                                window.location.href =
                                    'mailto:sundarelectricservice@gmail.com?subject=Inquiry&body=Hello,'
                            }
                        />
                        <p className="text-sm sm:text-base text-center cursor-pointer hover:text-gray-300" onClick={() =>
                                window.location.href =
                                    'mailto:sundarelectricservice@gmail.com?subject=Inquiry&body=Hello,'
                            }>Reach Us via Email</p>
                    </div>

                    <div className="hidden sm:block border-l border-white h-25"></div>
                                
                    <div className="flex flex-col items-center space-y-3 w-full sm:w-1/2">
                        <Icon
                            icon="fluent:call-16-filled"
                            className="text-white cursor-pointer hover:text-gray-300"
                            style={{ fontSize: '48px' }}
                            onClick={() => window.location.href = 'tel:+918108295414'}
                        />
                        <p className="text-sm sm:text-base text-center cursor-pointer hover:text-gray-300" onClick={() => window.location.href = 'tel:+918108295414'}>
                        Get in Touch via Phone</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
