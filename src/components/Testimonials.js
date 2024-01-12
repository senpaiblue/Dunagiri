import Image from "next/image";
import React from "react";
import t1 from "../../public/assets/t1.svg";
import t2 from "../../public/assets/t2.svg";
import t3 from "../../public/assets/t3.svg";

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 lg:px-16 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-[#324D2E]">Testimonials</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">What people have to say about us .</p>
      </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={t1}
              />
              <p className="leading-relaxed">
                I traveled to the Himalayas where I can be absorbed in spiritual
                life...A natural rhythm evolved as relaxation and rejuvenation
                transpired.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-[#5C8D54] mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Mokshananda,
              </h2>
              <p className="text-gray-500">USA</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={t2}
              />
              <p className="leading-relaxed">
                Everything contributed to the full success of our Qi Gong
                retreat: the location, the superb rooms, the billions of
                flowers, the delicious food and all the staff.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-[#5C8D54] mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Pragata
              </h2>
              <p className="text-gray-500">Portugal</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <Image
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={t3}
              />
              <p className="leading-relaxed">
                They say when the gods want to meet they do so in the Himalayas.
                And I've experienced that in Dunagiri retreat. The place I fell in love with.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-[#5C8D54] mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                Miriam
              </h2>
              <p className="text-gray-500">Netherlands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
