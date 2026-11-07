import {SiteHeader} from "@/components/layout/SiteHeader";
import {HeroSection} from "@/components/sections/HeroSection";
import {WorkSection} from "@/components/sections/WorkSection";
import {TechSection} from "@/components/sections/TechSection";
import {AboutSection} from "@/components/sections/AboutSection";
import {ServicesSection} from "@/components/sections/ServicesSection";
import {ContactSection} from "@/components/sections/ContactSection";
import {ScrollEffects} from "@/components/ui/ScrollEffects";
export function SiteShell(){return <>
  <ScrollEffects/><SiteHeader/>
  <main><HeroSection/><WorkSection/><TechSection/><AboutSection/><ServicesSection/><ContactSection/></main>
</>;}
