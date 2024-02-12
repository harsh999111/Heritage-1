"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Tajmhal from '../../../public/image/Taj.avif';
import Adalaj from '../../../public/image/Adalaj_ni_vav.jpeg';
import redFort from '../../../public/image/Redkila.jpeg';
import Rani from '../../../public/image/Rani.jpg';
import Sidi from '../../../public/image/sidisayad.jpeg';
import Sun from '../../../public/image/sun.jpg';
import { useSwiper } from 'swiper/react';
import './carousel.css';
import Image from 'next/image';

const imageUrls = [
  {
    id: 1,
    image: Tajmhal,
    name: 'Taj Mahel',
  },
  {
    id: 2,
    image: Adalaj,
    name: 'Adalaj Ni Vav',
  },
  {
    id: 3,
    image: redFort,
    name: 'Red Fort',
  },
  {
    id: 4,
    image: Rani,
    name: 'Rani-Ki-Vav',
  },
  {
    id: 5,
    image: Sidi,
    name: 'Sidi Saiyyed Mosque',
  },
  {
    id: 6,
    image: Sun,
    name: 'Modhera Sun Temple',
  },
];

export default function App() {
  return (
    <>
      <section className='h-full  w-full pt-10  2xl:pt-10'>
        <Swiper
          spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
          
        >
          {imageUrls.map((imageData, index) => (
            <SwiperSlide key={imageData.id}>
              <div className='relative w-full h-full '>
                <Image
                  src={imageData.image}
                  alt={`Slide ${index + 1}`}
                  className='h-[300px] w-full md:h-[500px] lg:h-[600px] lg:max-w-full 2xl:grid 2xl:grid-rows-1 2xl:h-[800px] '
                />
                <p className='absolute inset-0 flex items-center justify-center text-white text-lg font-bold md:text-3xl'>
                  {imageData.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
