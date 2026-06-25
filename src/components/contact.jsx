function Contact() {
  return (
  <div className="contactContainer">
    <h2>Contact</h2>
    <div className="formulaire">
      <div className="labInp">
       <input type="text" id="name" placeholder=" " required />
       <label htmlFor="name"><b>Full Name</b></label>
     </div>
      <div className="labInp">
       <input type="text" id="name" placeholder=" " required />
       <label htmlFor="name"><b>Phone Number</b></label>
     </div>
      <div className="labInp">
       <input type="text" id="name" placeholder=" " required />
       <label htmlFor="name"><b>Objet</b></label>
     </div>
      <div className="labInp">
        <textarea name="" id="" id="name" placeholder=" " required></textarea>
       <label htmlFor="name"><b>Message</b></label>
     </div>

     <div id="send">
       <input type="submit" value="Send" className="send"/>
     </div>

    
    </div>

  </div>
  );
}
export default Contact;