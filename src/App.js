// src/App.js
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Buttons from './components/Buttons';
import About from './components/About';
import Cards from './components/Cards';
import Parent from './components/Parent';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Scroll to a specific position if needed when the component mounts
    const offset = 120; // Height of the navbar
    const element = document.querySelector('#about');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Slider />
      <hr id="about"/>
      <div className='d-flex justify-content-center grid my-3'>
        <About />
      </div>
      <hr/>
      <Cards />
      <hr />
      <Parent />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
