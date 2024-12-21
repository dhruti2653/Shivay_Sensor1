import React from 'react';
import { Link } from 'react-router-dom';


const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "/images/blog-1.jpeg",
      title: "Understanding Beam Type Load Cells",
    },
    {
      id: 2,
      image: "/images/blog-2.png",
      title: "Enhancing Industrial Automation with Digital Weight Transmitters",
    },
    {
      id: 3,
      image: "/images/blog-3.jpg",
      title: "How to Choose the Right Single Point Platform Load Cell",
    },
    {
      id: 4,
      image: "/images/blog-4.webp",
      title: "Understanding S-Type Load Cells",
    },
  ];

  return (
    <>
      <div className="lg:px-20 px-8 mt-16">
        <h1 className="lg:text-[30px] text-[25px] font-bold border-[#3ebbe1] pb-3">Our Blogs</h1>
        <hr className="lg:w-[170px] w-[130px] border-[#3ebbe1] border-b-4" />
      </div>

      <div className="container px-6 lg:px-20 mt-9 lg:pr-10">
        {/* Blog Posts - Using Grid for two columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border lg:my-0 rounded-tl-[40px] rounded-br-[40px] border-gray-300 shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:scale-105"
            // Remove inline style and use Tailwind's responsive height classes
            >
              {/* Blog Image */}
              <div className="w-full h-[230px] sm:h-[300px] lg:h-[300px] xl:h-[300px] rounded-tl-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-[240px]"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4 h-auto flex flex-col sm:flex-row items-center sm:items-start justify-between">
                {/* Title - Takes up majority of the space */}
                <h2 className="text-xl font-semibold mb-2 sm:mb-0 sm:flex-1">{blog.title}</h2>

                {/* Button */}
                {/* <button className="text-white bg-slate-400 hover:bg-black px-4 py-2 font-semibold flex-shrink-0 sm:ml-4">
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* "Our Blogs" Button at the Bottom */}
        <div className="text-center mb-7 mt-2">
          <Link to={"/blog"} className="text-white bg-[#3ebbe1] hover:bg-[#2a9cb5] py-3  px-6 rounded-lg font-semibold">
            Our Blogs
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blog;
