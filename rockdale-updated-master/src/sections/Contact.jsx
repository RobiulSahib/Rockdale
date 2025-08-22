import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const ContactContainer = styled.section`
  padding: 0;
  height: 650px;
  position: relative;
  background-image: url('/build-1.jpeg');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    height: 550px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7rem 0 5rem;
`;

const TopLayer = styled.div`
  padding: 0;
  margin-left: 3.5rem;
  margin-top: 1.5rem;
  position: relative;
  
  @media (max-width: 992px) {
    margin-left: 2.5rem;
  }
  
  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-top: 1rem;
  }
  
  @media (max-width: 576px) {
    margin-left: 1.5rem;
  }
`;

const DreamText = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  max-width: 650px;
  font-family: 'DM Sans', sans-serif;
  line-height: 1.2;
  position: relative;
  opacity: 1;
  padding-bottom: 1.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: #46620d;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
    padding-bottom: 1.25rem;
  }
`;

const BottomLayer = styled.div`
  align-self: flex-end;
  max-width: 600px;
  margin-right: 3.5rem;
  margin-bottom: 1.5rem;
  background-color: rgba(70, 98, 13, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 12px 0 0 12px;
  padding: 2.5rem 3.5rem;
  opacity: 1;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 992px) {
    max-width: 100%;
    margin-right: 2.5rem;
    padding: 2.25rem 3rem;
  }
  
  @media (max-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    padding: 2rem 2.5rem;
  }
  
  @media (max-width: 576px) {
    margin: 0 1.5rem 1rem;
    padding: 1.75rem 2rem;
  }
`;

const ParticipationText = styled.p`
  font-size: 1.25rem;
  color: white;
  margin-bottom: 2.25rem;
  line-height: 1.6;
  font-family: 'DM Sans', sans-serif;
  opacity: 1;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
    margin-bottom: 1.75rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.25rem;
  opacity: 1;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1.75rem;
  background: linear-gradient(135deg, #46620d 0%, #344709 100%);
  border-radius: 40px;
  color: white;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  opacity: 1;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  i {
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
    font-size: 0.9rem;
  }
  
  &:hover {
    background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%);
    transform: translateY(-3px);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    color: white;
    
    &::before {
      left: 100%;
    }
    
    i {
      transform: rotate(-45deg) translate(2px, -2px);
    }
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1.75rem;
  background-color: transparent;
  border: 1.5px solid white;
  border-radius: 40px;
  color: white;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 1;
  
  i {
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
    font-size: 0.9rem;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    color: white;
    
    i {
      transform: rotate(-45deg) translate(2px, -2px);
    }
  }
`;

const Contact = () => {
  const contactRef = useRef(null);
  const dreamTextRef = useRef(null);
  const bottomLayerRef = useRef(null);
  
  useEffect(() => {
    if (dreamTextRef.current) dreamTextRef.current.style.opacity = 1;
    if (bottomLayerRef.current) bottomLayerRef.current.style.opacity = 1;
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(dreamTextRef.current,
      { opacity: 0.8, x: -20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 75%"
        },
        clearProps: "all"
      }
    );
    
    gsap.fromTo(bottomLayerRef.current,
      { opacity: 0.8, x: 20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 60%"
        },
        clearProps: "all"
      }
    );
    
    const buttons = bottomLayerRef.current.querySelectorAll('a');
    gsap.fromTo(buttons,
      { opacity: 0.8, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bottomLayerRef.current,
          start: "top 80%"
        },
        clearProps: "all"
      }
    );
  }, []);
  
  return (
    <ContactContainer id="contact" ref={contactRef}>
      <ContentWrapper className="container">
        {/* Top Layer */}
        <TopLayer>
          <DreamText ref={dreamTextRef}>Unlock Your Dream Home Today</DreamText>
        </TopLayer>
        
        {/* Bottom Layer */}
        <BottomLayer ref={bottomLayerRef}>
          <ParticipationText>
            We encourage clients to actively participate in discussions, share their ideas, preferences and feedback.
          </ParticipationText>
          
          <ButtonGroup>
            <PrimaryButton to="/contact-us">
              Get in Touch <i className="bi bi-arrow-right"></i>
            </PrimaryButton>
            <SecondaryButton href="tel:+8801712345678">
              Call Us: +880 171 234 5678 <i className="bi bi-arrow-right"></i>
            </SecondaryButton>
          </ButtonGroup>
        </BottomLayer>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact; 