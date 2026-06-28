import { useState } from 'react';
import portfolio from '../images/projects/portfolio.png';
import formation from '../images/projects/formation.png';
import formationVed from '../images/projects/formation.mp4';
import anime from '../images/projects/anime.png';
import electric from '../images/projects/electric.png';
import animeVed from '../images/projects/anime.mp4';
import { FaExternalLinkAlt } from "react-icons/fa";



function Projects() {

  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects=[
    {id:1,title:'Portfolio',type:'Vitrine',tools:'ReactJs - HTML - CSS - JS ',img:portfolio, link:"https://abdelmajid-sbai.netlify.app/"},
    {id:2,title:'E-commerce web site',type:'Full stack',tools:'Laravel - HTML - CSS - JS ',img:electric , link:"https://maisonfix-production.up.railway.app/"},
    {id:3,title:'formation inter-enreprise',type:'Full stack',tools:'Laravel - HTML - CSS - JS',img:formation , video:formationVed,},
    {id:4,title:'Anime web site',type:'Vitrine',tools:'HTML - CSS - JS',img:anime, video:animeVed,},
    
    
    
  ];

  const [filter,setFilter]=useState('All');

  const filteredProjects=
    filter === 'All' ? projects : projects.filter((project)=>project.type===filter);


  return (
    <div className="allProjects">
      <h2>My projects</h2>
      <div className='projects-filter'>
        <ul>
          {["All","Full stack","Vitrine"].map((category)=>(
            <li key={category} className={filter===category?"active":""} onClick={()=>setFilter(category)}>
              {category}
            </li>
          ))}
        </ul>
        
      </div>

      <div className='projectTerminer'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project)=>(
            <div className='pr' key={project.id}>
              <img src={project.img} alt={project.id} />
                <h1 className='projectDetail'>{project.title} {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className='linkProject'>
                      <FaExternalLinkAlt  />
                    </a>
                ) : project.video ? (
                  <button className='demoVid' onClick={() => setSelectedVideo(project.video)}>
                    Demo
                  </button>
                ) : null}</h1>
              <p><strong>Outils : </strong>{project.tools}</p>
              
              


            </div>
          ))
        ):(
          <p>Aucun projet trové.</p>
        )}
      </div>


      {selectedVideo && (
  <div className="modal">
    <div className="modal-content">
      <button onClick={() => setSelectedVideo(null)}>
        X
      </button>

      <video controls autoPlay>
        <source src={selectedVideo} type="video/mp4" />
      </video>
    </div>
  </div>
)}



      
    </div>
  );
}
export default Projects;