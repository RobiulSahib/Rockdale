import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images
import communityImage from '../assets/rockdeal/community.jpg';
import amenitiesImage from '../assets/rockdeal/amenities.jpg';
import sustainableImage from '../assets/rockdeal/sustainable.jpg';

// Styled components
const PageContainer = styled.div`
  background-color: #f9fafb;
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
`;

const HeroSection = styled.div`
  background-color: #46620d;
  padding: 160px 0 100px;
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'DM Sans', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;
  font-family: 'DM Sans', sans-serif;
`;

const LifeSection = styled.section`
  padding: 6rem 0;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #46620d;
  margin-bottom: 1.5rem;
  text-align: ${props => props.align || 'left'};
  font-family: 'DM Sans', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  text-align: ${props => props.align || 'left'};
  max-width: ${props => props.maxWidth || 'none'};
  margin-left: ${props => props.align === 'center' ? 'auto' : '0'};
  margin-right: ${props => props.align === 'center' ? 'auto' : '0'};
  line-height: 1.6;
`;

const Carousel = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 0;
  overflow: hidden;
`;

const CarouselContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CarouselImageWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    z-index: 1;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
`;

const CarouselText = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 600;
    color: #46620d;
    margin-bottom: 1.5rem;
    font-family: 'DM Sans', sans-serif;
  }
  
  p {
    color: #4b5563;
    line-height: 1.8;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #46620d;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #46620d;
    color: white;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
  
  &.prev {
    left: -25px;
    
    @media (max-width: 768px) {
      left: 10px;
    }
  }
  
  &.next {
    right: -25px;
    
    @media (max-width: 768px) {
      right: 10px;
    }
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  margin: 0 6px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#46620d' : '#d1d5db'};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#46620d' : '#9ca3af'};
  }
`;

// Features section
const FeaturesSection = styled.section`
  padding: 6rem 0;
  background-color: #f9fafb;
`;

const FeaturesGrid = styled.div`
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

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(70, 98, 13, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  i {
    font-size: 1.75rem;
    color: #46620d;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #46620d;
`;

const FeatureDescription = styled.p`
  color: #4b5563;
  line-height: 1.7;
`;

const LifeAtRockdalePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  
  const slides = [
    {
      image: communityImage,
      title: "Vibrant Community",
      description: "At Rockdale, we believe in creating more than just buildings; we create communities. Our developments foster a sense of belonging, with thoughtfully designed common spaces that encourage interaction and connection. From community gardens to social lounges, we provide the perfect setting for neighbors to become friends."
    },
    {
      image: amenitiesImage,
      title: "Premium Amenities",
      description: "Enjoy the luxury of premium amenities designed to enhance your lifestyle. Our properties feature state-of-the-art fitness centers, infinity pools, rooftop gardens, and smart home technology. Every detail is carefully considered to provide comfort, convenience, and an elevated living experience."
    },
    {
      image: sustainableImage,
      title: "Sustainable Living",
      description: "We are committed to sustainable development practices that respect the environment and enhance quality of life. Our buildings incorporate energy-efficient systems, water conservation measures, and green spaces. By choosing Rockdale, you're choosing a healthier planet and a more sustainable future."
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    
    gsap.fromTo(featureCards, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.features-section',
          start: "top 70%"
        }
      }
    );
  }, []);
  
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroTitle>Life at Rockdale</HeroTitle>
          <HeroSubtitle>
            Experience the perfect blend of luxury, community, and sustainability in our thoughtfully designed spaces.
          </HeroSubtitle>
        </Container>
      </HeroSection>
      
      <LifeSection>
        <Container>
          <SectionTitle align="center">The Rockdale Experience</SectionTitle>
          <SectionSubtitle align="center" maxWidth="800px">
            At Rockdale, we believe that exceptional living spaces should enhance your lifestyle. Discover what makes our properties unique and how we create environments where you can truly thrive.
          </SectionSubtitle>
          
          <Carousel ref={carouselRef}>
            <AnimatePresence mode="wait">
              <CarouselContent
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <CarouselImageWrapper>
                  <CarouselImage src={slides[currentSlide].image} alt={slides[currentSlide].title} />
                </CarouselImageWrapper>
                
                <CarouselText>
                  <h3>{slides[currentSlide].title}</h3>
                  <p>{slides[currentSlide].description}</p>
                </CarouselText>
              </CarouselContent>
            </AnimatePresence>
            
            <CarouselButton className="prev" onClick={prevSlide}>
              <i className="bi bi-chevron-left"></i>
            </CarouselButton>
            
            <CarouselButton className="next" onClick={nextSlide}>
              <i className="bi bi-chevron-right"></i>
            </CarouselButton>
            
            <CarouselDots>
              {slides.map((_, index) => (
                <Dot 
                  key={index}
                  active={currentSlide === index}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </CarouselDots>
          </Carousel>
        </Container>
      </LifeSection>
      
      <FeaturesSection className="features-section">
        <Container>
          <SectionTitle align="center">Lifestyle Features</SectionTitle>
          <SectionSubtitle align="center" maxWidth="800px">
            Discover the amenities and features that make Rockdale properties stand out and provide an exceptional living experience.
          </SectionSubtitle>
          
          <FeaturesGrid>
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-shield-check"></i>
              </FeatureIcon>
              <FeatureTitle>24/7 Security</FeatureTitle>
              <FeatureDescription>
                Rest easy with round-the-clock security systems, CCTV surveillance, and trained personnel ensuring your safety and peace of mind.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-tree"></i>
              </FeatureIcon>
              <FeatureTitle>Green Spaces</FeatureTitle>
              <FeatureDescription>
                Enjoy meticulously landscaped gardens, rooftop green areas, and natural elements integrated throughout our properties.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-lightning"></i>
              </FeatureIcon>
              <FeatureTitle>Smart Living</FeatureTitle>
              <FeatureDescription>
                Experience the convenience of smart home technology with integrated systems for lighting, climate control, and security.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-water"></i>
              </FeatureIcon>
              <FeatureTitle>Leisure Facilities</FeatureTitle>
              <FeatureDescription>
                Unwind in our swimming pools, spa areas, and recreational spaces designed for relaxation and rejuvenation.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-people"></i>
              </FeatureIcon>
              <FeatureTitle>Community Events</FeatureTitle>
              <FeatureDescription>
                Connect with neighbors through regular community events, workshops, and activities organized for residents.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-geo-alt"></i>
              </FeatureIcon>
              <FeatureTitle>Prime Locations</FeatureTitle>
              <FeatureDescription>
                Enjoy the convenience of living in carefully selected locations with easy access to essential amenities and transportation.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
    </PageContainer>
  );
};

export default LifeAtRockdalePage; 