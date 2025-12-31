import React from 'react';
import { NavLink } from 'react-router-dom';

type NavLinkProps = React.ComponentProps<typeof NavLink>;

export const MeuLink = ({children, to, ...props}: NavLinkProps) => {

   return (
      <NavLink to={to} {...props}>
         {children}
      </NavLink>
   )
};