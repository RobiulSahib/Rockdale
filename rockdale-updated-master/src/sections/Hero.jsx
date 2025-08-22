import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import PopupForm from '../components/PopupForm';

// Background images for the carousel
const backgroundImages = [
  '/Hero-Background.jpeg',
  '/build-1.jpeg',
  '/build-2.jpeg',
  '/build-3.jpeg',
  '/build-4.jpeg',
  '/build-5.jpeg'
];

const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
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
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const BackgroundCarousel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(1.1);
  transition: opacity 0.8s ease, transform 0.8s ease;
  
  &.active {
    opacity: 1;
    transform: scale(1);
  }
  
  &.zooming-in {
    transform: scale(1.05);
  }
  
  &.zooming-out {
    transform: scale(0.95);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  font-family: 'DM Sans', sans-serif;
  line-height: 1.1;
  letter-spacing: -0.5px;
  opacity: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.35rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  opacity: 1;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.25rem;
  opacity: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
  }
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1.75rem;
  background: linear-gradient(135deg, #46620d 0%, #344709 100%);
  border-radius: 40px;
  color: white;
  border: none;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
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

const SecondaryButton = styled(Link)`
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
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 1;
  text-decoration: none;
  
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

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const carouselRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-show popup form once per session
  useEffect(() => {
    // Check if popup has been shown in this session
    const hasPopupBeenShown = localStorage.getItem('popupShown');
    
    // If not shown yet, show it after a short delay and mark as shown
    if (!hasPopupBeenShown) {
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
        localStorage.setItem('popupShown', 'true');
      }, 2000); // 2-second delay before showing the popup
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  useEffect(() => {
    // Ensure elements are visible first
    if (titleRef.current) titleRef.current.style.opacity = 1;
    if (subtitleRef.current) subtitleRef.current.style.opacity = 1;
    if (buttonsRef.current) buttonsRef.current.style.opacity = 1;
    
    // More subtle GSAP animations that start from visible state
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    
    tl.fromTo(titleRef.current, 
      { opacity: 0.7, y: 15 }, 
      { opacity: 1, y: 0, duration: 0.8, clearProps: "all" }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0.7, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.8, clearProps: "all" }, 
      "-=0.6"
    )
    .fromTo(buttonsRef.current.children, 
      { opacity: 0.7, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, clearProps: "all" }, 
      "-=0.6"
    );
  }, []);
  
  // Background Carousel Animation
  useEffect(() => {
    if (!carouselRef.current) return;
    
    const images = carouselRef.current.children;
    let currentIndex = 0;
    
    const animateCarousel = () => {
      // Remove all active classes and reset transforms
      Array.from(images).forEach((img, index) => {
        img.classList.remove('active', 'zooming-in', 'zooming-out');
        gsap.set(img, { scale: 1.1, opacity: 0 });
      });
      
      // Set current image as active
      if (images[currentIndex]) {
        // Fade in and scale to normal
        gsap.to(images[currentIndex], {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          onComplete: () => {
            images[currentIndex].classList.add('active');
          }
        });
        
        // Subtle zoom in effect
        gsap.to(images[currentIndex], {
          scale: 1.05,
          duration: 3,
          delay: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            images[currentIndex].classList.add('zooming-in');
          }
        });
        
        // Subtle zoom out effect
        gsap.to(images[currentIndex], {
          scale: 0.95,
          duration: 3,
          delay: 4.5,
          ease: "power2.inOut",
          onComplete: () => {
            images[currentIndex].classList.add('zooming-out');
          }
        });
      }
      
      // Move to next image
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImageIndex(currentIndex);
    };
    
    // Start the carousel
    const interval = setInterval(animateCarousel, 6000); // Change image every 6 seconds
    
    // Initial animation
    animateCarousel();
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  
  return (
    <HeroContainer id="hero" ref={heroRef}>
      <BackgroundCarousel ref={carouselRef}>
        {backgroundImages.map((image, index) => (
          <BackgroundImage 
            key={index} 
            src={image}
            className={index === currentImageIndex ? 'active' : ''}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </BackgroundCarousel>
      
      <div className="container">
        <HeroContent className="row">
          <div className="col-lg-8 col-md-10">
            <HeroTitle ref={titleRef}>
              Turning Your Real Estate Dreams Into Beautiful Realities
            </HeroTitle>
            <HeroSubtitle ref={subtitleRef}>
              At Rockdale, we believe that a home is more than just a place—it's a feeling, a foundation, and a future
            </HeroSubtitle>
            <ButtonGroup ref={buttonsRef}>
              <PrimaryButton type="button" onClick={(e) => {
                e.stopPropagation();
                setIsPopupOpen(true);
              }}>
                Get Started <i className="bi bi-arrow-right"></i>
              </PrimaryButton>
              <SecondaryButton to="/about">
                Learn More <i className="bi bi-arrow-right"></i>
              </SecondaryButton>
            </ButtonGroup>
          </div>
        </HeroContent>
      </div>
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </HeroContainer>
  );
};

export default Hero; 