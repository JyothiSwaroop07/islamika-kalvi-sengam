
import Image from "next/image";
import Link from "next/link";
import PeopleSection from "../PeopleSection/PeopleSection";
import { FaWhatsapp, FaInstagram, FaFacebook, FaGmail } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";

const Footer = () => {

    return (
        <div className="bg-[#222222] text-white py-6  flex flex-col justify-center items-center pl-6 mt-[-1px]  max-sm:pt-14">

            

            <div className="container flex flex-col items-center p-6 text-gray-200 md:p-10 md:flex-row md:justify-between md:items-start">
                <div className="mb-6 w-[300px] md:w-[300px] md:mr-8 text-center md:text-left md:flex flex-col ">
                    <div className="w-full md:w-[80%] mx-auto flex justify-center md:justify-start md:mx-0">
                        <Image
                            width={63}
                            height={55}
                            src='https://res.cloudinary.com/dchbfnlct/image/upload/v1711042228/sdmslogo_pfcwpm.jpg'
                            alt="Main Logo"
                            className="logo"
                        />
                    </div>
                    <p className="mt-3">Islamiya Kalvi sangam, 11/69, PSM Memorial Hall, Vallal seethakathi salai, kilakarai Ramnathapuram, 623517</p>
                    <div className="flex items-center justify-center gap-5 mt-3 logos md:justify-start">
                    <a href="https://wa.me/9976346062" target="_blank" >
                    <button className="mx-2 p-2 bg-[#2dad5c] text-white rounded-full cursor-pointer">
                        <FaWhatsapp />
                    </button>
                    </a>
                    <a href="mailto:islamiakalvisangam@gmail.com" target="_blank" >
                    <button className="mx-2 p-2 bg-[#2dad5c] text-white rounded-full cursor-pointer ">
                        <CiMail />
                    </button>
                    </a>
                    <a href="https://www.instagram.com/islamiya_kalvi_sangam" target="_blank" >
                    <button  className="mx-2 p-2 bg-[#2dad5c] text-white rounded-full cursor-pointer">
                        <FaInstagram />
                    </button>
                    </a> 
                    <a href="https://www.facebook.com/islamiya.kalvi.sangam" target="_blank" >
                    <button  className="mx-2 p-2 bg-[#2dad5c] text-white rounded-full cursor-pointer">
                        <FaFacebook />
                    </button>
                 </a>
                </div>
                </div>

                <div className="mb-6 text-center md:w-1/4 md:text-left">
                    <h1 className="mb-2 text-2xl">Contact No</h1>
                    <p><a href="#">9976346062</a></p>
                    <p><a href="#">9092437232</a></p>
                    <p><Link href="/Jobs">6382273264</Link></p>
                    {/* <p><Link href="/About">About Us</Link></p> */}
                </div>

                <div className="mb-6 text-center md:w-1/4 md:text-left">
                    <h1 className="mb-2 text-2xl">Know About Us</h1>
                    <p><Link href="https://youtube.com/@islamiyakalvisangam" target="_blank">Youtube</Link></p>
                    <p><Link href="">islamiyakalvisangam@gmail.com</Link></p>
                    <p><Link href="https://www.google.com/search?q=islamiya+kalvi+sangam" target="_blank">Google search</Link></p>
                </div>


                {/* <div className="text-center md:w-1/4 md:text-left">
                    <h1 className="mb-2 text-2xl">Other</h1>
                    <p><a href="#">Terms of Service</a></p>
                     <Link href='/Policy'><p>Privacy Policy</p></Link>
                    <p><a href="#">Cookie Policy</a></p>

                </div> */}
            </div>

            <div className="mt-8 text-xs text-center">
                <p>Name/ Copyright 20234/ All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
