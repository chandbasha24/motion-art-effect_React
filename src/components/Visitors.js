import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VisitorsContainer = styled.section`
  padding: 100px 50px;
  background-color: #000000;
  color: white;

  @media (max-width: 768px) {
    padding: 80px 30px;
  }

  @media (max-width: 480px) {
    padding: 60px 20px;
  }
`;

const VisitorsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
  opacity: 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const VisitorsPlan = styled.h2`
  margin-bottom: 20px;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const VisitorsDescription = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  max-width: 400px;
  text-align: right;
  opacity: 0;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Button = styled.a`
  padding: 15px 30px;
  background: linear-gradient(90deg, #F87516 0%, #5E11FF 100%);
  color: white;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;
  transition: background 0.3s;
  display: inline-block;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 25px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  &:hover {
    background: linear-gradient(90deg, #5E11FF 0%, #F87516 100%);
  }
`;

const VisitorsSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to([textRef.current, imageRef.current, buttonRef.current], {
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <VisitorsContainer className="shared-background">
      <VisitorsGrid>
        <TextContainer ref={textRef}>
          <VisitorsPlan>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</VisitorsPlan>
          <VisitorsDescription>
            Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
          </VisitorsDescription>
          <Button href="#purchase" ref={buttonRef}>Purchase From Envato <span>&#8594;</span></Button>
        </TextContainer>
        <ImageContainer ref={imageRef}>
          <Image src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img5.png`} alt="Magic Wand" />
        </ImageContainer>
      </VisitorsGrid>
    </VisitorsContainer>
  );
};

export default VisitorsSection;
