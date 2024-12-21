import React from 'react';

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      image: "/images/blog-1.jpeg",
      title: "Understanding Beam Type Load Cells: Design and Functionality Explained",
      content: "Beam type load cells are a cornerstone in the world of weighing technology, known for their accuracy, reliability, and versatility. These load cells are widely used across various industries, from manufacturing and logistics to agriculture and food processing. ",
    },
    {
      id: 2,
      image: "/images/blog-2.png",
      title: "Enhancing Industrial Automation with Digital Weight Transmitters: Choosing the Right One for Your System",
      content: "In the rapidly evolving industrial landscape, precision, efficiency, and seamless integration are crucial. Digital weight transmitters have emerged as indispensable components, revolutionizing how industries measure and manage weight data.",
    },
    {
      id: 3,
      image: "/images/blog-44.jpeg",
      title: "How to Choose the Right Single Point Platform Load Cell for Your Application",
      content: "Selecting the appropriate single point platform load cell for your application is crucial to ensuring accurate measurements, reliable performance, and longevity of your weighing systems. With a multitude of options available in the market, making the right choice can be daunting. ",
    },
    {
      id: 4,
      image: "/images/blog-4.webp",
      title: "Understanding S-Type Load Cells: Applications and Benefits",
      content: "In the realm of precise weight measurement and force sensing, S-type load cells stand out as versatile and reliable devices. Whether you are in the manufacturing, transportation, or healthcare sector, understanding the applications and benefits of S-type load cells can greatly enhance the accuracy and efficiency of your operations.",
    },
  ];

  const categories = ["Load-Cell", "Load-Amplifier", "Load-Indicator", "Load-Accessories", "Load-Assembly", "Straingauge"];
  const recentBlogs = ["Understanding Beam Type Load Cells", "Enhancing Industrial Automation with Digital Weight Transmitters", "Choose the Right Single Point Platform Load Cell", "Understanding S-Type Load Cells"];

  return (
    <>
      <div className='px-8 lg:px-28 mt-16'>
        <h1 className="lg:text-[30px] text-[25px] font-bold border-[#3ebbe1] pb-3">
          Our Blogs
        </h1>
        <hr className="lg:w-[170px] w-[130px] border-[#3ebbe1] border-b-4" />
      </div>

      <div className="container mx-auto my-12 px-6 lg:px-20">
        <div className="flex flex-col md:flex-row">
          {/* Left Side (Blogs) */}
          <div className="w-full md:w-3/4 lg:mb-28">
            {blogs.map((blog) => (
              <div key={blog.id} className="mb-8 flex flex-col md:flex-row  bg-white shadow-md rounded-lg overflow-hidden">
                {/* Blog Image */}
                <div className="w-full md:w-1/3 h-48 md:h-80">
                  <img src={blog.image} alt={blog.title} className="object-cover w-full h-full" />
                </div>

                {/* Blog Content */}
                <div className="w-full md:w-2/3 px-4  ">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-700 mb-4">{blog.content}</p>
                  {/* <button className="text-black hover:text-white bg-slate-400 hover:bg-black p-2 px-4 font-semibold">
                    Read More
                  </button> */}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side (Sidebar) */}
          <div className="w-full md:w-1/4 md:ml-8 mt-8 md:mt-0">
            {/* Search Box */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Search</h3>
              <input
                type="text"
                placeholder="Search blog..."
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Categories */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="mb-2 text-gray-600">
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Blogs */}
            <div className="bg-white p-6 rounded-lg shadow-md lg:mb-0 mb-20">
              <h3 className="text-xl font-semibold mb-4">Recent Blogs</h3>
              <ul>
                {recentBlogs.map((blog, index) => (
                  <li key={index} className="mb-2 text-blue-500 hover:text-blue-700">
                    {blog}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
