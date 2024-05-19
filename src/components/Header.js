import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: black;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    text-align: center;
  }
`;

const PurchaseButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={`${process.env.PUBLIC_URL}/assets/images/MotionArtEffect-logo.png`} alt="MotionArtEffect Logo" />
      </Logo>
      <PurchaseButton>Purchase Now</PurchaseButton>
    </HeaderContainer>
  );
};

export default Header;
