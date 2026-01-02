//React router
import { Route, Routes } from 'react-router-dom';


//Components
import { NavMobile } from '../../components/NavMobile';

//Pages
import { Hero } from '../../pages/Hero';
import { About } from '../../pages/About';
import { Skills } from '../../pages/Skills';
import { Projects } from '../../pages/Projects';
import { Contatos } from '../../pages/Contatos';

export const Mobile = () => {


   return (
      <main className='d-md-none'>
         <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contatos' element={<Contatos />} />
         </Routes>
         <NavMobile />
      </main>
   )
};