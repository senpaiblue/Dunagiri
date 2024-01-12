import Image from "next/image";
import React from "react";
import s1 from "../../public/assets/S1.svg";
import s2 from "../../public/assets/S2.svg";
import s3 from "../../public/assets/S3.svg";
import s4 from "../../public/assets/S4.svg";
import b1 from "../../public/assets/B1.svg";
import b2 from "../../public/assets/B2.svg";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font bg-[#F2EFE9]">
      <div className="container px-5 lg:px-16 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-[#324D2E] lg:w-1/3 lg:mb-0 mb-4">
            Mahavatar Babaji's Cave{" "}
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            The cave, shrouded in divine lore, is a destination for seekers of
            truth and enlightenment from around the world.It's said that within
            the cave's silent embrace, the veil between the physical and the
            ethereal grows thin, allowing for deep meditation and communion with
            the divine.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={s1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={s2}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={b1}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={b2}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={s3}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={s4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
