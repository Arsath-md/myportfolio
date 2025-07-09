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
     
      <div className="container text-center mt-5 pt-5 mb-5" id="project">
  <h1>projects</h1>

  <div className={`${proj.Projects} row`} >
    <div  className="col-12 col-sm-6 col-md-6 col-lg-4 mt-3" data-aos="fade" style={{ flex: "0 0 auto" }}>
      <Paper className="h-100" elevation={5} sx={paperStyle}>
        <img src={pic} alt="pix" />
        <h1>Nexus event</h1>
        <p> this project developed for the college level hackathon competion and this project is mainly focused on the announcements of the events in the colleges through their official website. 
        this project enables to apply for the respective event, or any placement related meetings are to be conducted by the college</p>
        <div className={proj.stack}>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-mysql-plain-wordmark"></i>
          <i className="devicon-php-plain colored"></i>
        </div>
        <button type="text" className={proj.glowBtn}>git hub</button>
      </Paper>
    </div> 
 
    <div  className="col-12 col-sm-6 col-md-6 col-lg-4 mt-3" data-aos="fade"  style={{ flex: "0 0 auto"}}>
      <Paper className="h-100" elevation={5} sx={paperStyle}>
        <img src={pic} alt="pix" />
        <h1>Nexus event</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci eos itaque cupiditate odit nulla maxime asperiores, tenetur velit praesentium, cumque quasi illo dolores at quibusdam? Omnis nihil dicta facere.</p>
        <div className={proj.stack}>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
        </div>
        <button type="text" className={proj.glowBtn}>git hub</button>
      </Paper>
    </div> 
 
    <div  className="col-12 col-sm-6 col-md-6 col-lg-4 mt-3" data-aos="fade" style={{ flex: "0 0 auto"}}>
      <Paper className="h-100" elevation={5} sx={paperStyle}>
        <img src={pic} alt="pix" />
        <h1>Nexus event</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel obcaecati, accusantium minus alias exercitationem ratione reiciendis quod molestiae sit iste temporibus quaerat hic aspernatur minima non repellendus magni tenetur esse?</p>
        <div className={proj.stack}>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
        </div>
        <button type="text" className={proj.glowBtn}>git hub</button>
      </Paper>
    </div>
  </div>
</div> 

        </>
    )
}