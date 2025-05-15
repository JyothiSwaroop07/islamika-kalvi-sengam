import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const GoogleFormPage = () => {
  return (
    <div>
      <Navbar />
      <div className="px-3 md:px-8 flex flex-col items-center justify-center my-8 md:my-14">
        {/* Heading */}
        <h1 className="text-[#2dad5c] font-bold text-[22px] font-serif text-center">
        Kurbani Pre-Booking Registration 
        </h1>

        {/* Embedded Google Form */}
        <div className="w-full max-w-4xl h-[800px] mt-5 shadow-lg border rounded-lg overflow-hidden">
          <iframe
            // src="https://docs.google.com/forms/d/e/1FAIpQLSfikhkZnAixvKmG5rSp-tHRUcoq74nYd6wxHg_L2yx7ywI7Qg/viewform"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeHyiZJXvCD5s0zw9VbyFkpAWb0hVX9tO7yToNzdDAjzTQyTg/viewform"
            width="100%"
            height="100%"
            className="border-none"
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};


export default GoogleFormPage;
 
