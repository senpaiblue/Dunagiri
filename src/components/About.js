import Image from "next/image";
import React from "react";
import about from "../../public/assets/About.svg";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 lg:px-16 py-24 mx-auto lg:items-center lg:w-full lg:justify-between flex flex-wrap">
        <div className="lg:w-[40%] sm:w-1/3 w-full rounded-lg overflow-hidden mb-6 sm:mt-0">
          <Image
            className="object-cover object-center w-full h-full"
            src={about}
            alt="about"
          />
        </div>
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-bold text-3xl mb-2 text-[#324D2E]">
              A Sanctuary for the Soul
            </h1>
            <div className="leading-relaxed">
            Embrace tranquility and spiritual renewal at Dunagiri Retreat,
              nestled in Uttarakhand&apos;s Dunagiri Mountains. Since 2005, this
              eco-spiritual haven offers more than just yoga; it&apos;s a path to
              self-discovery. Near Mahavatar Babaji&apos;s Cave and the revered
              Dunagiri Temple, immerse in the transformative Kriya Yoga
              teachings. Our eco-friendly retreat, surrounded by the Himalayas,
              provides serene meditation spaces and a deep nature connection.
              Join us for a profound journey towards inner peace and
              self-realization.
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-semibold text-4xl text-[#324D2E] text-shadow">30%</h2>
            <p className="leading-relaxed">Anxiety reduced </p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-semibold text-4xl text-[#324D2E] text-shadow">26%</h2>
            <p className="leading-relaxed">Sleep quality improved</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-semibold text-4xl text-[#324D2E] text-shadow">16%</h2>
            <p className="leading-relaxed">Self-compassion rose</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
