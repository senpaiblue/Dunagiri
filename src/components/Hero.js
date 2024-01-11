import Image from "next/image";
import React from "react";
import HeroImg from "../../public/assets/Hero.svg";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font lg:mx-16">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#324D2E]">
            Dunagiri Retreat
          </h1>
          <p className="mb-8 text-medium w-[75%]">
            Nestled Amidst the Majestic Himalayas, our retreat offers a
            transformative experience like no other. Discover Your Spiritual
            Haven as you immerse yourself in the tranquil surroundings,
            reconnect with your inner self, and embark on a journey of
            self-discovery and enlightenment.
          </p>
          <div className="flex justify-center">
            <button className="items-center text-white bg-[#324D2E] border-0 py-2 px-6 focus:outline-none hover:bg-[#E4DFD2] hover:text-[#324D2E] rounded text-sm">
              Get Started
            </button>
            <button className="ml-4 inline-flex text-gray-700 border-2 border-[#324D2E]  py-2 px-6  hover:bg-[#324D2E] hover:text-white  rounded text-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            alt="hero"
            src={HeroImg}
            className="object-cover object-center rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
