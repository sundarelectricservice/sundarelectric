import Footer from "../containers/Footer";
import HomeContainer from "../containers/HomeContainer";
import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import DataCard from "../components/DataCard";
import { Link } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";

const Admin = () => {
    const [songData, setSongData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2; // Items per page

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/song/get/mysongs"
            );
            setSongData(response.data);
        };
        getData();
    }, []);

    // Calculate total pages
    const totalPages = Math.ceil(songData.length / itemsPerPage);

    // Get data for the current page
    const currentData = songData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Determine the number of buttons to show based on screen size
    const isMobile = window.innerWidth <= 768; // Adjust for your breakpoint
    const maxButtons = isMobile ? 3 : 5;

    // Calculate the range of page numbers to display
    const getPageNumbers = () => {
        const half = Math.floor(maxButtons / 2);
        let start = Math.max(currentPage - half, 1);
        let end = start + maxButtons - 1;

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(end - maxButtons + 1, 1);
        }

        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <HomeContainer></HomeContainer>
            <div className="content p-8 pt-0 overflow-auto font-lora">
                {/* Header Section */}
                <div className="flex w-full items-center justify-between mt-8">
                    {/* Admin at the start */}
                    <div className="text-2xl font-semibold text-black pl-4">
                        Admin
                    </div>

                    {/* Upload and Dropdown at the end */}
                    <div className="flex items-center space-x-4">
                        <div className="text-l font-semibold text-white bg-red-900 p-2 rounded-full">
                            <Link to="/upload">Upload</Link>
                        </div>
                        <div className="relative bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                            <DropdownMenu />
                        </div>
                    </div>
                </div>

                {/* Song Data Section */}
                <div className="space-y-3 overflow-auto">
                    {currentData.map((item) => (
                        <DataCard key={item.id} info={item} />
                    ))}
                </div>

                {/* Pagination Section */}
                <div className="flex justify-center items-center mt-4 space-x-2">
                    <button
                        className={`px-3 py-1 rounded ${
                            currentPage === 1 ? "bg-gray-300" : "bg-red-900 text-white"
                        }`}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {getPageNumbers().map((page) => (
                        <button
                            key={page}
                            className={`px-3 py-1 rounded ${
                                currentPage === page
                                    ? "bg-red-900 text-white"
                                    : "bg-gray-300"
                            }`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className={`px-3 py-1 rounded ${
                            currentPage === totalPages
                                ? "bg-gray-300"
                                : "bg-red-900 text-white"
                        }`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Admin;
