import {ArrowUpRight} from "lucide-react";
import {technologies} from "@/data/portfolio";
export function TechSection(){return <section className="tech section" aria-labelledby="technology-heading">
  <div className="section-top"><span>02 / TECHNOLOGIES</span><span>MY EVERYDAY TOOLKIT</span></div>
  <h2 id="technology-heading">TOOLS THAT HELP<br/><em>MAKE IT HAPPEN.</em></h2>
  <div className="tech-grid">{technologies.map((technology,index)=><div key={technology}><span>{String(index+1).padStart(2,"0")}</span><b>{technology}</b><ArrowUpRight size={13}/></div>)}</div>
</section>;}
