/*import logo from './logo.svg';

import React  from 'react';
import './App.css';

import Header from './Components/header/Header';
import Navbar from './Components/nav/Navbar';
import About from './Components/about/About';
import Experience from './Components/experience/Experience';
import Servic from './Components/servic/Servic';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Navbar from './Components/nav/Navbar';



const App=()=> {
   return(
      
     
        <>
          <Header/>
          <Navbar/>
          <About/>
          <Experience/>
          <Servic/>
          <Portfolio/> 
          <Testimonials/> 
          <Contact/> 
          <Footer/>   
        </>
    )
   }

export default App;
*/


import React from 'react';
import './App.css';

import Header from './Components/header/Header';
import Navbar from './Components/nav/Navbar'; // <-- Keep only one import statement for Navbar
import About from './Components/about/About';
import Experience from './Components/experience/Experience';
import Services from './Components/services/Services'; 
import Portfolio from './Components/portfolio/Portfolio';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
