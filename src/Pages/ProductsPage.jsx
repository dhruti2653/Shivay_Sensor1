import React from 'react'
import { Link } from 'react-router-dom'; // Import Link for navigation



const ProductsPage = () => {

    const products = [
      {
        id: 1,
        image: "/images/load-cell1.jpeg",
        title: "Load Cell",
        link:'/loadcell',
      },
      {
        id: 2,
        image: "/images/loadIndicator2.webp",
        title: "Load Indicator",
         link:'/loadindicator',
      },
      {
        id: 3,
        image: "/images/blog-2.png",
        title: "Load Cell Amplifier",
        link:'/loadamplifier',
      },
      {
        id: 4,
        image: "/images/loadaccessories.webp",
        title: "Load Cell Accessories",
        link:'/loadaccessories',
      },
      {
        id: 5,
        image: "/images/loadassembly3.png",
        title: "Load Cell Assembly",
        link:'/loadassembly',
      },
      {
        id: 6,
        image: "/images/straingauge.jpg",
        title: "Stain Gauge & Adhesive",
        link:'/loadstaingauge',
      },

    ];

  return (
 <>
 
 <div className='lg:px-20 px-7 lg:mt-20 mt-14 mb-52 lg:mb-60'>

 <h1 className="lg:text-[30px] text-[25px] font-bold border-[#3ebbe1] pb-3 ">
        Our Products
      </h1>
      <hr className="lg:w-[220px] w-[180px] border-[#3ebbe1] border-b-4" />
            

             {/* Blog Posts - Using Grid for two columns */}
        <div className="grid grid-cols-1 lg:mt-16 mt-9  sm:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border lg:my-0 rounded-tl-[40px] rounded-br-[40px] border-gray-300 shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:scale-105"
            // Remove inline style and use Tailwind's responsive height classes
            >
              {/* Blog Image */}
              <div className="w-full h-[230px] p-8  sm:h-[300px] lg:h-[300px] xl:h-[300px] rounded-tl-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
              </div>
               


              {/* Blog Content */}
              <Link to={product.link} >
              <div className="p-4 h-auto flex flex-col sm:flex-row items-center sm:items-center shadow-xl bg-slate-200 ">
                {/* Title - Takes up majority of the space */}

                
                <h2 className="text-[23px] text-center p-5  font-medium mb-2 sm:mb-0 sm:flex-1">{product.title}</h2>
              

                {/* Button */}
                {/* <button className="text-white bg-slate-400 hover:bg-black px-4 py-2 font-semibold flex-shrink-0 sm:ml-4">
                  Read More
                </button> */}
              </div>
              </Link>
            </div>
          ))}
        </div>
 </div>
 
 </>
  );
};

export default ProductsPage;
