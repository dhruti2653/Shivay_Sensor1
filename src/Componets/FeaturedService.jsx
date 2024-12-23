import React from "react";
import {
  FaRegCalendarTimes,
  FaUser,
  FaRegThumbsUp,
  FaRegEdit,
} from "react-icons/fa";
import { Link } from 'react-router-dom';


const FeaturedService = () => {
  // Array of data for the boxes
  const services = [
    {
      image: "/images/service1.png",
      heading: "dianosis and repaire",
      description:
        "Sivay Sensors provides expert diagnosis and repair services to ensure your systems operate at peak performance.",
    },
    {
      image: "/images/service2.png",
      heading: "Inastall & Upgrades",
      description:
        "Sivay Sensors provides professional installation and upgrade services to enhance your system’s performance and reliability.",
    },
    {
      image: "/images/service3.png",
      heading: "Electrical maintenance",
      description:
        "Sivay Sensors offers comprehensive electrical maintenance services to ensure your systems run efficiently and safely.",
    },
  ];

  // Array of data for the boxes
  const chooses = [
    {
      heading: "24/7 availality",
      description:
        " Sivay Sensors ensure 24/7 availability for seamless performance and uninterrupted operations.",
      icon: <FaRegCalendarTimes className="text-[40px] text-[#3ebbe1] font-medium  " />, // Add the icon directly here
    },
    {
      heading: "Dedicated team",
      description:
        "Our dedicated team at Sivay Sensors is committed to delivering exceptional service and tailored solutions.",
      icon: <FaUser className="text-[40px] text-[#3ebbe1] font-medium" />,
    },
    {
      heading: "Guranteed satisfaction",
      description:
        "Sivay Sensors guarantees top-quality solutions designed to meet and exceed your expectations.",
      icon: <FaRegThumbsUp className="text-[40px] text-[#3ebbe1] font-medium" />,
    },
    {
      heading: "Free Estimaten",
      description:
        "Sivay Sensors offers free estimates to help you plan your perfect        solution with confidence.",
      icon: <FaRegEdit className="text-[40px] text-[#3ebbe1] font-medium" />,
    },
  ];

  return (
    <>
      <div className="lg:mt-24 mt-10 px-7 lg:px-20">
        <h1 className="lg:text-[30px] text-[25px] font-bold border-[#3ebbe1] pb-3">
          Our Featured Services
        </h1>
        <hr className="lg:w-[360px] w-[280px] border-[#3ebbe1] border-b-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 ">
        {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-6 mt-10 rounded-lg shadow-lg hover:bg-[#3ebbe1] group transition-colors duration-300"
            >
              <div className="absolute -top-11 left-1/2 transform -translate-x-1/2 bg-white border-slate-200 border-2  group-hover:bg-[#3ebbe1] group-hover:border-zinc-300 rounded-full w-24 h-24 flex items-center justify-center">
                {/* Use different image for each box */}
                <img
                  src={service.image}
                  alt={service.heading}
                  className="w-22 h-22 object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              </div>
              <h3 className="mt-12 text-lg font-bold text-center group-hover:text-white">
                {service.heading}
              </h3>
              <p className="text-center text-gray-600 mt-3 group-hover:text-white">
                {service.description}
              </p>
              <div className="text-center mt-4">
              <Link to={"/service"}   className="bg-[#3ebbe1] text-white py-2 px-4 rounded-full group-hover:border-white border-2 hover:bg-[#3ebbe1] transition-colors duration-300">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Why choose us */}
      <div className="lg:mt-24  px-7  mt-10 mb-20 lg:px-20  ">
        <h1 className="lg:text-[30px] text-[25px] font-bold border-[#3ebbe1] pb-3 ">
          Why Choose Us
        </h1>
        <hr className="lg:w-[250px] w-[210px] border-[#3ebbe1]  border-b-4" />
        <div className="container mx-auto py-10 lg:mt-10 gap-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
            {chooses.map((choose, index) => (
              <div key={index} className="rounded-lg text-center px-5 lg:mt-0 mt-10">
                {/* Rotated border container */}
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                  <div className="absolute w-full h-full border-2 border-[#3ebbe1] rotate-45"></div>
                  {/* Image remains unrotated */}
                  <div className="w-20 h-20 object-cover flex justify-center items-center">
                    {/* <img
                      src={choose.image}
                      alt={choose.heading}
                      className="w-full h-full object-cover"
                    /> */}
                    {choose.icon}
                  </div>
                </div>
                {/* Heading */}
                <h3 className="text-lg font-bold mt-7">{choose.heading}</h3>
                {/* Content */}
                <p className="mt-2 text-gray-600">{choose.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedService;
