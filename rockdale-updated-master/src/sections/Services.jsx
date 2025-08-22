import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ServicesContainer = styled.section`
  padding: 6rem 0;
  background-color: #ffffff;
  font-family: 'DM Sans', sans-serif;
`;

const TopLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const LeftHeader = styled.div`
  max-width: 500px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #46620d;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #46620d;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SeeAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #46620d;
  border-radius: 50px;
  color: #46620d;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(70, 98, 13, 0.1);
    transform: translateY(-3px);
    color: #46620d;
  }
  
  i {
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: rotate(-45deg) translate(2px, -2px);
  }
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceImage = styled.div`
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #212529;
  
  a {
    color: #212529;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #46620d;
    }
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #212529;
  line-height: 1.7;
`;

const Services = () => {
  const servicesRef = useRef(null);
  
  useEffect(() => {
    const serviceItems = document.querySelectorAll('.service-item');
    
    gsap.fromTo(serviceItems, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);
  
  return (
    <ServicesContainer id="services" ref={servicesRef}>
      <div className="container">
        {/* Top Layer */}
        <TopLayer>
          <LeftHeader>
            <Subtitle>Services</Subtitle>
            <Title>Guiding You Every Step of the Way</Title>
          </LeftHeader>
          
          <SeeAllButton to="/services">
            See All <i className="bi bi-arrow-right"></i>
          </SeeAllButton>
        </TopLayer>
        
        {/* Middle & Bottom Layer - Gallery with descriptions */}
        <GalleryContainer>
          <ServiceItem className="service-item" id="developers">
            <ServiceImage>
              <Link to="/services/developers">
                <img src="/build-5.jpeg" alt="Developers" />
              </Link>
            </ServiceImage>
            <ServiceTitle>
              <Link to="/services/developers">Developers</Link>
            </ServiceTitle>
              <ServiceDescription>
              Expert real estate development services for residential and commercial projects, from land acquisition to project completion with sustainable practices.
              </ServiceDescription>
          </ServiceItem>
          
          <ServiceItem className="service-item" id="construction-services">
            <ServiceImage>
              <Link to="/services/construction-services">
                <img src="/construction/20250717-001416.jpg" alt="Construction Services" />
              </Link>
            </ServiceImage>
            <ServiceTitle>
              <Link to="/services/construction-services">Construction Services</Link>
            </ServiceTitle>
              <ServiceDescription>
              Expert construction services with precision engineering and quality craftsmanship. We handle projects of all scales with attention to detail, adherence to timelines, and commitment to excellence.
              </ServiceDescription>
          </ServiceItem>
          
          <ServiceItem className="service-item" id="property-management">
            <ServiceImage>
              <Link to="/services/property-management">
                <img src="/build-6.jpg" alt="Property Management" />
              </Link>
            </ServiceImage>
            <ServiceTitle>
              <Link to="/services/property-management">Property Management</Link>
            </ServiceTitle>
              <ServiceDescription>
              Comprehensive property management services to maintain and enhance the value of your real estate investments with minimal hassle and maximum returns.
              </ServiceDescription>
          </ServiceItem>
        </GalleryContainer>
      </div>
    </ServicesContainer>
  );
};

export default Services; 