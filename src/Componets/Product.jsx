import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const themes = [
    { theme: "dark", priClr: "#1e2022", secClr: "#333539" },
    { theme: "light", priClr: "#fff", secClr: "#cecece" },
    { theme: "custom", priClr: "#ccdff9", secClr: "#60a5fa" }
];

const slideTransforms = [
    'translate3d(-200%, -50%, 0rem) rotateY(45deg) scale(0.85)', 
    'translate3d(-150%, -50%, 3rem) rotateY(30deg) scale(0.9)', 
    // 'translate3d(-100%, -50%, 6rem) rotateY(15deg) scale(0.95)', 
    'translate3d(-50%, -50%, 9rem)', 
    // 'translate3d(0%, -50%, 6rem) rotateY(-15deg) scale(0.95)', 
    'translate3d(50%, -50%, 3rem) rotateY(-30deg) scale(0.9)', 
    'translate3d(100%, -50%, 0) rotateY(-45deg) scale(0.85)'
];

const ThreeDCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
    const items = [
        { id: 1, imgSrc: "/images/pan-cakeload-n.jpeg", title: "Load Cell" },
        { id: 2, imgSrc: "/images/blog-2.png", title: "Load Amplifier" },
        { id: 3, imgSrc: "/images/loadIndicator2.webp", title: "Load Indicator" },
        { id: 4, imgSrc: "/images/loadaccessories.webp", title: "Load Accessories" }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const changeTheme = (index) => {
        setCurrentThemeIndex(index);
    };

    useEffect(() => {
        const containerEle = document.querySelector('.container');
        const { priClr, secClr } = themes[currentThemeIndex];

        containerEle.setAttribute("data-theme", themes[currentThemeIndex].theme);
        containerEle.style.setProperty("--matchBg", `linear-gradient(to bottom right, ${priClr}, ${secClr})`);

        // Update slide transformations based on current index
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.style.transform = slideTransforms[(index + currentIndex) % slides.length];
        });
    }, [currentIndex, currentThemeIndex]);

    return (
        <>
            <div className="container mt-20 mb-6 w-full">
                <div className="component-header">
                    <div className="px-5 lg:px-20 mb-11 lg:text-left">
                        <h1 className="lg:text-[30px] text-[25px] font-bold pb-3">
                            Our Products
                        </h1>
                        <hr className="lg:w-[220px] w-[180px] border-[#3ebbe1] border-b-4" />
                        <p className="mt-10 text-[17px] text-[#898989] lg:pr-32">
                            At Shivay Sensor, we ensure that our long list of customers will not have to compromise on quality. We design, develop, and supply high-standard load cells to various industries including Healthcare, Automotive, Aerospace, and more.
                        </p>
                    </div>
                </div>

                {/* Responsive 3D Carousel */}
                <div className="slider-container flex flex-col items-center justify-center lg:gap-[2.5rem] sm:gap-[1.5rem] lg:pl-32 m-0 h-auto lg:w-[64rem] mt-9 lg:-mt-16 sm:w-full">
                    <div className="slider flex flex-row relative w-full lg:h-[80vh] md:h-[60vh] justify-center item-center sm:h-[50vh] sm:p-4 lg:p-8 bg-w">
                        {items.map((item, index) => (
                            <div key={item.id} className="slide bg-white z-10 absolute flex flex-col items-center justify-center rounded-lg shadow-lg lg:w-[17rem] lg:h-[22rem] sm:w-[8rem] sm:h-[12rem] transition-transform duration-700 ease-in-out">
                                <img src={item.imgSrc} alt={item.title} className="lg:w-[200px] lg:h-[200px] sm:w-[100px] lg:px-0 px-2 sm:h-[100px] object-contain" />
                                <h3 className="lg:text-xl text-[11px] font-semibold lg:py-2">{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Slider Buttons */}
                    <div className="slider-buttons lg:pt-0 lg:-mt-3 pt-28 gap-6 flex">
                        <button id="prev-slide" aria-label="Previous Slide" title="Go To Previous Slide" className="rounded-full shadow-md" onClick={prevSlide}>
                            &lt;
                        </button>
                        <button id="next-slide" aria-label="Next Slide" title="Go To Next Slide" className="rounded-full shadow-md" onClick={nextSlide}>
                            &gt;
                        </button>
                    </div>
                </div>

                {/* Show More Button */}
                <div className="text-center lg:-mt-5 mb-3 -mt-3">
                    <Link
                        to={"/product"}
                        className="text-white bg-[#3ebbe1] px-7 py-3 rounded-lg shadow-lg lg:ml-32">
                        Show More
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ThreeDCarousel;
