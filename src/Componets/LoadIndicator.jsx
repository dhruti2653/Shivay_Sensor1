import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const LoadIndicator = () => {

  
  const products = [
    {
      id: 1,
      image: "/images/Load-indicator-n.jpeg",
      title: "RS-101",
      // link: '/loadcell',
    },
    {
      id: 2,
      image: "/images/loadindicator2.webp",
      title: "RS-102",
      // link: '/loadindicator',
    },
    {
      id: 3,
      image: "/images/loadindicator3.webp",
      title: "RS-103",
      // link: '/loadindicator',
    },
    {
      id: 4,
      image: "/images/loadindicator4.jpg",
      title: "RS-104",
      // link: '/loadindicator',
    },


  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/Load-indicator-n.jpeg",
    "/images/loadindicator2.webp",
    "/images/loadindicator3.webp",
    "/images/loadindicator4.jpg",
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
          Load Indicator
          </h1>
          <hr className="lg:w-[220px] w-[180px] border-[#3ebbe1] border-b-4" />
        </div>
        <div className='mt-14 '>
          <div className='space-y-5'>    <h1 className='font-medium text-[33px]  '>Reliable Load Indicator – Made to Measure          </h1>
            <p className='text-[18px] '>A Load Cell Amplifier is a device that can increase the excitation and strength of the signals emitted by a load cell (a kind of transducer that converts force signals to electrical signal precisely). The voltage amplification is required as sometimes, the signal coming from a load cell might be of very low strength and not useful for certain measuring components such as PLC, Load Meter, Data Acquisition Modules (DAQ), and Microprocessors. It is also considered as the best possible option to amplify signals when we are talking about providing excitation voltage to circuits like strain gauge load cells. A load cell amplifier can be used to convert mv/V output signal into a stable and strong electrical signal, making it possible for other components to receive it.</p>
            <p className='text-[18px] '>Excitation voltage, noise filtering, attenuation, amplify low-strength signals, and conversion of output signals are indeed considered as some of the most prominent functions of a load cell amplifier. As the amplification device will enhance or increase the actual strength and range of the output signal, there are so many electrical components and measuring devices that works with a load cell amplifier parallelly. The main function or working of this signal amplifier involves getting a feeble and weak output digital signal from load cell, converting or amplifying the received signal into a more powerful signal, and sending a higher strength electrical signal in the form of output.</p>

          </div>
          <div className='space-y-5'>    <h1 className='font-medium mt-7 text-[33px]  '>Expertise in the following areas is available from Load Indicator:</h1>
          <ul className='text-[16px] list-disc pl-10 ml-5'>
                            <li>Surface preparation,</li>
                            <li>Surface preparation (cleaning, blasting, and more) and maintenance     </li>
                            <li>Plastic,</li>
                            <li>Plastic, aluminium, and steel bonding;   </li>
                            <li>Lead-free and lead-containing soldering; moisture protection;</li>
                            <li>Calibration (step, push and pull, fixed and free weights); </li>
                            <li>And other services.</li>
                        </ul>
                        <p className='text-[18px] '>Our customers range from huge international enterprises to tiny closely held businesses. We have a diverse range of customers. In a variety of industries, including the automotive and industrial industries, research and development as well as the medical and pharmaceutical industries, they are active.</p>

          </div>
        
          <div className='space-y-5'>    <h1 className='font-medium mt-7 text-[33px]  '>Please contact us if you require the measurement of movement, torque, load, or force.          </h1>
            <p className='text-[18px] '>We supply high quality solutions of force sensors and load cells for increased process and quality control. Load Indicator offers its own products and also flexible production from prototype to serial production. For those who do tests in their own lab, we perform calibrations of your equipment.</p>

          </div>


          <div className='w-full flex mt-7 lg:px-7 flex-col lg:flex-row lg:gap-10'>
            <div className='lg:w-1/2 space-y-4'>
              <h1 className='font-bold text-[#3ebbe1] text-[30px] sm:text-[40px] leading-tight'>
              Load Indicator
              </h1>
<h1 className='font-medium text-[22px] lg:text-[26px] '> ABOUT US:</h1>
              <p className='text-[17px]'>In addition, our Sivay Sencor Sensor manufactures and supplies high and premium grade load indicators that are both manual and automatic tare controls. In the field of precision manufactured load cells, pressure transducers, and load indicators, Load Masters is one of the top manufacturers and suppliers in the world. We give a product that is both innovative and long-lasting, with no negative consequences. There is no restriction on what you may talk about the product on this number. In addition, also we deliver a product of high quality.</p>
              <p className='text-[17px]'>Contact us if you have any questions or concerns of any kind.</p>

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
                <div className="w-full h-auto lg:h-[150px] p-3 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full lg:h-[150px] h-auto max-h-auto max-w-[150px] rounded-tl-lg"
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

export default LoadIndicator;
