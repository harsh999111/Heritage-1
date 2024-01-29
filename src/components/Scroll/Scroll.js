import React from 'react';
import Image from 'next/image';
import Tajmhal from '../../../public/icons/tajmahal.png';
import hawamahal from '../../../public/icons/hawa-mahal.png';
import jultaminara from '../../../public/icons/jhulta-minar.png';
import gateway from '../../../public/icons/gateway-of-india.png';
import hawamhel from '../../../public/icons/hawa-mahal.png';
import Marquee from 'react-fast-marquee';

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
          <Marquee>
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={250} // Set the width as needed
                height={80} // Set the height as needed
                className='' // Add any additional class if needed
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
