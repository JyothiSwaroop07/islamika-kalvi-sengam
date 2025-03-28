import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import Image from 'next/image';

const Results = () => {
  const router = useRouter();
  const [results, setResults] = useState({
    result1: '',
    result2: '',
    result3: '',
    result4: '',
    result5: '',
    result6: '',
    result7: '',
    result8: ''
  });
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Schedule for each video
  const videoSchedule = {
    result1: new Date('2025-03-28T10:30:00'), // March 28, 10:30 AM
    result2: new Date('2025-03-29T04:30:00'), // March 29, 4:30 AM
    result3: new Date('2025-03-29T17:00:00'), // March 29, 5:00 PM
    result4: new Date('2025-03-29T22:30:00'), // March 29, 10:30 PM
    result5: new Date('2025-03-30T04:30:00'), // March 30, 4:30 AM
    result6: new Date('2025-03-30T13:30:00'), // March 30, 1:30 PM
    result7: new Date('2025-03-30T17:00:00'), // March 30, 5:00 PM
    result8: new Date('2025-03-30T22:30:00')  // March 30, 10:30 PM
  };

  const videoDetails = {
    1: {
      title: "ரமலான் தொடர் பயான் நிகழ்ச்சி - சரியான பதில்கள்",
      release: "Will be released on 28th March - 10:30PM",
    },
    2: {
      title: "ஓர் அழகிய உபதேசம் நிகழ்ச்சி - சரியான பதில்கள்",
      release: "Will be released on 29th March - 4:30AM",
    },
    3: {
      title: "தினம் ஒரு கேள்வி நிகழ்ச்சி - சரியான பதில்கள்",
      release: "Will be released on 29th March - 5:00PM",
    },
    4: {
      title: "ரமலான் தொடர் பயான் நிகழ்ச்சி - வெற்றியாளர்கள் பட்டியல்",
      release: "Will be released on 29th March - 10:30PM",
    },
    5: {
      title: "ஓர் அழகிய உபதேசம் நிகழ்ச்சி - வெற்றியாளர்கள் பட்டியல்",
      release: "Will be released on 30th March - 4:30AM",
    },
    6: {
      title: "Arabic Calligraphy Contest - Overall Participants Video",
      release: "Will be released on 30th March - 1:30PM",
    },
    7: {
      title: "தினம் ஒரு கேள்வி நிகழ்ச்சி - வெற்றியாளர்கள் பட்டியல்",
      release: "Will be released on 30th March - 5:00PM",
    },
    8: {
      title: "Arabic Calligraphy Contest - வெற்றியாளர்கள் பட்டியல்",
      release: "Will be released on 30th March - 10:30PM",
    }
  };
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update current time every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const docRef = doc(db, 'Results', 'videos');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Firestore data:", data);
          
          const announcementDetails = data.videoLinks || {};
          console.log("announcementDetails:", announcementDetails);
          
          setResults({
            result1: announcementDetails.video1 || '',
            result2: announcementDetails.video2 || '',
            result3: announcementDetails.video3 || '',
            result4: announcementDetails.video4 || '',
            result5: announcementDetails.video5 || '',
            result6: announcementDetails.video6 || '',
            result7: announcementDetails.video7 || '',
            result8: announcementDetails.video8 || ''
          });
        } else {
          console.log("No document found at Announcements/announcements");
        }
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const getYouTubeId = (url) => {
    if (!url) return null;
    
    if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1].split(/[?&#]/)[0];
    }
    
    const regExp = /^.*(youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const isVideoAvailable = (videoKey) => {
    return currentTime >= videoSchedule[videoKey];
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Image
              src="https://res.cloudinary.com/dchbfnlct/image/upload/v1711188558/fit_size_fit_xmjifp.png"
              width={60}
              height={60}
              alt="Islamiya Kalvi Sangam"
              className="rounded-full"
            />
            <div>
              <h1 className="text-xs text-gray-600 font-serif">Islamiya Kalvi Sangam</h1>
              <p className="text-[10px] text-gray-500">For ads/sponsorship contact 9500489492</p>
            </div>
          </div>

          <button
            className="bg-[#2dad5c] hover:bg-[#228c4a] transition-colors px-6 py-3 text-white rounded-lg flex items-center"
            onClick={() => router.push("/")}
          >
            <span className="mr-2">←</span> Go to Home
          </button>
        </div>

        <h1 className="text-3xl font-bold text-[#2dad5c] text-center mb-2 font-serif">
          Results - முடிவுகள்
        </h1>
        <div className="border-b-2 border-[#2dad5c] w-24 mx-auto mb-12"></div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {Object.entries(results).map(([key, url], index) => {
            const videoId = getYouTubeId(url);
            const videoNumber = key.replace('result', '');
            const isAvailable = isVideoAvailable(key);
            
            return (
              <div key={key} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#2c5c2d] mb-4 flex items-center">
                    <span className="bg-[#2dad5c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      {videoNumber}
                    </span>
                      {videoDetails[videoNumber].title}
                  </h2>
                  
                  { videoId? (
                     isAvailable? (
                      <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Result Video ${videoNumber}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full"
                          loading="lazy"
                        />
                      </div>
                    ) : (

                        <div className="w-full h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-500 text-lg text-center">
                        {/* Result {videoNumber} will be available on {videoSchedule[key].toLocaleDateString('en-IN')} at {videoSchedule[key].toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}*/}
                        {videoDetails[videoNumber].release} 
                        
                      </p>
                    </div>
                      
                    )
                  ) : (
                    <div className="w-full h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-500 text-lg">{videoDetails[videoNumber].release}!</p>
                      </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;
