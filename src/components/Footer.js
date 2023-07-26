import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterLink = styled.a`
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink href="https://github.com/CH3RNAND3Z">GitHub</FooterLink>
      <FooterLink href="https://www.linkedin.com/in/christopher-hernandez-978b45125/">LinkedIn</FooterLink>
    </FooterContainer>
  );
};

export default Footer;
