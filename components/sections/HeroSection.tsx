import Image from "next/image";
import {ArrowDown,ArrowUpRight} from "lucide-react";
export function HeroSection(){return <section className="hero" id="home">
  <div className="starfield" aria-hidden="true"/>
  <div className="hero-bgword" aria-hidden="true">PORTFOLIO</div>
  <div className="hero-left">
    <p className="eyebrow"><i/> SOFTWARE DEVELOPER &amp; PRODUCT BUILDER</p>
    <p className="hello">Hello, I&apos;m</p><h1>YASIR<span>.</span></h1>
    <h2>SOFTWARE<br/>DEVELOPER</h2>
    <p className="hero-desc">I build thoughtful digital products by bringing together clean engineering, purposeful design and curiosity.</p>
    <a className="solid-btn" href="#work">EXPLORE MY WORK <ArrowUpRight size={14}/></a>
  </div>
  <div className="portrait-wrap">
    <div className="portrait-aura"/><div className="portrait-orbit orbit-one"/><div className="portrait-orbit orbit-two"/><div className="portrait-orbit orbit-three"/>
    <span className="hero-spark spark-a" aria-hidden="true">✦</span><span className="hero-spark spark-b" aria-hidden="true">✦</span><span className="hero-spark spark-c" aria-hidden="true">✦</span>
    <div className="portrait-placeholder"><Image src="/profile.png" alt="Portrait of Shaik Yasir Ahmed" width={1248} height={1248} priority className="profile-image"/><div className="portrait-caption">DESIGN MINDED<br/>ENGINEER</div></div>
  </div>
  <div className="hero-stats" aria-label="Portfolio highlights">
    <div><strong>03<span>+</span></strong><small>FEATURED<br/>PROJECTS</small></div>
    <div><strong>04<span>+</span></strong><small>YEARS OF<br/>LEARNING</small></div>
    <div><strong>∞</strong><small>IDEAS TO<br/>EXPLORE</small></div>
  </div>
  <div className="hero-bottom"><span>BASED IN INDIA · OPEN TO OPPORTUNITIES</span><a href="#work">SCROLL TO DISCOVER <ArrowDown size={12}/></a></div>
</section>;}
