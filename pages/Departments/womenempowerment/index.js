import React from "react";
import Image from "next/image";


import img1 from '../images/wemsem (1).jpg'
import img2 from '../images/wemsem (2).jpg'
import img3 from '../images/wemsem (3).jpg'
import img4 from '../images/wemsem (4).jpg'
import img5 from '../images/wemsem (5).jpg'
import img6 from '../images/wemsem (6).jpg'


import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

const womenempowerment = () => {
    const router = useRouter();

    const images = [img1, img2, img3, img4, img5, img6];
    const [currentPage, setCurrentPage] = useState(0);
    const [imagesPerPage, setImagesPerPage] = useState(3);
    

    useEffect(() => {
        const handleResize = () => {
            // Adjust images per page based on device width
            if (window.innerWidth < 660) {
                setImagesPerPage(2); // xs devices
            } else {
                setImagesPerPage(3); // sm, md, lg, xl devices
            }
        };

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Initial call to set initial images per page
        handleResize();

        // Clean up event listener on component unmount
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
        <div>

            <div className="w-[100vw] bg-white">
                <Navbar />
            </div>

            <div className="flex flex-col gap-6 justify-center p-4 items-center">
                <h1 className="text-[#2dad5c] text-2xl font-bold">Department of Women Empowerment and Self Employment</h1>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <h1 className="mx-8">
                        To overcome these situations and to have an independent role in society, women's empowerment is needed. Empowering women is the fundamental right of women. They can have equal rights to participate in education, society, economics, They are allowed to have higher education. TheOur mostmore important thing for thisby this department is Widows. Older, Older peoples makepeoples are make theirthier life up by their own hands by providing capital fundsfund and training to make money. 


                    </h1>
                    </div>
                    {/* <div className="flex flex-col mt-5 md:flex-row justify-content-center items-center ">
                        <Image src={img1} width={150} height={50} className="w-[80vw] h-[240px] mb-3 mr-5 md:w-[40vw]" alt="img"/>
                        
                        <ul className="list-disc text-[#2dad5c] mt-2 font-600 text-lg w-[80vw] md:w-[40vw] mx-8">
                             <li>work for the advancement of education, science, technology and management particularly in the realm of higher education. <br/> </li>
                             <li>To grant Loan Scholarships to deserving students for pursuing undergraduate, postgraduate studies and research in the fields of Medicine, Engineering, Science and Technology, Management, Commerce and Humanities.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col mt-5 md:flex-row justify-content-center items-center ">
                        <Image src={img2} width={150} height={50} className="w-[80vw] h-[240px] mb-3 mr-5 md:w-[40vw] md:order-2" alt="img"/>
                        
                        <ul className="list-disc text-[#2dad5c] mt-2 font-600 text-lg w-[80vw] md:w-[40vw] mx-8 md:order-1">
                             <li> To run and manage schemes of financial assistance, to organize coaching and remedial classes, special education centerscentres for improving the opportunities for students of minority communities.
                                    Since its inception AIE has undertaken various programs covering scholarships, Career Counseling Programme etc.,
                            </li>
                        </ul>
                    </div> */}

                    <h1 className="text-center my-6 text-[#2dad5c] text-2xl text-bold">What We Do</h1>
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                        Small Business Fund Scheme 


                        </div>
                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                        Free Tailoring Training



                        </div>
                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                        Gold Loan without interest


                        </div>
                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                        Fundamental Home Renovation


                        </div>
                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                        Conduct training program about small business 


                        </div>

                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                        Monthly Essential Kits distribution




                        </div>
                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                        Camps for applying govt Schemes which are eligible

                        </div>
                      
                    </div>

                    <h1 className="text-center my-6 text-[#2dad5c] text-2xl text-bold">Our Gallery</h1>
                    {/* <div className="flex flex-wrap justify-center items-center gap-6">
                        <Image src={img3} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img4} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img5} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img6} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img7} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img8} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img9} height={100} width={100} className="w-[200px] h-[250px]" />
                        
                        
                    </div> */}
                        <div className="w-[100vw] flex flex-col justify-center items-center">
            <div className="flex flex-wrap justify-center items-center gap-6">{displayImages()}</div>
            <div class="flex items-center gap-1">
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
                <div class="flex my-5 items-center gap-0">
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
            </div>

    </div>
    )

}

export default womenempowerment;