import {ArrowUpRight} from "lucide-react";
import {services} from "@/data/portfolio";
export function ServicesSection(){return <section className="services section" id="services">
  <div className="section-top"><span>04 / WHAT I BRING</span><span>MORE THAN JUST CODE</span></div>
  <div className="services-head"><h2>MORE THAN CODE.<br/>CRAFTING <em>EXPERIENCES.</em></h2><p>Combining practical engineering with a product mindset to create digital work that is useful, clear and built to last.</p></div>
  <div className="service-list">{services.map(service=><div className="service-row" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><ArrowUpRight size={17}/></div>)}</div>
  <div className="education"><span>EDUCATION &amp; EXPERIENCE</span><div><b>B.Tech · Computer Science</b><small>KL University · 2022—2026</small></div><div><b>Associate Process Executive</b><small>upGrad · 2026—Present</small></div></div>
</section>;}
