"use client"
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Image from "next/image";

const Popup = ({ place, onClose }) => {
  const [pollutionData, setPollutionData] = useState(null);

  useEffect(() => {
    let API = "ded4470d81f0801f968f48fbca58ff7c";
    const fetchPollutionData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid=${API}`
        );
        setPollutionData(response.data);
      } catch (error) {
        console.error("Error fetching pollution data:", error);
        setPollutionData(null);
      }
    };

    fetchPollutionData();

    // Cleanup function to cancel any ongoing API requests
    return () => {
      // Cancel the ongoing request (if any)
    };
  }, [place.lat, place.lon]);

  return (
    <section className="h-full w-full fixed  lg:top-1  md:top-14 top-0 left-0 flex justify-center items-center bg-yellow-100 bg-opacity-50 overflow-y-auto 2xl:top-0">
      <div className="popup-content bg-yellow-100 p-4 h-full w-full pb-10 overflow-y-auto pt-20 md:pt-14 lg:pt-20  md:overflow-y-auto md:pb-20 lg:pb-20">
        <span className="close text-2xl pb-6 pt-1 cursor-pointer" onClick={onClose}>
          <AiOutlineClose />
        </span>
        <div className="pt-10">
          <div className="lg:grid lg:grid-cols-2 gap-x-10">
            <div className="">
              <Image
                src={place.image}
                alt="hello"
                className="h-56 rounded-lg w-full  md:h-[350px] lg:h-[450px] 2xl:h-[550px] 2xl:w-full "
              />
            </div>
            <div>
              <div>
                <h2 className="font-montagu-slab text-amber-950 font-bold text-2xl md:text-xl py-4">
                  {place.title}
                </h2>
              </div>
              <div className="flex flex-col">
                <span className="font-montagu-slab text-amber-950 font-bold text-xl md:text-xl">
                  About:
                </span>
                <p>{place.description}</p>
              </div>
              <div className="font-montagu-slab text-amber-950 text-xl font-bold">
                Heritage Awareness:
              </div>
              <p>{place.awarenessEfforts}</p>
              <div className="font-montagu-slab text-amber-950 text-xl font-bold">
                Environmental Pollution:
              </div>
              <p>{place.pollution}</p>
              {/* Display weather information */}
              {pollutionData && (
                <div className="font-montagu-slab text-amber-950 text-xl font-bold">
                  Weather Information:
                  <p>
                    Air quality index: {pollutionData.list[0].main.aqi}
                  </p>
                  <p>
                    PM2.5: {pollutionData.list[0].components.pm2_5} µg/m³
                  </p>
                  <p>
                    PM10: {pollutionData.list[0].components.pm10} µg/m³
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-amber-950 pt-20 grid justify-center text-3xl font-montagu-slab items-center text-center md:text-4xl">
          <h1>Explore More Heritage </h1>
        </div>
      </div>
    </section>
  );
};

export default Popup;
