import { useState, useEffect, useRef } from "react";
// import { useNavigate } from 'react-router-dom';
import stl from "../pages/home.module.css";
import dev from "../assets/dev.svg";
import { LinearProgress } from "@mui/material";
import Nav from "../components/nav";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AppsIcon from '@mui/icons-material/Apps';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Home() {
  // typewriting effect
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (window.Typewriter) {
      const typewriter = new window.Typewriter(typewriterRef.current, {
        loop: true,
        delay: 75,
      });

      typewriter
        .typeString("frontend developer")
        .pauseFor(1500)
        .deleteAll()
        .typeString("backend developer")
        .pauseFor(1500)
        .deleteAll()
        .typeString("UI/UX designer")
        .pauseFor(1500)
        .deleteAll()
        .start();
    }
  }, []);

  // progress bar
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      if (scrolled >= 30 && scrolled <= 60) setProgress(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progstyle = {
    padding: "5px",
    borderRadius: "10px",
  };

  // speed dial scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav />

      {/* HERO SECTION */}
      <div className={stl.home} id="home">
        <img src={dev} alt="image of mine" style={{ height: "200px" }} />
        <h1>Mohamed Arsath</h1>
        <div>
          <h1 ref={typewriterRef}></h1>
        </div>

        <h5 className={stl.text}>
          Full-stack web developer passionate about UI/UX design. I craft robust
          front-end and back-end solutions and work beautifully on all devices.
        </h5>

        <div className={stl.btn}>
          <button className={stl.glowBtn}>Explore</button>
          <button className={stl.glowBtn}>Download CV</button>
        </div>
      </div>

      {/* ANIMATION STYLE */}
      <div className={stl.newscontainer}>
        <div className={stl.newstext}>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
          <i
            className="devicon-nodejs-plain-wordmark colored"
            style={{ fontSize: "200px" }}
          ></i>
          <i className="devicon-express-original-wordmark colored"></i>
          <i
            className="devicon-tailwindcss-plain-wordmark colored"
            style={{ fontSize: "200px" }}
          ></i>
          <i
            className="devicon-github-original-wordmark"
            style={{ color: "white" }}
          ></i>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            style={{
              height: "120px",
              marginRight: "100px",
              marginBottom: "100px",
            }}
          />
          <i className="devicon-git-plain-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            style={{
              height: "150px",
              marginRight: "100px",
              marginBottom: "100px",
            }}
          />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div style={{ textAlign: "center" }} id="about">
        <h1 className="m-5">About me</h1>
        <div data-aos="fade-right" className={stl.innerabout}>
          <div className="d-flex flex-column justify-content-start">
            <img
              src={dev}
              alt="image of mine"
              style={{ height: "200px", margin: "25px" }}
            />
            <h5>
              I’m a full-stack web developer skilled in building robust
              front-end and back-end solutions, with a strong passion for UI and
              UX design. I love transforming ideas into seamless,
              high-performing web applications that work
              flawlessly across all devices, creating engaging digital
              experiences that connect users and technology.
            </h5>
          </div>

          <div data-aos="fade-left" className={stl.progress}>
            <div>
              <i className="devicon-html5-plain-wordmark colored"></i>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <LinearProgress
                sx={progstyle}
                variant="determinate"
                value={progress ? 80 : 0}
              />
            </div>
            <div>
              <i className="devicon-react-original-wordmark colored"></i>
              <LinearProgress
                sx={progstyle}
                variant="determinate"
                value={progress ? 50 : 0}
              />
            </div>
            <div>
              <i className="devicon-nodejs-plain-wordmark colored"></i>
              <i className="devicon-express-original-wordmark"></i>
              <LinearProgress
                sx={progstyle}
                variant="determinate"
                value={progress ? 60 : 0}
              />
            </div>
            <div>
              <i className="devicon-mysql-plain-wordmark"></i>
              <LinearProgress
                sx={progstyle}
                variant="determinate"
                value={progress ? 70 : 0}
              />
            </div>
            <div>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
              <LinearProgress
                sx={progstyle}
                variant="determinate"
                value={progress ? 20 : 0}
              />
            </div>
            <div>
              <h5>UI & UX</h5>
              <LinearProgress
                sx={progstyle}
                variant="determinate"
                value={progress ? 80 : 0}
              />
            </div>
          </div>
        </div>
      </div>

              {/* speed dail */}

   <SpeedDial
  ariaLabel="Navigation"
  sx={{
    position: "fixed",
    bottom: { xs: 16, sm: 30, md: 50 },
    right: { xs: 16, sm: 30, md: 50 },
    zIndex: 9999,
    p: "20px",
  }}
  icon={<AppsIcon />}
>
  <SpeedDialAction
    icon={<HomeIcon />}
    tooltipTitle="Home"
    onClick={() => window.location.href = "#home"}
    sx={{
      background: "green",
      '&:hover': {
        background: "black",
      },
    }}
  />
  <SpeedDialAction
    icon={<InfoIcon />}
    tooltipTitle="About"
    onClick={() => scrollToSection("about")}
    sx={{
      background: "green",
      '&:hover': {
        background: "black",
      },
    }}
  />
  <SpeedDialAction
    icon={<WorkIcon />}
    tooltipTitle="Projects"
    onClick={() => scrollToSection("project")}
    sx={{
      background: "green",
      '&:hover': {
        background: "black",
      },
    }}
  />
  <SpeedDialAction
    icon={<ContactMailIcon />}
    tooltipTitle="Contact"
    onClick={() => scrollToSection("contact")}
    sx={{
      background: "green",
      '&:hover': {
        background: "black",
      },
    }}
  />
</SpeedDial>

    </>
  );
}
