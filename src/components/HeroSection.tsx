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
            10 years of experience in Steel Warehouse construction and Poultry
            Farm projects
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            Sharq Al Hirah Tech. Cont, established in 2012 in the UAE, is led by
            Managing Director Mr. Pillai Sethunath, who brings over 10 years of
            experience in steel warehouse construction and poultry farm
            projects. The company serves as a certified equipment installation
            team for LAE Cuxhaven throughout the GCC. Specializing in poultry
            equipment installation, they have worked with various brands such as
            Jansen, Techno, Salmet, Big Dutchman, and Chore Time. Sharq Al Hirah
            has successfully collaborated on numerous steel warehouse projects
            with companies like Fabtech Steel, SIABCO, EBS, and Kirby,
            showcasing a diverse range of expertise in their field.
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
