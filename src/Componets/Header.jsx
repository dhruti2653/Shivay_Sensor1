import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger menu icons
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">

            {/* Logo and Name */}
            <div className="flex items-center space-x-2">
              <Link to="/">
                <img src="..\images\logo.jpeg" alt="Logo" className="h-20 w-20" />
              </Link>
              <Link to={"/"}>
              <h1 className="text-xl font-semibold text-gray-800">Sivay sensor</h1>
              </Link>
            </div>

            {/* Center: Menu */}
            <nav className="hidden md:flex space-x-8 ">

            <ul className="flex font-medium text-[19px] space-x-11">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link to="/product" className="text-gray-700 hover:text-blue-600">Products</Link>
          </li>
          <li>
            <Link to="/service" className="text-gray-700 hover:text-blue-600">Services</Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blogs</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
          </li>
        </ul>
{/* 
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a> */}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
                {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
              </button>
            </div>

            {/* Right: Get Quotes Button */}
            <div className="hidden md:flex">
            <Link
              to={"/contact"}
               className="bg-[#3ebbe1] text-white py-2 px-4 rounded hover:bg-[#31a1b2] transition">
                Get Quotes
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <nav className="md:hidden space-y-4 py-4">
           
           <ul className="flex flex-col space-y-3 text-center ">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link to="/product" className="text-gray-700 hover:text-blue-600">Products</Link>
          </li>
          <li>
            <Link to="/service" className="text-gray-700 hover:text-blue-600">Services</Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blogs</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
          </li>
        </ul>

              {/* Get Quotes Button in Mobile Menu */}
              <div className='flex justify-center items-center'>

              <Link
              to={"/contact"} className="block bg-[#3ebbe1] w-[150px] text-center text-white py-2 px-4 rounded hover:bg-[#39bace] transition">
                  Get Quotes
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
