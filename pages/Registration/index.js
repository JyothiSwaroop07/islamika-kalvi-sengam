import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";

const Registration = () => {
    const router = useRouter();
    return (
        <>
        <Navbar />
        <div className="flex flex-col justify-center items-center p-5 font-serif">
        <div className="flex justify-between items-center mx-auto my-5 w-[90vw]">

        <div className="flex flex-col items-center">
            <Image src="https://res.cloudinary.com/dchbfnlct/image/upload/v1711188558/fit_size_fit_xmjifp.png" className="h-[60px] w-[60px]" width={100} height={100} alt="img" />
            <h1 className="text-[8px] text-black font-serif">Islamiya Kalvi Sangam</h1>
            </div>
            <button className="bg-[#2dad5c] w-[155px] h-[55px] p-1    text-md text-white rounded-md" onClick={() => router.push("/")}>← Go to Home</button>

            <div className="text-black flex flex-col -mt-5 items-center  font-bold text-xl">
            <h1 className='text-[7px]  text-black font-normal leading-snug'>For ads/sponsorship <br/> contact 9500489492</h1>
            </div>

        </div>

            <h1 className="text-[#2c5c2d] font-bold text-[20px] my-5">
            Registration form for all current events
            </h1>

            <h1 className="text-[#2c5c2d] font-bold text-[20px] my-5">
            அனைத்து தற்போதைய நிகழ்ச்சிகளுக்கான பதிவு படிவம்
            </h1>

            <form >
                    

                    

                    <hr className="tect-blue-500 my-8 border-1 border-[#222222] border-t w-[100%]" />

                   
                    {/* <h1>{form.date}</h1> */}
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf2xNn9QYSz9T48Xg5WOamzlldKPHJVqFJkwQblO7qBAHJG0A/viewform?embed=true" width="900" className="w-[100vw] min-h-[3000px] max-h-[3500px]" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

            </form>
           
        </div>
        </>
    )
}

export default Registration;