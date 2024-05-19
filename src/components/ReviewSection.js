import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReviewContainer = styled.section`
  text-align: center;
  padding: 60px 20px;
  background: #000000;
  color: white;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

const ReviewTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media (max-width: 389px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media (max-width: 400px) {
    gap: 10px;
  }

  @media (max-width: 389px) {
    gap: 5px;
  }
`;

const ReviewCard = styled.div`
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  opacity: 0.5;
  transform: scale(0.8);
  transition: opacity 0.5s, transform 0.5s;

  @media (max-width: 768px) {
    padding: 15px;
    transform: scale(1);
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media (max-width: 400px) {
    padding: 8px;
  }

  @media (max-width: 389px) {
    padding: 5px;
  }
`;

const ReviewIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 400px) {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 389px) {
    width: 20px;
    height: 20px;
  }
`;

const StarIcon = styled.img`
  width: 150px;
  height: 30px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 120px;
    height: 24px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 20px;
  }

  @media (max-width: 400px) {
    width: 80px;
    height: 16px;
  }

  @media (max-width: 389px) {
    width: 60px;
    height: 12px;
  }
`;

const ReviewScore = styled.p`
  font-size: 16px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }

  @media (max-width: 389px) {
    font-size: 8px;
  }
`;

const ReviewSection = () => {
  const reviewCardsRef = useRef([]);

  useEffect(() => {
    reviewCardsRef.current.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
        }
      });
    });
  }, []);

  return (
    <ReviewContainer className="shared-background">
      <ReviewTitle>Trusted by thousands of users around the world</ReviewTitle>
      <ReviewsGrid>
        <ReviewCard ref={(el) => (reviewCardsRef.current[0] = el)}>
          <ReviewIcon src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img2.png`} alt="Review Icon" />
          <StarIcon src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img4.png`} alt="Star Rating" />
          <ReviewScore>4.5 Score, 9 Reviews</ReviewScore>
        </ReviewCard>
        <ReviewCard ref={(el) => (reviewCardsRef.current[1] = el)}>
          <ReviewIcon src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img1.png`} alt="Review Icon" />
          <StarIcon src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img4.png`} alt="Star Rating" />
          <ReviewScore>4.5 Score, 9 Reviews</ReviewScore>
        </ReviewCard>
        <ReviewCard ref={(el) => (reviewCardsRef.current[2] = el)}>
          <ReviewIcon src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img3.png`} alt="Review Icon" />
          <StarIcon src={`${process.env.PUBLIC_URL}/assets/images/motionarteffect-img4.png`} alt="Star Rating" />
          <ReviewScore>4.5 Score, 9 Reviews</ReviewScore>
        </ReviewCard>
      </ReviewsGrid>
    </ReviewContainer>
  );
};

export default ReviewSection;
