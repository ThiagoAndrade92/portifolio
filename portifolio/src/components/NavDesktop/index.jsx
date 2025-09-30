//Css
import { MeuLink } from '../MeuLink';
import style from './NavDesktop.module.css';

export const NavDesktop = () => {


   return (
      <nav className={`${style.nav}`}>

         <MeuLink to={'/'}>
            Home
         </MeuLink>

         <MeuLink to={'/about'}>
            Sobre
         </MeuLink>

         <MeuLink to={'/skills'}>
            Habilidades
         </MeuLink>

         <MeuLink to={'/projects'}>
            Projetos
         </MeuLink>

         <MeuLink to={'/contatos'}>
            Contatos
         </MeuLink>

      </nav>
   )
};