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

  // ✅ Store video schedule in UTC (so it's accurate across all time zones)
  const videoSchedule = {
    result1: new Date('2025-03-28T17:00:00Z'), // 10:30 PM IST
    result2: new Date('2025-03-28T23:00:00Z'), // 4:30 AM IST
    result3: new Date('2025-03-29T11:30:00Z'), // 5:00 PM IST
    result4: new Date('2025-03-29T17:00:00Z'), // 10:30 PM IST
    result5: new Date('2025-03-29T23:00:00Z'), // 4:30 AM IST
    result6: new Date('2025-03-30T08:00:00Z'), // 1:30 PM IST
    result7: new Date('2025-03-30T11:30:00Z'), // 5:00 PM IST
    result8: new Date('2025-03-30T17:00:00Z')  // 10:30 PM IST
  };

  const videoDetails = {
    1: { title: "ரமலான் தொடர் பயான் நிகழ்ச்சி - சரியான பதில்கள்", release: "March 28 - 10:30 PM IST" },
    2: { title: "ஓர் அழகிய உபதேசம் நிகழ்ச்சி - சரியான பதில்கள்", release: "March 29 - 4:30 AM IST" },
    3: { title: "தினம் ஒரு கேள்வி நிகழ்ச்சி - சரியான பதில்கள்", release: "March 29 - 5:00 PM IST" },
    4: { title: "ரமலான் தொடர் பயான் நிகழ்ச்சி - வெற்றியாளர்கள் பட்டியல்", release: "March 29 - 10:30 PM IST" },
    5: { title: "ஓர் அழகிய உபதேசம் நிகழ்ச்சி - வெற்றியாளர்கள் பட்டியல்", release: "March 30 - 4:30 AM IST" },
    6: { title: "Arabic Calligraphy Contest - Overall Participants Video", release: "March 30 - 1:30 PM IST" },
    7: { title: "தினம் ஒரு கேள்வி நிகழ்ச்சி - வெற்றியாளர்கள் பட்டியல்", release: "March 30 - 5:00 PM IST" },
    8: { title: "Arabic Calligraphy Contest - வெற்றியாளர்கள் பட்டியல்", release: "March 30 - 10:30 PM IST" }
  };

  // ✅ Update the current time every minute and convert it to IST
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000; // IST = UTC +5:30
      const istTime = new Date(now.getTime() + istOffset);

      setCurrentTime(istTime);
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // ✅ Fetch results from Firestore
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const docRef = doc(db, 'Results', 'videos');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
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
  }, []);

  // ✅ Function to extract YouTube video ID from a URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    if (url.includes('youtu.be/')) {
      return url.split('youtu.be/')[1].split(/[?&#]/)[0];
    }
    const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  // ✅ Function to check if a video is available based on IST
  const isVideoAvailable = (videoKey) => {
    return currentTime >= videoSchedule[videoKey];
  };

  // ✅ Loading animation while fetching data
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
        <h1 className="text-3xl font-bold text-[#2dad5c] text-center mb-2 font-serif">Results - முடிவுகள்</h1>
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

                  {videoId ? (
                    isAvailable ? (
                      <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`Result Video ${videoNumber}`}
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <p className="text-gray-500 text-lg text-center">{videoDetails[videoNumber].release}</p>
                    )
                  ) : (
                    <p className="text-gray-500 text-lg text-center">Video not available</p>
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
