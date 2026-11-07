"use client";
import {useEffect} from "react";
const SELECTOR=[".section-top",".section-title-row",".project",".tech-grid div",".feature-grid > div",".service-row",".education > div",".footer-main > div",".work-foot"].join(",");
export function useScrollEffects(){
  useEffect(()=>{
    const elements=Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    elements.forEach((el,index)=>{el.classList.add("scroll-reveal");el.style.setProperty("--reveal-delay",`${(index%4)*90}ms`);});
    if(!("IntersectionObserver" in window)){elements.forEach(el=>el.classList.add("is-visible"));return;}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}
    }),{threshold:.12,rootMargin:"0px 0px -35px 0px"});
    elements.forEach(el=>observer.observe(el));
    const updateProgress=()=>{
      const max=document.documentElement.scrollHeight-window.innerHeight;
      const percent=max>0?(window.scrollY/max)*100:0;
      document.documentElement.style.setProperty("--scroll-progress",`${percent}%`);
    };
    updateProgress();window.addEventListener("scroll",updateProgress,{passive:true});
    return ()=>{
      observer.disconnect();window.removeEventListener("scroll",updateProgress);
      elements.forEach(el=>{el.classList.remove("scroll-reveal","is-visible");el.style.removeProperty("--reveal-delay");});
    };
  },[]);
}
