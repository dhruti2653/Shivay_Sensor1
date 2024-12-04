import React from 'react';
import Carousel from '../Componets/Carousel';
import About from '../Componets/About';
import Product from '../Componets/Product';
import Service from '../Componets/Service';
import FeaturedService from '../Componets/FeaturedService';
import Blog from '../Componets/Blog';
import Testimonial from '../Componets/Testimonial';

const HomePage = () => {
  return (
    <>
    
    <Carousel/>
    <About/>
    <Product/>
    <Service/>
    <Blog/>
    <FeaturedService/>
    <Testimonial />
    </>
  );
};

export default HomePage;
