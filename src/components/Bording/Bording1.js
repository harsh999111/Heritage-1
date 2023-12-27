import React from "react";
import Board_1 from "../../../public/icons/Frame_1.png";
import Board_2 from "../../../public/icons/Frame-1.png";
import Image from "next/image";
import Link from "next/link";


const Boarding = () => {
  return (
    <body className="bg-yellow-100">

    <div className="bg-yellow-100 h-screen w-full mr-0 p-0 pb-8 sm:pb-10 md:pb-14 lg:pb-2 2xl:pb-12 overflow-hidden ">
      <div className="main-boarding">
        <p
          className="pt-2 flex justify-center  text-2xl text-red-400 lg:text-4xl "
          style={{ fontFamily: "Gabriela" }}
        >
          Red Fort{" "}
        </p>
        <div className="main-1   pt-20 pb-20 sm:pt-14 md:pt-20 md:pb-20  lg:pt-14 lg:pb-10 2xl:px-24 2xl:pt-2 2xl:pb-5" >
          <div className=" px-0 flex justify-center">
            <Image src={Board_1}   alt="Board_1" className="2xl:h-[360px]" />
          </div>
          <div
            className="img-2 flex justify-center"
            style={{
              background:
                "linear-gradient(180deg, #B6E8D9 1.81%, rgba(182, 232, 217, 0.00) 33.68%)",
            }}
          >
            <Image src={Board_2} alt="Board_2" className="2xl:h-[300px]" />
          </div>
        </div>
        <div className="main-2">
          <p
            style={{ fontFamily: "Gabriela" }}
            className="px-2 flex justify-center pt-4 text-2xl sm:text-center sm:pt-0 md:text-center md:text-3xl  md:pt-0 lg:text-4xl xl:text-5xl 2xl:pt-0 " 
          >
            Welcome
          </p>
          <p
            style={{ fontFamily: "Gabriela" }}
            className="text-lg flex justify-center pt-6  px-2 sm:px-7 sm:pl-8 md:text-xl md:px-5 md:pl-8 lg:px-16 lg:text-xl xl:text-3xl xl:px-12 2xl:px-32" 
          >
            Our app is a platform for discovering and exploring the rich
            cultural heritage of different regions around India.
          </p>
        </div>
        <div className="pt-14 px-12 2xl:px-20 sm:pt-[165px] md:pt-[70px] lg:pt-4 xl:pt-28 2xl:pt-8 flex flex-row-reverse  ">
          <Link href="/Bording1" className="  xl:text-2xl ">Next &gt;&gt;</Link>
        </div>
      </div>
    </div>
    </body>
  );
};

export default Boarding;

