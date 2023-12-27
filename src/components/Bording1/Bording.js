import React from 'react';
import Taj from "../../../public/icons/tajmahlbording.png";
import Taj1 from "../../../public/icons/tajmahalbording1.png";
import Image from 'next/image';
import Link from 'next/link';


const Boarding = () => {
  return (
    <body className='bg-yellow-100'>

    <div className='bg-yellow-100 h-full w-full mr-0 p-0 pb-10 sm:pb-7 md:pb-5 2xl:pb-10'>
      <div className="main-boarding">
        <p className='pt-2 flex justify-center text-2xl text-red-400 sm:pt-4 md:pt-4 lg:text-3xl lg:pt-2  xl:pt-6 ' style={{ fontFamily: 'Gabriela' }}>Taj Mahal </p>
        <div className="main-1 pt-8 pb-0 sm:pt-0 sm:pb-0  md:pt-0 md:pb-0 lg:px-16 xl:px-[40px]  xl:pt-5">
          <div className="img-2 flex justify-center">
            <Image src={Taj} alt='Taj' className='md:h-[360px] lg:h-[310px] lg:w-[700px] xl:h-[450px]  xl:w-[1300px] 2xl:h-[400px] 2xl:w-[900px]' />
          </div>
          <div className="flex justify-center"   style={{ background: 'linear-gradient(180deg, #B6E8D9 1.81%, rgba(182, 232, 217, 0.00) 33.68%)' }}>
            <Image src={Taj1}  alt='Taj1' className='lg:h-[310px] lg:w-[700px] xl:h-[400px] xl:w-[1300px] 2xl:h-[250px] 2xl:w-[900px]'/>
          </div>
        </div>
        <div className="main-2">
          <p style={{ fontFamily: 'Gabriela' }} className='px-2  flex justify-center pt-4 text-2xl  sm:pt-3 md:pt-0 lg:text-4xl lg:pt-3 xl:text-5xl '>About Us</p>
          <p style={{ fontFamily: 'Gabriela' }} className='text-lg flex justify-center pt-5 px-2 md:pt-2 lg:text-xl lg:px-10 xl:text-3xl 2xl:px-[80px]'>The Heritage was created with the aim of promoting cultural heritage tourism and providing a platform for people to connect with their roots.</p>
        </div>
        <div className="btn pt-[22px]  px-3 sm:pt-4 md:pt-2 lg:pt-5  lg:px-9 xl:text-2xl xl:pt-9 2xl:pt-3 2xl:px-[70px] flex  space-x-44 sm:space-x-[430px] md:space-x-[550px] lg:space-x-[785px] 2xl:space-x-[1330px]">
          <Link href="/Bording" className=''>&lt;&lt; Previous</Link>
          <Link href="/Bording2" className=' sm:-right-[450px] md:-right-[600px] lg:-right-[800px] xl:-right-[1030px] 2xl:-right-[1400px]'>Next &gt;&gt;</Link>
        </div>
      </div>
    </div>
    </body>
  );
}

export default Boarding;

