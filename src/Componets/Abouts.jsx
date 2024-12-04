import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Abouts = () => {
  const [rating, setRating] = useState(0);  // Current rating
  const [hover, setHover] = useState(0);    // Hovered star rating

  return (
    <>
      <div className="lg:mb-96 mb-[600px] lg:mt-16 mt-6 px-4 md:px-20">
        <div className="relative flex flex-col md:flex-row bg-white">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col relative z-10 p-4 md:p-8">
            {/* Star Rating */}
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-green-500 text-3xl">&#9733;</span>  
              ))}
            </div>

            {/* Satisfaction Text */}
            <h1 className="text-xl md:text-2xl">
              <span className="text-green-500 font-medium">99.9% Customer Satisfaction</span>
              <span className="text-gray-500"> based on 750+ reviews and 6,154 Completed Projects.</span>
            </h1>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[600px]">
            <img
              src="/images/about4.jpg"  
              alt="Customer Satisfaction"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Z-index Section (Gray Background with Characteristics) */}
          <div className="absolute top-96 md:top-52 w-full md:w-1/2 h-auto bg-slate-200 p-4 md:p-16 z-0">
            <h1 className="text-black text-base md:text-xl mb-4 md:mb-6">
              While improving the yield and performance of solar energy products, our PV industry experience enables us to provide in-depth material sourcing, financing, and supply chain expertise for every step.
            </h1>
            
            {/* Characteristics List */}
            <div className="space-y-4">
              {[
                "Workplace ethics and morals are important",
                "Options that are tailored to your needs",
                "Adaptability and individualization",
                "Concentrate on the requirements of the customer",
                "Manufacturing that is dependable and long-lasting",
                "Believe in the importance of long-term commitment in both love and life",
                "A shipping alternative that is both low-cost and on-time."
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  {/* Left Icon (Checkmark) */}
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl md:text-2xl mr-3 md:mr-4" />
                  
                  {/* Right Content */}
                  <p className="text-gray-600 text-sm md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouts;
