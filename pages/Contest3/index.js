import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Image from "next/image";
import img from './calligraphy.png';
import { useRouter } from "next/router";

const Contest3 = () => {

    const router = useRouter();

    return (
        // <div className="">

        //         <Navbar /> 

        //         <div className="flex justify-center items-center">
        //     <button className="bg-[#2dad5c] text-white w-[145px] h-[42px] rounded-md" onClick={() => router.push("/Home")}>Go Back</button>
        //     </div>

        //         <div className="banner flex justify-center my-5">
        //             <Image src={img} width={400} height={400} className="max-h-[70vh] max-w-[90vw]" alt="img" /> 
        //         </div>

        // </div>

        <>
            <div className="h-[100vh] w-[100vw] flex justify-center items-center text-[#2dad5c] font-bold font-serif">
                <h1 className="text">போட்டிகள் முடிவடைந்தது - Contests have been closed</h1>
            </div>
        </>
    )
} 

export default Contest3;