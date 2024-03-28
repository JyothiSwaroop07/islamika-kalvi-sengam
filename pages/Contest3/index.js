import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Image from "next/image";
import img from './calligraphy.png';
import { useRouter } from "next/router";

const Contest3 = () => {

    const router = useRouter();

    return (
        <div className="">

                <Navbar /> 

                <div className="flex justify-center items-center">
            <button className="bg-[#2dad5c] text-white w-[145px] h-[42px] rounded-md" onClick={() => router.push("/Home")}>Go Back</button>
            </div>

                <div className="banner flex justify-center my-5">
                    <Image src={img} width={400} height={400} className="max-h-[70vh] max-w-[90vw]" alt="img" /> 
                </div>

        </div>
    )
} 

export default Contest3;