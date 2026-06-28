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
            <p>Full-Stack Web Development</p>
            <p>Front-end Website Development</p>
            <p>Portfolio Website Development</p>
          </div>
        </div>

        <div className="serv">
          <span className="icon"><FaPaintBrush size={48} color="#052659" /></span>
          <h4>UI/UX Design</h4>
          <hr />
          <div className='details-ser'>
            <p>Website UI/UX Design using Figma</p>
          </div>
        </div>
        
        <div className="serv">
          <span className="icon"><FaFileExcel size={48} color="#052659" /></span>
          <h4>Microsoft Excel</h4> 
          <hr />
          <div className='details-ser'>
            <p>Excel spreadsheets, formulas, and data management</p>
          </div>
        </div>
      </div>

      
      
    </div>
  );
}
export default Services;