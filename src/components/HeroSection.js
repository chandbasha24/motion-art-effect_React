import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 20px;
  margin: 0;  // Add this line
  background-color: #000;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 80px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;

  @media (max-width: 768px) {
    align-items: center;
    margin: 10px;
  }
`;

const SideText = styled.div`
  font-size: 24px;
  color: #fff;
  text-align: left;

  .gradient-text {
    background: -webkit-linear-gradient(45deg, #6A5ACD, #FF4500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 20px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #fff;
  text-align: left;
  margin-top: -10px;

  .gradient-text {
    background: -webkit-linear-gradient(45deg, #6A5ACD, #FF4500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 32px;
    margin-top: 0;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #fff;
  text-align: left;
  margin-top: -10px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 18px;
  }
`;

const HeroSection = () => {
  const heroElementsRef = useRef([]);

  useEffect(() => {
    heroElementsRef.current.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0.5, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <HeroContainer className="shared-background">
      <Row>
        <Column>
          <SideText ref={(el) => (heroElementsRef.current[0] = el)}>
            <span className="gradient-text">Transform Your<br />Website</span><br />
            With Motion Art<br />Effect
          </SideText>
        </Column>
        <Column>
          <Title ref={(el) => (heroElementsRef.current[1] = el)}>
            Attract Your Visitors<br />Attention With Colorful<br /><span className="gradient-text">Motion Art Effect</span>
          </Title>
          <Subtitle ref={(el) => (heroElementsRef.current[2] = el)}>
            Unleash the power of creativity with Motion Art for Elementor - your<br />
            ultimate solution for seamlessly integrating captivating animations into<br />
            your website.
          </Subtitle>
        </Column>
      </Row>
    </HeroContainer>
  );
};

export default HeroSection;
