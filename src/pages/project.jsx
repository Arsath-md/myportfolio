import proj from "../pages/project.module.css"
import { Paper } from "@mui/material"
import pic from "../assets/react.svg"
import { useEffect, useState } from "react";
import { toast,ToastContainer } from "react-toastify";
export default function Projects(){

  const [getdata ,setGetdata] = useState([]);

     const paperStyle = {
  padding: "10px",
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.22)",
  color: "black",
  boxShadow: "0px 2px 5px wheat",
  backdropFilter: "blur(10px)",
  margin:"10px",
};
  useEffect(()=>{
        fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setGetdata(data) )
        .catch(err => console.log("error")
        )
  },[])  

    return(
        <>
     
      <div  id="project">
  <h1 className="text-center ">projects</h1>

  <div >
             <ToastContainer toastStyle={{fontWeight:"bolder",fontSize:"20px"}}/>

    <div  data-aos="fade" className={`${proj.projects}`} >

      {
        getdata.map((value,keys)=>(
                    <Paper
                      className="d-flex flex-column"
                      elevation={5}
                      sx={{ ...paperStyle, height: "100%" }}
                      key={keys}
                    >          
                      <div><img src={value.imgs} alt="pix" className={`${proj.img}`}/></div>
                      <div>                      <h1>{value.title}</h1></div>
                      <div><p>{value.desc}</p></div>
                            <div className={`${proj.stack} mt-auto`}>
                              {value.stack.map((val,k)=>(
                                  <i className={val} key={k}></i>   
                               ))}
                            </div>
                  
                        <div className="mt-auto d-flex justify-content-around">                        
                            <button type="text" className={`${proj.glowBtn}`}>
                          <a href={value.git} style={{textDecoration:"none"}}>Github</a>
                        </button>
                        
                        
                    
                        
                        <button type="button" className={proj.glowBtn} onClick={() => {
                                    if (!value.live) {
                                      toast.info("The project will live soon..");
                                    }
                                  }}>
                        <a href={value.live} target="_blank" style={{ textDecoration: "none" }} >
                          Live demo
                        </a>
                      </button>

                  </div>

         </Paper>
        ))
      }

     
    </div> 
 
   
  </div>
</div> 

        </>
    )
}