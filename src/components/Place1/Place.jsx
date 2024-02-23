  "use client";
  import React, { useState } from "react";
  import Image from "next/image";
  import Popup from "../Popup/Popup"
  import axios from "axios"; 
  import { FaMapMarkerAlt } from "react-icons/fa";
  import { placesData } from "../../utils/Place"

  const Place = () => {
    const [openDetails, setOpenDetails] = useState({});
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const [pollutionData, setPollutionData] = useState(null); // State to store pollution data

    const toggleDetails = async (placeId, lat, lon) => {
      setSelectedPlaceId(placeId);
      setOpenDetails((prevDetails) => ({
        ...prevDetails,
        [placeId]: !prevDetails[placeId],
      }));

      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid={API key}`);
        setPollutionData(response.data);
      } catch (error) {
        console.error("Error fetching pollution data:", error);
        setPollutionData(null);
      }
    };

    const handleClosePopup = () => {
      setOpenDetails((prevDetails) => ({
        ...prevDetails,
        [selectedPlaceId]: false,
      }));
      setSelectedPlaceId(null);
      setPollutionData(null);
    };

    return (
      <section className="h-full w-full bg-yellow-100 p-4 md:p-2 ">
        <div className="main grid ">
          <div className=" md:gap-3 lg:grid lg:grid-cols-2 ">
            {placesData.map((place) => (
              <div key={place.id} className="pb-4  sm:p-4 p-2 md:p-6 lg:p-8">
                <div className="">
                  <Image
                    src={place.image}
                    alt={`Image ${place.id}`}
                    className="grid w-full h-[210px] sm:h-[260px] md:h-[350px] lg:h-80 2xl:h-96 rounded-xl"
                  />
                </div>
                <div className=" ">
                  <div className=" flex  justify-between ">
                    <div>
                      <div>
                        <h1 className="font-montagu-slab text-amber-950 font-bold text-2xl md:text-xl">
                          {place.title}
                        </h1>
                      </div>
                      <div>
                        <span className="text-amber-500 font-bold font-montagu-slab">
                          {`${place.years} Years Old`}
                        </span>
                      </div>
                      <div>
                        <span className="text-amber-700 font-montagu-slab font-bold">
                          {place.location}
                        </span>
                      </div>
                    </div>
                    <div className="pt-4 text-2xl">
                <a
                  href={`https://www.google.com/maps/@${place.lat},${place.lon},15z?entry=ttu`}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FaMapMarkerAlt />
                </a>
              </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex text-end justify-end ">
                    <button
                      className="font-montagu-slab text-lg text-amber-950 "
                      onClick={() => toggleDetails(place.id)}
                    >
                      More...
                    </button>
                  </div>
                  {openDetails[place.id] && (
                    <Popup place={place} onClose={handleClosePopup} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Place;