import React from 'react';
import book1 from '../images/book1.jpg';
import book2 from '../images/book2.jpg';
import book3 from '../images/book3.jpg';
import book4 from '../images/book4.jpg';
import book5 from '../images/book5.jpg';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import { useRouter } from 'next/router';

const bookPublication = () => {

    const router = useRouter();

    return (
        <div className='flex flex-col justify-center items-center px-5'>
            <div className='bg-white w-[100vw]'>
            <Navbar/>
            </div>
           

            <h1 className='text-black text-semibold text-2xl my-2'>Islamic book publications</h1>
            <h1 className='text-[#2dad5c] text-semibold text-xl my-4'>View Our Gallery here</h1>

       <div className='flex flex-wrap justify-center items-center gap-5'>
        <Image src={book1} className='' width={200} height={200} alt="books"/>
        <Image src={book2} className='' width={200} height={200} alt="books"/>
        <Image src={book3} className='' width={200} height={200} alt="books"/>
        <Image src={book4} className='' width={200} height={200} alt="books"/>
        <Image src={book5} className='' width={300} height={300} alt="books"/>
       </div>

            <button className="bg-[#2dad5c] w-[145px] h-[42px] text-white text-md rounded-md my-4" onClick={() => {router.push("/Home")}}>Go Back</button>
       </div>
    )
}

export default bookPublication;