"use client";
import {useState} from "react";
import {ArrowUpRight,Menu,Moon,Sun,X} from "lucide-react";
import {navigationItems} from "@/data/portfolio";
import {useTheme} from "@/context/ThemeContext";
export function SiteHeader(){
  const [menuOpen,setMenuOpen]=useState(false);
  const {theme,toggleTheme}=useTheme();
  const closeMenu=()=>setMenuOpen(false);
  return <header className="header">
    <a href="#home" className="logo" onClick={closeMenu}>YASIR<span>®</span></a>
    <nav className={menuOpen?"nav show":"nav"} aria-label="Main navigation">
      {navigationItems.map(item=><a onClick={closeMenu} href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
    </nav>
    <div className="head-right">
      <button className="theme" onClick={toggleTheme} aria-label={`Switch to ${theme==="dark"?"light":"dark"} theme`} type="button">
        {theme==="dark"?<Sun size={15}/>:<Moon size={15}/>}
      </button>
      <a className="nav-cta" href="#contact">LET&apos;S TALK <ArrowUpRight size={13}/></a>
      <button className="hamb" onClick={()=>setMenuOpen(open=>!open)} aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} type="button">
        {menuOpen?<X/>:<Menu/>}
      </button>
    </div>
  </header>;
}
