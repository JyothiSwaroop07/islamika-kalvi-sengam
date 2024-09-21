import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { TailSpin } from 'react-loader-spinner';
import DonatePopup from '../DonatePopup/DonatePopup';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isContestsMenuOpen, setIsConstestMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    console.log("toggled");
  };

  const toggleContestDropDown = () => {
    setIsConstestMenuOpen(!isContestsMenuOpen);
    console.log("toggled dropdown");
  };

  const departmentDropDown = () => {
    setIsDepartmentOpen(!isDepartmentOpen);
    console.log("toggled dropdown");
  };

  const router = useRouter();

  const handleContestSelect = async (contestName) => {
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await router.push(`/${contestName}`);
      setIsConstestMenuOpen(false);
    } catch (error) {
      console.error('Error navigating to contest1:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDepartmentSelect = async (depName) => {
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await router.push(`/Home`);
      await router.push(`Departments/${depName}`);
      setIsDepartmentOpen(false);
    } catch (error) {
      console.log("error navigating to department", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className='flex justify-center items-center min-h-screen'>
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
        </div>
      )}

      {!isLoading && <header className="bg-white sticky top-0 z-50 relative">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-black flex flex-col items-center font-bold text-xl">
              <h1 className='text-[8px] text-black font-normal'>Sponsored By</h1>
              {/* <img src="https://res.cloudinary.com/dchbfnlct/image/upload/v1711042228/sdmslogo_pfcwpm.jpg" className='h-[55px] w-[63px]' /> */}
            </div>

            {/* Desktop menu */}
            <div className="hidden xl:flex flex-grow items-center justify-center space-x-6">
              <ul className="flex items-center space-x-4">
                <li><a href="#" className="text-black hover:text-[#2dad5c] whitespace-nowrap " onClick={() => { router.push('/Home') }}>Home</a></li>
                <li><a href="#about" className="text-black hover:text-[#2dad5c] whitespace-nowrap">About Us</a></li>
             {/*   <li><a href="#about" className="text-[#2dad5c] hover:text-[#2c5c2d] whitespace-nowrap" onClick={() => router.push("/SummerCamp")}>Summer Camp</a></li> */}

                <div className='flex flex-col items-center'>
                  <li><a href="#" className="block py-2 text-black hover:text-[#2dad5c] whitespace-nowrap rounded" onClick={() => toggleContestDropDown()}>Contests {isContestsMenuOpen ? '↑' : '↓'}</a></li>
                  {isContestsMenuOpen && (
                    <ul className="absolute top-16 ml-16 bg-white border border-gray-300 w-36">
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleContestSelect("Registration")}>Registration</a></li>
                      <li><a href="#" className="block py-2 px-4 text-[#2dad5c] hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleContestSelect("NewContest")}>அறிவோம் ஐந்து</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleContestSelect("Contest1")}>நிகழ்ச்சி - தொடர் பயான்</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleContestSelect("Contest2")}>நிகழ்ச்சி - தினம் ஒரு கேள்வி</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleContestSelect("Contest3")}>நிகழ்ச்சி - Arabic Calligraphy</a></li>
                    </ul>
                  )}
                </div>

                <li><a href="#" className="text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => router.push("/Board")}>Board Members</a></li>
               { /* <li><a href="#footer" className="text-black whitespace-nowrap" onClick={() => router.push("/Feedback")}>Feedback</a></li> */}
                <li><a href="#rejectwaqf" className="text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => router.push("/RejectWaqf")}>Reject Waqf</a></li>

                <div className='flex flex-col items-center'>
                  <li><a href="#" className="block py-2 text-black hover:text-[#2dad5c] whitespace-nowrap rounded" onClick={() => departmentDropDown()}>Departments {isDepartmentOpen ? '↑' : '↓'}</a></li>
                  {isDepartmentOpen && (
                    <ul className="absolute top-16 ml-16 bg-white border border-gray-300 w-50">
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("healthandwelfare")}>Health and Welfare</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("educationdevelopment")}>Education Development</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("socialandpublicwelfare")}>Social and Public Welfare</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("bookpublication")}>Islamic Book and Publication</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("makthab")}>Makthab Education</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("it")}>Information Technology</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("law")}>Department of Law</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("womenempowerment")}>Women Empowerment</a></li>
                    </ul>
                  )}
                </div>

              </ul>
            </div>

            {/* Donate and Announcements buttons for desktop */}
            <div className="hidden lg:flex items-center space-x-4 ml-auto">
              <button className="bg-[#2dad5c] h-[40px] w-[125px] border-1 rounded-md text-white" onClick={() => router.push("/Announcements")}>Announcements</button>
              <button className="bg-[#2dad5c] h-[40px] w-[125px] border-1 rounded-md text-white" onClick={togglePopup}>Donate</button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                {menuVisible ? (
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuVisible && (
            <div className="mobile-menu">
              <ul className="space-y-2">
                <li><a href="#" className="block py-2 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => { router.push('/Home') }}>Home</a></li>
                <li><a href="#about" className="block py-2 text-black hover:text-[#2dad5c] whitespace-nowrap">About Us</a></li>
               {/* <li><a href="#about" className="block py-2 text-[#2dad5c] hover:text-[#2c5c2d] whitespace-nowrap" onClick={() => router.push("/SummerCamp")}>Summer Camp</a></li> */}

                <div className='flex flex-col'>
                  <li><a href="#" className="block py-2 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => toggleContestDropDown()}>Contests {isContestsMenuOpen ? '↑' : '↓'}</a></li>
                  {isContestsMenuOpen && (
                    <ul className="bg-white border border-gray-300">
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleContestSelect("Registration")}>Registration</a></li>
                      <li><a href="#" className="block py-2 px-4 text-[#2dad5c] hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleContestSelect("NewContest")}>அறிவோம் ஐந்து</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleContestSelect("Contest1")}>நிகழ்ச்சி - தொடர் பயான்</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleContestSelect("Contest2")}>நிகழ்ச்சி - தினம் ஒரு கேள்வி</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleContestSelect("Contest3")}>நிகழ்ச்சி - Arabic Calligraphy</a></li>
                    </ul>
                  )}
                </div>

                <li><a href="#" className="block py-2 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => router.push("/Board")}>Board Members</a></li>
              {/*  <li><a href="#footer" className="block py-2 text-black whitespace-nowrap" onClick={() => router.push("/Feedback")}>Feedback</a></li> */}
                <li><a href="#rejectwaqf" className="text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => router.push("/RejectWaqf")}>Reject Waqf</a></li>

                <div className='flex flex-col'>
                  <li><a href="#" className="block py-2 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => departmentDropDown()}>Departments {isDepartmentOpen ? '↑' : '↓'}</a></li>
                  {isDepartmentOpen && (
                    <ul className="bg-white border border-gray-300">
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("healthandwelfare")}>Health and Welfare</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("educationdevelopment")}>Education Development</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("socialandpublicwelfare")}>Social and Public Welfare</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("bookpublication")}>Islamic Book and Publication</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("makthab")}>Makthab Education</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("it")}>Information Technology</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("law")}>Department of Law</a></li>
                      <li><a href="#" className="block py-2 px-4 text-black hover:text-[#2dad5c] whitespace-nowrap" onClick={() => handleDepartmentSelect("womenempowerment")}>Women Empowerment</a></li>
                    </ul>
                  )}
                </div>

                {/* Buttons for mobile */}
                <div className="flex flex-col mt-4">
                  <button className="bg-[#2dad5c] h-[40px] w-full border-1 rounded-md text-white mb-2" onClick={() => router.push("/Announcements")}>Announcements</button>
                  <button className="bg-[#2dad5c] h-[40px] w-full border-1 rounded-md text-white" onClick={togglePopup}>Donate</button>
                </div>
              </ul>
            </div>
          )}
        </nav>
      </header>}

      {/* Donate Popup */}
      {showPopup && <DonatePopup togglePopup={togglePopup} />}
    </>
  );
};

export default Navbar;
