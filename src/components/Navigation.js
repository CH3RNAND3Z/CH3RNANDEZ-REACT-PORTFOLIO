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

const sections = [
  { title: 'About Me' },
  { title: 'Portfolio' },
  { title: 'Contact' },
  { title: 'Resume' },
];

const Navigation = () => {
  return (
    <NavContainer>
      {sections.map((section, index) => (
        <NavItem key={index} isSelected={index === 0}>
          {section.title}
        </NavItem>
      ))}
    </NavContainer>
  );
};

export default Navigation;
