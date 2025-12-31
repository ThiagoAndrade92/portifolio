//Css
import style from './NavDesktop.module.css';

export const NavDesktop = () => {


   return (
      <nav className={`${style.nav}`}>

         <a href='#'>
            Home
         </a>

         <a href='#about'>
            Sobre
         </a>

         <a href='#skills'>
            Habilidades
         </a>

         <a href='#projects'>
            Projetos
         </a>

         <a href='#contacts'>
            Contatos
         </a>

      </nav>
   )
};