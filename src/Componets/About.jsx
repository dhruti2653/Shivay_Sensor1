import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="lg:mt-20 lg:px-20 px-7">

        {/* Title */}
        <h1 className="lg:text-[30px] text-[25px] font-bold border-[#3ebbe1] pb-3">
          About Us
        </h1>
        <hr className="lg:w-[170px] w-[130px] border-[#3ebbe1] border-b-4" />
        <div className="w-full h-auto flex flex-col lg:flex-row   lg:mt-2">


          {/* Left Side - Images Section */}
          <div className="relative lg:w-1/2 w-full flex justify-center lg:justify-start lg:mt-10 mt-7">
            {/* Second Image (Overlapping from Left) */}
            <img
              src="/images/about4.jpg"
              alt="about"
              className="absolute lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] lg:z-30 z-10 lg:border-[12px] border-8 border-white left-1/2 lg:pr-0 lg:left-1/2 top-1/2 transform -translate-y-1/2"
            /> <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> <img
              src="/images/videoicon.png"
              alt="about"
              className="absolute lg:w-[80px] lg:h-[80px] w-[50px] h-[50px] lg:z-30 z-10 hover:w-[85px] hover:h-[85px]    lg:pr-0 lg:left-[65%]  top-1/2 transform -translate-y-1/2"
            />
</a>

            {/* First Image */}
            <img
              src="/images/about3.jpg"
              alt="about"
              className="relative lg:h-[500px] lg:w-[550px] w-[300px] h-[300px]"
            />
          </div>

          {/* Right Side - Text Section */}
          <div className="flex lg:w-1/2 w-full h-auto flex-col justify-center lg:justify-start items-center lg:pl-10 mt-5 lg:mt-0">
            <h1 className="text-center lg:text-left lg:text-[38px] text-[20px] font-bold">
              Shivay Sensor, Delivering Innovative Solutions as a partner for your weighing
              Journey
            </h1>
            <div className="flex lg:flex-row  mt-7 h-auto flex-col ">
              <div className="lg:w-1/2 pr-5">
                <p className="lg:-mb-5">
                  Founded in 2002, Shivay Sensor is one of the leading manufacturers
                  and suppliers of Load Cells, S Type Load Cells, Shear Beam Load
                  Cell, Weighing Controller, and other force sensors.</p><br></br> <span className="">Our organization is among the top manufacturers and suppliers of load cells that are well-known for offering the best quality products. As we have a wide range of load cells including S Type and Shear Beam Load Cell, our international customers get exactly what they need. Want to get a free quote? Contact Us.</span>

              </div>
              <div className="border-l-2 border-gray-500 lg:w-1/2 lg:mt-0 mt-9 flex-row pl-5 ">
                <div className="flex flex-col space-y-3 ">
                  <h1 className="text-[20px] font-semibold">Our Vision</h1>
                  <p className="">To provide world-class products and services at affordable prices to the global market.</p>
                </div>
                <div className=" flex flex-col mt-4 space-y-3 ">
                  <hr className="border-[1px] border-gray-500 "></hr>
                  <h1 className="text-[20px] font-semibold">Our Mission</h1>
                  <p className="">We aim to be the most trusted and reliable brand in the industry. To achieve this, we develop a strong brand image and credibility among customers.</p>
                  <Link to={"/about"}  className="p-2 px-7 text-white bg-black w-[150px] hover:w-[200px]">Read More</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default About;
