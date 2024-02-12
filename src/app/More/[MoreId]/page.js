// Import necessary dependencies
import React from "react";
import Image from "next/image";
import pollutionImage from "../../../../public/image/I-1.webp"; // Import the pollution image

// Define the MoreDetail component
const MoreDetail = ( place ) => {

  return (
    <div className="p-4">
      <h1 className="font-montagu-slab text-amber-950 font-bold text-2xl">
        {place.title}
      </h1>
      <Image
        src={place.image}
        alt={`Image ${place.id}`}
        className="w-72 h-48 md:h-40 rounded-xl"
      />
      <div className="font-montagu-slab text-amber-950 text-xl">About:</div>
      <p>{place.description}</p>
      <div className="font-montagu-slab text-amber-950 text-xl">
        Heritage Awareness:
      </div>
      <p>
        Preserving our rich heritage is crucial for future generations. It not
        only reflects our history and culture but also provides a sense of
        identity and belonging. Awareness campaigns about the importance of
        heritage sites, their historical significance, and the need for
        conservation can contribute to their protection.
      </p>
      <div className="font-montagu-slab text-amber-950 text-xl">
        Environmental Concerns:
      </div>
      <Image
        src={pollutionImage}
        alt="Pollution"
        className="w-full h-auto rounded-xl"
      />
      <p>
        Pollution poses a significant threat to our heritage. Air pollution,
        water pollution, and climate change can degrade historical structures
        and artifacts. It is essential to raise awareness about responsible
        tourism, waste disposal, and eco-friendly practices to ensure the
        preservation of our cultural heritage for future generations.
      </p>
    </div>
  );
};

// Export the MoreDetail component
export default MoreDetail;
