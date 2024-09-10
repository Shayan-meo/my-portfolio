"use client"
import Contect from "./contect/page";
import Hero from "./hero/page";
import About from "./about/page";
import Skills from "./skills/page";
import Project from "./project/page";
import Services from "./services/page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

export default function Home() {
  
  useEffect(() => {
    AOS.init();
}, []);

  return (
    <>
{/* hero */}
<Hero/>

{/* about */}
<About/>

{/* skills */}
<Skills/>

{/* project */}
<Project/>

{/* services */}
<Services/>

{/* contect */}
<Contect/>

    </>
    
  );
}




