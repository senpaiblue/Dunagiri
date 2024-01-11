import React from "react";
import reset from "../../public/assets/reset.svg"
import awake from "../../public/assets/awake.svg"
import transition from "../../public/assets/transition.svg"
import Image from "next/image";

const Features = () => {
  return (
    <section class="text-gray-600 body-font bg-[#F2EFE9]">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-bold title-font text-[#324D2E] mb-4">
            Reconnect with your mind and body
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Time and global warming notwithstanding, the stories frame Dunagiri,
            a place lush with natural and mythological lore
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-[#324D2E] inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#5C8D54] text-green-500 mb-5 flex-shrink-0 hover:shadow-custom-green">
            <Image 
              src={awake}
              alt='reset'
              width={32}
              height={32}
              />
            </div>
            <div class="flex-grow">
              <h2 class="text-[#3A3322] text-lg title-font font-medium mb-3">
                Spiritual Awakening
              </h2>
              <p class="leading-relaxed text-base">
                Experience profound shifts as you reconnect to the divine
                through daily meditation and yoga practices.
              </p>
              <a class="mt-3 text-[#324D2E] font-semibold inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#5C8D54] text-green-500 mb-5 flex-shrink-0 hover:shadow-custom-green">
            <Image 
              src={transition}
              alt='reset'
              width={32}
              height={32}
              />
            </div>
            <div class="flex-grow">
              <h2 class="text-[#3A3322] text-lg title-font font-medium mb-3">
                Life transition
              </h2>
              <p class="leading-relaxed text-base">
                Gain tools to move through periods of unease with purpose and
                clarity.
              </p>
              <a class="mt-3 text-[#324D2E] font-semibold inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#5C8D54] text-green-500 mb-5 flex-shrink-0 hover:shadow-custom-green">
              <Image 
              src={reset}
              alt='reset'
              width={32}
              height={32}
              /> 
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Mind-Body Reset
              </h2>
              <p class="leading-relaxed text-base">
                Explore personalized wellness for optimal mind and body
                vitality.
              </p>
              <a class="mt-3 text-[#324D2E] font-semibold inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button class="flex mx-auto mt-16 text-white bg-[#324D2E] border-0 py-2 px-8 focus:outline-none hover:bg-[#5C8D54] rounded text-lg">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Features;
