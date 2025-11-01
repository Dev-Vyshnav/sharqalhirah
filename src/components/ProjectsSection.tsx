import Image from "next/image";
// import image1 from "../../public/barsha/barsha/barsha_4x.webp";
// import image2 from "../../public/ajman/ajman/ajman_4x.webp";
// import image3 from "../../public/dubai/dubai/dubai_4x.webp";
// import image4 from "../../public/openshed/openshed/openshed_4x.webp";
// import image5 from "../../public/equipment/equipment/equipment_4x.webp";
// import image6 from "../../public/poulitary (1)/poulitary/poulitary_4x.webp";
import image7 from "../../public/AlGhurairpoultryfarm.jpg";
import image8 from "../../public/Alkhaznapoultr.jpg";
import image9 from "../../public/Aljazirapoultryfarm.jpg";
import image10 from "../../public/faroujalwadi.jpg";
import image11 from "../../public/AljazirapoultryfarmDubai.jpg";
import image12 from "../../public/P01ARBETO BUILDING.jpg";
import image13 from "../../public/P02SILVERGATEBUILDING CONTRACTING.jpg";
import image14 from "../../public/P03SILVERGATEBUILDING.jpg";
import image15 from "../../public/P04ArbetoBuilding.jpg";
import image16 from "../../public/LiftekFzc.jpg";
import image17 from "../../public/emiratescenter.jpg";
import image18 from "../../public/wareTrill.jpg";
import image19 from "../../public/EBS.jpg";
import image20 from "../../public/ALtURATH.jpg";
import image21 from "../../public/ahmedal.jpg";
// Define project data with desicriptions for better user engagement

const Projectsection = () => {
  const projects = [
    {
      title: "Al Ghurair poultry farm ( broiler ), Abudhabi",
      image: image7,
      description:
        "Installation of big Dutchman poultry equipments on 32 nos of poultry houses.",
    },
    {
      title: "Al khazna poultry farm ( layer cages for broiler), Abudhabi",
      image: image8,
      description:
        "Installation of Jansen poultry equipment for layer cages for broiler in Al khazna poultry farm",
    },
    {
      title: "Al jazira poultry farm ( layer cages for egg production), Abudhabi",
      image: image9,
      description:
        "Installation of Salmet and tecno poultry equipments for rearing and layer cages in Al jazira poultry farm.",
    },
    {
      title: "Farouj Al wadi ( broiler ), Al Dhaid Sharjah ",
      image: image10,
      description:
        "Installation of lae Cuxhaven poultry equipments all over gcc.",
    },
    {
      title: "Al jazira poultry farm , Dubai",
      image: image11,
      description:
        "Dismantling of Salmet anf techno equipments of All sheds in Al jazira poultry farm.",
    },
    // {
    //   title: "Danube, Al Barsha Dubai",
    //   image: image1,
    //   description:
    //     "A modern residential complex with state-of-the-art amenities.",
    // },
    // {
    //   title: "Radison Hotel, Ajman",
    //   image: image2,
    //   description: "A luxurious hotel offering world-class hospitality.",
    // },
    // {
    //   title: "Stable at Khawaneej, Dubai",
    //   image: image3,
    //   description: "A premium equestrian facility with modern stables.",
    // },
    // {
    //   title: "Open Shed (W/H), Dubai",
    //   image: image4,
    //   description: "A spacious warehouse designed for efficient storage.",
    // },
    // {
    //   title: "Equipment Installation at Dhaid Poultry Farm (LAE), Sharjah",
    //   image: image5,
    //   description: "Advanced equipment setup for poultry farming.",
    // },
    // {
    //   title: "Extension of Farouj Al Wadi Poultry Farm (LAE), Sharjah",
    //   image: image6,
    //   description: "Expanded facilities for increased production.",
    // },
  ];

  const hvacprojects = [
    {
      title: "P01 ARBETO BUILDING CONTRACTING ( MR. MOHAMMED HASHIM PONNAMBATHAYIL) ALYASMEEN, PLOT#0587",
      image: image12,
      description:
        "",
    },
    {
      title: "P02 SILVER GATE BUILDING CONTRACTING (MS AL ZORAH DEVELOPMENT COMPANY FZC) AL ZORAH AJMAN PLOT#0899",
      image: image13,
      description:
        "",
    },
    {
      title: "P03 SILVER GATE BUILDING CONTRACTING (MS AL ZORAH DEVELOPMENT COMPANY FZC) AL ZORAH AJMAN PLOT#0894",
      image: image14,
      description:
        "",
    },
    {
      title: "P04 Arbeto Building Cont (AL Zahya Community",
      image: image15,
      description:
        "",
    },
    {
      title: "P05 AHMED AL REFIE BUILDING CONT LLC MUWAILAH G+3TY 1839 plot",
      image: image21,
      description:
        "",
    },
    
  ];
  const steelprojects = [
    {
      title: "Liftek Fzc",
      image: image16,
      description:
        "Workshop and office for Liftek fze",
    },
    {
      title: "Emirates center, Abudhabi (Office for emirates center Abudhabi)",
      image: image17,
      description:
        "",
    },
    {
      title: "Warehouse for trillium intl, Hamriyah freezone",
      image: image18,
      description:
        "",
    },
    {
      title: "Warehouse for EBS, Abudhabi",
      image: image19,
      description:
        "",
    },
    {
      title: "Warehouse for Al Turath building contracting,Sharjah",
      image: image20,
      description:
        "",
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="bg-gradient-to-br from-red-800 to-blue-700 py-12 px-4 sm:px-6 lg:px-8 text-white"
      >
        {/* <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16">
          Some of Our Projects
        </div> */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 mt-10">
        Major Poultry Farm Projects
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mt-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-56 sm:h-64 lg:h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-t-md object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                {/* <div className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                  Learn More
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 mt-10">
        Major HVAC Projects
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mt-10">
          {hvacprojects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-56 sm:h-64 lg:h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-t-md object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                {/* <div className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                  Learn More
                </div> */}
              </div>
            </div>
          ))}
        </div>
        </div>
        
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 mt-10">
        Major Steel Building Projects
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mt-10">
          {steelprojects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full h-56 sm:h-64 lg:h-72">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-t-md object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                {/* <div className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                  Learn More
                </div> */}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};
export default Projectsection;
