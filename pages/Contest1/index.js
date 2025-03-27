import React, { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { GoogleForm } from 'react-google-forms-hooks';
import { db } from '../../firebase';
import { collection, getDoc, doc, query, getDocs } from 'firebase/firestore';
import AdPopup from "@/components/AdPopup/AdPopup";
import ContestCard from "@/components/ContestCard/ContestCard";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import YouTube, { YouTubeProps } from 'react-youtube';
var getYouTubeID = require('get-youtube-id');
import { googleFormsToJson } from 'react-google-forms-hooks'
import { useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

const ads = [
    {
        id: 1,
        description: "For Sponsorship / Ads Please contact 9500489492",
        video: 'link1',
        title: 'Ads / Sponsors',
        image: 'img1',
    },
    {
        id: 2,
        description: "For Sponsorship / Ads Please contact 9500489492",
        video: 'link1',
        title: 'Ads / Sponsors',
        image: 'img2',
    },
    {
        id: 3,
        description: "For Sponsorship / Ads Please contact 9500489492",
        video: 'link1',
        title: 'Ads / Sponsors',
        image: 'img1',
    },
    {
        id: 4,
        description: "For Sponsorship / Ads Please contact 9500489492",
        video: 'link1',
        title: 'Ads / Sponsors',
        image: 'img1',
    },
]

const Contest1 = () => {
    const [bannerImages, setBannerImages] = useState(['https://flowbite.com/docs/images/carousel/carousel-1.svg', 'https://flowbite.com/docs/images/carousel/carousel-2.svg', 'https://flowbite.com/docs/images/carousel/carousel-3.svg']);
    const [form, setForm] = useState({});
    const [answers, setAnswers] = useState({});
    const [shouldDisplayTodayForm, setShouldDisplayTodayForm] = useState(false);
    const [giveSelectContestOption, setSelectContestOption] = useState(true);
    const [adPopupVisible, setAdPopupVisible] = useState(false);
    const [adNumber, setAdNumber] = useState(0);
    const [adCount, setAdCount] = useState(0);
    const [adsDetails, setAdsDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [contestEnded, setContestEnded] = useState(false);

    const closeAdPopup = async () => {
        setAdPopupVisible(false);
    };

    const fetchAds = async () => {
        try {
            let adsContent = [];
            const adsCollection = collection(db, "Ads");
            const adsDoc = doc(adsCollection, "adsDetails");

            const docSnapshot = await getDoc(adsDoc);

            if (docSnapshot.exists()) {
                const adsData = docSnapshot.data();
                console.log(adsData, "hello");
                adsContent = adsData.ads;

                console.log(adsContent);
                setAdsDetails(adsContent);
                console.log(adsDetails)
            }
            else {
                console.log("No ads Data available")
            }
        }
        catch (error) {
            console.log("error fetching ads data", error);
        }
    }

    useEffect(() => {
        const adPopupInterval = setInterval(() => {
            if (ads.length > 0) {
                setAdPopupVisible(true);
                setAdNumber(prevNumber => (prevNumber + 1) % ads.length);
                console.log(adNumber);
            } else {
                clearInterval(adPopupInterval);
                console.log("xero")
            }
        }, 60 * 1000);

        return () => clearInterval(adPopupInterval);
    }, [adNumber]);

    useEffect(() => {
        const fetchBannerImages = async () => {
            try {
                let data = [];
                const bannerImagesCollection = collection(db, "Web Content");
                const bannerImagesDoc = doc(bannerImagesCollection, "Contest-1-images");

                console.log("fetched images doc");

                const docSnapshot = await getDoc(bannerImagesDoc);

                if (docSnapshot.exists()) {
                    const imagesData = docSnapshot.data();
                    data = imagesData.BannerImages;

                    console.log("set images");

                    setBannerImages(data);

                } else {
                    console.log("No data available");
                }


            } catch (error) {
                console.error("Error getting Images data:", error);
            }
        };

        fetchBannerImages();
    }, []);

    const fetchContestDetails = useCallback(async () => {
        try {
            const contestRef = collection(db, 'Contest1');
            const q = query(contestRef);
            const querySnapshot = await getDocs(q);

            const currentDate = new Date();
            const currentUTCTime = currentDate.getUTCHours() + (currentDate.getUTCMinutes() / 60);
            const currentTime = currentUTCTime + 5.5;
            const currentDateString = currentDate.toISOString().split('T')[0];

            console.log(currentTime);

            if (currentTime < 22.5) {
                const previousDay = new Date(currentDate);
                previousDay.setUTCDate(currentDate.getUTCDate() - 1);
                const previousDayString = previousDay.toISOString().split('T')[0];
                console.log(previousDayString, "check");

                querySnapshot.forEach((doc) => {
                    const contestData = doc.data();
                    const contestDetails = contestData.contestDetails;
                    console.log(contestDetails);

                    if (contestDetails.date === previousDayString) {
                        setForm(contestDetails);
                        console.log(contestDetails)
                        console.log(form);
                        setShouldDisplayTodayForm(true);
                    }
                });
            } else {
                querySnapshot.forEach((doc) => {
                    const contestData = doc.data();
                    const contestDetails = contestData.contestDetails;

                    if (contestDetails.date === currentDateString) {
                        setForm(contestDetails);
                        setShouldDisplayTodayForm(true);
                    }
                });
            }
        } catch (error) {
            console.error('Error fetching contest details:', error);
        }
    }, []);

    useEffect(() => {
        fetchContestDetails();
    }, [fetchContestDetails]);

    const handleChange = (e, index) => {
        setAnswers({ ...answers, [index]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const currentDate = new Date().toISOString().split('T')[0];
            const contestRef = doc(db, 'Contest1', currentDate, 'responses');
            await setDoc(contestRef, answers);
            console.log('User answers submitted successfully');
        } catch (error) {
            console.error('Error submitting user answers:', error);
        }
    };

    const router = useRouter();

    const handlePrevContClick = () => {
        router.push("/PreviousContest1");
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const _onReady = (event) => {
        event.target.pauseVideo();
    }

    useEffect(() => {
        const checkContestEnd = () => {
            const contestEndDate = new Date('2025-03-28T22:30:00+05:30'); // March 28, 2025 at 10:30 PM IST
            const currentDate = new Date();
            
            if (currentDate > contestEndDate) {
                setContestEnded(true);
            }
        };

        checkContestEnd();
    }, []);

    return (
        <>
            {isLoading && (
                <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            )}

            {!isLoading && (
                <div className="px-5">
                    <Navbar />

                    <div className="bg-gray-100">
                        {adPopupVisible && (
                            <AdPopup
                                title={ads[adNumber].title}
                                description={ads[adNumber].description}
                                onClose={closeAdPopup}
                                adLink={ads[adNumber].image}
                                videoLink={ads[adNumber].video}
                            />
                        )}
                    </div>

                    <div className="flex justify-center items-center">
                      <button className="bg-[#2dad5c] text-white w-[145px] h-[42px] rounded-md" onClick={() => router.push("/Home")}>Go Back</button>
                    </div>

                    <div className="text-center">
                        <h1 className="text-[#2dad5c] text-lg my-5 font-bold">
                        நிகழ்ச்சி 1: ரமலான் தொடர் பயான்
                        </h1>
                    </div>

                    {contestEnded ? (
                        <div className="h-[100vh] w-[100vw] flex justify-center items-center text-[#2dad5c] font-bold font-serif">
                            <h1 className="text">போட்டிகள் முடிவடைந்தது - Contest has been closed as of March 28, 2025 10:30 PM</h1>
                            <button className="bg-[#2dad5c] text-white w-[145px] h-[42px] rounded-md" onClick={() => router.push("/Results")}>Check Results</button>
                        </div>
                    ) : (
                        <>
                            {giveSelectContestOption && (
                                <div className="flex justify-around items-center mx-auto text-center my-8 p-6 shadow-md rounded-md">
                                    <Image
                                        src="https://res.cloudinary.com/dchbfnlct/image/upload/v1711188558/fit_size_fit_xmjifp.png"
                                        height={200}
                                        width={200}
                                        alt="img"
                                        className="h-[60px] w-[60px]"
                                    />
                                    <button
                                        className="bg-[#2dad5c] h-[48px] w-[145px] border-1 rounded-md text-white"
                                        onClick={handlePrevContClick}
                                    >
                                        முந்திய நாள் கேள்விகள்
                                    </button>
                                </div>
                            )}

                            {shouldDisplayTodayForm && (
                                <div className="flex flex-col items-center border-2 border-[#2dad5c] text-center my-8 mx-auto p-3 bg-gray-100 shadow-md rounded-md">
                                    <div className="w-[100%] overflow-x-hidden max-w-4xl mx-auto mt-8">
                                        <iframe
                                            className="w-full h-96"
                                            src={`https://www.youtube.com/embed/${form.video}`}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <hr className="text-blue-500 my-8 border-2 border-[#2dad5c] border-t w-[100%]" />

                                    <h1 className="text-2xl font-semibold mb-4">Today&#39;s Contest</h1>
                                    <h1 className="text-2xl text-[#2dad5c] font-semibold mb-4">
                                        Contest Day: {form.contestDay}
                                    </h1>

                                    <form onSubmit={handleSubmit}>
                                        <h1>{form.date}</h1>
                                        <iframe
                                            src={form.formLink}
                                            width="900"
                                            className="w-[90vw] min-h-[900px] max-h-[2200px] bg-white"
                                            frameBorder="0"
                                            marginHeight="0"
                                            marginWidth="0"
                                        >
                                            Loading…
                                        </iframe>
                                    </form>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}

            <Footer />
        </>
    )
}

export default Contest1;