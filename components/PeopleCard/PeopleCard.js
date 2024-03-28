import React from "react";

const PeopleCard = ({title, des}) => {
    return (
        <div className="shadow-lg bg-gray-300 rounded text-center flex flex-col justify-center items-center p-6 space-y-6 mx-5 my-5 w-[176px] h-[177px]"> 
            <h1 className="font-semibold text-md text-black">{title}</h1>
            <p className="font-normal text-sm text-black">{des}</p>
        </div>
    )
}

export default PeopleCard;