"use client";
import Image from "next/image";
import steel from "../../public/roof/roof/roof_4x.webp";
import farm from "../../public/poulitary (1)/poulitary/poulitary_4x.webp";
import hvac from "../../public/hvac.jpg";
export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="bg-white py-20 px-4 md:px-12 text-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
        {/* LEFT TEXT SECTION */}
        <div className="md:w-1/3 space-y-6">
          <p className="text-sm text-red-600 font-semibold uppercase tracking-widest">
            Feature
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#191970] leading-snug">
            We have Expertise <br /> on
          </h2>
          <a
            onClick={() => (window.location.href = "tel:+971569240131")}
            className="bg-red-600 rounded-md cursor-pointer text-white px-6 py-2 font-medium hover:bg-red-700 transition-colors duration-300"
          >
            Contact US
          </a>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-8 ">
          {/* Image 1 */}
          <div className="text-center space-y-4">
            <div className="relative w-full h-40 md:h-48 rounded-md overflow-hidden">
              <Image
                src={farm}
                alt="Poultry farm project for efficient farming"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-md font-semibold text-[#191970]">
              Poultry Farm Projects
            </h3>
          </div>

          {/* Image 2 */}
          <div className="text-center space-y-4">
            <div className="relative w-full h-40 md:h-48 rounded-md overflow-hidden">
              <Image
                src={hvac}
                alt="Steel building roof for industrial and commercial use"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-md font-semibold text-[#191970]">
              HVAC Systems
            </h3>
          </div>
           {/* Image 3 */}
           <div className="text-center space-y-4">
            <div className="relative w-full h-40 md:h-48 rounded-md overflow-hidden">
              <Image
                src={steel}
                alt="Steel building roof for industrial and commercial use"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-md font-semibold text-[#191970]">
              Steel Building Projects
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
