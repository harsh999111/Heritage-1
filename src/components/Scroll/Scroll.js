import React from 'react';
import Image from 'next/image';
import './Scroll.css'
import Tajmhal from '../../../public/icons/tajmahal.png';
import hawamahal from '../../../public/icons/hawa-mahal.png';
import jultaminara from '../../../public/icons/jhulta-minar.png';
import gateway from '../../../public/icons/gateway-of-india.png';
import hawamhel from '../../../public/icons/hawa-mahal.png';

const logos = [
  { src: Tajmhal, alt: 'Taj Mahal' },
  { src: hawamahal, alt: 'Hawa Mahal' },
  { src: jultaminara, alt: 'Jhulta Minar' },
  { src: gateway, alt: 'Gateway of India' },
  { src: hawamhel, alt: 'Hawa Mahal' },
];

const Scroll = () => {
  return (
    <div className="scroll-container h-full w-full">
      <div className="logos">
        <div className="logos-slide">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <Image
                src={logo.src}
                alt={logo.alt}
                // className={logo.className}
                // width={250} // Set the width as needed
                // height={80} // Set the height as needed
                className=''
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
