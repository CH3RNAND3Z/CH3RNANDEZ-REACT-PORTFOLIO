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
      <FooterLink href="link-to-github-profile">GitHub</FooterLink>
      <FooterLink href="link-to-linkedin-profile">LinkedIn</FooterLink>
      <FooterLink href="link-to-third-platform-profile">Third Platform</FooterLink>
    </FooterContainer>
  );
};

export default Footer;
