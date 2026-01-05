//Css
import style from './NavDesktop.module.css';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { MeuLink } from '../MeuLink';

type Theme = 'dark' | 'light';

export const NavDesktop = () => {
   const [theme, setTheme] = useState<Theme>(() => {
      const savedTheme = localStorage.getItem('theme') as Theme | 'dark';
      return savedTheme;
   });

   const btnTheme = {
      dark: <FontAwesomeIcon icon={faSun} />,
      light: <FontAwesomeIcon icon={faMoon} />,
   };

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      setTheme(prevTheme => {
         const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
         return newTheme
      }
      )
   };

   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme)
   }, [theme]);


   return (
      <nav className={`${style.nav} d-flex justify-content-center align-items-center`}>

         <MeuLink 
         title='ir para a home'
         aria-label='ir para a home'
         to='/'>
            Home
         </MeuLink>

         <MeuLink
         title='ir para a seção sobre'
         aria-label='ir para a seção sobre'
         to='/about'>
            Sobre
         </MeuLink>

         <MeuLink
         title='ir para a seção habilidades'
         aria-label='ir para a seção habilidades'
         to='/skills'>
            Habilidades
         </MeuLink>

         <MeuLink
         title='ir para a seção projetos'
         aria-label='ir para a seção projetos'
         to='/projects'>
            Projetos
         </MeuLink>

         <MeuLink
         title='ir para a seção contatos'
         aria-label='ir para a seção contatos'
         to='/contatos'>
            Contatos
         </MeuLink>

         <a 
            title='mudar tema'
            aria-label='mudar tema'
            className={style.btnTheme}
            href='#'
            onClick={handleClick}
            >
            {btnTheme[theme]}
         </a>

      </nav>
   )
};