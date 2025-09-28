//Css
import style from './Nav.module.css';

//React router
import { NavLink } from 'react-router-dom';

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressCard, faHouse, faInfo, faTasks } from '@fortawesome/free-solid-svg-icons';
import { MeuLink } from '../MeuLink';

export const Nav = () => {



   return (
      <nav className={`${style.nav_mobile} d-flex align-items-center justify-content-around d-md-none`}>
         <MeuLink to={'/'}>
            <FontAwesomeIcon icon={faHouse} className={`${style.icons}`}/>
         </MeuLink>
         <MeuLink to={'/about'}>
            <FontAwesomeIcon icon={faAddressCard} className={`${style.icons}`} />
         </MeuLink>
         <MeuLink to={'/skills'}>
            <FontAwesomeIcon icon={faInfo} className={`${style.icons}`}/>
         </MeuLink>
         <MeuLink to={'/projects'}>
            <FontAwesomeIcon icon={faTasks} className={`${style.icons}`}/>
         </MeuLink>
      </nav>
   )
};