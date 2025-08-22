import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutContainer = styled.section`
  padding: 8rem 0;
  background-color: #ffffff;
`;

const TopLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const LeftContent = styled.div`
  max-width: 450px;
`;

const RightContent = styled.div`
  max-width: 450px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #46620d;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'DM Sans', sans-serif;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #46620d;
  line-height: 1.2;
  font-family: 'DM Sans', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  font-family: 'DM Sans', sans-serif;
`;

const HighlightedText = styled.span`
  color: #46620d;
  font-weight: 600;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-bottom: 5rem;
  opacity: 1; /* Make visible by default */
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryImage = styled.div`
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  margin-bottom: 3rem;
  opacity: 1; /* Make visible by default */
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: rgba(70, 98, 13, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const StatNumber = styled.div`
  font-size: 3.25rem;
  font-weight: 700;
  color: #46620d;
  margin-bottom: 0.75rem;
  font-family: 'DM Sans', sans-serif;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #46620d;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
`;

const BottomText = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-family: 'DM Sans', sans-serif;
  opacity: 1; /* Make visible by default */
  
  strong {
    color: #46620d;
    font-weight: 600;
  }
`;

const About = () => {
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const statsRef = useRef(null);
  const bottomTextRef = useRef(null);
  
  useEffect(() => {
    // Ensure elements are visible first
    if (galleryRef.current) galleryRef.current.style.opacity = 1;
    if (statsRef.current) statsRef.current.style.opacity = 1;
    if (bottomTextRef.current) bottomTextRef.current.style.opacity = 1;
    
    // GSAP animations with more subtle effects
    gsap.registerPlugin(ScrollTrigger);
    
    // Gallery animation - more subtle
    gsap.fromTo(galleryRef.current, 
      { opacity: 0.8, y: 15 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 85%",
        },
        clearProps: "all"
      }
    );
    
    // Stats animation - more subtle
    gsap.fromTo(statsRef.current, 
      { opacity: 0.8, y: 15 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
        clearProps: "all"
      }
    );
    
    // Bottom text animation - more subtle
    gsap.fromTo(bottomTextRef.current, 
      { opacity: 0.8, y: 10 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: bottomTextRef.current,
          start: "top 90%",
        },
        clearProps: "all"
      }
    );
    
    // Individual stat items animation - more subtle
    gsap.fromTo(statsRef.current.children, 
      { scale: 0.95, opacity: 0.8 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
        clearProps: "all"
      }
    );
  }, []);
  
  return (
    <AboutContainer id="about" ref={aboutRef}>
      <div className="container">
        {/* Top Layer */}
        <TopLayer>
          <LeftContent>
            <Subtitle>About Us</Subtitle>
            <Title>Our Story and Your Future</Title>
          </LeftContent>
          <RightContent>
            <Description>
              We specialize in transforming the way people find and experience their homes with <HighlightedText>a focus on trust and lasting values.</HighlightedText>
            </Description>
          </RightContent>
        </TopLayer>
        
        {/* Middle Layer - Gallery */}
        <GalleryContainer ref={galleryRef}>
          <GalleryImage>
            <img src="/build-1.jpeg" alt="Building 1" />
          </GalleryImage>
          <GalleryImage>
            <img src="/build-2.jpeg" alt="Building 2" />
          </GalleryImage>
          <GalleryImage>
            <img src="/build-3.jpeg" alt="Building 3" />
          </GalleryImage>
          <GalleryImage>
            <img src="/build-4.jpeg" alt="Building 4" />
          </GalleryImage>
          <GalleryImage>
            <img src="/build-5.jpeg" alt="Building 5" />
          </GalleryImage>
        </GalleryContainer>
        
        {/* Bottom Layer - Stats */}
        <StatsContainer ref={statsRef}>
          <StatItem>
            <StatNumber>15+</StatNumber>
            <StatLabel>Years in Industry</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>200+</StatNumber>
            <StatLabel>Active Listings</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>98%</StatNumber>
            <StatLabel>Client Satisfaction</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>850+</StatNumber>
            <StatLabel>Properties Sold</StatLabel>
          </StatItem>
        </StatsContainer>
        
        <BottomText ref={bottomTextRef}>
          Our dedicated team of real estate professionals brings together <strong>decades of experience</strong> and <strong>deep market knowledge</strong> to ensure you receive unparalleled service throughout your property journey.
        </BottomText>
      </div>
    </AboutContainer>
  );
};

export default About; 