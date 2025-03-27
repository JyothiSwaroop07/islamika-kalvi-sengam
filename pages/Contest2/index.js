import React, { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { db } from '../../firebase';
import { collection, getDoc, doc, query, getDocs } from 'firebase/firestore';
import AdPopup from "@/components/AdPopup/AdPopup";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
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

const Contest2 = () => {
    const [bannerImages, setBannerImages] = useState(['https://flowbite.com/docs/images/carousel/carousel-1.svg', 'https://flowbite.com/docs/images/carousel/carousel-2.svg', 'https://flowbite.com/docs/images/carousel/carousel-3.svg']);
    const [form, setForm] = useState({});
    const [answers, setAnswers] = useState({});
    const [shouldDisplayTodayForm, setShouldDisplayTodayForm] = useState(false);
    const [giveSelectContestOption, setSelectContestOption] = useState(true);
    const [adPopupVisible, setAdPopupVisible] = useState(false);
    const [adNumber, setAdNumber] = useState(0);
    const [adsDetails, setAdsDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
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
                adsContent = adsData.ads;
                setAdsDetails(adsContent);
            } else {
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
            } else {
                clearInterval(adPopupInterval);
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

                const docSnapshot = await getDoc(bannerImagesDoc);

                if (docSnapshot.exists()) {
                    const imagesData = docSnapshot.data();
                    data = imagesData.BannerImages;
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
            const contestRef = collection(db, 'Contest2');
            const q = query(contestRef);
            const querySnapshot = await getDocs(q);

            const currentDate = new Date();
            currentDate.setUTCHours(currentDate.getUTCHours() + 5, currentDate.getUTCMinutes() + 30, 0, 0);
            const currentDateString = currentDate.toISOString().split('T')[0];
            const currentTime = currentDate.getUTCHours();

            if (currentTime < 17) {
                const previousDay = new Date(currentDate);
                previousDay.setUTCDate(currentDate.getUTCDate() - 1);
                const previousDayString = previousDay.toISOString().split('T')[0];

                querySnapshot.forEach((doc) => {
                    const contestData = doc.data();
                    const contestDetails = contestData.contestDetails;

                    if (contestDetails.date == previousDayString) {
                        setForm(contestDetails);
                        setShouldDisplayTodayForm(true);
                    }
                });
            } else {
                querySnapshot.forEach((doc) => {
                    const contestData = doc.data();
                    const contestDetails = contestData.contestDetails;

                    if (contestDetails.date == currentDateString) {
                        setForm(contestDetails);
                        setShouldDisplayTodayForm(true);
                    }
                });
            }
        } catch (error) {
            console.error('Error fetching contest details:', error);
            setErrorMessage("No Contests available for Today");
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
            const contestRef = doc(db, 'Contest2', currentDate, 'responses');
            await setDoc(contestRef, answers);
            console.log('User answers submitted successfully');
        } catch (error) {
            console.error('Error submitting user answers:', error);
        }
    };

    const router = useRouter();

    const handlePrevContClick = () => {
        router.push("/PreviousContest2");
    }

    useEffect(() => {
        const checkContestEnd = () => {
            const contestEndDate = new Date('2025-03-28T17:00:00+05:30'); // March 28, 2025 at 10:30 PM IST
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

                    <div className="">
                        <h1 className="text-[#2dad5c] text-lg text-center my-5 font-bold">நிகழ்ச்சி 2: தினம் ஒரு கேள்வி</h1>
                    </div>

                    {contestEnded ? (
                        <div className="h-[100vh] w-[100vw] flex justify-center items-center text-[#2dad5c] font-bold font-serif">
                            <h1 className="text">போட்டிகள் முடிவடைந்தது - Contest has been closed as of March 28, 2025 05:00 PM</h1>
                            <button className="bg-[#2dad5c] text-white w-[145px] h-[42px] rounded-md" onClick={() => router.push("/Results")}>Check Results</button>
                        </div>
                    ) : (
                        <>
                            {giveSelectContestOption && (
                                <div className="flex justify-around items-center mx-auto text-center my-8 w-[100vw] mx-auto p-6 bg-white shadow-md rounded-md">
                                    <Image 
                                        src="https://res.cloudinary.com/dchbfnlct/image/upload/v1711188558/fit_size_fit_xmjifp.png" 
                                        className="h-[60px] w-[60px]" 
                                        height={100} 
                                        width={100} 
                                        alt="img" 
                                    />
                                    <button 
                                        className="bg-[#2dad5c] text-white w-[145px] h-[45px] rounded-md p-1 h-[48px] text-sm" 
                                        onClick={handlePrevContClick}
                                    >
                                        முந்திய நாள் கேள்விகள்
                                    </button>
                                </div>
                            )}

                            {shouldDisplayTodayForm && (
                                <div className="flex flex-col items-center text-center my-8 w-[100vw] mx-auto p-6 bg-gray-100 shadow-md rounded-md">
                                    <h1 className="text-2xl font-semibold mb-4">Today&#39;s Contest</h1>
                                    <h1 className="text-2xl text-[#2dad5c] font-semibold mb-4">contest Day: {form.contestDay}</h1>
                                    <form onSubmit={handleSubmit}>
                                        <h1>{form.date}</h1>
                                        <iframe 
                                            src={form.formLink} 
                                            width="900" 
                                            className="w-[90vw] min-h-[900px] max-h-[2200px]" 
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

export default Contest2;