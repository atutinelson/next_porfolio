
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import TechSection from "@/components/TechSection";

import { getAllProjects } from "@/sanity/lib/projects/getAllProjects";
import ProjectsPage from "@/components/projects";
import AboutMe from "@/components/about_me";
import { Montserrat } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";

const montserrat = Montserrat({
    subsets:['latin'],
    weight:"400",
    
  })
export default  async function Home() {
  const project = await getAllProjects();
  
  
  return (
    <>
    <div className={`relative ${montserrat.className}`}>
    <div className="relative flex h-screen w-full overflow-hidden rounded-t-md bg-black/[0.96] antialiased ">
          <div
            className={cn(
              "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
              "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
            )}
          />
     
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />

          <Navbar/>
          
          <Hero/>
          
      </div>
      <div className=" bg-black/[0.96] mb-10">
        <AboutMe/>
        <Services/>
        <TechSection/>
        <ProjectsPage projects={project}/>
        <Footer/>
      </div>
      <div className="fixed bottom-10 right-8 z-50 bg-[#03a9f4] p-2 rounded-sm shadow-lg flex justify-center items-center">
          <a href="https://wa.me/254791315487" target="_blank">
            <FaWhatsapp className="h-7 w-7"/>
          </a>
      </div>
      </div>
    </>
  );
}
