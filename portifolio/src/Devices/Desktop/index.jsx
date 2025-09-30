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
         <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contatos" element={<Contatos />} />
         </Routes>
      </main>
   )
};