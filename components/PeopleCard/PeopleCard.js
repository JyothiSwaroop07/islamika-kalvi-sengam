import React from "react";

const PeopleCard = ({title, des}) => {
    return (
        <div className="shadow-lg bg-gray-300 rounded text-center flex flex-col justify-center items-center p-6 space-y-6 mx-5 my-5 w-[200px] h-[200px]"> 
            <h1 className="font-semibold text-xl text-black">{title}</h1>
            <p className="font-normal text-lg text-black">{des}</p>
        </div>
    )
}

export default PeopleCard;