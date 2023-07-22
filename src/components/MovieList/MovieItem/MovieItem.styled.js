import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledItem = styled.li`
  position: relative;

  width: 340px;
  height: 500px;

  overflow: hidden;

  border-radius: 8px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 63.48%,
    rgba(0, 0, 0, 0.9) 92.16%
  );
  z-index: 999;

  display: flex;
  align-items: flex-end;
`;

export const StyledCard = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: auto;

  z-index: -1;
`;

export const StyledTitle = styled.h3``;
