import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import UserProfileIcon from './UserProfileIcon';

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

const NavbarContainer = styled.nav`
  position: fixed;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  max-width: 1300px;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${props => {
    // White background on non-home pages or when scrolled
    if (props.isHomePage) {
      return props.scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.15)';
    } else {
      return 'rgba(255, 255, 255, 0.9)';
    }
  }};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 40px;
  box-shadow: ${props => {
    // Shadow on non-home pages or when scrolled
    if (props.isHomePage) {
      return props.scrolled ? '0 8px 20px rgba(0, 0, 0, 0.1)' : 'none';
    } else {
      return '0 8px 20px rgba(0, 0, 0, 0.1)';
    }
  }};
  border: 1px solid rgba(255, 255, 255, 0.18);
  opacity: ${props => props.isVisible ? 1 : 0};
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  transform: ${props => props.isVisible ? 'translateX(-50%)' : 'translateX(-50%) translateY(-100px)'};
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.75rem;
  height: 60px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0.25rem;
`;

const LogoImage = styled.img`
  height: 53px;
  width: 120px;
  object-fit: cover;
  object-position: center;
  background-color: white;
  padding: 0.25rem;
  border-radius: 26.5px; /* Half of the height for perfect capsule shape */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    height: 48px;
    border-radius: 24px; /* Half of the height for mobile */
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0 1.5rem;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.75rem;
  align-items: center;
  height: 100%;
`;

const NavLink = styled(ScrollToTopLink)`
  color: ${props => {
    // Text color based on page and scroll state
    if (props.isHomePage) {
      return props.scrolled ? '#46620d' : 'white';
    } else {
      return '#46620d';
    }
  }};
  text-decoration: none;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 0.35rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => {
      // Underline color based on page and scroll state
      if (props.isHomePage) {
        return props.scrolled ? '#46620d' : 'white';
      } else {
        return '#46620d';
      }
    }};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${props => {
      // Hover color based on page and scroll state
      if (props.isHomePage) {
        return props.scrolled ? '#46620d' : 'white';
      } else {
        return '#46620d';
      }
    }};
    
    &::after {
      width: 100%;
    }
  }
  
  &.active::after {
    width: 100%;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover .dropdown-content {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: -20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 1rem 0;
  min-width: 220px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DropdownLink = styled(ScrollToTopLink)`
  display: block;
  padding: 0.75rem 1.5rem;
  color: #46620d;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(70, 98, 13, 0.1);
  }
`;

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SignInButton = styled(ScrollToTopLink)`
  background: transparent;
  border: none;
  color: ${props => {
    // Text color based on page and scroll state
    if (props.isHomePage) {
      return props.scrolled ? '#46620d' : 'white';
    } else {
      return '#46620d';
    }
  }};
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0.35rem 0.75rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    color: ${props => {
      // Hover color based on page and scroll state
      if (props.isHomePage) {
        return props.scrolled ? '#344709' : '#e6e6e6';
      } else {
        return '#344709';
      }
    }};
  }
`;

const CTAButton = styled(ScrollToTopLink)`
  background: linear-gradient(135deg, #46620d 0%, #344709 100%);
  color: white;
  border: none;
  border-radius: 40px;
  padding: 0.7rem 1.75rem;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
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
  
  &:hover {
    background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%);
    transform: translateY(-3px);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    
    &::before {
      left: 100%;
    }
  }
`;

const ArrowIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
  
  ${CTAButton}:hover & {
    transform: translate(2px, -2px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => {
    // Text color based on page and scroll state
    if (props.isHomePage) {
      return props.scrolled ? '#46620d' : 'white';
    } else {
      return '#46620d';
    }
  }};
  font-size: 1.4rem;
  padding: 0.25rem;
  
  @media (max-width: 992px) {
    display: block;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 400px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
`;

const MobileMenuClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.4rem;
  color: #46620d;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(70, 98, 13, 0.1);
    transform: rotate(90deg);
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  width: 100%;
  max-width: 320px;
`;

const MobileNavItem = styled(motion.div)`
  position: relative;
`;

const MobileNavLink = styled(ScrollToTopLink)`
  color: #46620d;
  text-decoration: none;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.35rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 0;
  display: block;
  
  &:hover {
    color: #344709;
    transform: translateX(5px);
  }
  
  &.active {
    font-weight: 700;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 3px;
      background-color: #46620d;
      border-radius: 3px;
    }
  }
`;

const MobileDropdown = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgba(70, 98, 13, 0.05);
  border-radius: 12px;
  width: 100%;
`;

const MobileDropdownLink = styled(ScrollToTopLink)`
  color: #46620d;
  text-decoration: none;
  font-weight: 400;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0.9;
  padding: 0.5rem 0;
  
  &:hover {
    color: #344709;
    opacity: 1;
    transform: translateX(5px);
  }
`;

const MobileDropdownToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 8px;
  
  &:hover {
    color: #344709;
    background-color: rgba(70, 98, 13, 0.05);
  }
  
  i {
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }
`;

const MobileAuthButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
  width: 100%;
  max-width: 320px;
`;

