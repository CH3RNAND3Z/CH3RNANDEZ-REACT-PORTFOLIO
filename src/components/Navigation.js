import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #444;
  color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const NavItem = styled.div`
  cursor: pointer;
  padding: 8px 16px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavItem isSelected>About Me</NavItem>
      <NavItem>Portfolio</NavItem>
      <NavItem>Contact</NavItem>
      <NavItem>Resume</NavItem>
    </NavContainer>
  );
};

export default Navigation;
