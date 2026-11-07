import {ArrowUpRight} from "lucide-react";
import {projects} from "@/data/portfolio";
export function WorkSection(){return <section className="work section" id="work">
  <div className="section-top"><span>01 / SELECTED WORK</span><span>IDEAS BUILT INTO EXPERIENCES</span></div>
  <div className="section-title-row"><h2>WORK THAT <em>SPEAKS.</em></h2><p>A few projects where ideas, engineering and user experience come together.</p></div>
  <div className="projects">{projects.map((project,index)=><a className={`project p${index}`} href={project.url} target="_blank" rel="noopener noreferrer" key={project.number} aria-label={`View ${project.title} project`}>
    <div className="project-visual"><div className="visual-top"><span>{project.category}</span><span>{project.number}</span></div>
      <div className="visual-center"><b>{project.title}</b><span>{project.visualLabel}</span></div>
      <div className="visual-foot"><span>VIEW CASE STUDY</span><ArrowUpRight size={17}/></div>
    </div>
    <div className="project-meta"><div><small>{project.number} / {project.category}</small><h3>{project.title}</h3><p>{project.description}</p>
      <div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><span className="round-arrow"><ArrowUpRight size={18}/></span></div>
  </a>)}</div>
  <div className="work-foot"><span>MORE PROJECTS ON GITHUB</span><a href="https://github.com/shaikyasirahmed07" target="_blank" rel="noopener noreferrer">EXPLORE GITHUB <ArrowUpRight size={13}/></a></div>
</section>;}
