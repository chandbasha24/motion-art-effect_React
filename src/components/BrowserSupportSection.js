import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BrowserSupportContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
  border-radius: 10px;
`;

const BrowserSupportTitle = styled.h2`
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
`;

const PricingCard = styled.div`
  background: linear-gradient(180deg, #1e1e1e, #000);
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
  width: 100%;
  max-width: 1190px;
  margin: 0 auto;
  text-align: center;
`;

const BrowserSupportSection = () => {
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
    <PricingCard className="shared-background">
      <BrowserSupportContainer ref={(el) => (elementsRef.current[0] = el)}>
        <BrowserSupportTitle ref={(el) => (elementsRef.current[1] = el)}>
          Supported by All Popular Browsers
        </BrowserSupportTitle>
        <p ref={(el) => (elementsRef.current[2] = el)}>
          Rest assured MotionArt is designed to be compatible with all major web browsers
        </p>
        <Image
          ref={(el) => (elementsRef.current[3] = el)}
          src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img8.png`}
          alt="Browser Support"
        />
      </BrowserSupportContainer>
    </PricingCard>
  );
};

export default BrowserSupportSection;
