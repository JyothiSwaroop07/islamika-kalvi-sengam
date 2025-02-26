import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Image } from "next/image";

const Ramadan = () => {

      // URL to share
  const shareURL = '';

  // Function to open sharing link
  const shareOnSocialMedia = (platform) => {
    let socialMediaURL = '';

    switch (platform) {
      case 'whatsapp':
        socialMediaURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this Ramadan Contribution: ${shareURL}`)}`;
        break;
      case 'instagram':
        // Replace 'your-instagram-image-url' with the actual image URL you want to share
        socialMediaURL = `https://www.instagram.com/?url=${shareURL}&media=your-instagram-image-url`;
        break;
      case 'facebook':
        socialMediaURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`;
        break;
      default:
        break;
    }

    // Open the sharing link in a new tab
    window.open(socialMediaURL, '_blank');
  };

  return (
    <section className="bg-gradient-to-r bg-white py-16 px-4 lg:px-16 text-[#696855] mx-4 lg:mx-8 shadow-inner shadow-xl rounded-xl">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-[#2dad5c] font-extrabold mb-6">Ramadan Contribution</h2>
        <p className="text-xl mb-8">
          THE MONTH OF BLESSINGS. RAMADHAN 2025.
        </p>
        <p className="text-xl mb-8">
          Assalamu&#39;alaikum Warahmatullahi Wabarakatuh, Dear brothers and sisters,
        </p>

            <div className='flex flex-col md:flex-row justify-center items-center m-8 mb-12'>
                {/* <Image src="https://muslimwelfaretrust.org/wp-content/uploads/2021/01/ramadhan_food.png.webp" width={300} height={300} alt="" className='h-[300px] w-[300px] mb-5 mx-5' /> */}
                <p className="text-xl mb-8 font-semibold">
                Can you join us in making a difference? We are raising money for Food Parcels and every Ramadhan your donations help Muslim Welfare Trust share food with families who regularly go hungry.
                </p>
                
            </div>
        
        <p className="text-md lg:text-xl mb-4 lg:mb-8 font-bold text-[#2dad5c]">
          GIVE HOPE THROUGH YOUR SADAQAH AND ZAKAT
        </p>
        <p className="text-md lg:text-xl mb-4 lg:mb-8 italic">
          Ramadhan is an auspicious month of spiritual joy and blessings. It is also a key month in which we should go even further to help those most in need.
        </p>
        <p className="text-md lg:text-xl mb-4 lg:mb-8 italic">
          We know that these times are tough on everyone, however, Al-Fadl ibn Sahl said: “There is a blessing in the calamity that the wise man should not ignore, for it erases sins, gives one the opportunity to attain the reward for patience, dispels negligence, reminds one of the blessings at the time of health, calls one to repent and encourages one to give charity. Allah has told us that Sadaqah protects us from calamity and sickness. He even tells us that giving charity increases your sustenance! Allah is indeed the most generous.
        </p>
        <p className="text-md lg:text-xl mb-4 lg:mb-8 italic">
          So, let’s give more than ever this Ramadhan.
        </p>
        <p className="text-md lg:text-xl mb-4 lg:mb-8 italic">
          THIS RAMADHAN, YOU CAN HELP US REACH MORE COMMUNITIES WITH CLEAN WATER, FOOD, SHELTER, EDUCATION, HEALTH AND SPIRITUAL WELLBEING.
        </p>
        <p className="text-md lg:text-xl mb-4 lg:mb-8 italic">
          And spend out of what We have given to you before death overtakes one of you and he says, “My Lord, would you not give me respite to a near term so that I should pay Sadaqah (alms) and become one of the righteous?” Surah Al-Munafiqun Verse 10
        </p>
        <p className="text-md lg:text-xl mb-4 lg:mb-8 italic">
          O believers! Donate from what We have provided for you before the arrival of a Day when there will be no bargaining, friendship or intercession. Those who disbelieve are ˹truly˺ the wrongdoers. Al-Baqarah 2:254
        </p>
        <p className="text-md lg:text-xl mb-4 lg:mb-8 font-bold">
          Please share this post with those who believed in the Mercy of Allah. Jazāk Allāhu Khayran.
        </p>
      </div>


      <div className="flex justify-center mt-16">
        <button onClick={() => shareOnSocialMedia('whatsapp')} className="mx-2 p-2 bg-[#25D366] text-white rounded-full">
          <FaWhatsapp />
        </button>
        <button onClick={() => shareOnSocialMedia('instagram')} className="mx-2 p-2 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-full">
          <FaInstagram />
        </button>
        <button onClick={() => shareOnSocialMedia('facebook')} className="mx-2 p-2 bg-[#1877F2] text-white rounded-full">
          <FaFacebook />
        </button>
      </div> 
      <p className='text-center text-[#696855] mt-4'>Share</p>

    </section>
  );
};

export default Ramadan;
