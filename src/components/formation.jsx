import fsjest from '../images/fsjest.PNG';
import ista from '../images/ista.webp';
import study3 from '../images/study3.jpg';




function Formation() {
  return (
    <div className="topForm">
      <h2>Formation</h2>
      <div className="allFormation">

      <div className='forTer'>
        
        <div className="form">
          <div className="formImg">
            <img src={ista} alt="" /> 
            <h5>ISTA NTIC Tanger</h5>
          </div>
          <hr />
          <div className="divFor">
            <span className='spanFormation'><i className="icon-check"></i><b>2024</b></span>
            <h5>Diplôme : Développement Digital – Option Web Full Stack</h5>
          </div>
          <div className="divFor">
            <span className='spanFormation'><i className="icon-check"></i><b>2024</b></span>
            <h5>Formation : CERTIFICAT de formation qualifiante filiere programme de l’innovation entrepreneuriale</h5>
          </div>
        </div>

        <div className="form">
          <div className="formImg">
            <img src={fsjest} alt="" />
            <h5>Faculté des Sciences Juridiques, Économiques et Sociales de Tanger</h5>
          </div>
          <hr />
          <div className="divFor">
            <span className='spanFormation'><i className="icon-check"></i><b>2025</b></span>
            <h5>Diplôme : DEUG en Management des Ressources Humaines</h5>
          </div>
          <div className="divFor">
            <span className='spanFormation'><i className="icon-check"></i><b>2026</b></span>
            <h5>Licence : Comptabilité finance et fiscalité</h5>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
export default Formation;