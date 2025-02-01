import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      {/* News Letter  */}
      <div className="absolute flex flex-col lg:flex-row w-full lg:pt-20 h-auto mt-[-140px] px-5 lg:px-24 z-10">
        {/* Left Side */}
        <div className=" w-full bg-[#3ebbe1] p-5 lg:p-11 rounded-3xl  flex lg:flex-row flex-col  gap-x-7">
          <h1 className="text-[25px] lg:text-[40px] font-bold text-white">
            Get exclusive deals by signing up
            to our Newsletter.
          </h1>

          {/* Right Side */}
          <div className="lg:w-[45%] w-full bg-[#3ebbe1]  flex flex-row items-center ">
            <form className="flex flex-col  w-full">
              <div className="flex flex-row gap-x-10">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="px-5 py-3 text-gray-600 text-[15px] rounded-xl bg-white w-full"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="px-5 py-3 text-gray-600 text-[15px] rounded-xl bg-white w-full"
                />
              </div>
              <button className="mt-4 px-6 py-3 bg-white text-[#3ebbe1] font-bold hover:bg-black hover:text-white rounded-xl w-full">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Main Section */}
      <div className="bg-black text-white py-10 lg:px-20 items-center flex justify-center px-5 pt-[150px] lg:pt-[180px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
          {/* Column 1: Company Inf o */}
          <div className="space-y-4 lg:pr-8">
            <div className="flex flex-row">
              <img src="../images/logofooter.png" alt="Logo" className="h-20" />
              <h1 className="text-xl font-semibold pt-6 pl-3">Shivay Sensor</h1>
            </div>
            <p>Shivay Sensor provides innovative solutions in the field of weighing systems.</p>
            <div className="flex space-x-4 text-2xl text-white">
              {/* Facebook Icon */}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-[#3ebbe1]" />
              </a>

              {/* Twitter Icon */}
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-[#3ebbe1]" />
              </a>

              {/* Instagram Icon */}
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-[#3ebbe1]" />
              </a>
              <a href="https://www.youtube.com/@shivaysensor" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-[#3ebbe1]" />
              </a>
            </div>

          </div>

          {/* Column 2: Useful Links */}
          <div className="space-y-4">
            <h1 className="text-lg font-bold">Useful Links</h1>
            <ul className="space-y-2 text-[#E0E0E0]">
              <li>
                <Link to="/" className="text-white hover:text-blue-600 cursor-pointer">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-blue-600 cursor-pointer">About</Link>
              </li>
              <li>
                <Link to="/product" className="text-white hover:text-blue-600 cursor-pointer">Products</Link>
              </li>
              <li>
                <Link to="/service" className="text-white hover:text-blue-600 cursor-pointer">Services</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white hover:text-blue-600 cursor-pointer">Blogs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-blue-600 cursor-pointer">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-4 ">
            <h1 className="text-lg font-bold">Our Products</h1>
            <ul className="space-y-2 text-[#E0E0E0]">
              <li className="cursor-pointer">     <Link to="/loadcell" className="text-white hover:text-blue-600 cursor-pointer">Load Cell</Link>
              </li>
              {/* <li className="cursor-pointer">  <Link to="/loadstaingauge" className="text-white hover:text-blue-600 cursor-pointer">Straingauge    </Link> */}
              {/* </li> */}
              <li className="cursor-pointer">  <Link  to="/loadaccessories" className="text-white hover:text-blue-600 cursor-pointer">Load Accessories   </Link>
              </li>
              <li className="cursor-pointer">     <Link to="/loadindicator" className="text-white hover:text-blue-600 cursor-pointer">Load Indicator</Link>
              </li>
              <li className="cursor-pointer">   <Link to="/loadassembly" className="text-white hover:text-blue-600 cursor-pointer">Load Assembly  </Link>
              </li>
              {/* <li className="cursor-pointer">   <Link to="/loadamplifier" className="text-white hover:text-blue-600 cursor-pointer">Load Amplifier  </Link> */}
              {/* </li> */}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4 lg:pr-7">
            <h1 className="text-lg font-bold">Get In Touch</h1>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-[40px]" />
              <span>
                45, RK Industrial Estate, Bhuvaladi Road, Kathwada,  Ahemdabad  - 382430.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <FiPhone className="text-2xl" />
              <a href="tel:+91 92659 70103"> +91 91579 24641</a>
            </div>
            <div className="flex items-start space-x-3">
              <FiMail className="text-2xl" />
              <a href="mailto:amarjeet94.k@gmail.com">sales@shivaysensor.com</a>
            </div>
          </div>


        </div>

      </div>

      {/* copy right section  */}


      <div class="bg-black w-full h-full p-4 text-center text-white border-t-2 border-white">
        <p> Copyright © 2024 . MakeMyVision Technology. All Rights Reserved.</p>						</div>

    </>
  );
};

export default Footer;
