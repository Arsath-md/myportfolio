// import { useEffect, useState } from "react";
import nav from "./nav.module.css"
import logos from "../assets/real.png"


export default function Nav(){


 
  return (
      <nav className={nav.navbar}>
      <img src={logos} style={{height:"100px"}} alt="logo" />
      <h1 className={nav.logo}>Portfolio</h1>
      <ul className={nav.navlinks}>
       <li><a href="https://github.com/Arsath-md" target="_blank" rel="noopener noreferrer">
       <i className="devicon-github-original-wordmark"></i>
       </a></li>
       <li><a href="https://www.linkedin.com/in/mohamed-arsath-0a45b6347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
       <i className="devicon-linkedin-plain colored"></i>
       </a></li>
       <li><a href="https://twitter.com/vippi31?t=pr8M7A5ON2CLIeTXfubYkQ&s=09
" target="_blank" rel="noopener noreferrer">
       <i className="devicon-twitter-original"></i>
       </a></li>
      </ul>
    </nav>
  );
}
