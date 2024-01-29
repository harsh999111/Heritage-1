import Image from 'next/image';
import React from 'react';
import Heritage from '../../../public/icons/Layer_1.png';
import Marquee from 'react-fast-marquee';
import Hawa from '../../../public/icons/hawa-mahal.png';
import IndiaGate from '../../../public/icons/india-gate.png';
import Taj from '../../../public/icons/tajmahal.png';
import Jhulta from '../../../public/icons/jhulta-minar.png';
import Gateway from '../../../public/icons/gateway-of-india.png';
import Link from 'next/link';

const images = [
  { src: Hawa, alt: 'hawa' },
  { src: IndiaGate, alt: 'India Gate' },
  { src: Taj, alt: 'Taj Mahal' },
  { src: Jhulta, alt: 'Jhulta Minar' },
  { src: Gateway, alt: 'Gateway of India' },
  { src: Hawa, alt: 'hawa' },
  { src: IndiaGate, alt: 'India Gate' },
  { src: Taj, alt: 'Taj Mahal' },
  { src: Jhulta, alt: 'Jhulta Minar' },
  { src: Gateway, alt: 'Gateway of India' },
];

const Home = () => {
  return (
    <section className='max-h-screen w-full'>

      <div className='flex justify-end pt-3'>
        <Link href='/home'>Next&gt;&gt;</Link>
      </div>

      <div className='grid items-center'>
        <div className='grid justify-center items-center py-10 pt-32'>
          <Image src={Heritage} alt='Heritage' className='grid h-40 w-40 md:h-52 md:w-52' />
        </div>

        <div>
          <h3 className='text-center text-[#6F5643] py-5 text-xl md:text-2xl'>
            Welcome To Heritage Website
          </h3>
        </div>

        <div className='py-10 pt-16'>
          <Marquee speed={100}>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className='w-40 h-40 grid md:h-60 md:w-60'
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Home;
