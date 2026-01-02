//Css
import style from './NavDesktop.module.css';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

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

         <a 
         title='ir para a home'
         aria-label='ir para a home'
         href='#'>
            Home
         </a>

         <a 
         title='ir para a seção sobre'
         aria-label='ir para a seção sobre'
         href='#about'>
            Sobre
         </a>

         <a
         title='ir para a seção habilidades'
         aria-label='ir para a seção habilidades'
         href='#skills'>
            Habilidades
         </a>

         <a
         title='ir para a seção projetos'
         aria-label='ir para a seção projetos'
         href='#projects'>
            Projetos
         </a>

         <a
         title='ir para a seção contatos'
         aria-label='ir para a seção contatos'
         href='#contacts'>
            Contatos
         </a>

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