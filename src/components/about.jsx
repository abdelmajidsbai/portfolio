import myPhoto from '../images/myphoto.jpeg';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaJs, FaReact, FaLaravel, FaDatabase, FaNodeJs } from "react-icons/fa";



function About() {
  return (
    <div className="about">
      <div className='line1'>
      <div className="myInfo">
        <div className="imginfo"><img src={myPhoto} alt="" /></div>
       <hr className="vertical-line" />
        <div className="nameInfo"><h1>Abdelmajid S'bai</h1><h3>Full Stack Developer</h3><h4>23 years</h4></div>
      </div>

      

      <div className="aboutMe">
        <p><b>Junior Full-Stack Web Developer skilled in both Frontend and Backend technologies, with a strong foundation in web application development, responsive design, and database management. Experienced in building modern, user-friendly websites and web applications.
           Passionate about building modern, scalable, and user-friendly web applications. </b></p>
      </div>
      </div>
      
    <div className='line2'>
      <h3>Skills </h3>
      <div className='skills'>
        <ul>
          <li><FaHtml5 color="#E34F26" size={50} /></li>
          <li><FaCss3Alt color="#1572B6" size={50} /></li>
          <li><FaBootstrap color="#7952B3" size={50} /></li>
          <li><FaPhp color="#777BB4" size={50} /></li>
          <li><FaJs color="#F7DF1E" size={50} /></li>
          <li><FaReact color="#61DAFB" size={50} /></li>
          <li><FaLaravel color="#FF2D20" size={50} /></li>
          <li><FaNodeJs color="#68A063" size={50} /></li>
          <li><FaDatabase color="#00758F" size={50} /></li>
        </ul> 
      </div>
    </div>

    </div>
  );
}
export default About;