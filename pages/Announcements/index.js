import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
var getYouTubeID = require('get-youtube-id');
import { useEffect } from "react";
import {db} from '../../firebase'

const url1 = "4lUkSgvmTYM";

const Announcements = () => {
    
    const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      
      const linksRef = db.collection('Announcements').doc('announcements');
      const doc = await linksRef.get();

      if (doc.exists) {
        const linksData = doc.data().announcementDetails;
        const linksArray = Object.values(linksData);
        setLinks(linksArray);
        console.log(linksArray)
      } else {
        console.log('No such document!');
      }
    };

    fetchLinks();
  }, []);


    const handleLink = () => {
        // setFormData({...formData, videoLink: getYouTubeID(url)})
        console.log(getYouTubeID("https://youtu.be/TpHorJYoaEc?si=8WOPvkHsIRIS89lF"));  
      }

    


    return (
        <div>
            <Navbar />

           <div className="px-3 md:px-8">
            <div className="flex justify-center my-8 md:my-14">
                <h1 className="text-center text-[#2dad5c] font-bold text-[22px] font-serif">
                 Announcement - அறிவிப்பு 
                </h1>

                
            </div>

            <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-center text-[#2c5c2d] font-bold my-3 font-serif text-[22px]">
                    தொடர் பயான் நிகழ்ச்சி
                    </h1>
                    <h2 className="text-center text-[#2dad5c] font-normal my-3 font-serif text-[22px]">
                        Correct answers list - சரியான பதில்களின் பட்டியல்
                    </h2>
            </div>

            <div className="iframe1 flex justify-center">
            <iframe
                    className="h-[40vh] sm:h-[50vh] w-[95vh] my-6"
                    src={`https://www.youtube.com/embed/TpHorJYoaEc`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="flex flex-col items-center md:items-start my-8">
                    {/* <h1 className="text-center text-[#2c5c2d] font-bold ">
                    தொடர் பயான் நிகழ்ச்சி
                    </h1> */}
                    <h2 className="text-center text-[#2dad5c] font-semibold  my-3 font-serif text-[20px] ">
                    Winners list - வெற்றியாளர்கள் பட்டியல்
                    </h2>

                    <h1 className="text-center text-[#2c5c2d] font-bold  my-5 font-serif text-[20px]">
                    Stay Tuned... Will be updated very soon...
                    </h1>
            </div>

            <div className="iframe1 flex justify-center">
            
            </div>


            <div className="flex flex-col items-center md:items-start my-8">
                    <h1 className="text-center text-[#2c5c2d] font-bold my-3 font-serif text-[20px]">
                    தினம் ஒரு கேள்வி 
                    </h1>
                    <h2 className="text-center text-[#2dad5c] font-normal my-3 font-serif text-[20px]">
                        Correct answers list - சரியான பதில்களின் பட்டியல்
                    </h2>

                    <h1 className="text-center text-[#2c5c2d] font-bold my-5 font-serif text-[20px]">
                    Stay Tuned... Will be updated very soon...
                    </h1>
            </div>

            <div className="iframe1 flex justify-center">
            
            </div>

            <div className="flex flex-col items-center md:items-start my-8">
                    {/* <h1 className="text-center text-[#2c5c2d] font-bold ">
                    தொடர் பயான் நிகழ்ச்சி
                    </h1> */}
                    <h2 className="text-center text-[#2dad5c] font-semibold  my-3 font-serif text-[20px]">
                    Winners list - வெற்றியாளர்கள் பட்டியல்
                    </h2>

                    <h1 className="text-center text-[#2c5c2d] font-bold my-5 font-serif text-[20px]">
                    Stay Tuned... Will be updated very soon...
                    </h1>
            </div>

            <div className="iframe1 flex justify-center">
           
            </div>


            <div className="flex flex-col items-center md:items-start my-8">
                    <h1 className="text-center text-[#2c5c2d] font-bold my-3 font-serif text-[20px]">
                    Arabic calligraphy
                    </h1>
                    <h2 className="text-center text-[#2dad5c] font-normal my-3 font-serif text-[20px]">
                    All participants Calligraphy slide
                    </h2>

                    <h1 className="text-center text-[#2c5c2d] font-bold my-5 font-serif text-[20px]">
                    Stay Tuned... Will be updated very soon...
                    </h1>
            </div>

            <div className="iframe1 flex justify-center">
           
            </div>

            <div className="flex flex-col items-center md:items-start my-8">
                    {/* <h1 className="text-center text-[#2c5c2d] font-bold ">
                    தொடர் பயான் நிகழ்ச்சி
                    </h1> */}
                    <h2 className="text-center text-[#2dad5c] font-semibold  my-3 font-serif text-[20px]">
                    Winners list 
                    </h2>

                    <h1 className="text-center text-[#2c5c2d] font-bold my-5 font-serif text-[20px]">
                    Stay Tuned... Will be updated very soon...
                    </h1>
            </div>

            <div className="iframe1 flex justify-center">
            
            </div>

            </div>


        </div>
    )
}

export default Announcements;