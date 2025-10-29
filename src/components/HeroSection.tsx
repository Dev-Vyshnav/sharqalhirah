import Image from "next/image";
import Poultry1 from "../../public/farm/farm/farm_4x.webp";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative text-white py-20 px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(220,38,38,0.85), rgba(67,56,202,0.85)), url('/images/hero-bg.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE - TEXT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
          30+ Years of Excellence in Poultry Farm Projects, HVAC Systems & Steel Warehouse Construction.
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-200">
          Sharq Al Hirah Tech. Cont., established in 2012 in the UAE, is led by Managing Director Mr. Pillai Sethunath, who brings over 30 years of experience in poultry farm projects, HVAC systems, and steel warehouse construction. The company was previously known as Librus General Contracting, founded in 1994, marking the beginning of a long legacy of technical expertise and trusted service in the GCC region.

Sharq Al Hirah is recognized as a certified equipment installation partner for LAE Cuxhaven across the GCC, specializing in advanced poultry equipment installation and turnkey farm solutions. Over the years, the company has collaborated with leading international brands such as Jansen, LAE- CUXHAVEN, Techno, Salmet, Big Dutchman, and Chore Time, delivering precision and reliability in every project.

Expanding its operations, Sharq Al Hirah has successfully executed numerous HVAC projects, offering high-performance climate control and ventilation systems designed for industrial, commercial, and agricultural applications.

In addition, the company has completed a wide range of steel warehouse construction projects in collaboration with industry leaders like Fabtech Steel, SIABCO, EBS, and Kirby, showcasing excellence, innovation, and quality workmanship across all its divisions.
          </p>
        </div>

        {/* RIGHT SIDE - IMAGES */}
        <div className="flex justify-center gap-4">
          <Image
            src={Poultry1}
            alt="Poultry Farm"
            width={500}
            height={500}
            className="rounded-sm shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
