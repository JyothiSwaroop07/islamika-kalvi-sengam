import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaHandPointLeft } from "react-icons/fa";

const Competitions = () => {
    const router = useRouter();

    // Sample gallery images (you can replace with actual image paths)
    const galleryImages = [
        "/assets/gallery-img-1.png",
        "/assets/gallery-img-2.png",
        "/assets/gallery-img-3.png",
        "/assets/gallery-img-4.png",
        "/assets/gallery-img-5.png",
        "/assets/gallery-img-6.png",
        "/assets/gallery-img-7.png",
        "/assets/gallery-img-8.png",
        "/assets/gallery-img-9.png",
        "/assets/gallery-img-10.png",
        "/assets/gallery-img-11.png",
        "/assets/gallery-img-12.png",
        "/assets/gallery-img-13.png",
        "/assets/gallery-img-14.png",
        "/assets/gallery-img-15.png",
        "/assets/gallery-img-16.png",
        "/assets/gallery-img-17.png",
        "/assets/gallery-img-18.png",
        "/assets/gallery-img-19.png",
        

        
    ];

    const itemsPerPage = 3; // Number of images per page
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(galleryImages.length / itemsPerPage);

    const displayImages = () => {
        const start = currentPage * itemsPerPage;
        const end = start + itemsPerPage;
        return galleryImages.slice(start, end).map((imgSrc, index) => (
            <Image
                key={index}
                src={imgSrc}
                alt={`Gallery Image ${index + 1}`}
                width={250}
                height={200}
                className="rounded-md"
            />
        ));
    };

    const handlePrevious = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    return (
        <>
            <Navbar />
             

            <div className="container mx-auto my-6">
                <h1 className="text-center text-2xl font-bold mb-6">
                    DISTRICT LEVEL ISLAMIC COMPETITIONS - 2024
                </h1>

                <div className="flex justify-center space-x-4 mb-6">
                    <Image src="/assets/new-img-1.jpg" alt="Competition Image 1" width={400} height={300} className="rounded-md" />
                    <Image src="/assets/new-img-2.jpg" alt="Competition Image 2" width={400} height={300} className="rounded-md" />
                </div>

                <div className="space-y-4 mb-8">
                    {/* Google Form Links */}
                    <div className="bg-transparent text-white p-4 rounded-md text-center flex flex-col items-center">
                        <img src="assets/form-img-1.jpg" alt="Banner for Competition 1" className="w-100 h-auto rounded-md mb-2" />
                        <a href="https://docs.google.com/forms/d/1pFSgZ5i8UO-9Zq2bEAI7hLTkXCQFU-7FxvR-s7zo8J8/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                            Students Competitions registration 
                            <FaHandPointLeft className="ml-2 text-blue-500" />
                        </a>
                    </div>
                    <div className="bg-transparent text-white p-4 rounded-md text-center flex flex-col items-center">
                        <img src="assets/form-img-2.jpg" alt="Banner for Competition 2" className="w-100 h-auto rounded-md mb-2" />
                        <a href="https://docs.google.com/forms/d/1bOYYPIRtHiVQgCZLU4y9a8no4jzLXaTLLJnNC6P2FUw/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline flex items-center">
                            Madharasa Quiz Competition registration 
                            <FaHandPointLeft className="ml-2 text-green-500" />
                        </a>
                    </div>
                    <div className="bg-transparent text-white p-4 rounded-md text-center flex flex-col items-center">
                        <img src="assets/form-img-3.jpg" alt="Banner for Competition 3" className="w-100 h-auto rounded-md mb-2" />
                        <a href="https://docs.google.com/forms/d/1bOYYPIRtHiVQgCZLU4y9a8no4jzLXaTLLJnNC6P2FUw/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline flex items-center">
                            Public Question answers Contest 
                            <FaHandPointLeft className="ml-2 text-red-500" />
                        </a>
                    </div>
                </div>

                {/* Gallery Section with Pagination */}

                <h1 className="text-center my-6 text-[#2dad5c] text-2xl text-bold">Our Gallery</h1>
                <div className="w-full flex flex-col justify-center items-center mb-6 px-4">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">{displayImages()}</div>
                    <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-6">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 0}
                            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 font-sans text-xs sm:text-sm font-bold text-gray-900 uppercase transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50"
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                            </svg>
                            Previous
                        </button>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i)}
                                    className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full text-center text-xs font-medium uppercase transition-all ${
                                        currentPage === i ? 'bg-[#2dad5c] text-white shadow-md' : 'text-gray-900 hover:bg-gray-900/10'
                                    }`}
                                    type="button"
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 font-sans text-xs sm:text-sm font-bold text-gray-900 uppercase transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50"
                            type="button"
                        >
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center mb-6">
                <button
                    className="bg-[#2dad5c] text-white w-[145px] h-[42px] rounded-md"
                    onClick={() => router.push("/Home")}
                >
                    Go Back
                </button>
            </div>
            </div>
        </>
    );
};

export default Competitions;
