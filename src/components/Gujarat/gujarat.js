"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Scroll from "../../components/GujaratHeritage/gujaratheritage";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Data } from "../../utils/Gujarat";

const Gujarat = () => {
  const [text, setText] = useState("Welcome To The Gujarat Heritage");
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const colors = [
    "red",
    "blue",
    "green",
    "purple",
    "teal",
    "brown",
    "magenta",
    "indigo",
    "violet",
    "gray",
    "olive",
    "maroon",
  ];

  useEffect(() => {
    const changeTextAndColor = () => {
      setText("Welcome To The Gujarat Heritage");
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };
    const intervalId = setInterval(changeTextAndColor, 1000);
    return () => clearInterval(intervalId);
  }, [colors.length]);

  return (
    <section className="h-full w-full bg-yellow-200 grid">
      <div className="md:px-10  lg:px-16 2xl:px-20 grid pt-14">
        <div className="flex justify-center items-center py-5 text-lg  2xl:text-3xl">
          <p
            style={{ color: colors[currentColorIndex] }}
            className="px-3 rounded-lg py-2 font-bold"
          >
            {text}
          </p>
        </div>
        {Data.map((place) => (
          <div key={place.id} className="">
            <div className="md:grid md:grid-cols-2 md:text-xl ">
              <div className="px-3 grid justify-center ">
                <Image
                  src={place.image}
                  alt={`Image ${place.id}`}
                  className="rounded-2xl grid h-56 w-96 md:h-60 md:w-[450px] 2xl:h-96 2xl:w-[750px]"
                />
              </div>
              <div className="px-4 pt-3 flex space-x-4  justify-between md:justify-center md:mt-20">
                <div className="">
                  <span className="text-lg font-bold md:text-xl ">
                    {place.location}
                  </span>
                </div>
                <div className="">
                  <a
                    href={`https://www.google.com/maps/@${place.location}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <FaMapMarkerAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="px-4 pt-2">
                <span className="text-lg 2xl:text-2xl 2xl:font-bold">
                  About:
                </span>
                <p className="text-sm 2xl:text-lg">{place.about}</p>
              </div>
              <div className="px-4 pt-2 ">
                <span className="text-lg 2xl:text-2xl 2xl:font-bold">
                  Pollution:
                </span>
                <p className="text-sm 2xl:text-lg">{place.pollution}</p>
              </div>
              <div className="px-4 pt-2 ">
                <span className="text-lg 2xl:text-2xl 2xl:font-bold">
                  Awareness:
                </span>
                <p className="text-sm 2xl:text-lg">{place.awareness}</p>
              </div>
              <div className="flex justify-end px-4 pt-2 pb-2 2xl:text-2xl 2xl:font-bold">
                <span className="text-lg 2xl:text-2xl cursor-pointer"> Guide</span>
              </div>
            </div>
          </div>
        ))}
        <div>
          <h2 className="text-center font-bold text-xl 2xl:text-3xl">
            More Heritage
          </h2>
        </div>
        <div>
          <Scroll />
        </div>
      </div>
    </section>
  );
};

export default Gujarat;
