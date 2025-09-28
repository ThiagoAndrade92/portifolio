import { NavLink } from 'react-router-dom';

export const MeuLink = ({children, to, ...props}) => {

   return (
      <NavLink to={to} {...props}>
         {children}
      </NavLink>
   )
};