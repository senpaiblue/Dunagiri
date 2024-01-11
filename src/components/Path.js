import Image from "next/image";
import React from "react";
import workshop from "../../public/assets/workshops.svg";
import self from "../../public/assets/self.svg";

const Path = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -mb-10 text-center">
          <div class="sm:w-1/2 mb-10 px-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <Image
                alt="workshop"
                class="object-cover object-center h-full w-full"
                src={workshop}
              />
            </div>
            <h2 class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3">
              Guided Workshop & Retreats
            </h2>
            <p class="leading-relaxed text-base">
              Our Guided Retreats provide an immersive experience that promotes
              growth, connection, and transformation. Join like-minded
              individuals in guided sessions focused on self-discovery and
              collaborative learning. Led by expert facilitators, these
              workshops blend structured activities with free time, fostering
              introspection and skill development. Ideal for those seeking
              personal growth, these retreats offer a supportive space for
              learning, ensuring you leave feeling enriched and empowered.
            </p>
            <button class="flex mx-auto mt-6 text-white bg-[#324D2E] border-0 py-2 px-5 focus:outline-none hover:bg-[#5C8D54] rounded">
              Group Retreats
            </button>
          </div>
          <div class="sm:w-1/2 mb-10 px-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <Image
                alt="self"
                class="object-cover object-center h-full w-full"
                src={self}
              />
            </div>
            <h2 class="title-font text-2xl font-semibold text-gray-900 mt-6 mb-3">
              Self-Guided Explorations
            </h2>
            <p class="leading-relaxed text-base">
              Self-Guided Explorations at our retreat provide a uniquely
              flexible and personal experience for each guest. Whether you're
              seeking to celebrate life's joys, process grief, delve into life's
              big questions, or navigate life transitions, our program is
              designed to support you at your own pace. In this self-directed
              journey, you are invited to honor your individual needs and
              rhythms, finding solace in the act of self-care and personal
              growth.The period you spend with us is an opportunity to tune into
              your desires.
            </p>
            <button class="flex mx-auto mt-6 text-white bg-[#324D2E] border-0 py-2 px-5 focus:outline-none hover:bg-[#5C8D54] rounded">
              Self Guided
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Path;
