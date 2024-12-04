import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonial = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'John Doe',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatae atque vel quas temporibus incidunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatae atque vel quas temporibus incidunt.',
      image: '/images/testimonial1.webp',
    },
    {
      name: 'Jane Smith',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatae atque vel quas temporibus incidunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatae atque vel quas temporibus incidunt.',
      image: '/images/testimonial2.webp',
    },
    {
      name: 'Alex Johnson',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatae atque vel quas temporibus incidunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatae atque vel quas temporibus incidunt.',
      image: '/images/testimonial3.webp',
    },
    {
      name: 'Emily Davis',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatae atque vel quas temporibus incidunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatae atque vel quas temporibus incidunt.',
      image: '/images/testimonial4.webp',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handlePrevReview = () => {
    setCurrentReview((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNextReview = () => {
    setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handleDotClick = (index) => {
    setCurrentReview(index);
  };

  return (
    <div className="w-full h-auto lg:px-20 lg:mt-10 lg:mb-64 pl-7 pr-4 mb-[600px] relative">
      {/* Header Section */}
      <div className="bg-[#e9e8e8] rounded-tl-[45px] rounded-br-[45px] w-full h-[250px] sm:h-[400px] shadow-xl"
        style={{ boxShadow: '10px 10px 15px rgba(0, 0, 0, 0.1)' }}>
        <div className="pl-4">
          <h1 className="lg:text-[30px] text-[20px] sm:text-[25px] font-bold border-[#3ebbe1] pb-3 pt-3">Testimonial</h1>
          <hr className="lg:w-[170px] w-[100px] sm:w-[130px] border-[#3ebbe1] border-b-4" />
          <h1 className="text-[25px] sm:text-[30px] font-medium mt-6">Client Confidence Speaks.</h1>
          <h1 className="text-[16px] sm:text-[20px] text-[#4B5563] pr-6 sm:pr-20 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beatae atque vel quas temporibus incidunt.
          </h1>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="lg:mt-44 lg:px-44 sm:top-7 absolute left-0 right-0 z-10 flex justify-center items-center">
        {/* Left Button */}
        <button
          className="absolute left-2 lg:ml-28 sm:left-0 bg-gray-300 border-[1.5px] border-black rounded-full p-2 shadow-md hover:bg-gray-200 z-20"
          onClick={handlePrevReview}
        >
          <FiChevronLeft className="w-5 sm:w-8 h-5 sm:h-8 text-gray-600" />
        </button>

        {/* Review Slider */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentReview * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-white rounded-lg shadow-lg rounded-tl-[45px] rounded-br-[45px] p-4 sm:p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mt-6 mb-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-20 sm:w-24 h-20 sm:h-24 rounded-full border-4 border-[#3ebbe1] object-cover"
                      />
                    </div>
                    <h2 className="text-[20px] sm:text-[24px] font-semibold mt-4">{review.name}</h2>
                    <p className="text-[16px] sm:text-[18px] text-gray-600 mt-4 italic">"{review.message}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          className="absolute right-2 sm:right-0 lg:mr-28 bg-gray-300 border-[1.5px] border-black rounded-full p-2 shadow-md hover:bg-gray-200 z-20"
          onClick={handleNextReview}
        >
          <FiChevronRight className="w-5 sm:w-8 h-5 sm:h-8 text-gray-600" />
        </button>
      </div>

      {/* Dots for carousel */}
      <div className="flex justify-center mt-6">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`h-2 sm:h-3 w-2 sm:w-3 mx-1 rounded-full cursor-pointer ${currentReview === index ? 'bg-[#3ebbe1]' : 'bg-gray-300'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
    
  );
};

export default Testimonial;
