import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PricingContainer = styled.section`
  padding: 50px 20px;
  background-color: #000;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const PricingTitle = styled.h2`
  margin-bottom: 20px;
  color: #fff;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PricingGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const PricingCard = styled.div`
  background: #1e1e1e;
  border-radius: 15px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 450px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PricingPlan = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  color: #fff;
`;

const PricingDescription = styled.p`
  margin-bottom: 20px;
  color: #b0b0b0;
`;

const Image = styled.img`
  width: 100%;
  max-width: 340px;
  height: auto;
  justify-content: center;
  margin-bottom: 20px;
`;

const Down = styled.div`
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const PricingSection = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    elementsRef.current.forEach((element) => {
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
    <PricingContainer id="pricing" className="shared-background">
      <PricingTitle ref={(el) => (elementsRef.current[0] = el)}>
        Apply On Any Section Or Enable For <br />
        Whole Page
      </PricingTitle>
      <PricingGrid>
        <PricingCard ref={(el) => (elementsRef.current[1] = el)} style={{ marginTop: '20px' }}>
          <PricingPlan>Apply on Section</PricingPlan>
          <PricingDescription>
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </PricingDescription>
          <Image
            ref={(el) => (elementsRef.current[2] = el)}
            src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img11.png`}
            alt="Apply on Section"
          />
        </PricingCard>
        <Down>
          <PricingCard ref={(el) => (elementsRef.current[3] = el)} style={{ marginTop: '60px' }}>
            <PricingPlan>Apply On Page</PricingPlan>
            <PricingDescription>
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </PricingDescription>
            <Image
              ref={(el) => (elementsRef.current[4] = el)}
              src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img10.png`}
              alt="Apply On Page"
            />
          </PricingCard>
        </Down>
      </PricingGrid>
    </PricingContainer>
  );
};

export default PricingSection;
