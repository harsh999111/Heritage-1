"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import './gujarat.css';
import Ambaji from '../../../public/Gujarat/Ambaji.jpg';
import Bhadra from '../../../public/Gujarat/Bhadra.jpg';
import Bhujio from '../../../public/Gujarat/Bhujiyo.jpg';
import Brahm from '../../../public/Gujarat/Brahm.jpg';
import Idar from '../../../public/Gujarat/Idar.jpg'
import Khirasara from '../../../public/Gujarat/Khirasara.jpg'
import Lakhpat from '../../../public/Gujarat/Lakhpat.jpg'
import Lothal from '../../../public/Gujarat/Lothal-.jpg'
import Navghan from '../../../public/Gujarat/Navghan.jpg'
import Palitana from '../../../public/Gujarat/Palitana.jpg'
import Pavagadh from '../../../public/Gujarat/Pavagadh.jpeg'
import Sardar from '../../../public/Gujarat/Sardar.jpg'
import Sidhpur from '../../../public/Gujarat/Sidhpur.jpg'
import Somnath from '../../../public/Gujarat/somnath.jpg'
import Taranga from '../../../public/Gujarat/Taranga-hill.jpg'
import Tera from '../../../public/Gujarat/tera.jpg'
import Vijay from '../../../public/Gujarat/Vijay.jpg'

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const images = [
  {
    id: 1,
    image: Ambaji,
    name: "Ambaji temple",
    location: "Ambaji, Gujarat"
  },
  {
    id: 2,
    image: Bhadra,
    name: "Bhadra Fort",
    location: "Ahmedabad, India."
  },
  {
    id: 3,
    image: Bhujio,
    name: "Bhujio Kotho",
    location: "Historical landmark in Jamnagar, Gujarat"
  },
  {
    id: 4,
    image: Brahm,
    name: "Brahm Kund",
    location: "Historical place in Sihor, Gujarat"
  },
  {
    id:5,
    image:Idar,
    name:"Idar Fort",
    location:"Idariyo Garh, Idar, Gujarat "
  },
  {
    id:6,
    image:Khirasara,
    name:"Heritage Khirasara Palace",
    location:"Near Metoda G.I, D.C, Kalawad Rd, Gujarat"
  },
  {
    id: 7,
    image: Navghan,
    name: "Navghan Kilo",
    location: "Navghan, Gujarat"
  },
  {
    id: 8,
    image: Palitana,
    name: "Palitana",
    location: "Palitana, Gujarat"
  },
  {
    id: 9,
    image: Pavagadh,
    name: "Pavagadh",
    location: "Pavagadh, Gujarat"
  },
  {
    id: 10,
    image: Sardar,
    name: "Sardar Sarovar Dam",
    location: "Sardar Sarovar Dam, Gujarat"
  },
  {
    id: 11,
    image: Sidhpur,
    name: "Sidhpur",
    location: "Sidhpur, Gujarat"
  },
  {
    id: 12,
    image: Somnath,
    name: "Somnath Temple",
    location: "Somnath, Gujarat"
  },
  {
    id: 13,
    image: Taranga,
    name: "Taranga Hill",
    location: "Taranga Hill, Gujarat"
  },
  {
    id:14,
    image:Lakhpat,
    name:" Lakhpat Fort",
    location:"Lakhpat is a town in Kachchh district"
  },
  {
    id:15,
    image:Lothal,
    name:"Lothal",
    location:"Lothal, Saragwala, Gujarat"
  },{
    id:16,
    image:Vijay,
    name:"Vijay Villa Place",
    location:"Vijay Vilas Palace Rd, Mandvi Rural, Gujarat"
  },
  {
    id:17,
    image:Tera,
    name:"Tera Fort",
    location:"Fortress in Tera, Kutch, Gujarat  "
  }
]; // Add your image paths

const App = () => {
  return (
    <>
      <section className='h-full w-full flex justify-center py-3  bg-yellow-200'>
        <div className='h-60 w-[320px] px-10 md:w-[650px] lg:w-[900px] 2xl:h-96 2xl:w-[1600px]'>

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
                    className='h-[300px] w-full md:h-[500px] lg:h-[600px] lg:max-w-full 2xl:grid 2xl:grid-rows-1 2xl:h-[800px] bg-yellow-200 rounded-sm'
                  />
                  <p className='absolute inset-0 flex flex-col items-center justify-center text-black text-lg font-bold md:text-3xl'>
                    <p className='text-center'>{image.name}</p>
                    <p className='bottom-24 text-sm text-white text-center'>{image.location}</p>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default App;
