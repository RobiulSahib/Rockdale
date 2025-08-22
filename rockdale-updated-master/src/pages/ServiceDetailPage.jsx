import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  font-family: 'DM Sans', sans-serif;
`;

const HeroSection = styled.div`
  height: 50vh;
  background-color: #46620d;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    z-index: 1;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  filter: brightness(0.8);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MainContent = styled.main`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceDescription = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #46620d;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1.5rem;
  }
`;

const ServiceImage = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  i {
    color: #46620d;
    font-size: 1.5rem;
    margin-right: 1rem;
  }
  
  span {
    font-size: 1.1rem;
    line-height: 1.6;
  }
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
  margin-top: 2rem;
  
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

const RelatedServices = styled.section`
  padding: 5rem 0;
  background-color: #f9fafb;
`;

const RelatedTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #46620d;
  margin-bottom: 3rem;
  text-align: center;
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
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.div`
  height: 200px;
  overflow: hidden;
  
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

const CardContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #46620d;
  }
  
  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

const CardLink = styled(Link)`
  color: #46620d;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #344709;
  }
  
  i {
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: translateX(3px);
  }
`;

// Service data
const serviceData = {
  'developers': {
    title: 'Developers',
    subtitle: 'Expert real estate development services for residential and commercial projects',
    description: 'Our development services cover the entire project lifecycle from land acquisition to completion, ensuring sustainable and profitable real estate ventures.',
    longDescription: 'At Rockdale, our development team brings together expertise in market analysis, land acquisition, project planning, and execution to deliver successful real estate projects. We focus on creating value through innovative design, sustainable practices, and efficient project management, resulting in developments that meet both market demands and community needs.',
    image: '/build-5.jpeg',
    bgImage: '/build-5.jpeg',
    features: [
      'Comprehensive land acquisition and site analysis services',
      'Detailed project planning and feasibility studies',
      'Sustainable development practices and green building initiatives',
      'Regulatory compliance and permit management',
      'Project financing and investment structuring',
      'End-to-end project management and delivery'
    ]
  },
  'construction-services': {
    title: 'Construction Services',
    subtitle: 'Expert construction with precision engineering and quality craftsmanship',
    description: 'Our construction services deliver exceptional quality across projects of all scales with meticulous attention to detail, adherence to timelines, and unwavering commitment to excellence.',
    longDescription: 'At Rockdale, our construction services combine technical expertise with creative problem-solving to bring architectural visions to life. We employ skilled professionals, use quality materials, and implement rigorous project management to ensure that every construction project meets the highest standards of quality, safety, and efficiency.',
    image: '/construction/20250717-001416.jpg',
    bgImage: '/construction/20250717-001530.jpg',
    features: [
      'Residential and commercial construction from foundation to finishing',
      'Comprehensive project management and supervision',
      'Quality control systems and safety compliance protocols',
      'Skilled workforce with specialized expertise in various construction disciplines',
      'Modern equipment and technology for efficient construction processes',
      'Transparent communication and detailed progress reporting'
    ]
  },
  'property-management': {
    title: 'Property Management',
    subtitle: 'Comprehensive management services for real estate investments',
    description: 'Our property management services maintain and enhance the value of your real estate investments with minimal hassle, handling everything from tenant relations to maintenance and financial reporting.',
    longDescription: 'Effective property management requires attention to detail, responsiveness, and financial acumen. Our property management team takes care of all aspects of your investment properties, allowing you to enjoy the benefits of ownership without the day-to-day responsibilities.',
    image: '/build-6.jpg',
    bgImage: '/build-6.jpg',
    features: [
      'Tenant acquisition and management including screening and lease administration',
      'Regular maintenance and inspections to preserve property value',
      'Financial reporting and rent collection services',
      'Emergency response and issue resolution',
      'Vendor management and quality control',
      'Compliance with all relevant laws and regulations'
    ]
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  
  useEffect(() => {
    // In a real application, this would fetch data from an API
    // For now, we're using the static data object
    if (serviceData[serviceId]) {
      setService(serviceData[serviceId]);
      window.scrollTo(0, 0);
    }
  }, [serviceId]);
  
  if (!service) {
    return (
      <PageContainer>
        <Container>
          <h2>Service not found</h2>
          <p>The requested service does not exist.</p>
          <Link to="/services">Return to Services</Link>
        </Container>
      </PageContainer>
    );
  }
  
  // Get related services (excluding current one)
  const relatedServices = Object.entries(serviceData)
    .filter(([id]) => id !== serviceId)
    .slice(0, 3)
    .map(([id, data]) => ({ id, ...data }));
  
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroBackground bgImage={service.bgImage} />
        <HeroContent>
          <HeroTitle>{service.title}</HeroTitle>
          <HeroSubtitle>{service.subtitle}</HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      {/* Main Content */}
      <MainContent>
        <Container>
          <ServiceContent>
            <ServiceDescription>
              <h2>About Our {service.title} Service</h2>
              <p>{service.longDescription}</p>
              
              <h3>What We Offer</h3>
              <FeaturesList>
                {service.features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>{feature}</span>
                  </FeatureItem>
                ))}
              </FeaturesList>
              
              <CTAButton to="/contact-us">
                Request a Consultation <i className="bi bi-arrow-up-right"></i>
              </CTAButton>
            </ServiceDescription>
            
            <ServiceImage>
              <img src={service.image} alt={service.title} />
            </ServiceImage>
          </ServiceContent>
        </Container>
      </MainContent>
      
      {/* Related Services */}
      <RelatedServices>
        <Container>
          <RelatedTitle>Related Services</RelatedTitle>
          
          <ServicesGrid>
            {relatedServices.map(related => (
              <ServiceCard key={related.id}>
                <CardImage>
                  <img src={related.image} alt={related.title} />
                </CardImage>
                <CardContent>
                  <h3>{related.title}</h3>
                  <p>{related.description}</p>
                  <CardLink to={`/services/${related.id}`}>
                    Learn More <i className="bi bi-arrow-right"></i>
                  </CardLink>
                </CardContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </RelatedServices>
    </PageContainer>
  );
};

export default ServiceDetailPage; 