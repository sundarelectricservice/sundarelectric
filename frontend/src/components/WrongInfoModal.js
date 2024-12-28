const WrongInfoModal = ({ closeModal }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
        >
            <div
                className="bg-black w-11/12 max-w-xs rounded-md p-6"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="text-white mb-4 font-semibold text-center text-lg">
                    Wrong Info
                </div>
            </div>
        </div>
    );
};

export default WrongInfoModal;
