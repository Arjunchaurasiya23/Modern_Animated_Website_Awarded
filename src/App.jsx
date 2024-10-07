import React from 'react';
//import { Navbar } from 'reactstrap';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/about';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Featured2 from './components/Featured2';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
    <Navbar />
     <LandingPage/>
     <Marquee/>
     <About/>
     <Eyes/>
     <Featured/>
     <Featured2/>
     <Cards/>
     <Footer/>



    </div>
  )
}

export default App