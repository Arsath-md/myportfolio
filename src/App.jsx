// import { useEffect } from "react";
import Home from "./pages/home"
import Projects from "./pages/project"
import Contact from "./pages/contact"
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';


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
    <Contact/>
    
  </>
  )
}
export default App