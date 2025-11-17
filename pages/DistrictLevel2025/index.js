import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { db } from "../../firebase";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";

const DistrictLevel2025 = () => {
  const router = useRouter();

  const [data, setData] = useState({
    posterUrl: "",
    registrationFormUrl: "",

    set1Heading: "",
    set1FormUrl: "",

    set2Heading: "",
    set2FormUrl: "",

    set3Heading: "",
    set3FormUrl: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const ref = doc(db, "DistrictLevel2025", "details");
      const snapshot = await getDoc(ref);

      if (snapshot.exists()) {
        setData(snapshot.data());
      } else {
        console.log("No data found!");
      }
    };

    fetchData();
  }, []);

  const {
    posterUrl,
    registrationFormUrl,
    set1Heading,
    set1FormUrl,
    set2Heading,
    set2FormUrl,
    set3Heading,
    set3FormUrl,
  } = data;

  // Function to convert Google Drive links
  const convertDriveLink = (url) => {
    if (!url) return "";
    if (!url.includes("drive.google.com")) return url;
    const fileId = url.match(/d\/(.+?)\//)?.[1];
    return `https://drive.google.com/uc?id=${fileId}`;
  };

  return (
    <div>
      <Navbar />

      <div className="px-3 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center my-8 md:my-10">
          <div className="flex justify-between items-center mx-auto my-5 w-[90vw]">

            {/* Left Logo */}
            <div className="flex flex-col items-center">
              <Image
                src="https://res.cloudinary.com/dchbfnlct/image/upload/v1711188558/fit_size_fit_xmjifp.png"
                width={60}
                height={60}
                alt="Islamiya Kalvi Sangam"
              />
              <h1 className="text-[8px] text-black font-serif">
                Islamiya Kalvi Sangam
              </h1>
            </div>

            {/* Back Button */}
            <button
              className="bg-[#2dad5c] w-[155px] h-[55px] p-1 text-md text-white rounded-md"
              onClick={() => router.push("/")}
            >
              ← Go to Home
            </button>

            {/* Right Info */}
            <div className="text-black flex flex-col -mt-5 items-center font-bold text-xl">
              <h1 className="text-[7px] text-black font-normal leading-snug">
                For ads/sponsorship <br /> contact 9500489492
              </h1>
            </div>
          </div>

          {/* Page Title */}
          <h1 className="text-left text-[#2dad5c] font-bold text-[22px] font-serif">
            District Level Islamic Competition - 2025
          </h1>
        </div>

        {/* ============================
            Section 1: Registration
        ============================ */}
        <div className="flex flex-col items-center">

          {/* Poster */}
          {posterUrl && (
            <div className="flex justify-center my-6">
              <Image
                src={convertDriveLink(posterUrl)}
                alt="Competition Poster"
                width={350}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Registration Button */}
          {registrationFormUrl && (
            <button
              onClick={() => window.open(registrationFormUrl, "_blank")}
              className="bg-[#2dad5c] text-white px-6 py-3 rounded-md text-lg shadow-md hover:bg-[#24954f]"
            >
              Register 
            </button>
          )}
        </div>

        {/* ============================
            Section 2: THREE SCROLLING SETS
        ============================ */}
        <div className="mt-10 flex flex-col gap-10 items-center">

        {/* --- SET 1 --- */}
        <div className="bg-gray-100 shadow p-6 rounded-lg w-[90%] md:w-[60%] text-center">
            <h2 className="text-[#2dad5c] text-xl font-bold font-serif">{set1Heading}</h2>

            <button
            onClick={() => window.open(set1FormUrl, "_blank")}
            className="bg-[#2dad5c] text-white px-6 py-2 mt-4 rounded-md text-md hover:bg-[#24954f] mx-auto block"
            >
            Google Form Link
            </button>
        </div>

        {/* --- SET 2 --- */}
        <div className="bg-gray-100 shadow p-6 rounded-lg w-[90%] md:w-[60%] text-center">
            <h2 className="text-[#2dad5c] text-xl font-bold font-serif">{set2Heading}</h2>

            <button
            onClick={() => window.open(set2FormUrl, "_blank")}
            className="bg-[#2dad5c] text-white px-6 py-2 mt-4 rounded-md text-md hover:bg-[#24954f] mx-auto block"
            >
            Google Form Link
            </button>
        </div>

        {/* --- SET 3 --- */}
        <div className="bg-gray-100 shadow p-6 rounded-lg w-[90%] md:w-[60%] text-center">
            <h2 className="text-[#2dad5c] text-xl font-bold font-serif">{set3Heading}</h2>

            <button
            onClick={() => window.open(set3FormUrl, "_blank")}
            className="bg-[#2dad5c] text-white px-6 py-2 mt-4 rounded-md text-md hover:bg-[#24954f] mx-auto block"
            >
            Google Form Link
            </button>
        </div>

        </div>


      </div>
    </div>
  );
};

export default DistrictLevel2025;
