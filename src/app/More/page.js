import Image from 'next/image';
import React from 'react';
import I1 from '../../../public/image/I-1.webp';

const More = ({ place }) => {


  return (
    <section className='h-full w-full bg-yellow-100'>
      <div>
        <Image src={I1} alt='I1' />
      </div>
      <div>
        <div>
          <div className="font-montagu-slab text-amber-950 text-xl">
            About:
          </div>
          <div>hello</div>
        </div>
        <div>
          <div className="font-montagu-slab text-amber-950 text-xl">
            Heritage Awareness:
          </div>
          <div>
            Preserving our rich heritage is crucial for future generations. It
            not only reflects our history and culture but also provides a
            sense of identity and belonging. Awareness campaigns about the
            importance of heritage sites, their historical significance, and
            the need for conservation can contribute to their protection.
          </div>
        </div>
        <div>
          <div className="font-montagu-slab text-amber-950 text-xl">
            Environmental Concerns:
          </div>
          <div>
            Pollution poses a significant threat to our heritage. Air pollution,
            water pollution, and climate change can degrade historical
            structures and artifacts. It is essential to raise awareness about
            responsible tourism, waste disposal, and eco-friendly practices to
            ensure the preservation of our cultural heritage for future
            generations.
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;
