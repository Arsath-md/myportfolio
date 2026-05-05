import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        toast.success("✅ Message sent! I'll get back to you soon.");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
        toast.error("❌ Something went wrong. Try again.");
      });
  };

  return (
    <div className="container text-center m-5 mx-auto" id="contact">
      <h1>Get in touch</h1>

      <div className="row m-5">
        {/* LEFT SIDE */}
        <div className="col-12 col-md-6 d-flex flex-column">

          <div className="d-flex align-items-center">
            <i className="bi-telephone-fill m-2"></i>
            <a href="tel:+918838607xxx" className="m-2 text-decoration-none text-white fw-bold">
              +91 88386 07xxx
            </a>
          </div>

          <div className="d-flex align-items-center">
            <i className="bi-envelope-fill m-2"></i>
            <a href="mailto:your@email.com" className="m-2 text-decoration-none text-white fw-bold">
              your@email.com
            </a>
          </div>

          <div className="mt-3">
               <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15660.621733139029!2d79.64226883848214!3d11.101791181365526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5526c731f25c21%3A0x4339eccad0b5866a!2sMayiladuthurai%2C%20Tamil%20Nadu%20609001!5e0!3m2!1sen!2sin!4v1735747185088!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps — Mayiladuthurai, Tamil Nadu"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-md-6 mt-5">
          <form ref={formRef} onSubmit={handleSubmit}>

            <label>Name</label>
            <input
              type="text"
              name="from_name"
              className="form-control mb-3"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="reply_to"
              className="form-control mb-3"
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              className="form-control mb-3"
              rows={5}
              required
            ></textarea>

            {/* Hidden time field */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Keep ONE ToastContainer */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}