import {ArrowUpRight} from "lucide-react";
export function AboutSection(){return <section className="feature section" id="about">
  <div className="section-top"><span>03 / ABOUT ME</span><span>FROM CONCEPT TO EXECUTION</span></div>
  <div className="feature-grid"><div><p className="eyebrow">A LITTLE ABOUT MY APPROACH</p><h2>FROM IDEA.<br/>TO <em>IMPACT.</em></h2>
    <p className="feature-copy">I&apos;m Shaik Yasir Ahmed, a computer science engineer who enjoys turning complex ideas into useful digital experiences. I care about the details: how a product feels, how its parts work together and how clearly it solves a real problem.</p>
    <a className="line-link" href="https://www.linkedin.com/in/shaikyasirahmed07/" target="_blank" rel="noopener noreferrer">MORE ABOUT ME <ArrowUpRight size={14}/></a>
  </div><div className="feature-art" aria-label="Think, build, refine illustration"><div className="wire wire-a"/><div className="wire wire-b"/>
    <div className="wire-card"><span>IDEA / 001</span><b>THINK.<br/>BUILD.<br/><em>REFINE.</em></b><small>GOOD SOFTWARE IS NEVER AN ACCIDENT.</small></div><div className="wire-orb"/>
  </div></div>
</section>;}
