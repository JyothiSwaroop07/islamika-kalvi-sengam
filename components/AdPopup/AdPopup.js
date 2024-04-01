// AdPopup.js
import React from 'react';
import Image from 'next/image';

const AdPopup = ({title, image, video, description, onClose, adLink }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 bg-gray-800 flex items-center justify-center z-20">
      <div className="bg-white p-8 rounded-lg">
      <p className="text-xl font-bold text-center mb-4">{title}</p>
        <p className="text-xl font-bold mb-4">{description}</p>
        <Image src={image} width={200} height={200} alt="spnsor image" className='m-auto mt-5' />
        <div className="flex justify-between">
          <button href="link1" target="_blank" className="text-blue-500 underline">
            See More
          </button>
          <button onClick={onClose} className="text-red-500">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdPopup;
