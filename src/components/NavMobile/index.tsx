//Css
import style from './Nav.module.css';

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressCard, faContactBook, faContactCard, faHouse, faInfo, faTasks } from '@fortawesome/free-solid-svg-icons';
import { MeuLink } from '../MeuLink';

export const NavMobile = () => {



   return (
      <nav className={`${style.nav_mobile} d-flex align-items-center justify-content-around d-md-none`}>

         <MeuLink to={'/about'}>
            <FontAwesomeIcon icon={faAddressCard} className={`${style.icons}`} />
            <span className={`${style.name}`}>Sobre</span>
         </MeuLink>

         <MeuLink to={'/skills'}>
            <FontAwesomeIcon icon={faInfo} className={`${style.icons}`}/>
            <span className={`${style.name}`}>Habilidades</span>
         </MeuLink>

         <MeuLink to={'/'}>
            <FontAwesomeIcon icon={faHouse} className={`${style.icons}`}/>
            <span className={`${style.name}`}>Home</span>
         </MeuLink>

         <MeuLink to={'/projects'}>
            <FontAwesomeIcon icon={faTasks} className={`${style.icons}`}/>
            <span className={`${style.name}`}>Projetos</span>
         </MeuLink>
         
         <MeuLink to={'/contatos'}>
            <FontAwesomeIcon icon={faContactBook} className={`${style.icons}`}/>
            <span className={`${style.name}`}>Contatos</span>
         </MeuLink>

      </nav>
   )
};