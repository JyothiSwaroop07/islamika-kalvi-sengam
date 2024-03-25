
import Image from "next/image";
import Link from "next/link";
import PeopleSection from "../PeopleSection/PeopleSection";

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
                    <p className="mt-3">3, 4th floor, Siddharth Bandodkar Bhavan, Panji, Goa 403001</p>
                    <div className="flex items-center justify-center gap-5 mt-3 logos md:justify-start">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <Image src=''  width={26} height={26} alt="Facebook Logo" className="logo" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <Image src='' width={26} height={26}  alt="Instagram Logo" className="logo" />
  </a>
  <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
    <Image src='' width={26} height={26} alt="Group Logo" className="logo" />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <Image src='' width={26} height={26}  alt="LinkedIn Logo" className="logo" />
  </a>
</div>
                </div>

                <div className="mb-6 text-center md:w-1/4 md:text-left">
                    <h1 className="mb-2 text-2xl">Company</h1>
                    <p><a href="#">Pricing</a></p>
                    <p><a href="#">Blogs</a></p>
                    <p><Link href="/Jobs">Jobs</Link></p>
                    <p><Link href="/About">About Us</Link></p>
                </div>

                <div className="mb-6 text-center md:w-1/4 md:text-left">
                    <h1 className="mb-2 text-2xl">Support</h1>
                    <p><Link href="/FAQ">FAQ</Link></p>
                </div>


                <div className="text-center md:w-1/4 md:text-left">
                    <h1 className="mb-2 text-2xl">Other</h1>
                    <p><a href="#">Terms of Service</a></p>
                     <Link href='/Policy'><p>Privacy Policy</p></Link>
                    <p><a href="#">Cookie Policy</a></p>

                </div>
            </div>

            <div className="mt-8 text-xs text-center">
                <p>Name/ Copyright 20234/ All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
