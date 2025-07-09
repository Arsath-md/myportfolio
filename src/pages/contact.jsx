import{ useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        hifi4611,
        "YOUR_TEMPLATE_ID", 
        form.current, 
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
             <>
         
    <div className="container mt-5 pt-5 mb-5" id="contact">
      <h2 className="mb-4 text-center">Get in touch</h2>
    <div className="row">
       <div className="col-12  col-lg-6 d-flex flex-column mb-5 text-center">
           <h1><i className="bi bi-envelope m-2"></i> Mail me</h1>
           <a href="mailto:mdarsathm.2003@gmail.com" style={{color:"whitesmoke"}}>mdarsathm.2003@gmail.com</a>

           <h1 className="mt-3"><i className="bi bi-telephone m-2"></i>contact</h1>
           <a href="8838607001" style={{color:"whitesmoke"}}>8838607001</a>

           <h1 className="m-4">follow us on</h1>
               <div className="m-1 d-flex flex-row justify-content-evenly fs-1 ">
                <i className="bi bi-instagram " ></i>
                <i className="bi bi-facebook" ></i>
                <i className="bi bi-linkedin text-info"></i>
               </div>

      </div>

      <div className="col-12  col-lg-6">
         <h1 className="text-center fw-bold text-info m-4">    
          <i className="bi bi-chat-dots text-center text-primary"></i> Any queries </h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="form-control"
            id="user_name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="user_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id="user_email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
      </div>
         </div>
    
    </div>
    
    </>
  );
};

export default ContactUs;
