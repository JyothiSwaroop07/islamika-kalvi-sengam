import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const GoogleFormPage = () => {
  const [formData, setFormData] = useState({
    title: 'Kurbani Pre-Booking Form', // Default title
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeHyiZJXvCD5s0zw9VbyFkpAWb0hVX9tO7yToNzdDAjzTQyTg/viewform' // Default form URL
  });

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const docRef = doc(db, 'HomeAnnouncements', 'announcementDetails');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          // Only update if the backend has these values
          if (data.title) setFormData(prev => ({ ...prev, title: data.title }));
          if (data.formUrl) setFormData(prev => ({ ...prev, formUrl: data.formUrl }));
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    fetchFormData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-3 md:px-8 flex flex-col items-center justify-center my-8 md:my-14">
        {/* Heading */}
        <h1 className="text-[#2dad5c] font-bold text-[22px] font-serif text-center">
          {formData.title}
        </h1>

        {/* Embedded Google Form */}
        <div className="w-full max-w-4xl h-[800px] mt-5 shadow-lg border rounded-lg overflow-hidden">
          <iframe
            src={formData.formUrl}
            width="100%"
            height="100%"
            className="border-none"
            title="Google Form"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleFormPage;
 
