import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {' '}
      <header>
        <NavLink to="/" className="logo">
          Movies Logo
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
