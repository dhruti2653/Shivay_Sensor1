import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header  from './Componets/Header';
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProductsPage from './Pages/ProductsPage';
import ServicePage from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import LoadCell from './Componets/LoadCell';
import LoadIndicator from './Componets/LoadIndicator';
import LoadAmplifier from './Componets/LoadAmplifier';
import LoadAccessories from './Componets/LoadAccessories';
import LoadAssembly from './Componets/LoadAssembly';
import LoadStaingauge from './Componets/LoadStaingauge';

function App() {
  return (
   <>
   <Router>
    <div>
    <Navbar />
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductsPage />}/>
      <Route path='/service' element={<ServicePage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/loadcell' element={<LoadCell/>}/>
      <Route path='/loadindicator' element={<LoadIndicator/>}/>
      <Route path='/loadamplifier' element={<LoadAmplifier/>}/>
      <Route path='/loadaccessories' element={<LoadAccessories/>}/>
      <Route path='/loadassembly' element={<LoadAssembly/>}/>
      <Route path='/loadstaingauge' element={<LoadStaingauge/>}/>

    </Routes>
    <Footer/>
    </div>
   
   </Router>
   </>
    
  );
}

export default App;
