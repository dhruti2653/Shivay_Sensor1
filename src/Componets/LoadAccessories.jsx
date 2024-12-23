import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const LoadAccessories = () => {

  const products = [
    {
      id: 1,
      image: "/images/loadaccessories1.png",
      title: "Junction Box",
      // link: '/loadcell',
    },
    {
      id: 2,
      image: "/images/loadaccessories2.png",
      title: "Black Cable",
      // link: '/loadindicator',
    },
    {
      id: 3,
      image: "/images/loadaccessories3.png",
      title: "Blue Cable",
      // link: '/loadindicator',
    },
    {
      id: 4,
      image: "/images/loadaccessories4.png",
      title: "Broaded Cable",
      // link: '/loadindicator',
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/loadaccessories1.jpg",
    "/images/loadaccessories2.jpg",
    "/images/loadaccessories3.jpg",
    "/images/loadaccessories4.jpg",
  ];

  // Auto-scroll to the next image every 2 seconds
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change the timing here (2000ms = 2 seconds)

    return () => clearInterval(scrollInterval); // Clear interval when component unmounts
  }, [images.length]);

  return (
    <>
      <div className='lg:px-20 px-7 lg:mt-20 mt-14 mb-52 lg:mb-60'>
        <div>
          <h1 className="lg:text-[30px] text-[25px] font-bold border-[#3ebbe1] pb-3 ">
            Load Cell Accessories
          </h1>
          <hr className="lg:w-[330px] w-[260px] border-[#3ebbe1] border-b-4" />
        </div>
        <div className='mt-14 '>

          <div className='mt-9 lg:mt-10 lg:px-7'>  <h1 className='font-bold text-[#3ebbe1] text-[30px] sm:text-[36px] leading-tight'>
            Black Cable
          </h1> <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-5 gap-10 ">

              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border rounded-tl-[40px] rounded-br-[40px] border-gray-300 shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:scale-105"
                  style={{ height: 'auto' }}
                >
                  {/* Image Container */}
                  <div className="w-full h-auto p-3 flex justify-center items-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover w-full h-auto max-h-auto max-w-[150px] rounded-tl-lg"
                    />
                  </div>

                  {/* Product Content */}
                  <Link to={product.link}>
                    <div className="max-h-auto flex flex-col justify-center items-center shadow-xl bg-slate-200">
                      {/* Product Title */}
                      <h2 className="text-[18px] hover:text-[#3ebbe1] font-medium bg-slate-200 text-black text-center p-3 ">{product.title}</h2>
                    </div>
                  </Link>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </>
  );
};

export default LoadAccessories;
