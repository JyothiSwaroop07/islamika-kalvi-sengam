import React from 'react';
import book1 from '../images/book1.jpg';
import book2 from '../images/book2.jpg';
import book3 from '../images/book3.jpg';
import book4 from '../images/book4.jpg';
import book5 from '../images/book5.jpg';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';


import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

const bookPublication = () => {

    const router = useRouter();
    const images = [book1, book2, book3, book4, book5];
    const [currentPage, setCurrentPage] = useState(0);
    const [imagesPerPage, setImagesPerPage] = useState(3);
    

    useEffect(() => {
        const handleResize = () => {
            
            if (window.innerWidth < 660) {
                setImagesPerPage(2); 
            } else {
                setImagesPerPage(3); 
            }
        };


        window.addEventListener('resize', handleResize);


        handleResize();

        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(images.length / imagesPerPage);

    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const displayImages = () => {
        const startIndex = currentPage * imagesPerPage;
        const endIndex = startIndex + imagesPerPage;
        return images.slice(startIndex, endIndex).map((imgSrc, index) => (
            <Image key={index} src={imgSrc} height={100} width={100} className="w-[200px] h-[250px]" alt="image"/>
        ));
    };

    return (
        <div className='flex flex-col justify-center items-center px-5'>
            <div className='bg-white w-[100vw]'>
            <Navbar/>
            </div>
           

            <h1 className='text-black text-semibold text-2xl my-2'>Islamic book publications</h1>
            <h1 className='text-[#2dad5c] text-semibold text-xl my-4'>View Our Gallery here</h1>

       {/* <div className='flex flex-wrap justify-center items-center gap-5'>
        <Image src={book1} className='' width={200} height={200} alt="books"/>
        <Image src={book2} className='' width={200} height={200} alt="books"/>
        <Image src={book3} className='' width={200} height={200} alt="books"/>
        <Image src={book4} className='' width={200} height={200} alt="books"/>
        <Image src={book5} className='' width={300} height={300} alt="books"/>
       </div> */}

<div className="w-[100vw] flex flex-col justify-center items-center">
            <div className="flex flex-wrap justify-center items-center gap-6">{displayImages()}</div>
            <div class="flex items-center gap-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 0}
                    class="flex my-5 items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    aria-hidden="true" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                    Previous
                </button>
                <div class="flex my-5 items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            class={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase transition-all ${
                                currentPage === i ? 'bg-[#2dad5c] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none' : 'text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20'
                            }`}
                            type="button">
                            <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">{i + 1}</span>
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}
                    class="flex my-5 items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    aria-hidden="true" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                </button>
            </div>
        </div>

            <button className="bg-[#2dad5c] w-[145px] h-[42px] text-white text-md rounded-md my-4" onClick={() => {router.push("/Home")}}>Go Back</button>
       </div>
    )
}

export default bookPublication;