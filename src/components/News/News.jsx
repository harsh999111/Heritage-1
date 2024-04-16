"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Ambaji from '../../../public/Gujarat/Ambaji.jpg';
import Bhadra from '../../../public/Gujarat/Bhadra.jpg';
import News1 from '../../../public/image/News-1.png';
import News2 from '../../../public/image/News-2.png';
import News3 from '../../../public/image/News-3.jpeg';
import News4 from '../../../public/image/News-4.jpeg';
import News5 from '../../../public/image/News-5.jpeg';
import News6 from '../../../public/image/News-6.jpeg';
import News7 from '../../../public/image/News-7.jpeg';
import News8 from '../../../public/image/News-8.jpeg';
import News9 from '../../../public/image/News-9.jpeg';
import News10 from '../../../public/image/News-10.jpeg';


const images = [
  {
    id: 1,
    image: News1,
    des:"The News Later",
   
  },
  {
    id: 2,
    image:News2,
    des:" TCGL Tours :Dekho Amdavad & Dekho Dwarka",
 
  },
  {
    id: 3,
    image:News3,
    des:"Dekho Apna Desh People's Choice 2024",
 
  },
  {
    id: 4,
    image:News4,
    des:"Vibrant Gujarat Summit 2024"
 
  },
  {
    id: 5,
    image:News5,
    des:"Public Holiday 2023",
 
  },

  {
    id: 6,
    image:News6,
    des:"Online Permit - White Rann Dhordo",
 
  },

  {
    id: 7,
    image:News7,
    des:"World Heritage City – Ahmedabad",
 
  },
  {
    id: 8,
    image:News8,
    des:"Adventure Tourism Guidelines",
 
  },
  {
    id: 9,
    image:News9,
    des:"Dhordo Helicopter Joyride",
 
  },
  {
    id: 10,
    image:News10,
    des:"Guidelines for Tourist Guides – English"
 
  },

];

const News = () => {
  return (
  
      <section className='h-full w-full flex justify-center lg:py-32  pt-20 md:pt-28 bg-yellow-200 '>
        <div className='h-34 w-[320px] px-10 md:w-[650px] lg:w-[900px] 2xl:h-[600px] 2xl:w-[1600px]'>
        <div className='text-center font-montagu-slab text-3xl '>

            News About Heritege
        </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true} // Add loop for continuous autoplay
            autoplay={{
              delay: 2000, // Set your desired delay in milliseconds
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {/* Use map to generate SwiperSlide components with images */}
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='relative w-full h-full'>
                  <Image
                    src={image.image}
                    alt={`Slide ${index + 1}`}
                    className='h-[300px] w-full md:h-[500px] lg:h-[600px] lg:max-w-full 2xl:grid 2xl:grid-rows-1 2xl:h-[600px] bg-yellow-200 rounded-sm'
                  />
                <div className='text-center font-montagu-slab text-xl lg:text-5xl py-6'>
                  {image.des}
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  
  )
}

export default News