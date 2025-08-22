import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Custom NavLink component that scrolls to top on click
const ScrollToTopLink = ({ children, to, ...props }) => {
  const handleClick = () => {
    // Scroll to top when link is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

const FooterContainer = styled.footer`
  background-color: #898989;
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  img {
    height: 53px;
    width: 120px;
    object-fit: cover;
    object-position: center;
    background-color: white;
    padding: 0.25rem;
    border-radius: 26.5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 0.75rem;
  }
  
  span {
    margin-left: 0.25rem;
  }
`;

const FooterDescription = styled.p`
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
`;

const FooterTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: white;
    }
  }
`;

const FooterContact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  i {
    margin-right: 0.75rem;
    color: white;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: #46620d;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  padding-top: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
`;

const ScrollToTopButton = styled.button`
  background-color: white;
  color: #46620d;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 99;
  opacity: ${props => props.isVisible ? 1 : 0};
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  transform: ${props => props.isVisible ? 'scale(1)' : 'scale(0)'};
  
  &:hover {
    transform: ${props => props.isVisible ? 'translateY(-5px)' : 'scale(0)'};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    const heroSection = document.getElementById('hero');
    
    const handleScroll = () => {
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const isHeroVisible = heroRect.bottom > 0 && heroRect.top < window.innerHeight;
        setShowScrollButton(!isHeroVisible);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterColumn>
            <FooterLogo>
              <img src="/images/Logo.png" alt="Rockdale Logo" />
              <span>Rockdale</span>
            </FooterLogo>
            <FooterDescription>
              Building dreams and transforming properties into exceptional spaces. 
              At Rockdale, we deliver excellence in construction and real estate services.
            </FooterDescription>
            <FooterSocial>
              <SocialIcon href="#">
                <i className="bi bi-facebook"></i>
              </SocialIcon>
              <SocialIcon href="#">
                <i className="bi bi-twitter"></i>
              </SocialIcon>
              <SocialIcon href="#">
                <i className="bi bi-instagram"></i>
              </SocialIcon>
              <SocialIcon href="#">
                <i className="bi bi-linkedin"></i>
              </SocialIcon>
            </FooterSocial>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <ScrollToTopLink to="/">Home</ScrollToTopLink>
              </FooterLink>
              <FooterLink>
                <ScrollToTopLink to="/about">About Us</ScrollToTopLink>
              </FooterLink>
              <FooterLink>
                <ScrollToTopLink to="/projects">Projects</ScrollToTopLink>
              </FooterLink>
              <FooterLink>
                <ScrollToTopLink to="/services">Services</ScrollToTopLink>
              </FooterLink>
              {/* <FooterLink>
                <ScrollToTopLink to="/life-at-rockdale">Life at Rockdale</ScrollToTopLink>
              </FooterLink> */}
              <FooterLink>
                <ScrollToTopLink to="/news-events">News & Events</ScrollToTopLink>
              </FooterLink>
              <FooterLink>
                <ScrollToTopLink to="/about/testimonials">Testimonials</ScrollToTopLink>
              </FooterLink>
              <FooterLink>
                <ScrollToTopLink to="/contact-us">Contact Us</ScrollToTopLink>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Services</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <ScrollToTopLink to="/services/developers">Developers</ScrollToTopLink>
              </FooterLink>
              <FooterLink>
                <ScrollToTopLink to="/services/construction-services">Construction Services</ScrollToTopLink>
              </FooterLink>
              {/* <FooterLink>
                <ScrollToTopLink to="/services/property-management">Property Management</ScrollToTopLink>
              </FooterLink> */}
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contact Us</FooterTitle>
            <FooterContact>
              <i className="bi bi-geo-alt"></i>
              <span>Rockdale Tower, Level 20-22, 187-188/B, Bir Uttam Mir Shawkat Sarak Tejgaon, Dhaka 1208</span>
            </FooterContact>
            <FooterContact>
              <i className="bi bi-telephone"></i>
              <span>Hotline: 16634</span>
            </FooterContact>
            <FooterContact>
              <i className="bi bi-phone"></i>
              <span>Sales: +88 01678666444</span>
            </FooterContact>
            <FooterContact>
              <i className="bi bi-envelope"></i>
              <span>info@rockdale.com</span>
            </FooterContact>
          </FooterColumn>
        </FooterContent>
        
        <FooterBottom>
          <p>© 2025. Rockdale Ltd. All Rights Reserved.</p>
        </FooterBottom>
      </div>
      
      <ScrollToTopButton 
        isVisible={showScrollButton}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up"></i>
      </ScrollToTopButton>
    </FooterContainer>
  );
};

export default Footer; 