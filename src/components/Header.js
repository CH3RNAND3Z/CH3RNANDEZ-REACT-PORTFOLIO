import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Christopher Hernandez</h1>
    </HeaderContainer>
  );
};

export default Header;
