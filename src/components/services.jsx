import fsjest from '../images/fsjest.PNG';
import { FaCode, FaPaintBrush, FaFileExcel } from "react-icons/fa";


function Services() {
  return (
    <div className="topServ">
      <h2>My services</h2>
      <div className="allServices">
        <div className="serv">
          <span className="icon"><FaCode size={48} color="#052659" /></span>
          <h4>Web Development</h4>
          <hr />
          <div className='details-ser'>
            <p>Development des site web full stack</p>
            <p>Site vitrine</p>
            <p>Portfolio</p>
          </div>
        </div>

        <div className="serv">
          <span className="icon"><FaPaintBrush size={48} color="#052659" /></span>
          <h4>UI/UX Design</h4>
          <hr />
          <div className='details-ser'>
            <p>Design site web with Figma</p>
          </div>
        </div>
        
        <div className="serv">
          <span className="icon"><FaFileExcel size={48} color="#052659" /></span>
          <h4>Excel</h4> 
          <hr />
          <div className='details-ser'>
            <p>Travailer des fichier excel</p>
          </div>
        </div>
      </div>

      
      
    </div>
  );
}
export default Services;