const MobileLogoImage = styled.img`
  height: 70px;
  width: 120px;
  object-fit: cover;
  object-position: center;
  background-color: white;
  padding: 0.25rem;
  border-radius: 35px; /* Half of the height for perfect capsule shape */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2.5rem;
`;

const MobileMenuHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(70, 98, 13, 0.1);
`;

const MobileMenuDivider = styled.div`
  width: 60%;
  height: 1px;
  background-color: rgba(70, 98, 13, 0.1);
  margin: 0.5rem auto 1.5rem;
`;

const MobileSocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background-color: rgba(70, 98, 13, 0.1);
  color: #46620d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  
  &:hover {
    background-color: #46620d;
    color: white;
    transform: translateY(-3px);
  }
`;

const MobileCopyright = styled(motion.p)`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  opacity: 0.7;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  
  // Check authentication status
  useEffect(() => {
    const checkAuthStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(!!loggedIn);
    };
    
    checkAuthStatus();
    // Listen for storage changes and custom events (when user logs in/out)
    const handleAuthChange = () => {
      checkAuthStatus();
    };
    
    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('authStateChanged', handleAuthChange);
    
    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('authStateChanged', handleAuthChange);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Check for hero section visibility on all pages
      let heroSection;
      
      if (isHomePage) {
        heroSection = document.getElementById('hero');
      } else if (location.pathname === '/news-events' || location.pathname === '/contact-us') {
        // For News & Events and Contact Us pages, use the HeroSection element
        heroSection = document.querySelector('[class^="HeroSection"]');
      }
      
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const isHeroVisible = heroRect.bottom > 0;
        setIsVisible(isHeroVisible);
      } else {
        // If no hero section found, always show navbar
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage, location.pathname]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };
  
  const toggleMobileAbout = () => {
    setMobileAboutOpen(!mobileAboutOpen);
  };

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <>
      <NavbarContainer scrolled={scrolled} isVisible={isVisible} isHomePage={isHomePage}>
        <NavbarContent>
          <LogoContainer>
            <Link to="/">
              <LogoImage src="/images/Logo.png" alt="Rockdale Logo" />
            </Link>
          </LogoContainer>
          
          <NavLinksContainer>
            <NavLinks>
              <NavLink 
                to="/"
                isHomePage={isHomePage}
                scrolled={scrolled}
              >
                Home
              </NavLink>
              <DropdownContainer>
                <NavLink 
                  to="/about"
                  isHomePage={isHomePage}
                  scrolled={scrolled}
                >
                  About
                </NavLink>
                <DropdownContent className="dropdown-content">
                  <DropdownLink to="/about#our-story">Our Story</DropdownLink>
                  <DropdownLink to="/about#core-values">Core Values</DropdownLink>
                  {/* <DropdownLink to="/about#leadership">Leadership Team</DropdownLink> */}
                  {/* <DropdownLink to="/about#journey">Our Journey</DropdownLink> */}
                  {/* <DropdownLink to="/about#csr">CSR</DropdownLink> */}
                  <DropdownLink to="/about/testimonials">Client Testimonials</DropdownLink>
                </DropdownContent>
              </DropdownContainer>
              <NavLink 
                to="/projects"
                isHomePage={isHomePage}
                scrolled={scrolled}
              >
                Projects
              </NavLink>
              <DropdownContainer>
                <NavLink 
                  to="/services"
                  isHomePage={isHomePage}
                  scrolled={scrolled}
                >
                  Services
                </NavLink>
                <DropdownContent className="dropdown-content">
                  <DropdownLink to="/services/developers">Developers</DropdownLink>
                  <DropdownLink to="/services/construction-services">Construction Services</DropdownLink>
                  {/* <DropdownLink to="/services/property-management">Property Management</DropdownLink> */}
                </DropdownContent>
              </DropdownContainer>
              <NavLink 
                to="/news-events"
                isHomePage={isHomePage}
                scrolled={scrolled}
              >
                News & Events
              </NavLink>
              <NavLink 
                to="/contact-us"
                isHomePage={isHomePage}
                scrolled={scrolled}
              >
                Contact
              </NavLink>
            </NavLinks>
          </NavLinksContainer>
          
          <AuthContainer>
            {isLoggedIn ? (
              <UserProfileIcon />
            ) : (
              <>
                <SignInButton to="/auth" scrolled={scrolled} isHomePage={isHomePage}>Sign In</SignInButton>
                <CTAButton to="/auth">
                  Get Started <ArrowIcon><i className="bi bi-arrow-up-right"></i></ArrowIcon>
                </CTAButton>
              </>
            )}
          </AuthContainer>
          
          <MobileMenuButton scrolled={scrolled} onClick={toggleMobileMenu} isHomePage={isHomePage}>
            <i className="bi bi-list"></i>
          </MobileMenuButton>
        </NavbarContent>
      </NavbarContainer>
      
      <MobileMenuOverlay 
        isOpen={mobileMenuOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={closeMobileMenu}
      />
      
      <MobileMenu
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <MobileMenuClose onClick={closeMobileMenu}>
          <i className="bi bi-x-lg"></i>
        </MobileMenuClose>
        
        <MobileMenuHeader>
          <MobileLogoImage src="/images/Logo.png" alt="Rockdale Logo" />
        </MobileMenuHeader>
        
        <MobileNavLinks
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={mobileMenuOpen ? "show" : "hidden"}
        >
          <MobileNavItem variants={itemVariants}>
            <MobileNavLink to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active' : ''}>
              Home
            </MobileNavLink>
          </MobileNavItem>
          
          <MobileNavItem variants={itemVariants}>
            <div>
              <MobileDropdownToggle onClick={toggleMobileAbout} isOpen={mobileAboutOpen}>
                <MobileNavLink as="span" className={location.pathname === '/about' || location.pathname === '/about/testimonials' ? 'active' : ''}>
                  About
                </MobileNavLink>
                <i className="bi bi-chevron-down"></i>
              </MobileDropdownToggle>
              
              {mobileAboutOpen && (
                <MobileDropdown
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <MobileDropdownLink to="/about#our-story" onClick={closeMobileMenu}>
                    Our Story
                  </MobileDropdownLink>
                  <MobileDropdownLink to="/about#core-values" onClick={closeMobileMenu}>
                    Core Values
                  </MobileDropdownLink>
                  {/* <MobileDropdownLink to="/about#leadership" onClick={closeMobileMenu}>
                    Leadership Team
                  </MobileDropdownLink>
                  <MobileDropdownLink to="/about#journey" onClick={closeMobileMenu}>
                    Our Journey
                  </MobileDropdownLink>
                  <MobileDropdownLink to="/about#csr" onClick={closeMobileMenu}>
                    CSR
                  </MobileDropdownLink> */}
                  <MobileDropdownLink to="/about/testimonials" onClick={closeMobileMenu}>
                    Client Testimonials
                  </MobileDropdownLink>
                </MobileDropdown>
              )}
            </div>
          </MobileNavItem>
          
          <MobileNavItem variants={itemVariants}>
            <MobileNavLink to="/projects" onClick={closeMobileMenu} className={location.pathname === '/projects' ? 'active' : ''}>
              Projects
            </MobileNavLink>
          </MobileNavItem>
          
          <MobileNavItem variants={itemVariants}>
            <div>
              <MobileDropdownToggle onClick={toggleMobileServices} isOpen={mobileServicesOpen}>
                <MobileNavLink as="span" className={location.pathname === '/services' ? 'active' : ''}>
                  Services
                </MobileNavLink>
                <i className="bi bi-chevron-down"></i>
              </MobileDropdownToggle>
              
              {mobileServicesOpen && (
                <MobileDropdown
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <MobileDropdownLink to="/services/developers" onClick={closeMobileMenu}>
                    Developers
                  </MobileDropdownLink>
                  <MobileDropdownLink to="/services/construction-services" onClick={closeMobileMenu}>
                    Construction Services
                  </MobileDropdownLink>
                  {/* <MobileDropdownLink to="/services/property-management" onClick={closeMobileMenu}>
                    Property Management
                  </MobileDropdownLink> */}
                </MobileDropdown>
              )}
            </div>
          </MobileNavItem>
          
          <MobileNavItem variants={itemVariants}>
            <MobileNavLink to="/news-events" onClick={closeMobileMenu} className={location.pathname === '/news-events' ? 'active' : ''}>
              News & Events
            </MobileNavLink>
          </MobileNavItem>
          
          <MobileNavItem variants={itemVariants}>
            <MobileNavLink to="/about/testimonials" onClick={closeMobileMenu} className={location.pathname === '/about/testimonials' ? 'active' : ''}>
              Testimonials
            </MobileNavLink>
          </MobileNavItem>
          
          <MobileNavItem variants={itemVariants}>
            <MobileNavLink to="/contact-us" onClick={closeMobileMenu} className={location.pathname === '/contact-us' ? 'active' : ''}>
              Contact
            </MobileNavLink>
          </MobileNavItem>
        </MobileNavLinks>
        
        <MobileMenuDivider />
        
        <MobileAuthButtons
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          {isLoggedIn ? (
            <div style={{ textAlign: 'center', width: '100%' }}>
              <Link to="/profile" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#46620d',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                <i className="bi bi-person"></i>
                My Profile
              </Link>
            </div>
          ) : (
            <>
              <SignInButton to="/auth" scrolled={true}>Sign In</SignInButton>
              <CTAButton to="/auth" onClick={closeMobileMenu}>
                Get Started <ArrowIcon><i className="bi bi-arrow-up-right"></i></ArrowIcon>
              </CTAButton>
            </>
          )}
        </MobileAuthButtons>
        
        <MobileSocialLinks
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          <SocialIcon href="#" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </SocialIcon>
        </MobileSocialLinks>
        
        <MobileCopyright
          initial={{ opacity: 0 }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          © 2025 Rockdale Ltd. All Rights Reserved.
        </MobileCopyright>
      </MobileMenu>
    </>
  );
};

export default Navbar; 