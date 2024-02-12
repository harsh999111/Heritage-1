"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Navbar  from '../Navbar/navbar';
import Scroll from '../../components/GujaratHeritage/gujaratheritage'
import Footer from '../../components/Footer/footer'
import { FaMapMarkerAlt } from "react-icons/fa";
import Sidi from '../../../public/Gujarat/sidisayad.jpeg';
import Chapaner from '../../../public/Gujarat/Chapaner.webp';
import  Rani from '../../../public/Gujarat/Rani-Ki-Vav.jpg'
import Lothal from '../../../public/Gujarat/Lothal-.jpg'
import Sun from '../../../public/Gujarat/Sun.jpg'
import Adalaj from '../../../public/Gujarat/Adalaj.jpg'

// ... (previous imports)

const Gujarat = () => {
  const [text, setText] = useState('Welcome To The Gujarat Heritage');
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const colors = [
    'red',
    'blue',
    'green',
    'purple',
    'teal',
    'brown',
    'magenta',
    'indigo',
    'violet',
    'gray',
    'olive',
    'maroon',
  ]; 

  const Data = [
    {
      id: 1,
      image: Sidi, 
      location: 'Sidi Sayad in Ahmedabad',
      about: 'Popularly known as Sidi Sayed ni Jali, the mosque was built in the period 1572-73 AD by Sidi Sayed.',
      pollution: 'Sidi Sayeed Mosque, Ahmedabad is a marvelous piece of architecture and is one of the most maintained & old sustainable buildings in the country.',
      awareness: 'Integrated sustainability features within heritage initiatives, encompassing cultural preservation, plastic-free practices, waste reduction, and community engagement. Visitors are encouraged to actively participate in the conservation efforts.',
    },
    {
      id: 2,
      image: Chapaner,
      location: "Chapaner Panchmahal district in Gujarat",
      about: 'Pavagadh became the capital of the Chauhan Rajputs around 1300, but in 1484 was taken by the Gujarat Sultan Mahmud Begada, after a 20-month siege; the Rajputs committed jauhar (ritual mass suicide) in the face of defeat',
      pollution: 'Preserving the pristine environment of Champaner, promoting eco-friendly practices to ensure a pollution-free heritage.',
      awareness: 'Promoting awareness about the historical significance of Champaner and fostering a sense of responsibility for its conservation. Visitors are encouraged to be mindful of their impact and contribute to the preservation of this heritage.',
    },
    {
      id: 3,
      image: Rani,
      location: 'Rani Ki Vav',
      about: 'Discover the intricate stepwell architecture of Rani Ki Vav, a UNESCO World Heritage Site, showcasing the rich cultural heritage of Gujarat.',
      pollution: 'Preserving the surroundings of Rani Ki Vav, implementing eco-friendly measures to combat pollution and maintain the site’s pristine beauty.',
      awareness: 'Creating awareness about the historical significance of Rani Ki Vav, fostering a sense of responsibility for its conservation among visitors. Tourists are invited to learn about sustainable practices and support the ongoing efforts to protect this heritage site.',
    },
    {
      id: 4,
      image: Lothal,
      location: 'Lothal',
      about: 'Explore the archaeological wonders of Lothal, an ancient Indus Valley Civilization site, offering insights into India’s rich past.',
      pollution: 'Implementing pollution control measures at Lothal to protect the archaeological artifacts and maintain the historical integrity of the site.',
      awareness: 'Educating visitors about the historical importance of Lothal and promoting responsible tourism practices for the site’s preservation. Travelers are encouraged to respect the archaeological significance and contribute to the conservation of Lothal.',
    },
    {
      id: 5,
      image: Sun,
      location: 'Sun Temple Modhera',
      about: 'Experience the grandeur of Sun Temple Modhera, an architectural marvel dedicated to the Sun God, showcasing Gujarat’s cultural brilliance.',
      pollution: 'Ensuring a pollution-free environment around Sun Temple Modhera, emphasizing sustainable practices for the conservation of the heritage site.',
      awareness: 'Conducting awareness programs to highlight the cultural significance of Sun Temple Modhera and encouraging active participation in its preservation. Visitors are invited to engage in eco-friendly practices and support the ongoing efforts to maintain the site’s heritage.',
    },
    {
      id: 6,
      image: Adalaj,
      location: 'Adalaj ni Vav',
      about: 'Visit the stunning Adalaj ni Vav, an intricately designed stepwell that reflects the architectural excellence of Gujarat’s historical era.',
      pollution: 'Implementing pollution control measures around Adalaj ni Vav to safeguard its structure and maintain a clean and pollution-free environment.',
      awareness: 'Promoting awareness about the historical and architectural significance of Adalaj ni Vav, encouraging responsible behavior for its conservation. Visitors are encouraged to respect the heritage and actively contribute to the preservation of Adalaj ni Vav.',
    },
  ];

  useEffect(() => {
    const changeTextAndColor = () => {
      setText('Welcome To The Gujarat Heritage');
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };
    const intervalId = setInterval(changeTextAndColor, 1000);
    return () => clearInterval(intervalId);
  }, [colors.length]); 

  return (
      <section className='h-full w-full bg-yellow-200 grid'>
        <div className='md:px-10  lg:px-16 2xl:px-20 grid pt-14'>
          <div className='flex justify-center items-center py-5 text-lg  2xl:text-3xl'>
            <p style={{ color: colors[currentColorIndex] }} className='px-3 rounded-lg py-2 font-bold'>{text}</p>
          </div>
          {Data.map((place) => (
            <div key={place.id} className=''>
            <div className='md:grid md:grid-cols-2 md:text-xl '>

              <div className='px-3 grid justify-center '>
                <Image src={place.image} alt={`Image ${place.id}`}  className='rounded-2xl grid h-56 w-96 md:h-60 md:w-[450px] 2xl:h-96 2xl:w-[750px]' />
              </div>
              <div className='px-4 pt-3 flex space-x-4  justify-between md:justify-center md:mt-20'>
                <div className=''>
                  <span className='text-lg font-bold md:text-xl '>{place.location}</span>
                </div>
                <div className=''>
                  <a href={`https://www.google.com/maps/@${place.location}`} target='_blank' rel='noopener noreferrer' className=''>
                    <FaMapMarkerAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className='  '>

              <div className='px-4 pt-2'>
                <span className='text-lg 2xl:text-2xl 2xl:font-bold'>About:</span>
                <p className='text-sm 2xl:text-lg'>{place.about}</p>
              </div>
              <div className='px-4 pt-2 '>
                <span className='text-lg 2xl:text-2xl 2xl:font-bold'>Pollution:</span>
                <p className='text-sm 2xl:text-lg'>{place.pollution}</p>
              </div>
              <div className='px-4 pt-2 '>
                <span className='text-lg 2xl:text-2xl 2xl:font-bold'>Awareness:</span>
                <p className='text-sm 2xl:text-lg'>{place.awareness}</p>
              </div>
              <div className='flex justify-end px-4 pt-2 pb-2 2xl:text-2xl 2xl:font-bold'>
                <span className='text-lg 2xl:text-2xl'> Guide</span>
              </div>
            </div>
            </div>
          ))}
          <div>
            <h2 className='text-center font-bold text-xl 2xl:text-3xl'>More Heritage</h2>
          </div>
          <div>
            <Scroll/>
          </div>
        </div>
      </section>
  );
};

export default Gujarat;
