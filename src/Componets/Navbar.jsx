import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <div className='bg-black'>
        <div className="flex flex-col md:flex-row justify-between items-center shadow-md py-5 mx-4 md:mx-20">
            
          {/* Left side: Phone, Email, Address */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-7">
            <div className="flex items-center text-white gap-1">
              <FaPhoneAlt className="mr-1 text-[22px] text-[#3ebbe1]" />
              <span> +91 91579 24641</span>
            </div>
            <div className="flex items-center text-white gap-1">
              <FaEnvelope className="mr-1 text-[22px] text-[#3ebbe1]" />
              <span>sales@shivaysensor.com</span>
            </div>
            <div className="flex items-center text-white gap-1">
              <FaMapMarkerAlt className="mr-1 text-[22px] text-[#3ebbe1]" />
              <span> 45, RK Industrial Estate, Bhuvaladi Road, Kathwada, Ahemdabad-382430.</span>
            </div>
          </div>

          {/* Right side: Social Icons */}
          <div className="flex space-x-4 text-xl text-white">
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
</div>

          </div>
        </div>
    
    </>
  );
};

export default Navbar;
