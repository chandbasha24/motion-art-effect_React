// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 5px;
  background-color: #111111;
  text-align: center;
  background: linear-gradient(90deg, #f87516 0%, #5e11ff 100%);
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink href="#documentation">Documentation</FooterLink>
      <FooterLink href="#support">Support</FooterLink>
      <br />
      <br />
      <FooterLink href="#mail">
       &#169; 2023 copywrite.All rights reserved by QodeMatrix.
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;
