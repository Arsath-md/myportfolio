// import { useEffect, useState } from "react";
import nav from "./nav.module.css"


export default function Nav(){


 
  return (
      <nav className={nav.navbar}>
      <h1 className={nav.logo}>Portfolio</h1>
      <ul className={nav.navlinks}>
       <li><a href="https://github.com/Arsath-md" target="_blank" rel="noopener noreferrer">
       <i className="devicon-github-original-wordmark"></i>
       </a></li>
       <li><a href="/about">
       <i className="devicon-linkedin-plain colored"></i>
       </a></li>
       <li><a href="/contact">
       <i className="devicon-twitter-original"></i>
       </a></li>
      </ul>
    </nav>
  );
}
