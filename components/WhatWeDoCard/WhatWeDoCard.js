import React from "react";
import Image from "next/image";

const WhatWeDoCard = ({img, title, des}) => {
    return (
        <div className="shadow-lg bg-white rounded flex flex-col justify-center items-center p-6 space-y-6 mx-5"> 
            <Image src={img} className="w-[120px] h-[145px]" width={120} height={145}/>
            <h1 className="font-semibold text-xl text-black">{title}</h1>
            <p className="font-normal text-lg text-black">{des}</p>
        </div>
    )
}

export default WhatWeDoCard;