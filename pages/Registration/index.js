import React from "react";

import Navbar from "@/components/Navbar/Navbar";

const Registration = () => {
    return (
        <>
        <Navbar />
        <div className="flex flex-col justify-center items-center p-5 font-serif">
            

            <h1 className="text-[#2c5c2d] font-bold text-[20px] my-5">
            Registration form for all current events
            </h1>

            <h1 className="text-[#2c5c2d] font-bold text-[20px] my-5">
            அனைத்து தற்போதைய நிகழ்ச்சிகளுக்கான பதிவு படிவம்
            </h1>

            <form >
                    

                    

                    <hr className="tect-blue-500 my-8 border-1 border-[#222222] border-t w-[100%]" />

                   
                    {/* <h1>{form.date}</h1> */}
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeqyMyLATMJCFiOBufqjfr-f9FJxhozEPrz59ielVOHQCt69w/viewform?embed=true" width="900" className="w-[100vw] min-h-[1000px] max-h-[2200px]" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

            </form>
           
        </div>
        </>
    )
}

export default Registration;