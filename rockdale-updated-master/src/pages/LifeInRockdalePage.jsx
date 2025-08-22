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
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    background-color: ${props => props.active ? '#46620d' : '#a3a3a3'};
  }
`;

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

const FeatureCard = styled(motion.div)`
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(70, 98, 13, 0.1);
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
  color: #46620d;
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #46620d;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #4b5563;
  line-height: 1.6;
  font-size: 1rem;
`;

const TestimonialsSection = styled.section`
  padding: 6rem 0;
  background-color: #ffffff;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background-color: #f9fafb;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  position: relative;
  
  &:before {
    content: '"';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 5rem;
    line-height: 1;
    color: rgba(70, 98, 13, 0.1);
    font-family: Georgia, serif;
  }
`;

const TestimonialText = styled.p`
  color: #4b5563;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const TestimonialAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialInfo = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: #46620d;
    font-size: 0.9rem;
  }
`;

const CTASection = styled.section`
  padding: 6rem 0;
  background-color: #46620d;
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  background-color: white;
  color: #46620d;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const LifeInRockdalePage = () => {
  const slides = [
    {
      image: communityImage,
      title: 'Vibrant Community',
      description: 'Experience a sense of belonging with our thoughtfully designed communal spaces. Our properties are more than just buildings; they\'re vibrant communities where residents can connect, collaborate, and create lasting relationships. From community gardens to shared workspaces, we provide environments that foster interaction and engagement.',
    },
    {
      image: amenitiesImage,
      title: 'Modern Amenities',
      description: 'Enjoy state-of-the-art facilities that elevate your lifestyle. Our properties feature premium amenities designed to enhance comfort, convenience, and wellness. From fitness centers and swimming pools to co-working spaces and entertainment lounges, we provide everything you need to live, work, and play without leaving home.',
    },
    {
      image: sustainableImage,
      title: 'Sustainable Living',
      description: 'Eco-friendly designs that prioritize sustainability and comfort. We believe in creating homes that are not only beautiful but also responsible. Our properties incorporate energy-efficient systems, sustainable materials, and green spaces that reduce environmental impact while creating healthier living environments for our residents.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroRef = useRef(null);
  const carouselRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  useEffect(() => {
    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animation
    gsap.fromTo(
      heroRef.current.querySelectorAll('*'),
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out" 
      }
    );
    
    // Features animation
    gsap.fromTo(
      ".feature-card",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 70%",
        }
      }
    );
    
    // Testimonials animation
    gsap.fromTo(
      ".testimonial-card",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 70%",
        }
      }
    );
    
    // CTA animation
    gsap.fromTo(
      ctaRef.current.querySelectorAll('*'),
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <PageContainer>
      <HeroSection ref={heroRef}>
        <Container>
          <HeroTitle>Life at Rockdale</HeroTitle>
          <HeroSubtitle>
            Discover the exceptional lifestyle that awaits you in our thoughtfully designed communities across Bangladesh.
          </HeroSubtitle>
        </Container>
      </HeroSection>
      
      <LifeSection>
        <Container>
          <SectionTitle align="center">Experience Luxury Living</SectionTitle>
          <SectionSubtitle align="center" maxWidth="700px">
            Our properties are designed to provide more than just a place to live—they offer a complete lifestyle experience with premium amenities and thoughtful design.
          </SectionSubtitle>
          
          <Carousel ref={carouselRef}>
            <AnimatePresence mode="wait">
              <CarouselContent
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <CarouselImageWrapper>
                  <CarouselImage
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                  />
                </CarouselImageWrapper>
                <CarouselText>
                  <h3>{slides[currentSlide].title}</h3>
                  <p>{slides[currentSlide].description}</p>
                </CarouselText>
              </CarouselContent>
            </AnimatePresence>
            <CarouselButton onClick={prevSlide} className="prev">
              <i className="bi bi-chevron-left"></i>
            </CarouselButton>
            <CarouselButton onClick={nextSlide} className="next">
              <i className="bi bi-chevron-right"></i>
            </CarouselButton>
          </Carousel>
          <CarouselDots>
            {slides.map((_, index) => (
              <Dot
                key={index}
                onClick={() => setCurrentSlide(index)}
                active={currentSlide === index}
              />
            ))}
          </CarouselDots>
        </Container>
      </LifeSection>
      
      <FeaturesSection ref={featuresRef}>
        <Container>
          <SectionTitle align="center">Lifestyle Features</SectionTitle>
          <SectionSubtitle align="center" maxWidth="700px">
            Enjoy a range of exclusive features and amenities designed to enhance your daily life and provide unparalleled comfort.
          </SectionSubtitle>
          
          <FeaturesGrid>
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-shield-check"></i>
              </FeatureIcon>
              <FeatureTitle>24/7 Security</FeatureTitle>
              <FeatureDescription>
                Rest easy with round-the-clock security services, CCTV surveillance, and controlled access systems ensuring your safety.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-water"></i>
              </FeatureIcon>
              <FeatureTitle>Swimming Pools</FeatureTitle>
              <FeatureDescription>
                Enjoy refreshing swims in our beautifully designed pools, perfect for exercise or relaxation throughout the year.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-tree"></i>
              </FeatureIcon>
              <FeatureTitle>Green Spaces</FeatureTitle>
              <FeatureDescription>
                Connect with nature in our landscaped gardens and green areas, providing a peaceful retreat from the busy city.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-lightning-charge"></i>
              </FeatureIcon>
              <FeatureTitle>Backup Power</FeatureTitle>
              <FeatureDescription>
                Never experience disruptions with our reliable backup power systems ensuring continuous electricity supply.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-people"></i>
              </FeatureIcon>
              <FeatureTitle>Community Spaces</FeatureTitle>
              <FeatureDescription>
                Foster connections in our thoughtfully designed community areas, including lounges, rooftop terraces, and event spaces.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard className="feature-card">
              <FeatureIcon>
                <i className="bi bi-bicycle"></i>
              </FeatureIcon>
              <FeatureTitle>Fitness Center</FeatureTitle>
              <FeatureDescription>
                Stay active and healthy with our state-of-the-art fitness facilities equipped with modern exercise equipment.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
      
      <TestimonialsSection ref={testimonialsRef}>
        <Container>
          <SectionTitle align="center">What Residents Say</SectionTitle>
          <SectionSubtitle align="center" maxWidth="700px">
            Hear from the people who call our properties home and experience the Rockdale difference through their stories.
          </SectionSubtitle>
          
          <TestimonialsGrid>
            <TestimonialCard className="testimonial-card">
              <TestimonialText>
                Moving into Gulshan Heights has transformed our lifestyle. The amenities are exceptional, and the community is welcoming and vibrant. We couldn't be happier with our decision to make this our home.
              </TestimonialText>
              <TestimonialAuthor>
                <TestimonialAvatar>
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Resident" />
                </TestimonialAvatar>
                <TestimonialInfo>
                  <h4>Rahim Ahmed</h4>
                  <p>Resident since 2022</p>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard className="testimonial-card">
              <TestimonialText>
                The attention to detail in our apartment is impressive. From the quality of finishes to the thoughtful layout, everything has been designed with residents' comfort in mind. The green spaces are my favorite feature.
              </TestimonialText>
              <TestimonialAuthor>
                <TestimonialAvatar>
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Resident" />
                </TestimonialAvatar>
                <TestimonialInfo>
                  <h4>Sadia Rahman</h4>
                  <p>Resident since 2021</p>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard className="testimonial-card">
              <TestimonialText>
                As a busy professional, I appreciate the convenience of living in a Rockdale property. The location is perfect, and having amenities like a fitness center and coworking space within the building has made life so much easier.
              </TestimonialText>
              <TestimonialAuthor>
                <TestimonialAvatar>
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Resident" />
                </TestimonialAvatar>
                <TestimonialInfo>
                  <h4>Kamal Hossain</h4>
                  <p>Resident since 2023</p>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard className="testimonial-card">
              <TestimonialText>
                The sense of security and peace of mind we have living here is invaluable. The management team is responsive and professional, and the maintenance of common areas is impeccable. It truly feels like a premium living experience.
              </TestimonialText>
              <TestimonialAuthor>
                <TestimonialAvatar>
                  <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Resident" />
                </TestimonialAvatar>
                <TestimonialInfo>
                  <h4>Nusrat Jahan</h4>
                  <p>Resident since 2022</p>
                </TestimonialInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsGrid>
        </Container>
      </TestimonialsSection>
      
      <CTASection ref={ctaRef}>
        <Container>
          <CTATitle>Ready to Experience Life at Rockdale?</CTATitle>
          <CTAText>
            Discover our available properties and find your perfect home in one of our exceptional communities across Bangladesh.
          </CTAText>
          <CTAButton>View Available Properties</CTAButton>
        </Container>
      </CTASection>
    </PageContainer>
  );
};

export default LifeInRockdalePage; 