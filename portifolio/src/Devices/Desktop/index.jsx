//Components
import { NavDesktop } from "../../components/NavDesktop";

//React router
import { Route, Routes } from "react-router-dom";

//Pages
import { Hero } from "../../pages/Hero";
import { About } from "../../pages/About";
import { Skills } from "../../pages/Skills";
import { Projects } from "../../pages/Projects";
import { Contatos } from "../../pages/Contatos";

export const Desktop = ({children}) => {


   return (
      <main className="d-none d-md-block">
         <NavDesktop />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contatos />
      </main>
   )
};