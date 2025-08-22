import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Styled components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.div`
  background-color: #46620d;
  color: white;
  padding: 8rem 0 5rem;
  position: relative;
  overflow: hidden;
  margin-top: 60px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('/build-3.jpeg') no-repeat center center;
    background-size: cover;
    opacity: 0.15;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(70, 98, 13, 0.7) 0%, rgba(70, 98, 13, 0.6) 100%);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 7rem 0 4rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const BreadcrumbNav = styled.nav`
  margin-bottom: 1.5rem;
  
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    
    li {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
      
      &:not(:last-child)::after {
        content: '/';
        margin: 0 0.5rem;
      }
      
      a {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: white;
        }
      }
    }
  }
`;

const HeroTitle = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 550px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const MainContent = styled.main`
  flex: 1;
  padding: 5rem 0;
`;

const SectionContainer = styled.section`
  padding: 4rem 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #46620d;
    border-radius: 2px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #46620d;
  margin-bottom: 1.25rem;
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #212529;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(70, 98, 13, 0.1);
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background-color: #46620d;
    transition: height 0.3s ease;
  }
  
  &:hover::before {
    height: 100%;
  }
`;

const ServiceImage = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ServiceCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ServiceContent = styled.div`
  padding: 1.75rem;
  position: relative;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #46620d;
  
  a {
    color: #46620d;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #344709;
    }
  }
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #212529;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  padding-left: 0.5rem;
  position: relative;
  
  i {
    color: #46620d;
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    font-size: 1.1rem;
    background-color: rgba(70, 98, 13, 0.1);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  span {
    font-size: 0.95rem;
    color: #333;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CTASection = styled.section`
  background-color: #f9fafb;
  padding: 5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #46620d;
    opacity: 0.3;
  }
`;

const CTAContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 2;
  border: 1px solid rgba(70, 98, 13, 0.1);
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #46620d;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #46620d;
    border-radius: 2px;
  }
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: #212529;
  line-height: 1.7;
  margin-bottom: 2rem;
  margin-top: 1.5rem;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: #46620d;
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #344709;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    color: white;
  }
  
  i {
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: translate(2px, -2px);
  }
`;

const ServicesPage = () => {
  const servicesRef = useRef(null);
  
  useEffect(() => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    gsap.fromTo(serviceCards, 
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
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <BreadcrumbNav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>Services</li>
            </ul>
          </BreadcrumbNav>
          <HeroTitle>Our Services</HeroTitle>
          <HeroSubtitle>
            Comprehensive real estate solutions tailored to your unique needs and vision
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      {/* Main Content */}
      <MainContent>
        {/* Services Overview */}
        <SectionContainer>
          <div className="container">
            <SectionHeader>
              <SectionTitle>Guiding You Every Step of the Way</SectionTitle>
              <SectionSubtitle>
                At Rockdale, we offer a comprehensive suite of real estate services designed to meet all your property needs. 
                From initial concept to final execution, our expert team ensures excellence at every stage.
              </SectionSubtitle>
            </SectionHeader>
            
            {/* Services Grid */}
            <ServicesGrid ref={servicesRef}>
              {/* Service 1 - Developers */}
              <ServiceCard className="service-card" id="developers">
                <ServiceImage>
                  <Link to="/services/developers">
                    <img src="/build-5.jpeg" alt="Developers" />
                  </Link>
                </ServiceImage>
                <ServiceContent>
                  <ServiceTitle>
                    <Link to="/services/developers">Developers</Link>
                  </ServiceTitle>
                  <ServiceDescription>
                    Expert real estate development services for residential and commercial projects, from land acquisition to project completion with sustainable practices.
                  </ServiceDescription>
                  <ServiceFeatures>
                    <ServiceFeature>
                      <i className="bi bi-check-circle"></i>
                      <span>Land acquisition and site analysis</span>
                    </ServiceFeature>
                    <ServiceFeature>
                      <i className="bi bi-check-circle"></i>
                      <span>Project planning and feasibility studies</span>
                    </ServiceFeature>
                    <ServiceFeature>
                      <i className="bi bi-check-circle"></i>
                      <span>Sustainable development practices</span>
                    </ServiceFeature>
                  </ServiceFeatures>
                </ServiceContent>
              </ServiceCard>
              
              {/* Service 2 - Construction Services */}
              <ServiceCard className="service-card" id="construction-services">
                <ServiceImage>
                  <Link to="/services/construction-services">
                    <img src="/construction/20250717-001416.jpg" alt="Construction Services" />
                  </Link>
                </ServiceImage>
                <ServiceContent>
                  <ServiceTitle>
                    <Link to="/services/construction-services">Construction Services</Link>
                  </ServiceTitle>
                  <ServiceDescription>
                    Professional construction services with expert teams, modern equipment, and quality materials to bring your architectural vision to life.
                  </ServiceDescription>
                  <ServiceFeatures>
                    <ServiceFeature>
                      <i className="bi bi-check-circle"></i>
                      <span>Residential and commercial construction</span>
                    </ServiceFeature>
                    <ServiceFeature>
                      <i className="bi bi-check-circle"></i>
                      <span>Project management and supervision</span>
                    </ServiceFeature>
                    <ServiceFeature>
                      <i className="bi bi-check-circle"></i>
                      <span>Quality control and safety compliance</span>
                    </ServiceFeature>
                  </ServiceFeatures>
                </ServiceContent>
              </ServiceCard>
              
              {/* Service 3 - Property Management */}
              <ServiceCard className="service-card" id="property-management">
                <ServiceImage>
                  <Link to="/services/property-management">
                    <img src="/build-6.jpg" alt="Property Management" />
                  </Link>
                </ServiceImage>
                <ServiceContent>
                  <ServiceTitle>
                    <Link to="/services/property-management">Property Management</Link>
                  </ServiceTitle>
                  <ServiceDescription>
                    Comprehensive property management services to maintain and enhance the value of your real estate investments with minimal hassle.
                  </ServiceDescription>
                  <ServiceFeatures>
                    <ServiceFeature>
                      <i className="bi bi-check-circle"></i>
                      <span>Tenant acquisition and management</span>
                    </ServiceFeature>
                    <ServiceFeature>
                      <i className="bi bi-check-circle"></i>
                      <span>Regular maintenance and inspections</span>
                    </ServiceFeature>
                    <ServiceFeature>
                      <i className="bi bi-check-circle"></i>
                      <span>Financial reporting and rent collection</span>
                    </ServiceFeature>
                  </ServiceFeatures>
                </ServiceContent>
              </ServiceCard>
            </ServicesGrid>
          </div>
        </SectionContainer>
        
        {/* CTA Section */}
        <CTASection>
          <div className="container">
            <CTAContainer>
              <CTATitle>Ready to Start Your Project?</CTATitle>
              <CTADescription>
                Contact our expert team today to discuss your real estate needs and discover how our services can help you achieve your property goals.
              </CTADescription>
              <CTAButton to="/contact-us">
                Get in Touch <i className="bi bi-arrow-up-right"></i>
              </CTAButton>
            </CTAContainer>
          </div>
        </CTASection>
      </MainContent>
    </PageContainer>
  );
};

export default ServicesPage; 