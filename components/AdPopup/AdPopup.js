// AdPopup.js
import React, { useState , useEffect } from 'react';
import Image from 'next/image';
import img from './kurbani.jpg';
import { db } from '../../firebase';
 

const AdPopup = ({title, image, video, description, onClose, adLink }) => {

  const [adSponsor , setAdSponsor] = useState('');
  useEffect(() => {
    const fetchSponsorData = async () => {
      try {
        const docRef = db.collection('Sponsors').doc('logos');
        const doc = await docRef.get();
  
        if (doc.exists) {
          const data = doc.data(); // Get the document data directly
          console.log('Sponsor data:', data.adSponsorLogo);
          setAdSponsor(data.adSponsorLogo);   // This will include headerLogo, footerLogo, etc.
        } else {
          console.log('No sponsor document found!');
          setAdSponsor('');
        }
      } catch (error) {
        console.error('Error fetching sponsor data:', error);
      }
    };
  
    fetchSponsorData();
  }, []);
  
   const convertDriveLink = (url) => {
      const isDriveLink = url.includes('drive.google.com');
      if (isDriveLink) {
        const fileId = url.match(/d\/(.+?)\//)[1];
        return `https://drive.google.com/uc?id=${fileId}`;
      }
      return url;
    };
  
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 bg-gray-800 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg">
      <p className="text-xl font-bold text-center mb-4">{/*{title}*/}</p>
        <p className="text-xl font-bold mb-4">{/*{description}*/}</p>
        <Image src={adSponsor === "" ? img : convertDriveLink(adSponsor)}
         width={200} height={200} alt="spnsor image" className='m-auto mt-5' />
        <div className="flex justify-center">
        
          <button onClick={onClose} className="text-red-500">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdPopup;
