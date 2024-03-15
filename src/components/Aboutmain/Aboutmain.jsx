import Image from "next/image";
import React from "react";
import About1 from "../../../public/image/about1.jpeg";

const Aboutmain = () => {
  return (
    <section className="h-full w-full bg-yellow-200 py-14">
      <div>
        <Image
          src={About1}
          alt="about"
          className="w-screen  h-40 md:h-72 lg:h-full"
        />
      </div>
      <div className="py-10 p-4">
        <p className="text-center md:text-3xl text-xl pb-10">
          Welcome to our website
        </p>
        <div className="py-4 grid gap-y-10">
        <div>

          <span className="md:text-3xl text-xl font-bold font-montagu-slab pb-10">
            About Heritage Side Awareness :
          </span>

          <div>
            <p className="md:text-lg">
              Our heritage place holds significant historical and cultural
              value. Its important to respect and preserve its integrity. Please
              refrain from littering, vandalism, or any actions that could
              damage the site. Your cooperation ensures future generations can
              also enjoy this rich heritage.
            </p>
          </div>
        </div>
        <div>

          <span className="md:text-3xl text-xl font-bold font-montagu-slab pb-10 ">
            Guide:
          </span>

          <div>
            <p className="md:text-lg">
              In the guidance section, we provide clear instructions for
              visitors on how to conduct themselves respectfully during their
              visit. We outline guidelines such as following signage and staff
              instructions, staying on designated paths, and refraining from
              touching delicate structures. Proper waste disposal and
              maintaining minimal noise levels are also emphasized.
              Additionally, we offer guidance on photography etiquette and
              encourage visitors to seek assistance from knowledgeable staff
              members if needed. By adhering to these guidelines, visitors can
              help us protect and preserve our heritage for future generations
              to enjoy.
            </p>
          </div>

          <div className="font-montagu-slab font-bold  pt-10 text-base text-center md:text-xl lg:text-3xl">Our Website Provide Propr Guid And Instructions About Heritage Side</div>
        </div>
    <div className="text-center font-bold  text-xl md:text-3xl"><span>Thank You</span></div>
        </div>
      </div>
    </section>
  );
};

export default Aboutmain;
