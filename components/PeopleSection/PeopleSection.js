import React from "react";

import PeopleCard from "../PeopleCard/PeopleCard";
import { useRouter } from "next/router";

const Trustees = [
    {
        title: 'Ahamed Fazeel Akram bin Haja Alawudeen',
        des: 'Chairman and Founder',
    },
    {
        title: 'Mohammed Thowheed Jamali bin Seyed  Ibrahim',
        des: 'Co Chairman and Executive Director',
    },
    {
        title: 'Asfak Meeran bin Sahabdeen',
        des: 'Board of Trustees',
    },
    {
        title: 'Hameed Salman Khan bin Zulfikar Ali bin Hasan Ibrahim Mohideen',
        des: 'Board of Trustees',
    },
    {
        title: 'Kader Mohideen bin Maghdoom Nisthar ',
        des: 'Board of Trustees',
    },

]

const Directors = [
    {
        title: 'Mohammed Thowheed Jamali bin Seyed  Ibrahim ',
        des: 'President',
    },
    {
        title: 'Ahamed Fazeel Akram bin Haja Alawudeen ',
        des: 'Vice President',
    },
    {
        title: 'Ajmal Khan bin Haja Alawudeen ',
        des: 'Secretary',
    },
    {
        title: 'Seyed Althaf',
        des: 'Vice Secretary',
    },
    {
        title: 'Hameed Salman Khan bin Mohideen Adumai',
        des: 'Treasurer',
    },
    {
        title: 'Mohideen Adumai ',
        des: 'Board Member',
    },
    {
        title: 'Abdul Raseek ',
        des: 'Board Member',
    },
    {
        title: 'Seyed Abuthahir ',
        des: 'Board Member',
    },
    
]

const islamicAdvisory = [
    {
        title: 'Aalim Nainar Nadavi ',
        des: 'President, Al Madrasathul Muhammadiya Arabic College, Udankudi.',
    },
    {
        title: 'Aalim Abdul Majeed Mahlari',
        des: 'Princpal, Ayeesha Siddiqa Womens College, Kayalpattinam. ',
    },
    {
        title: 'Mufti Umar Sherif Qashimi   ',
        des: 'Founder, Dharul Huda',
    },
    {
        title: 'Aalim Hasan Ali Umari ',
        des: 'President, School, Karaikal',
    },
    {
        title: 'Usthad M.F Ali ',
        des: 'Founder, Kugaivaasigal Foundation',
    },
    {
        title: 'Aalim Mujibur Rahman Faazi ',
        des: 'Member, Kuwait Dawa Centre, Kuwait',
    },
]

const PeopleSection = () => {

    const router = useRouter();


    return (
    <section id="people">
        <div className="container mx-auto">
            <div className="flex justify-center items-center">
            <button className="bg-[#2dad5c] text-white w-[145px] h-[42px] rounded-md" onClick={() => router.push("/Home")}>Go Back</button>
            </div>
        <h1 className="text-center font-bold text-[#2dad5c] text-3xl my-12">Board Of Trustees</h1>
        <div className="flex flex-row justify-center items-center flex-wrap">
            {Trustees.map((each, idx) => (
                <PeopleCard title={each.title} des = {each.des} key={idx}/>
            ))}
        </div>
        </div>

        <div className="container mx-auto">
        <h1 className="text-center font-bold text-[#2dad5c] text-3xl my-12">Board Of Directors</h1>
        <div className="flex flex-row justify-center items-center flex-wrap">
            {Directors.map((each, idx) => (
                <PeopleCard title={each.title} des = {each.des} key={idx}/>
            ))}
        </div>
        </div>

        <div className="container mx-auto">
        <h1 className="text-center font-bold text-[#2dad5c] text-3xl my-12">Board Of Islamic Advisory</h1>
        <div className="flex flex-row justify-center items-center flex-wrap">
            {islamicAdvisory.map((each, idx) => (
                <PeopleCard title={each.title} des = {each.des} key={idx}/>
            ))}
        </div>
        </div>
    </section>
    )
}

export default PeopleSection;