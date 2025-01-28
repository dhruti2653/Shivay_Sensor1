import React from "react";
import { FaWeight, FaCog, FaStethoscope, FaIndustry } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";

const Service = () => {
  const services = [
    {
      heading: "PROCESS WEIGHING",
      description:
        "Our high-grade load cells are built for optimum performance when useful in process weighing applications. Get precise and standard load cells for process weighing equipment to meet any requirements and needs virtually.",
      icon: (
        <FaWeight className="text-[55px]   hover:text-white font-medium" />
      ),
    },
    {
      heading: "MEDICAL DEVICE",
      description:
        "We can manufacture and supply load cells that have a wide range of applications in the medical sector. We can provide sensor solutions for medical devices such as exercise equipment, patient hoists, and infant incubators.",
      icon: (
        <FaStethoscope className="text-[55px]  hover:text-white  font-medium" />
      ),
    },
    {
      heading: "UNIVERSAL TESTING MACHINE",
      description:
        "Shivay Sensor can provide you the best quality load cells for the Universal Testing Machine to test the tensile and compressive strength of different materials.",
      icon: (
        <FaCog className="text-[55px]   hover:text-white font-medium" />
      ),
    },
    {
      heading: "INDUSTRIAL AND AGRICULTURAL",
      description:
        "Modern industrial and agricultural machinery requires a safe and precise operation which can be possible with the use of our top-class load cells and sensors.",
      icon: (
        <FaIndustry className="text-[55px]  hover:text-white font-medium" />
      ),
    },
    {
      heading: "WEIGHT CHECKER",
      description:
        "Load cells can also be useful in the weight checker equipment that helps in measuring the weight of numerous objects and things.",
      icon: (
        <GiWeight className="text-[55px]  hover:text-white  font-medium" />
      ),
    },
    {
      heading: "WEIGHING MACHINERY",
      description:
        "Shivay Sensor can provide you load cells that fulfill the custom requirements for weighing machinery. We offer highly precise load cells that are useful in trade weighing applications as well.",
      icon: (
        <FaWeight className="text-[55px]  hover:text-white  font-medium" />
      ),
    },
  ];

  return (
    <div className="lg:px-20 px-7 lg:mt-24 mt-10">
      <h1 className="lg:text-[30px] text-[25px] font-bold border-[#3ebbe1] pb-3 ">
        Our Services
      </h1>
      <hr className="lg:w-[220px] w-[180px] border-[#3ebbe1] border-b-4" />
      <p className="mt-10 text-[17px] text-[#898989]">
        At Shivay Sensor, we have the best in-house manufacturing team who
        ensures that our long list of customers will not have to compromise with
        the product quality or functionality. Double-checking the products and
        process thoroughly from designing to testing, we are offering the
        highest-standard load cells. Shivay Sensor has been implementing modern
        manufacturing tactics along with state-of-the-art equipment to design
        and develop S Type Load Cells, Shear Beam Load Cells, Weighing
        Controller, and other measuring sensors. We manufacture and supply load
        cells to be served in various industries such as Healthcare, Automotive,
        Aerospace/Aviation, Chemical, Oil & Gas, Medical, and Marine, among many
        others.
      </p>

      <div className="flex flex-col w-full h-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="tt-service-4 group flex flex-col md:flex-row items-center md:items-start p-6 gap-4 bg-[#f5f5f5] border-2 border-[#dfdfdf] rounded-lg transition-colors duration-300 ease-in-out hover:bg-[#3ebbe1] hover:text-white"
            >
              <div class="tt-service-4-img">{service.icon}</div>
              <div class="tt-service-4-info">
                <a class="tt-service-4-title" href="">
                  {service.heading}
                </a>

                <div class="simple-text color-5 mt-4">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
