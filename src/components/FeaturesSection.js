import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturesContainer = styled.section`
  padding: 60px 20px;
  background-color: #000000;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

const FeaturesTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const FeaturesGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  background: #111111;
  border-radius: 10px;
  padding: 30px;
  text-align: left;
  opacity: 0;
  transform: translateY(50px);
  flex: 1;
  max-width: 300px;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const FeatureTitle = styled.h3`
  margin-bottom: 10px;
  color: #ffffff;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

const FeatureDescription = styled.p`
  color: #ffffff;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const FeatureIcon = styled.div`
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const FeaturesSection = () => {
  const featureCardsRef = useRef([]);

  useEffect(() => {
    featureCardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <FeaturesContainer id="features" className="shared-background">
      <FeaturesTitle>An All-Round Plugin With Powerful <br /> Features</FeaturesTitle>
      <center>
        <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
      </center>
      <br />
      <br />
      <FeaturesGrid>
        <FeatureCard ref={(el) => (featureCardsRef.current[0] = el)}>
          <FeatureIcon>
            <Image src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img9.png`} alt="100% Responsive" />
          </FeatureIcon>
          <FeatureTitle>100% Responsive</FeatureTitle>
          <FeatureDescription>Create a consistent visual experience across all devices.</FeatureDescription>
        </FeatureCard>

        <FeatureCard ref={(el) => (featureCardsRef.current[1] = el)}>
          <FeatureIcon>
            <Image src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img6.png`} alt="Light Weight" />
          </FeatureIcon>
          <FeatureTitle>Light Weight</FeatureTitle>
          <FeatureDescription>Motion Art for Elementor is designed to be lightweight.</FeatureDescription>
        </FeatureCard>

        <FeatureCard ref={(el) => (featureCardsRef.current[2] = el)}>
          <FeatureIcon>
            <Image src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img7.png`} alt="User Friendly Interface" />
          </FeatureIcon>
          <FeatureTitle>User Friendly Interface</FeatureTitle>
          <FeatureDescription>Ensure a smooth experience for both applicants and administrators.</FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
