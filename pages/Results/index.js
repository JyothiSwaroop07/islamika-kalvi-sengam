import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import Image from 'next/image';

const Results = () => {
  const router = useRouter();
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Convert to IST (India Standard Time)
  const getCurrentIST = () => {
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000; // IST = UTC +5:30
    return new Date(now.getTime() + istOffset);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentIST());
      console.log("Updated IST Time:", getCurrentIST().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
    }, 60000); // Update IST time every minute

    return () => clearInterval(timer);
  }, []);

  // Scheduled video release times in IST
  const videoSchedule = {
    result1: new Date('2025-03-28T22:30:00+05:30'),
    result2: new Date('2025-03-29T04:30:00+05:30'),
    result3: new Date('2025-03-29T17:00:00+05:30'),
    result4: new Date('2025-03-29T22:30:00+05:30'),
    result5: new Date('2025-03-30T04:30:00+05:30'),
    result6: new Date('2025-03-30T13:30:00+05:30'),
    result7: new Date('2025-03-30T17:00:00+05:30'),
    result8: new Date('2025-03-30T22:30:00+05:30')
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const docRef = doc(db, 'Results', 'videos');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Fetched Video Links:", data.videoLinks); // Debugging log
          setResults(data.videoLinks || {});
        } else {
          console.log("No document found");
        }
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [currentTime]); // Fetch again whenever IST updates

  // Extract YouTube Video ID from URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([^#&?]*)/);
    return match && match[1].length === 11 ? match[1] : null;
  };

  // Check if video is available
  const isVideoAvailable = (videoKey) => {
    console.log(`Checking video ${videoKey}: Scheduled - ${videoSchedule[videoKey]?.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}, Current IST - ${currentTime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`);
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
          {Object.entries(videoSchedule).map(([key, time], index) => {
            const videoId = getYouTubeId(results[key]);
            const isAvailable = isVideoAvailable(key);

            return (
              <div key={key} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#2c5c2d] mb-4 flex items-center">
                    <span className="bg-[#2dad5c] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    Video {index + 1}
                  </h2>

                  {videoId ? (
                    isAvailable ? (
                      <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Result Video ${index + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                        <p className="text-gray-500 text-lg">
                          Video will be available on {time.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                        </p>
                      </div>
                    )
                  ) : (
                    <div className="w-full h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                      <p className="text-gray-500 text-lg">Video link not available yet.</p>
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
