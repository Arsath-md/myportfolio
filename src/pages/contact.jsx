// Contact Section Component
// Shows contact info, location map, and a simple contact form.

export default function Contact() {
  return (
    <div className="container text-center m-5 mx-auto" id="contact">

      {/* Section Title */}
      <h1>Get in touch</h1>

      <div className="row m-5">

        {/* Left Side — Contact Details + Map */}
        <div className="col-12 col-md-6 d-flex flex-column">
{/* Phone */}
<div className="d-flex flex-row align-items-center contact-item">
  <i className="bi-telephone-fill m-2" style={{ fontSize: "1.3rem" }}></i>
  <a 
    href="tel:88386xxxxx" 
    className="m-2 text-decoration-none fw-bold"
    style={{ color: "#fff", letterSpacing: "0.5px" }}
  >
    +91 88386 07xxx
  </a>
</div>

{/* Email */}
<div className="d-flex flex-row align-items-center contact-item">
  <i className="bi-envelope-fill m-2" style={{ fontSize: "1.3rem" }}></i>
  <a 
    href="mailto:mdarsath.m2003@gmail.com" 
    className="m-2 text-decoration-none fw-bold"
    style={{ color: "#fff", letterSpacing: "0.5px" }}
  >
    mdarsath.m2003@gmail.com
  </a>
</div>


          {/* Google Map */}
          <div className="d-flex flex-column mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15660.621733139029!2d79.64226883848214!3d11.101791181365526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5526c731f25c21%3A0x4339eccad0b5866a!2sMayiladuthurai%2C%20Tamil%20Nadu%20609001!5e0!3m2!1sen!2sin!4v1735747185088!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps location"
            ></iframe>
          </div>
        </div>

        {/* Right Side — Contact Form */}
        <div className="col-12 col-md-6 mt-5">
          <form>

            {/* Name */}
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control mb-3" />

            {/* Email */}
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control mb-3" />

            {/* Message */}
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control mb-3"></textarea>

            {/* Submit */}
            <div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
