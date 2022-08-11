import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from "./components/info/Info";
import Footer from './components/footer/Footer';


function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])


  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight}/>
      <Main />
      <About />
      <Slider />
      <Info/>
      <Footer/>
      
    </div>
  );
}

export default App;
