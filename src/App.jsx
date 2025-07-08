// import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/home"
import Projects from "./pages/project"
import ContactUs from "./pages/contact"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

AOS.init({
  offset: 120,
  delay: 0,
  duration: 1500,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

  return (
  <>
  
   
    <Home/>
    <Projects/>
    <ContactUs/>
    
  </>
  )
}

export default App
