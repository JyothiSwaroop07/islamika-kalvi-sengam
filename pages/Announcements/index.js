import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
var getYouTubeID = require('get-youtube-id');
import { useEffect } from "react";
import Image from 'next/image'
import {db} from '../../firebase'

const url1 = "4lUkSgvmTYM";

const Announcements = () => {
    
    const [links, setLinks] = useState({});

  useEffect(() => {
    const fetchLinks = async () => {
      
      const linksRef = db.collection('Announcements').doc('announcements');
      const doc = await linksRef.get();

      if (doc.exists) {
        const linksData = doc.data().announcementDetails;
        console.log(linksData)
        const linksArray = Object.values(linksData);
        setLinks(linksData);
      } else {
        console.log('No such document!');
      }
    };

    fetchLinks();
    console.log(links)
  }, []);


    const handleLink = () => {
        // setFormData({...formData, videoLink: getYouTubeID(url)})
        console.log(getYouTubeID("https://youtu.be/TpHorJYoaEc?si=8WOPvkHsIRIS89lF"));  
      }

    


    return (
        <div>
            <Navbar />

           <div className="px-3 md:px-8">
            <div className="flex flex-col items-center justify-center my-8 md:my-14">
                <h1 className="text-center text-[#2dad5c] font-bold text-[22px] font-serif">
                    Announcement - அறிவிப்பு 
                </h1>

                <Image src="https://res.cloudinary.com/dchbfnlct/image/upload/v1712562412/WhatsApp_Image_2024-04-08_at_00.02.35_beknxr.jpg" height={350} width={300} className="" />    
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
                    className=" my-6"
                    src={`https://www.youtube.com/embed/${links.link1}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    width="560"
                    height="315"
                ></iframe>
            </div>

            <div className="flex flex-col items-center md:items-start my-8">
                    {/* <h1 className="text-center text-[#2c5c2d] font-bold ">
                    தொடர் பயான் நிகழ்ச்சி
                    </h1> */}
                    <h2 className="text-center text-[#2dad5c] font-semibold  my-3 font-serif text-[20px] ">
                    Winners list - வெற்றியாளர்கள் பட்டியல்
                    </h2>

                    
            </div>

            <div className="iframe2 flex justify-center">
                    { 
                        links.link2 ? (
                            <iframe
                                title="YouTube Video"
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${links.link2}`}
                                allowFullScreen
                            ></iframe>
                        ) :
                        (
                            <h1 className="text-center text-[#2c5c2d] font-bold  my-5 font-serif text-[20px]">
                            Will be released on - ஒளிபரப்பாகும் நேரம் - April 8 10:30pm
                            </h1>
                        )
                    }
            </div>


            <div className="flex flex-col items-center md:items-start my-8">
                    <h1 className="text-center text-[#2c5c2d] font-bold my-3 font-serif text-[20px]">
                    தினம் ஒரு கேள்வி 
                    </h1>
                    <h2 className="text-center text-[#2dad5c] font-normal my-3 font-serif text-[20px]">
                        Correct answers list - சரியான பதில்களின் பட்டியல்
                    </h2>

                   
            </div>

            <div className="iframe3 flex justify-center">
            { 
                        links.link3 ? (
                            <iframe
                                title="YouTube Video"
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${links.link3}`}
                                allowFullScreen
                            ></iframe>
                        ) :
                        (
                            <h1 className="text-center text-[#2c5c2d] font-bold  my-5 font-serif text-[20px]">
                            Will be released on - ஒளிபரப்பாகும் நேரம் - April 8, 5pm
                            </h1>
                        )
                    }
            </div>

            <div className="flex flex-col items-center md:items-start my-8">
                    {/* <h1 className="text-center text-[#2c5c2d] font-bold ">
                    தொடர் பயான் நிகழ்ச்சி
                    </h1> */}
                    <h2 className="text-center text-[#2dad5c] font-semibold  my-3 font-serif text-[20px]">
                    Winners list - வெற்றியாளர்கள் பட்டியல்
                    </h2>

                    
            </div>

            <div className="iframe4 flex justify-center">
            { 
                        links.link4 ? (
                            <iframe
                                title="YouTube Video"
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${links.link4}`}
                                allowFullScreen
                            ></iframe>
                        ) :
                        (
                            <h1 className="text-center text-[#2c5c2d] font-bold  my-5 font-serif text-[20px]">
                            Will be released on - ஒளிபரப்பாகும் நேரம் - April 9 5pm
                            </h1>
                        )
                    }
            </div>


            <div className="flex flex-col items-center md:items-start my-8">
                    <h1 className="text-center text-[#2c5c2d] font-bold my-3 font-serif text-[20px]">
                    Arabic calligraphy
                    </h1>
                    <h2 className="text-center text-[#2dad5c] font-normal my-3 font-serif text-[20px]">
                    All participants Calligraphy slide
                    </h2>

                    
            </div>

            <div className="iframe5 flex justify-center">
            { 
                        links.link5 ? (
                            <iframe
                                title="YouTube Video"
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${links.link5}`}
                                allowFullScreen
                            ></iframe>
                        ) :
                        (
                            <h1 className="text-center text-[#2c5c2d] font-bold  my-5 font-serif text-[20px]">
                           Will be released on - ஒளிபரப்பாகும் நேரம் - April 8 - 9:30pm
                            </h1>
                        )
                    }
            </div>

            <div className="flex flex-col items-center md:items-start my-8">
                    {/* <h1 className="text-center text-[#2c5c2d] font-bold ">
                    தொடர் பயான் நிகழ்ச்சி
                    </h1> */}
                    <h2 className="text-center text-[#2dad5c] font-semibold  my-3 font-serif text-[20px]">
                    Winners list 
                    </h2>

                    
            </div>

            <div className="iframe6 flex justify-center">
            { 
                        links.link6 ? (
                            <iframe
                                title="YouTube Video"
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${links.link6}`}
                                allowFullScreen
                            ></iframe>
                        ) :
                        (
                            <h1 className="text-center text-[#2c5c2d] font-bold  my-5 font-serif text-[20px]">
                            Will be released on - ஒளிபரப்பாகும் நேரம் - April 9 9:30pm
                            </h1>
                        )
                    }
            </div>

            </div>


        </div>
    )
}

export default Announcements;