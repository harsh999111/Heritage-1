"use client"
import React from 'react';
import Image from 'next/image';
import I1 from '../../../public/image/i-1.webp';
import I2 from '../../../public/image/i-2.png'; // Add more images as needed
import TajMahalImage from '../../../public/image/i-3.jpeg';
import RankiVavImage from '../../../public/image/Rani.jpg';
import AdalajNiVavImage from '../../../public/image/Adalaj-ni-Vav.jpg';
import MahabatMaqbaraImage from '../../../public/image/Maha.jpg';
import IdarFortTumbNilImage from '../../../public/image/idar-Fort-Thumbnail.jpg';
import SidiSayyadDholaviraImage from '../../../public/image/sidisayad.jpeg';
import SunTempleImage from '../../../public/image/e1.jpeg';
import ChapanerImage from '../../../public/image/Champaner-1.jpeg';
import LalkiloImage from '../../../public/image/Redkila.jpeg'

const placesData = [
  {
    id: 1,
    image: I1, 
    title: 'Hampi with Chariot',
    years: '600',
    description:
      'Hampi, with its iconic Stone Chariot, is a UNESCO World Heritage Site in Karnataka, India. The ruins of the ancient city of Vijayanagara, which was the capital of the Vijayanagara Empire, showcase a rich history dating back around 600 years. ',
    location:'Nimbapura, Karnataka '
  } ,
  {
    id: 2,
    image: I2,
    title: 'Thirumalai Nayakar Mahal',
    years: '387',
    description: 'Under the care of the Tamil Nadu Archaeological Department, the Thirumalai Nayakar Mahal is a fine example of splendid architecture and rich history.',
    location:'Madurai Nayaka dynasty '
  },
  {
    id: 3,
    image: TajMahalImage,
    title: 'Taj Mahal',
    years: '369',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.',
    location:' Agra, Uttar Pradesh'
  },
  {
    id: 4,
    image: RankiVavImage,
    title: 'Ranki Vav',
    years: '1000',
    description: 'Ranki Vav is a stepwell in the town of Patan in Gujarat, India.',
    location:'Nimbapura, Karnataka '
  },
  {
    id: 5,
    image: AdalajNiVavImage,
    title: 'Adalaj Ni Vav',
    years: '500',
    description: 'Adalaj Ni Vav is a five-story stepwell located in the village of Adalaj, near Ahmedabad in Gandhinagar district, Gujarat.',
    location:'Adalaj, Gujarat '
  },
  {
    id: 6,
    image: MahabatMaqbaraImage,
    title: 'Mahabat Maqbara',
    years: '200',
    description: 'Mahabat Maqbara is a palace-mausoleum in Junagadh, India.',
    location:'junagadh, Gujarat,'
  },
  {
    id: 7,
    image: IdarFortTumbNilImage,
    title: 'Idar Fort and Tumb Nil',
    years: '600',
    description: 'Idar Fort and Tumb Nil are historical structures in Idar, Gujarat.',
    location:'Nimbapura, Karnataka '
  },
  {
    id: 8,
    image: SidiSayyadDholaviraImage,
    title: 'Sidi Sayyad Mosque and Dholavira',
    years: '400',
    description: 'Sidi Sayyad Mosque is a mosque in Ahmedabad, and Dholavira is an archaeological site in the Rann of Kachchh, India.',
    location:'Ahmedabad, Gujarat'
  },
  {
    id: 9,
    image: SunTempleImage,
    title: 'Sun Temple',
    years: '800',
    description: 'Sun Temple is a Hindu temple dedicated to the solar deity Surya, located at Modhera in Gujarat, India.',
    location:'Modhera, Gujarat '
  },
  {
    id: 10,
    image: ChapanerImage,
    title: 'Champaner-Pavagadh Archaeological Park',
    years: '900',
    description: 'Champaner-Pavagadh Archaeological Park is a UNESCO World Heritage Site located in Panchmahal district, Gujarat.',
    location:'Champaner, Gujarat '
  },
  {
    id: 11,
    image: LalkiloImage,
    title: 'Red Fort',
    years: '375 ',
    description: 'Lalkilo is a beautiful place with a rich history and cultural significance. Visit Lalkilo to explore its unique charm and experience the local culture.',
    location:'Lal Qila, Chandni Chowk, New Delhi'
  },
];


const Place = () => {
  return (
    <section className='h-full w-full relative  pb-10'>
      {placesData.map((place) => (
        <div key={place.id} className='bg-yellow-100 px-3 pb-4 py-12 h-full w-full  md:px-12 md:grid md:w-full md:space-x-4 lg:grid  lg:overflow-auto lg:grid-cols-[390px,1fr,1fr,1fr] lg:pt-10 2xl:grid-cols-4  2xl:pt-10 2xl:space-x-6 2xl:px-10 2xl:justify-center   2xl:static 2xl:overflow-auto'>
          <div className='pt-3 lg:pt-0 2xl:pt-0'>
            <Image src={place.image} alt={`Image ${place.id}`}  className='rounded-2xl md:h-[400px] md:w-[750px] lg:h-[250px] lg:w-[600px] 2xl:w-[650px] 2xl:h-[250px]'/>
          </div>

          <div className='text-amber-950 text-xl font-[Montagu Slab] font-bold pt-2 lg:pt-8  '>
            <p>{place.title}</p>
          </div>

          <div className='text-orange-500 text-base  pt-1 lg:pt-8'>
            <p>{`${place.years} Years Old`}</p>
            <p className='text-black'>{place.location}</p>
          </div>

          <div className='pt-2 lg:pt-6'>
            <p>{place.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Place;
