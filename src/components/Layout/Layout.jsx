import React from 'react';

import { Outlet } from 'react-router-dom';

import { StyledHeader, StyledList, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledLink to="/" className="logo">
          Movies Logo
        </StyledLink>
        <StyledList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </StyledList>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Layout;
