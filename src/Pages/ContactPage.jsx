import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


const ContactPage = () => {
  return (
    <>
      <div className='flex w-full h-full lg:mt-20'>
        <div className="px-5 w-full mb-11 lg:text-left">
          <div className='lg:px-28 mb-4'> <h1 className="lg:text-[30px] text-[25px] font-bold  pb-3">
            Contact Us
          </h1>
            <hr className="lg:w-[190px] w-[180px] border-[#3ebbe1] border-b-4" />
          </div>

          <div className="w-full lg:px-20 lg:mt-10">
            {/* Form and Contact Info Section */}
            <div className=" flex flex-col md:flex-row  w-full bg-gray-100        ">
              {/* Form Section */}
              <div className=" lg:w-1/1 z-40 md:w-full p-8  bg-white shadow-lg flex flex-col justify-center">
                <h2 className="text-3xl font-bold -mt-8 mb-3">Feedback Form</h2>
                <p className='pb-5'>Your email address will not be published. Required fields are marked *    </p>
                <form className="">

                  <label htmlFor="name" className="block text-sm mt-2 font-medium">Name</label>
                  <input type="text" id="name" className="w-full p-3 border mt-2 border-gray-300 rounded" placeholder="Your Name" />


                  <label htmlFor="email" className="block text-sm mt-2 font-medium">Email</label>
                  <input type="email" id="email" className="w-full p-3 border mt-2 border-gray-300 rounded" placeholder="Your Email" />

                  <label htmlFor="phone" className="block text-sm mt-2 font-medium">Phone</label>
                  <input type="tel" id="phone" className="w-full p-3 border mt-2 border-gray-300 rounded" placeholder="Your Phone" />

                  <label htmlFor="subject" className="block text-sm mt-2 font-medium">Subject</label>
                  <input type="text" id="subject" className="w-full p-3 border mt-2 border-gray-300 rounded" placeholder="Subject" />

                  <label htmlFor="message" className="block text-sm mt-2 font-medium">Message</label>
                  <textarea id="message" className="w-full p-3 border border-gray-300 mt-2 rounded" rows="4" placeholder="Your Message"></textarea>
                  <div className=''>
                    <button type="submit" className="w-auto px-16 bg-blue-600 text-white mt-3 p-3 rounded">Submit</button>
                  </div>
                </form>
              </div>

              {/* Contact Info Section */}
              <div className="z-40 lg:w-1/3 md:w-full bg-blue-500 h-full text-white p-4 lg:p-14 flex flex-col justify-center space-y-6">
                <h1 className='font-medium text-[20px] '>Contact Us</h1>
                <hr className='w-24 font-bold '></hr>
                <p>Please contact us, We are sure that you can receive our reply as soon as possible.</p>
                {/* Email Box */}
                <div className="bg-blue-600  p-6 rounded-lg flex items-center space-x-4">
                  <FaEnvelope className="text-3xl   " />
                  <div>
                    <h3 className="text-xl font-bold">Email</h3>
                    <p> sales@shivaysensor.com</p>
                  </div>
                </div>

                {/* Phone Box */}
                <div className="bg-blue-600 p-6 rounded-lg flex items-center space-x-4">
                  <FaPhone className="text-[30px]" />
                  <div>
                    <h3 className="text-xl font-bold">Phone</h3>
                    <p>+91 91579 24641</p>
                  </div>
                </div>

                {/* Address Box */}
                <div className="bg-blue-600 p-6 rounded-lg flex items-center space-x-4">
                  <FaMapMarkerAlt className="lg:text-[60px] text-3xl" />
                  <div>
                    <h3 className="text-xl font-bold">Address</h3>
                    <p>45, RK Industrial Estate,Bhuvaladi Road, Kathwada</p>
                  </div>
                </div>
              </div>
            </div>

          </div>



          {/* Full Width Map Section */}
          <div className=" w-full lg:h-[600px] h-[400px] bg-gray-200 mb-64 mt-[-200px]">
          <iframe
    title="Google Map Vadodara"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.387973656992!2d73.16454031496398!3d22.307158885318557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5cfd888fba3%3A0x2e2360e00e947611!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1635202567639!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
          </div>
        </div>


      </div>
    </>
  );
};

export default ContactPage;
