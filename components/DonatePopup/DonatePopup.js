// AdPopup.js
import React from 'react';
import img from './donate_banner1.jpg';
import Image from 'next/image';

const DonatePopup = ({onClosePopup}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 bg-gray-800 flex items-center justify-center z-20">
      <div className="bg-white p-8 rounded-lg">
      <Image src={img} height={400} width={400} alt="donate"/>
        <div className="flex justify-between">
          
          <button onClick={onClosePopup} className="text-red-500 mt-4 text-xl font-bold ml-auto">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonatePopup;
