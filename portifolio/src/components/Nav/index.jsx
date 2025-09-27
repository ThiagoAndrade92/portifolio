//Css
import style from './Nav.module.css';

//React router
import { NavLink } from 'react-router-dom';

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressCard, faHouse, faInfo, faTasks } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {



   return (
      <nav className={`${style.nav_mobile} d-flex align-items-center justify-content-around`}>
         <NavLink to={'/'}>
            <FontAwesomeIcon icon={faHouse} className={`${style.icons}`}/>
         </NavLink>
         <NavLink to={'/about'}>
            <FontAwesomeIcon icon={faAddressCard} className={`${style.icons}`} />
         </NavLink>
         <NavLink to={'/skills'}>
            <FontAwesomeIcon icon={faInfo} className={`${style.icons}`}/>
         </NavLink>
         <NavLink to={'/projects'}>
            <FontAwesomeIcon icon={faTasks} className={`${style.icons}`}/>
         </NavLink>
      </nav>
   )
};