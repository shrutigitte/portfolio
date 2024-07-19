// import React from "react";

import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import MainHero from "./components/MainHero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

const App =()=> {
  return(
    <div className="overflow-x-hidden text-#c4b5fd antialiased selection:text-cyan-700"> 
    <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,1),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8"></div>
      <NavBar />
      <MainHero/>
      <About/>
      <TechStack/>
      <Experience/>
      <Projects/>
      <Contacts/>
    </div>
  );
};
export default App;
