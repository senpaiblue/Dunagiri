import React from "react";
import yoga from "../../public/assets/Yoga.svg";
import Image from "next/image";

const Cta = () => {
  return (
    <section class="text-gray-600 body-font bg-[#F2EFE9]">
      <div className="container mx-auto flex px-5 lg:px-16 py-5 items-center justify-center flex-col lg:flex-row">
        <Image 
        src={yoga}
        alt="Yoga"
        className="sm:mb-6 mb-6 items-center"/>
        <div class="lg:w-2/3 flex flex-col sm:flex-col items-center sm:items-center lg:items-start mx-auto">
          <h1 class="flex-grow sm:pb-4 text-2xl font-bold title-font text-[#324D2E]">
            Retreat For Your Soul
          </h1>
          <h1 class="flex-grow sm:pb-4 text-lg font-normal text-center text-gray-900">
            Glittering peaks and vivid landscapes create an environment that can
            calm the most unsettled of hearts.
          </h1>
        </div>
          <button class="flex-shrink-0 text-white bg-[#324D2E] border-0 py-2 px-8 focus:outline-none hover:bg-[#5C8D54] rounded text-lg mt-10 sm:mt-0">
            Contact Us
          </button>
      </div>
    </section>
  );
};

export default Cta;
