import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const LoadAssembly = () => {
  

  
  const products = [
    {
      id: 1,
      image: "/images/loadassembly1.png",
      title: "RSL-112RD Assembly",
      // link: '/loadcell',
    },
    {
      id: 2,
      image: "/images/loadassembly2.png",
      title: "RSL-203 Assembly",
      // link: '/loadindicator',
    },
    {
      id: 3,
      image: "/images/loadassembly3.png",
      title: "RSL-803 Assembly",
      // link: '/loadindicator',
    },
    {
      id: 4,
      image: "/images/loadassembly4.png",
      title: "RSL-803-5T Assembly",
      // link: '/loadindicator',
    },


  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/loadassembly1.png",
    "/images/loadassembly2.png",
    "/images/loadassembly3.png",
    "/images/loadassembly4.png",
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
          Load Cell Assembly
          </h1>
          <hr className="lg:w-[290px] w-[180px] border-[#3ebbe1] border-b-4" />
        </div>
        <div className='mt-14 '>
         
       
        
        


          <div className='w-full flex mt-7 lg:px-7 flex-col lg:flex-row lg:gap-10'>
            <div className='lg:w-1/2 space-y-4'>
              <h1 className='font-bold text-[#3ebbe1] text-[30px] sm:text-[40px] leading-tight'>
              Load Cell Assembly
              </h1>
              <p className='text-[17px]'>Rudrra sensor has excellent reputation in manufacturing and supplying Adhesive and Accessories. We also engaged in providing customized product as per need of customers. We have a complete line of adhesive accessories.</p>
              <p className='text-[17px]'>Our exclusive range involves load cell cable, mixing bucket, Teflon tape, pressure pad, heat-resisting tape hot curing service, rubber pencil, cold curing adhesive, tweezers, steel blade brush and many other items.</p>
              <p className='text-[17px]'>These products are manufactured using high-quality components that we acquire from trusted vendors. These are made using the latest technology and premium raw material to ensure optimum quality products.</p>

            </div>
            <div className='lg:w-1/2 lg:h-[350px] lg:mt-20 overflow-hidden lg:pl-10'>
              <div className='relative lg:w-[400px] lg:h-[300px]'>
                {/* Render the current image */}
                <img
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                  className=' object-cover rounded-lg transition-all duration-700'
                />
              </div>
            </div>

          </div>

          <div className='mt-9 lg:mt-10 lg:px-7'><h1 className='text-[#3ebbe1] text-[25px] font-medium'> Sub Category :</h1> <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-5 gap-10 ">

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

export default LoadAssembly;
