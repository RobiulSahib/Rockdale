import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ProcessContainer = styled.section`
  padding: 6rem 0;
  background-color: #46620d;
  color: white;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
`;

const TopLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const LeftHeader = styled.div`
  max-width: 350px;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'DM Sans', sans-serif;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  font-family: 'DM Sans', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProcessCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
  flex: 1;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  opacity: 1; /* Ensure visibility */
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const CardNumber = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  font-family: 'DM Sans', sans-serif;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  font-family: 'DM Sans', sans-serif;
`;

const BottomLayer = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Process = () => {
  const processRef = useRef(null);
  const cardsRef = useRef([]);
  
  useEffect(() => {
    // Ensure elements are visible first
    const topCards = document.querySelectorAll('.top-card');
    const bottomCards = document.querySelectorAll('.bottom-card');
    
    // Set initial opacity to ensure visibility
    topCards.forEach(card => card.style.opacity = 1);
    bottomCards.forEach(card => card.style.opacity = 1);
    
    // More subtle animations for cards
    gsap.fromTo(topCards, 
      { y: 15, opacity: 0.8 },
    {
        y: 0, 
        opacity: 1, 
        stagger: 0.15, 
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 85%"
        },
        clearProps: "all"
      }
    );
    
    gsap.fromTo(bottomCards, 
      { y: 15, opacity: 0.8 },
    {
        y: 0, 
        opacity: 1, 
        stagger: 0.15, 
        duration: 0.7,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 70%"
        },
        clearProps: "all"
    }
    );
  }, []);
  
  return (
    <ProcessContainer id="process" ref={processRef}>
      <div className="container">
        {/* Top Layer */}
        <TopLayer>
          <LeftHeader>
            <Subtitle>The Process</Subtitle>
            <Title>Guiding You Every Step of the Way</Title>
          </LeftHeader>
          
          <CardsContainer>
            <ProcessCard className="top-card">
              <CardNumber>01</CardNumber>
              <CardTitle>Discovery & Consultation</CardTitle>
              <CardDescription>
                Our journey begins with understanding your needs and dreams. We'll discuss your preferences, budget, and timeline to establish a clear direction for your real estate journey.
              </CardDescription>
            </ProcessCard>
        
            <ProcessCard className="top-card">
              <CardNumber>02</CardNumber>
              <CardTitle>Property Matching</CardTitle>
              <CardDescription>
                Using our extensive market knowledge and proprietary tools, we'll identify properties that align with your criteria and present you with a curated selection of options.
              </CardDescription>
            </ProcessCard>
          </CardsContainer>
        </TopLayer>
        
        {/* Bottom Layer */}
        <BottomLayer>
          <ProcessCard className="bottom-card">
            <CardNumber>03</CardNumber>
            <CardTitle>Guided Tours & Insights</CardTitle>
            <CardDescription>
              Experience potential homes firsthand with personalized tours. We'll provide valuable insights about each property, neighborhood amenities, and future growth potential to inform your decision.
            </CardDescription>
          </ProcessCard>
          
          <ProcessCard className="bottom-card">
            <CardNumber>04</CardNumber>
            <CardTitle>Seamless Transaction</CardTitle>
            <CardDescription>
              From offer to closing, we handle all the complex details. Our team manages negotiations, paperwork, and coordination with all parties to ensure a smooth and stress-free transaction process.
            </CardDescription>
          </ProcessCard>
          
          <ProcessCard className="bottom-card">
            <CardNumber>05</CardNumber>
            <CardTitle>Ongoing Support</CardTitle>
            <CardDescription>
              Our relationship doesn't end at closing. We provide continued support and resources to help you settle into your new property and address any questions or needs that arise after your purchase.
            </CardDescription>
          </ProcessCard>
        </BottomLayer>
      </div>
    </ProcessContainer>
  );
};

export default Process; 