import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/images/bnn1.jpg",
      title: "Empowering Innovations with Sensors",
      description: "Our cutting-edge technology drives smarter solutions. Elevate your operations with Sivay Sensors. Delivering unparalleled accuracy and reliability. Designed for industrial and commercial excellence. ",
    },
    {
      image: "/images/bnn5.png",
      title: "Trusted Solutions for Modern Challenges",
      description: "From load cells to amplifiers, we cover it all.  Built to withstand the toughest environments. Sivay Sensors combine advanced technology with precision engineering to deliver unparalleled performance.",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Autoplay every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {/* Image slides */}
      <div
        className="flex transition-transform duration-100 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full bg-black opacity-90 flex-shrink-0">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[450px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-left text-black transition-all duration-100 ease-in-out transform ${
            currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
          style={{ transitionDelay: currentSlide === index ? "0.3s" : "0s" }}
        >
          <div className="text-left p-4 rounded lg:pl-28">
            {/* Title */}
            <h2
              className={`text-3xl font-bold mb-4 transition-all duration-1500 ease-in-out transform ${
                currentSlide === index
                  ? "opacity-100 translate-x-0 delay-50"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {slide.title}
            </h2>

            {/* Description */}
            <p
              className={`text-lg mb-4 lg:pr-[700px] transition-all duration-1500 ease-in-out transform ${
                currentSlide === index
                  ? "opacity-100 translate-x-0 delay-250"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {slide.description}
            </p>

            {/* Share Button */}
            <Link
              to={"/product"}
            
              className={`px-4 py-2 bg-[#3ebbe1] rounded hover:bg-blue-600 hover:text-white transition-all duration-15   00 ease-in-out transform ${
                currentSlide === index
                  ? "opacity-100 translate-x-0 delay-450"
                  : "opacity-0 translate-x-full"
              }`}
            >
              Share Now
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <button
          onClick={() =>
            setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
          }
          className="p-3 bg-gray-800 rounded-full text-white"
        >
          &#10094;
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <button
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % slides.length)
          }
          className="p-3 bg-gray-800 rounded-full text-white"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
