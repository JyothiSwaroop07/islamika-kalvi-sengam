import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Image from 'next/image';
import { db } from '../../firebase';
import { useRouter } from "next/router";

const Announcements = () => {
  const router = useRouter();

  const [announcement, setAnnouncement] = useState({
    links: {},
    title: '',
    image: '',
    content: '',
  });

  useEffect(() => {
    const fetchAnnouncementData = async () => {
      const docRef = db.collection('Announcements').doc('announcements');
      const doc = await docRef.get();

      if (doc.exists) {
        const data = doc.data().announcementDetails;
        setAnnouncement({
          links: {
            link1: data.link1,
            link2: data.link2,
            link3: data.link3,
            link4: data.link4,
            link5: data.link5,
            link6: data.link6,
          },
          title: data.title,
          image: data.image,
          content: data.content,
        });
      } else {
        console.log('No such document!');
      }
    };

    fetchAnnouncementData();
  }, []);

  const { links, title, image, content } = announcement;

  // Function to convert Google Drive link to direct URL
  const convertDriveLink = (url) => {
    const isDriveLink = url.includes('drive.google.com');
    if (isDriveLink) {
      const fileId = url.match(/d\/(.+?)\//)[1];
      return `https://drive.google.com/uc?id=${fileId}`;
    }
    return url;
  };


  return (
    <div>
      <Navbar />
      <div className="px-3 md:px-8">
        <div className="flex flex-col items-center justify-center my-8 md:my-14">
          <div className="flex justify-between items-center mx-auto my-5 w-[90vw]">
            <div className="flex flex-col items-center">
              <Image
                src="https://res.cloudinary.com/dchbfnlct/image/upload/v1711188558/fit_size_fit_xmjifp.png"
                className="h-[60px] w-[60px]"
                width={100}
                height={100}
                alt="Islamiya Kalvi Sangam"
              />
              <h1 className="text-[8px] text-black font-serif">Islamiya Kalvi Sangam</h1>
            </div>

            <button
              className="bg-[#2dad5c] w-[155px] h-[55px] p-1 text-md text-white rounded-md"
              onClick={() => router.push("/")}
            >
              ← Go to Home
            </button>

            <div className="text-black flex flex-col -mt-5 items-center font-bold text-xl">
              <h1 className="text-[7px] text-black font-normal leading-snug">
                For ads/sponsorship <br /> contact 9500489492
              </h1>
            </div>
          </div>

          {/* Announcement Title */}
          <h1 className="text-left text-[#2dad5c] font-bold text-[22px] font-serif ">
            Announcement - அறிவிப்பு
          </h1>
          <h1 className="text-left text-[#00000] font-bold text-[22px] font-serif mt-5">
            {title || 'Announcement - அறிவிப்பு'}
          </h1>

          {/* Announcement Image */}
          {image && (
            <div className="flex justify-center my-5">
              <Image
                src={convertDriveLink(image)}
                alt="Announcement Image"
                width={300}
                height={350}
                className="rounded-lg shadow-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = "fallback-image-url"; }}
              />
            </div>
          )}

          {/* Announcement Content */}
          {content && (
            <div className="text-left text-[#00000] font-normal my-3 font-serif text-[18px] max-w-4xl mx-auto whitespace-pre-line">
              {content}
            </div>
          )}

          {/* The YouTube links display and logic are commented out */}

         {/* Video 1
          
          {links.link1 && (
            <div className="iframe1 flex justify-center">
              <iframe
                className="my-6"
                src={`https://www.youtube.com/embed/${links.link1}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="560"
                height="315"
              />
            </div>
          )}
          

          //  Video 2 *
          
          // {links.link2 ? (
          //   <div className="iframe2 flex justify-center">
          //     <iframe
          //       title="YouTube Video"
          //       width="560"
          //       height="315"
          //       src={`https://www.youtube.com/embed/${links.link2}`}
          //       allowFullScreen
          //     />
          //   </div>
          // ) : (
          //   <h1 className="text-left text-[#2c5c2d] font-bold my-5 font-serif text-[20px]">
          //     Will be released on - April 8 10:30pm
          //   </h1>
          // )}
          

          {/* Video 3 */}
{/*           
          {links.link3 ? (
            <div className="iframe3 flex justify-center">
              <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${links.link3}`}
                allowFullScreen
              />
            </div>
          ) : (
            <h1 className="text-left text-[#2c5c2d] font-bold my-5 font-serif text-[20px]">
              Will be released on - April 8, 5pm
            </h1>
          )}
           */}

          {/* Video 4 */}
{/*           
          {links.link4 ? (
            <div className="iframe4 flex justify-center">
              <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${links.link4}`}
                allowFullScreen
              />
            </div>
          ) : (
            <h1 className="text-left text-[#2c5c2d] font-bold my-5 font-serif text-[20px]">
              Will be released on - April 9, 5pm
            </h1>
          )}
           */}

          {/* Video 5 */}
{/*           
          {links.link5 ? (
            <div className="iframe5 flex justify-center">
              <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${links.link5}`}
                allowFullScreen
              />
              
            </div>
            
          ) : (
            <h1 className="text-left text-[#2c5c2d] font-bold my-5 font-serif text-[20px]">
              Will be released on - April 9 - 4:30 AM
            </h1>
          )}
           */}

          {/* Video 6 */}
{/*           
          {links.link6 ? (
            <div className="iframe6 flex justify-center">
              <iframe
                title="YouTube Video"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${links.link6}`}
                allowFullScreen
              />
            </div>
          ) : (
            <h1 className="text-left text-[#2c5c2d] font-bold my-5 font-serif text-[20px]">
              Will be released on - April 9 9:30pm
            </h1>
          )} */}
          
        </div>
      </div>
    </div>
  );
};

export default Announcements;
