import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgb(79, 116, 202);

  padding: 24px 256px;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 32px;

  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 24px;
  font-weight: 500;

  &.active {
    color: rgb(255, 186, 97);
  }
`;
