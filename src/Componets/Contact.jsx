import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='w-full h-auto flex '>
    <div className="px-5 lg:px-20 mb-11 lg:text-left">
                        <h1 className="lg:text-[30px] text-[25px] font-bold  pb-3">
                            Our Products
                        </h1>
                        <hr className="lg:w-[220px] w-[180px] border-[#3ebbe1] border-b-4" />
                        <div className="flex flex-col md:flex-row w-full min-h-screen p-6 bg-gray-100">
      {/* Form Section */}
      <div className="w-full md:w-7/10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-[40px] font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
            <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Phone" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <input type="text" id="subject" className="w-full p-2 border border-gray-300 rounded" placeholder="Subject" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your Message"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="w-full md:w-3/10 p-6 bg-blue-500 text-white shadow-lg rounded-lg mt-6 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p><strong>Email:</strong> sales@shivaysensor.com</p>
        <p><strong>Address:</strong> 45, RK Industrial Estate,Bhuvaladi Road, Kathwada</p>
        <p><strong>Phone:</strong>  +91 91579 24641</p>
      </div>
    </div>

                        
                        </div>
    </div>
    </>
  );
};

export default Contact;
