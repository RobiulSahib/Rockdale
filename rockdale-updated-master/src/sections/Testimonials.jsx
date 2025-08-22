import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 6rem 0;
  background-color: #ffffff;
  font-family: 'DM Sans', sans-serif;
`;

const TestimonialLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftSection = styled.div`
  background-color: #898989;
  border-radius: 10px;
  padding: 4rem 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '"';
    position: absolute;
    top: -2rem;
    left: 0;
    font-size: 12rem;
    font-family: serif;
    color: rgba(255, 255, 255, 0.1);
    line-height: 1;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const TestimonialSlider = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TestimonialContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ClientImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  border: 4px solid rgba(255, 255, 255, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialQuote = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 2rem;
  flex: 1;
`;

const ClientInfoNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ClientInfo = styled.div``;

const ClientName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ClientPosition = styled.p`
  font-size: 0.95rem;
  opacity: 0.8;
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const RightSection = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  min-height: 500px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 992px) {
    min-height: 400px;
  }
`;

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Sample testimonial data
  const testimonials = [
    {
      quote: "Working with Rockdale Limited was an absolute delight. They transformed our vision into a stunning reality that exceeded our expectations. The attention to detail and commitment to quality was evident at every stage of the project.",
      name: "Samiha Rahman",
      position: "Homeowner, Gulshan",
      image: "/20250801-183825.949-10.webp", // Client image
      projectImage: "/20250801-183825.949-11.webp" // Project image
    },
    {
      quote: "Rockdale's team showed exceptional professionalism from design to completion. They listened carefully to our needs and delivered a beautiful home that perfectly balances functionality and aesthetics. I couldn't be happier with the results.",
      name: "Ahmed Hassan",
      position: "Business Owner, Banani",
      image: "/20250801-183825.949-12.webp", // Client image
      projectImage: "/20250801-183825.949-14.webp" // Project image
    },
    {
      quote: "The expertise and creativity that Rockdale brought to our apartment project was outstanding. They navigated challenges with ease and kept us informed throughout the process. Our new home is exactly what we dreamed of and more.",
      name: "Nusrat Jahan",
      position: "Marketing Director, Baridhara",
      image: "/20250801-183825.949-16.webp", // Client image
      projectImage: "/20250801-183825.949-17.webp" // Project image
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  return (
    <TestimonialsContainer id="testimonials" ref={testimonialsRef}>
      <div className="container">
        <TestimonialLayout>
          <LeftSection>
            <Subtitle>Testimonials</Subtitle>
            <Title>Hear from Happy Homeowners</Title>
        
            <TestimonialSlider>
              <TestimonialContent>
                <ClientImage>
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name} 
                  />
                </ClientImage>
                
              <TestimonialQuote>
                  "{testimonials[currentTestimonial].quote}"
              </TestimonialQuote>
                
                <ClientInfoNav>
                  <ClientInfo>
                    <ClientName>{testimonials[currentTestimonial].name}</ClientName>
                    <ClientPosition>{testimonials[currentTestimonial].position}</ClientPosition>
                  </ClientInfo>
                  
                  <NavigationButtons>
                    <NavButton 
                      onClick={prevTestimonial} 
                      aria-label="Previous testimonial"
                    >
                      <i className="bi bi-arrow-down-left"></i>
                    </NavButton>
                    <NavButton 
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </NavButton>
                  </NavigationButtons>
                </ClientInfoNav>
              </TestimonialContent>
            </TestimonialSlider>
          </LeftSection>
          
          <RightSection>
            <img 
              src={testimonials[currentTestimonial].projectImage} 
              alt="Project result" 
            />
          </RightSection>
        </TestimonialLayout>
      </div>
    </TestimonialsContainer>
  );
};

export default Testimonials; 