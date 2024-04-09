import React from "react";

import Navbar from "@/components/Navbar/Navbar";

const Feedback = () => {
    return (
        <>
        <Navbar />
        <div className="flex flex-col justify-center items-center p-5 font-serif">
            

            <h1 className="text-[#2c5c2d] font-bold text-[20px] my-5">
            AIE Ramalan 2024 feedback form
            </h1>

            <h1 className="text-[#2c5c2d] font-bold text-[20px] my-5">
            Please use this form to submit your comments and suggestions regarding Islamiya Kalvi Sangam&apos;s Ramadan Contests 2024.
            </h1>

            <h1 className="text-[#2dad5c] font-bold text-[20px] my-5">
            இஸ்லாமிய கல்வி சங்கம் நடத்திய 2024 ஆம் ஆண்டிற்கான ரமலான் போட்டிகள் சம்பந்தமாக உங்களின் மேலான கருத்துக்கள், பரிந்துரைகளை இந்த படிவத்தில் தெரிவிக்கலாம்.
            </h1>

            <form >
                    

                    

                    <hr className="tect-blue-500 my-8 border-1 border-[#222222] border-t w-[100%]" />

                   
                    {/* <h1>{form.date}</h1> */}
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc_Qx1PypIPOSHPERjOcuP6ZUOL38Sls07pNGozYjZgXi9vFw/viewform?embed=true" width="900" className="w-[100vw] min-h-[1200px] max-h-[3500px]" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

            </form>
           
        </div>
        </>
    )
}

export default Feedback;