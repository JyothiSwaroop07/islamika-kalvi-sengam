import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaHandPointLeft } from "react-icons/fa";

const Competitions = () => {
    const router = useRouter();

   
    return (
        <>
            <Navbar />
             
            <div className="flex justify-center items-center mb-6">
                <button
                    className="bg-[#2dad5c] text-white w-[145px] h-[42px] rounded-md"
                    onClick={() => router.push("/Home")}
                >
                    Go Back
                </button>
            </div>
            <div className="container mx-auto my-6">
                <h1 className="text-center text-2xl font-bold mb-6">
                    DISTRICT LEVEL ISLAMIC COMPETITIONS - 2024
                </h1>

                <div className="flex justify-center space-x-4 mb-6">
                    <Image src="/assets/competitions-poster.jpeg" alt="Competition Image 1" width={600} height={300} className="rounded-md" />
                  {/*  <Image src="/assets/new-img-2.jpg" alt="Competition Image 2" width={400} height={300} className="rounded-md" /> */}
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

                
                
            </div>
        </>
    );
};

export default Competitions;
