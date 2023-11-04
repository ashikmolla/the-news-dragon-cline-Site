import React from 'react';
import './ActivLink.css';
import { NavLink } from 'react-router-dom';

const ActivLink = ({to, children}) => {
    return (
        <NavLink to={to} className={({ isActive }) =>
          isActive ? " text-decoration text-black bg-light p-2 rounded fw-bold " : "text-decoration-none p-2 fw-semibold"
        }
      >
        {children}
      </NavLink>
    );
};

export default ActivLink;