import React from 'react';
import Heritage from "../../../public/icons/Group.png";
import Heritage1 from "../../../public/icons/Group _1.png";
import Image from 'next/image';
import Link from 'next/link';



const Boarding = () => {
  return (
    <body className='bg-yellow-100'>

    <div className='bg-yellow-100 h-full w-full mr-0 p-0 pb-10 sm:pb-7 md:pb-5 2xl:pb-10'>
      <div className="main-boarding">
        <p className='pt-2 flex justify-center text-2xl text-red-400 sm:pt-6 md:pt-4 lg:text-4xl lg:pt-1  xl:pt-6 ' style={{ fontFamily: 'Gabriela' }}>Heritage </p>
        <div className="main-1 pt-8 pb-0 sm:pt-1 sm:pb-0  md:pt-0 md:pb-0 lg:px-16 xl:px-[40px]  xl:pt-5">
          <div className="flex justify-center">
            <Image src={Heritage} alt='Heritage'  className='md:h-[350px] lg:h-[320px] lg:w-[900px] xl:h-[450px]  xl:w-[1300px] 2xl:h-[400px] 2xl:w-[1100px]' />
          </div>
          <div className="flex justify-center"   style={{ background: 'linear-gradient(180deg, #B6E8D9 1.81%, rgba(182, 232, 217, 0.00) 33.68%)' }}>
            <Image src={Heritage1} alt='Heritage1' className='lg:h-[340px] lg:w-[900px] xl:h-[400px] xl:w-[1300px] 2xl:h-[250px] 2xl:w-[1100px]'/>
          </div>
        </div>
        <div className="main-2">
          <p style={{ fontFamily: 'Gabriela' }} className='px-2   pt-6 text-2xl flex justify-center sm:pt-3 md:pt-0 lg:text-4xl lg:pt-0 xl:text-5xl '>Get Started</p>
          <p style={{ fontFamily: 'Gabriela' }} className='text-lg  flex justify-center pt-5 px-2 md:pt-2 lg:text-xl lg:px-6 xl:text-3xl 2xl:px-8'>Let Get Started! Now that youve learned a little more about us, let get started on your journey through cultural heritage.</p>
        </div>
        <div className="btn pt-[26px]  flex  space-x-44 px-2  sm:pt-6 md:pt-3 lg:pt-5  lg:px-10 xl:text-2xl xl:pt-9 2xl:pt-14 2xl:px-[90px] md:space-x-[550px] lg:space-x-[780px] 2xl:space-x-[1290px] ">
          <Link href="/Bording1" className=' '>&lt;&lt; Previous</Link>
          <Link href="/home" className=''>Start &gt;&gt;</Link>
        </div>
      </div>
    </div>
    </body>
  );
}


export default Boarding;

