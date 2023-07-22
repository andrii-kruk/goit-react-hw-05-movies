import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-bottom: 32px;
  padding-bottom: 16px;

  border-bottom: 1px solid #333333;
`;

export const StyledTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 16px;
`;

export const StyledSubtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
`;

export const StyledPart = styled.p`
  width: 600px;
  margin-bottom: 16px;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 24px;
  padding-top: 24px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;

  font-size: 20px;
  background-color: #333333;
  color: #ffffff;
  border-radius: 4px;
  padding: 4px 8px;
`;

export const StyledButton = styled(Link)`
  position: absolute;
  right: 250px;

  color: #333;
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 6px 12px;
`;
