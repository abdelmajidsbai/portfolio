import myPhoto from '../images/myphoto.jpeg';
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";


function Home() {
  const titles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer"
  ];
   const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <div className="imgdiv">
        <img src={myPhoto} alt="" />
      </div>

      

      <div className="nomdiv">
        <h1>S'bai Abdelmajid</h1>
        <h3 className="typing">I'm {titles[index]}</h3>
      </div>
      <div className="mediadiv">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={28} color="#E1306C" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={28} color="#1877F2" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} color="#333" />
        </a>
      </div>


    </div>
  );
}
export default Home;