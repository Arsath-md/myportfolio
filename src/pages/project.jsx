import proj from "../pages/project.module.css"
import { Paper } from "@mui/material"
import pic from "../assets/react.svg"


export default function Projects(){
     const paperStyle = {
  padding: "10px",
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.22)",
  color: "black",
  boxShadow: "0px 2px 5px wheat",
  backdropFilter: "blur(10px)",
  margin:"10px",
  

};

    return(
        <>
     
      <div  id="project">
  <h1 className="text-center ">projects</h1>

  <div className={`${proj.projects}`} >
    <div   data-aos="fade" >
     <Paper
  className="h-100 d-flex flex-column"
  elevation={5}
  sx={paperStyle}
>
        <img src={pic} alt="pix" />
        <h1>Nexus event</h1>
        <p> this project developed for the college level hackathon competion and this project is mainly focused on the announcements of the events in the colleges through their official website. 
        this project enables to apply for the respective event, or any placement related meetings are to be conducted by the college</p>
  <div className={`${proj.stack} mt-auto`}>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-mysql-plain-wordmark"></i>
          <i className="devicon-php-plain colored"></i>
        </div>
        <div className="mt-auto">
    <button type="text" className={`${proj.glowBtn}`}>
      git hub
    </button>
  </div>
      </Paper>
    </div> 
 
    <div   data-aos="fade"  >
     <Paper
  className="h-100 d-flex flex-column"
  elevation={5}
  sx={paperStyle}
>
        <img src={pic} alt="pix" />
        <h1>Nexus event</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci eos itaque cupiditate odit nulla maxime asperiores, tenetur velit praesentium, cumque quasi illo dolores at quibusdam? Omnis nihil dicta facere.</p>
      <div className={`${proj.stack} mt-auto`}>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
        </div>
        <div className="mt-auto">
    <button type="text" className={`${proj.glowBtn}`}>
      git hub
    </button>
  </div>
      </Paper>
    </div> 
 
    <div   data-aos="fade" >
     <Paper
  className="h-100 d-flex flex-column"
  elevation={5}
  sx={paperStyle}
>
        <img src={pic} alt="pix" />
        <h1>Nexus event</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel obcaecati, accusantium minus alias exercitationem ratione reiciendis quod molestiae sit iste temporibus quaerat hic aspernatur minima non repellendus magni tenetur esse?</p>
        <div className={`${proj.stack} mt-auto`}>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
        </div>
        <div className="mt-auto">
    <button type="text" className={`${proj.glowBtn}`}>
      git hub
    </button>
  </div>
      </Paper>
    </div>
  </div>
</div> 

        </>
    )
}