import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";


const heritagePollutionAndAwareness = [
  {
    heritagePlace: "Hampi with Chariot",
    pollution: "Despite its UNESCO World Heritage status, Hampi faces challenges such as littering, graffiti, and air pollution due to nearby industrial activities.",
    awarenessEfforts: "Local authorities have initiated awareness campaigns to educate visitors about the importance of preserving Hampi's cultural heritage. Community clean-up drives and conservation projects are also being organized."
  },
  {
    heritagePlace: "Thirumalai Nayakar Mahal",
    pollution: "Thirumalai Nayakar Mahal is facing degradation due to environmental pollution and inadequate maintenance, resulting in deterioration of its architectural features.",
    awarenessEfforts: "Collaborative efforts between the Tamil Nadu Archaeological Department and local communities aim to raise awareness about the significance of Thirumalai Nayakar Mahal and implement restoration projects to combat pollution."
  },
  {
    heritagePlace: "Taj Mahal",
    pollution: "Taj Mahal is threatened by air pollution, acid rain, and urban development activities, leading to discoloration of its marble façade and structural damage.",
    awarenessEfforts: "Various conservation initiatives by governmental and non-governmental organizations focus on reducing pollution levels around the Taj Mahal and promoting responsible tourism practices to preserve its beauty for future generations."
  },
  {
    heritagePlace: "Ranki Vav",
    pollution: "Ranki Vav is facing issues such as water pollution and structural deterioration due to lack of maintenance and urban encroachment.",
    awarenessEfforts: "Local authorities and heritage conservation groups are working together to implement measures to improve water quality and preserve the structural integrity of Ranki Vav. Awareness campaigns are also conducted to educate the public about the importance of preserving this historical stepwell."
  },
  {
    heritagePlace: "Adalaj Ni Vav",
    pollution: "Adalaj Ni Vav is threatened by water pollution, vandalism, and encroachment, which pose significant risks to its architectural integrity and historical significance.",
    awarenessEfforts: "Community-led initiatives, supported by government agencies, focus on cleaning and restoring Adalaj Ni Vav, along with raising awareness among visitors and local residents about the importance of protecting this cultural heritage site."
  },
  {
    heritagePlace: "Mahabat Maqbara",
    pollution: "Mahabat Maqbara is facing degradation due to environmental pollution, lack of maintenance, and urban development activities in the surrounding area.",
    awarenessEfforts: "Efforts are underway to raise awareness about the cultural significance of Mahabat Maqbara and implement conservation measures to mitigate pollution and preserve its architectural heritage. Local communities are actively involved in restoration projects and awareness campaigns."
  },
  {
    heritagePlace: "Idar Fort and Tumb Nil",
    pollution: "Idar Fort and Tumb Nil are threatened by environmental pollution, neglect, and encroachment, which pose challenges to their preservation and cultural significance.",
    awarenessEfforts: "Collaborative efforts between heritage conservation organizations, local communities, and government authorities aim to address pollution issues, restore deteriorating structures, and raise awareness about the historical importance of Idar Fort and Tumb Nil."
  },
  {
    heritagePlace: "Sidi Sayyad Mosque and Dholavira",
    pollution: "Sidi Sayyad Mosque is affected by environmental pollution, while Dholavira faces challenges such as waterlogging, erosion, and encroachment due to its location in the Rann of Kachchh.",
    awarenessEfforts: "Conservation projects supported by governmental and non-governmental organizations focus on mitigating pollution around Sidi Sayyad Mosque and implementing measures to protect and preserve the archaeological site of Dholavira. Educational programs and community engagement activities are conducted to raise awareness about the importance of these heritage sites."
  },
  {
    heritagePlace: "Sun Temple",
    pollution: "Sun Temple is threatened by environmental pollution, weathering, and inadequate maintenance, which pose risks to its architectural integrity and cultural significance.",
    awarenessEfforts: "Heritage conservation groups, in collaboration with local authorities, are implementing measures to reduce pollution levels around Sun Temple and undertake restoration work to preserve its structural and artistic elements. Educational initiatives are also undertaken to promote responsible tourism and raise awareness about the importance of protecting this historical monument."
  },
  {
    heritagePlace: "Champaner-Pavagadh Archaeological Park",
    pollution: "Champaner-Pavagadh Archaeological Park faces threats from environmental pollution, vegetation overgrowth, and encroachment, leading to degradation of its archaeological and architectural features.",
    awarenessEfforts: "Governmental and non-governmental organizations, along with local communities, are engaged in conservation efforts to address pollution issues, restore historical structures, and promote sustainable tourism practices within Champaner-Pavagadh Archaeological Park. Awareness campaigns are conducted to highlight the significance of the site and encourage public participation in its preservation."
  },
  {
    heritagePlace: "Red Fort",
    pollution: "Red Fort is affected by air pollution, weathering, and overcrowding, which pose risks to its structural integrity and cultural value.",
    awarenessEfforts: "Heritage conservation authorities, in collaboration with local communities and tourism agencies, are implementing measures to mitigate pollution levels around Red Fort and manage visitor influx to minimize impact on the monument. Educational programs and guided tours are organized to raise awareness about the historical significance of Red Fort and promote responsible tourism practices among visitors."
  }
];




const Popup = ({ place, onClose }) => {
  return (
    <section className="h-full w-full fixed  lg:top-1  md:top-14 top-0 left-0 flex justify-center items-center bg-yellow-100 bg-opacity-50 overflow-y-auto 2xl:top-0">
      <div className="popup-content bg-yellow-100 p-4 h-full w-full pb-10 overflow-y-auto pt-20 md:pt-14 lg:pt-20  md:overflow-y-auto md:pb-20 lg:pb-20">
        <span className="close text-2xl pb-6 pt-1" onClick={onClose}>
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
          <p>
           {place.awarenessEfforts}
          </p>
          <div className="font-montagu-slab text-amber-950 text-xl font-bold">
            Environmental Pollution:
          </div>
          <p>
        {place.pollution}
          </p>
          <div>
          </div>
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
