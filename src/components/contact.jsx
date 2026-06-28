import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";


function Contact() {
   const [status, setStatus] = useState("");
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_04o2jpa",
        "template_gfhth0d",
        form.current,
        "Tr1szeCeiQ3XUbXHk"
      )
       .then(() => {
      setStatus(" Message sent");
      form.current.reset();

      setTimeout(() => {
        setStatus("");
      }, 4000);
    })
    .catch(() => {
      setStatus(" Failed to send message.");
    });
};
  return (
  <div className="contactContainer">
    <h2>Contact</h2>
     <form ref={form} onSubmit={sendEmail} className="formulaire">
      <div className="labInp">
       <input type="text" id="name" name="name" placeholder=" " required />
       <label htmlFor="name"><b>Full Name</b></label>
     </div>
      <div className="labInp">
       <input type="text" id="phone" name="phone" placeholder=" " required />
       <label htmlFor="name"><b>Phone Number</b></label>
     </div>
      <div className="labInp">
       <input type="text" id="subject" name="subject" placeholder=" " required />
       <label htmlFor="name"><b>Subject</b></label>
     </div>
      <div className="labInp">
        <textarea name="message"  id="message" placeholder=" " required></textarea>
       <label htmlFor="name"><b>Message</b></label>
     </div>

     <div id="send">
       <button type="submit" className="send">Send</button>
        {status && <p className="status">{status}</p>}
     </div>

    
     </form>

  </div>
  );
}
export default Contact;