import Image from "next/image";
import image1 from "../../public/barsha/barsha/barsha_4x.webp";
import image2 from "../../public/ajman/ajman/ajman_4x.webp";
import image3 from "../../public/dubai/dubai/dubai_4x.webp";
import image4 from "../../public/openshed/openshed/openshed_4x.webp";
import image5 from "../../public/equipment/equipment/equipment_4x.webp";
import image6 from "../../public/poulitary (1)/poulitary/poulitary_4x.webp";

// Define project data with descriptions for better user engagement

const Projectsection = () => {
  const projects = [
    {
      title: "Danube, Al Barsha Dubai",
      image: image1,
      description:
        "A modern residential complex with state-of-the-art amenities.",
    },
    {
      title: "Radison Hotel, Ajman",
      image: image2,
      description: "A luxurious hotel offering world-class hospitality.",
    },
    {
      title: "Stable at Khawaneej, Dubai",
      image: image3,
      description: "A premium equestrian facility with modern stables.",
    },
    {
      title: "Open Shed (W/H), Dubai",
      image: image4,
      description: "A spacious warehouse designed for efficient storage.",
    },
    {
      title: "Equipment Installation at Dhaid Poultry Farm (LAE), Sharjah",
      image: image5,
      description: "Advanced equipment setup for poultry farming.",
    },
    {
      title: "Extension of Farouj Al Wadi Poultry Farm (LAE), Sharjah",
      image: image6,
      description: "Expanded facilities for increased production.",
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="bg-gradient-to-br from-red-800 to-blue-700 py-12 px-4 sm:px-6 lg:px-8 text-white"
      >
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16">
          Some of Our Projects
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
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
                  className="rounded-t-md"
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
