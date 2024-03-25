import React from "react";
import Image from "next/image";

import img1 from '../images/img1 (11).jpg'
import img2 from '../images/img3 (1).jpg'
import img3 from '../images/img1 (7).jpg'
import img4 from '../images/img1 (9).jpg'
import img5 from '../images/img1 (10).jpg'
import img6 from '../images/img4 (2).jpg'
import img7 from '../images/img1 (2).jpg'
import img8 from '../images/img1 (3).jpg'
import img9 from '../images/img1 (4).jpg'

import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";

const educationdevelopment = () => {
    const router = useRouter();
    return (
        <div>

            <div className="w-[100vw] bg-white">
                <Navbar />
            </div>

            <div className="flex flex-col gap-6 justify-center p-4 items-center">
                <h1 className="text-black text-2xl text-semibold">Department of Education Development</h1>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <h1>It was established in 2013 to work for the betterment of the minorities giving top 
                            priority to education in its objectives. Since its inception, the AIE is on the march 
                            with absolute dedication to bring about social and educational change in the present 
                            condition of the community by awarding scholarships to needy students in pursuit of 
                            higher professional education. The main objectives of the Trust are as under:
                    </h1>
                    </div>
                    <div className="flex flex-col mt-5 md:flex-row justify-content-center items-center ">
                        <Image src={img1} width={150} height={50} className="w-[80vw] h-[240px] mb-3 mr-5 md:w-[40vw]" alt="img"/>
                        
                        <ul className="list-disc text-[#2dad5c] mt-2 font-600 text-lg w-[80vw] md:w-[40vw] mx-8">
                             <li>work for the advancement of education, science, technology and management particularly in the realm of higher education. <br/> </li>
                             <li>To grant Loan Scholarships to deserving students for pursuing undergraduate, postgraduate studies and research in the fields of Medicine, Engineering, Science and Technology, Management, Commerce and Humanities.</li>
                        </ul>
                    </div>

                    <div className="flex flex-col mt-5 md:flex-row justify-content-center items-center ">
                        <Image src={img2} width={150} height={50} className="w-[80vw] h-[240px] mb-3 mr-5 md:w-[40vw] md:order-2" alt="img"/>
                        
                        <ul className="list-disc text-[#2dad5c] mt-2 font-600 text-lg w-[80vw] md:w-[40vw] mx-8 md:order-1">
                             <li> To run and manage schemes of financial assistance, to organize coaching and remedial classes, special education centerscentres for improving the opportunities for students of minority communities.
                                    Since its inception AIE has undertaken various programs covering scholarships, Career Counseling Programme etc.,
                            </li>
                        </ul>
                    </div>

                    <h1 className="text-center my-6 text-[#2dad5c] text-2xl text-bold">What We Do</h1>
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                                Minorities Scholarship Camps
                        </div>
                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                                MCollaboration with Institutions to Reduction of Fee for needful students

                        </div>
                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                        Provide Recommendation Letters for Fee Reduction

                        </div>
                        <div className="flex justify-center items-center text-cemter text-black bg-white border-1.5 border-[#2dad5c] w-[200px] h-[150px] p-3 text-lg font-bold shadow-sm shadow-[#2dad5c]">
                        AIE Scholarship Schemes 

                        </div>
                    </div>

                    <h1 className="text-center my-6 text-[#2dad5c] text-2xl text-bold">Our Gallery</h1>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <Image src={img3} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img4} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img5} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img6} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img7} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img8} height={100} width={100} className="w-[200px] h-[250px]" />
                        <Image src={img9} height={100} width={100} className="w-[200px] h-[250px]" />
                        
                        
                    </div>
                    <button className="bg-[#2dad5c] w-[145px] h-[42px] text-white text-md rounded-md my-4" onClick={() => {router.push("/Home")}}>Go Back</button>
                </div>
            </div>

        </div>
    )
}

export default educationdevelopment;