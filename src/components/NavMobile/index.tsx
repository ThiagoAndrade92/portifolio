//Css
import style from './Nav.module.css';

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressCard, faContactBook, faHouse, faInfo, faMoon, faSun, faTasks } from '@fortawesome/free-solid-svg-icons';
import { MeuLink } from '../MeuLink';
import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export const NavMobile = () => {
   const [theme, setTheme] = useState<Theme>(() => {
         const savedTheme = localStorage.getItem('theme') as Theme | 'dark';
         return savedTheme;
      });
   
      const btnTheme = {
         dark: <FontAwesomeIcon icon={faSun} className={`${style.icons}`}/>,
         light: <FontAwesomeIcon icon={faMoon} className={`${style.icons}`}/>,
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
      <nav className={`${style.nav_mobile} d-flex align-items-center justify-content-around d-md-none`}>

         <MeuLink
         title='ir para a seção sobre'
         aria-label='ir para a seção sobre'
         to={'/about'}>
            <FontAwesomeIcon icon={faAddressCard} className={`${style.icons}`} />
            <span className={`${style.name}`}>Sobre</span>
         </MeuLink>

         <MeuLink
         title='ir para a seção habilidades'
         aria-label='ir para a seção habilidades'
         to={'/skills'}>
            <FontAwesomeIcon icon={faInfo} className={`${style.icons}`}/>
            <span className={`${style.name}`}>Habilidades</span>
         </MeuLink>

         <MeuLink
         title='ir para a home'
         aria-label='ir para a home'
         to={'/'}>
            <FontAwesomeIcon icon={faHouse} className={`${style.icons}`}/>
            <span className={`${style.name}`}>Home</span>
         </MeuLink>

         <MeuLink
         title='ir para a seção projetos'
         aria-label='ir para a seção projetos'
         to={'/projects'}>
            <FontAwesomeIcon icon={faTasks} className={`${style.icons}`}/>
            <span className={`${style.name}`}>Projetos</span>
         </MeuLink>
         
         <MeuLink
         title='ir para a seção contatos'
         aria-label='ir para a seção contatos'
         to={'/contatos'}>
            <FontAwesomeIcon icon={faContactBook} className={`${style.icons}`}/>
            <span className={`${style.name}`}>Contatos</span>
         </MeuLink>
         
         <MeuLink
         title='ir para a seção contatos'
         aria-label='ir para a seção contatos'
         to={'#'}
         onClick={handleClick}>
            {btnTheme[theme]}
            <span className={`${style.name}`}>Tema</span>
         </MeuLink>

      </nav>
   )
};