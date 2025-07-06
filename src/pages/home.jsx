import {  useEffect, useRef } from "react";
import stl from "../pages/home.module.css"
import dev from "../assets/dev.svg"
import {LinearProgress} from "@mui/material"
import Nav from "../components/nav";
// import Nav from "../components/nav";

export default function Home(){
     
    const typewriterRef = useRef(null);

  useEffect(() => {
    if (window.Typewriter) {
      const typewriter = new window.Typewriter(typewriterRef.current, {
        loop: true,
        delay: 75,
      });

      typewriter
        .typeString('frontend developer')
        .pauseFor(1500)
        .deleteAll()
        .typeString('backend developer')
        .pauseFor(1500)
        .deleteAll()
        .typeString('UI/UX designer')
        .pauseFor(1500)
        .deleteAll()
        .start();
    }
  }, []);

    return(
      <>
          <Nav/>
       <div className={stl.home}>
                         <img src={dev} alt="image of mine" style={{height:"200px"}}/>
            <h1>Mohamed arsath</h1>
<div>  <h1 ref={typewriterRef}></h1></div>
          

            <h5 className={stl.text}>Full-stack web developer passionate about UI/UX design. I craft robust front-end and back-end solutions and work beautifully on all devices.</h5>

            <div className={stl.btn}>
                    <button className={stl.glowBtn}>Explore</button>
                <button className={stl.glowBtn}>download cv</button>
            </div>
       </div>

        {/* animation style */}
         <div className={stl.newscontainer}>
      <div className={stl.newstext}>
     
            <i className="devicon-html5-plain-wordmark colored"></i>
          
            <i className="devicon-css3-plain-wordmark colored"></i>
          
            <i className="devicon-javascript-plain colored"></i>
          
            <i className="devicon-react-original-wordmark colored"></i>
          
            <i className="devicon-nodejs-plain-wordmark colored" ></i>
          
            <i className="devicon-express-original-wordmark colored"></i>
          
            <i className="devicon-tailwindcss-plain-wordmark colored" style={{fontSize:"200px"}}></i>
          
            <i className="devicon-github-original-wordmark " style={{color:"white"}}></i>
            
            

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" style={{height:"120px",marginRight:"100px",marginBottom:"100px"}} />


            <i className="devicon-git-plain-wordmark colored"></i>


            <i className="devicon-mongodb-plain-wordmark colored"></i>
          

            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"  style={{height:"150px", marginRight:"100px",marginBottom:"100px"}}  />
          
          
          
      </div>
    </div>

    {/* about page */}

    <div style={{textAlign:"center"}}>
              <h1 className="m-5">About me</h1>
       <div className={stl.innerabout}> 
             <div className="d-flex flex-column justify-content-start">
                          <img src={dev} alt="image of mine" style={{height:"200px",margin:"25px"}}/>

              <h5>I’m a full-stack web developer skilled in building robust front-end and back-end solutions, with a strong passion for UI and UX design. I love transforming ideas into seamless, high-performing web applications that look great and work flawlessly across all devices, creating engaging digital experiences that connect users and technology.</h5>
             </div>
             <div className={stl.progress}>
                <div >
                   <i className="devicon-html5-plain-wordmark colored"></i>
                    <i className="devicon-css3-plain-wordmark colored"></i>
                  <LinearProgress variant="determinate" value={80} /> 
               </div>
                 <div >
           <i className="devicon-react-original-wordmark colored"></i>
                  <LinearProgress variant="determinate" value={50} /> 
               </div>
                 <div >
                         <i className="devicon-nodejs-plain-wordmark colored" ></i>
                          <i className="devicon-express-original-wordmark "></i>
                  <LinearProgress variant="determinate" value={70} /> 
               </div>
                 <div >
               <i className="devicon-mysql-plain-wordmark"></i>
                  <LinearProgress variant="determinate" value={60} /> 
               </div>
                 <div>
                
            <i className="devicon-mongodb-plain-wordmark colored"></i>
          
                  <LinearProgress variant="determinate" value={10} /> 
               </div>
                     <div>
                 <h5>UI & UX</h5>
                  <LinearProgress variant="determinate" value={80} /> 
               </div>
            </div>
             </div>
    </div>
     
      </>
    )
}
