import { useState } from 'react';
import portfolio from '../images/projects/portfolio.png';
import portfolioVed from '../images/projects/portfolio.mp4';
import anime from '../images/projects/anime.png';
// import animeVed from '../images/projects/anime.mp4';




function Projects() {

  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects=[
    {id:1,title:'Projet 1',link:"",type:'Vitrine',tools:'ReactJs - HTML - CSS - JS ',idea:'Portfolio',img:portfolio, video:portfolioVed,},
    {id:2,title:'Projet 2',type:'Vitrine',tools:'HTML - CSS - JS',idea:'Anime web site ',img:anime,},
    {id:3,title:'Projet 3',type:'Full stack',tools:'Laravel - HTML - CSS - JS',idea:'Gestion des formation inter-enreprise',img:portfolio},
    {id:4,title:'Projet 4',type:'Full stack',tools:'Laravel - HTML - CSS - JS ',idea:'E-commerce site',img:portfolio},
    
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
              <h1>{project.title} <span><a href="">{project.link}</a></span> <button onClick={() => setSelectedVideo(project.video)}>
               Watch Demo
              </button></h1>
              <p><strong>Outils : </strong>{project.tools}</p>
              <p className='idea'><strong>Idée : </strong>{project.idea}</p>
              


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