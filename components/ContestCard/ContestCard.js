import Link from "next/link";
import React from "react";
import Footer from "../Footer/Footer";

const ContestCard = ({date, formLink, formVideo, handleClick, day}) => {

    const handleCardClick = async() => {
        // Handle the click event to display the formLink
        console.log('Clicked on card with formLink:', formLink);
        await handleClick(formLink, date, formVideo);
    };

    return (
        <div className="flex-col justify-center items-center">
        <div className="flex flex-col justify-center gap-6 items-center w-[300px] h-[200px] cursor-pointer bg-white shadow-[#2dad5c] shadow-md my-3 mx-3" onClick={handleCardClick}>


            <h1 className="text-lg text-black font-semibold">Contest Day: {day}</h1>
            <h1 className="text-lg text-black font-semibold">Date: <span className="text-[#2dad5c] text-md ">{date}</span></h1>

            <a className="text-[#2dad5c] text-md">View this contest →</a>

            
        </div>

       
        
        </div>
    )
}

export default ContestCard;