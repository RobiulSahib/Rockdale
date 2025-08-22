import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Hero Section
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
    background: url('/images/Hero-Background.jpeg') no-repeat center center;
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
    background: linear-gradient(90deg, rgba(70, 98, 13, 0.95) 0%, rgba(70, 98, 13, 0.85) 100%);
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
`;

const BreadcrumbNav = styled.nav`
  margin-bottom: 1.5rem;
  
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    
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
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 550px;
  margin-bottom: 0;
  opacity: 0.9;
  line-height: 1.6;
`;

// Main Content Section
const ContactPageContainer = styled.div`
  padding: 5rem 0;
  background-color: #f9f9f9;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-family: 'DM Sans', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #46620d;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 700px;
`;

// Contact Options Section
const ContactOptionsSection = styled.div`
  margin-bottom: 4rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactSection = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: #46620d;
    opacity: 0.7;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const SectionIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(70, 98, 13, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  i {
    font-size: 1.8rem;
    color: #46620d;
  }
`;

const ContactSectionTitle = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #555;
  
  strong {
    color: #333;
    font-weight: 600;
  }
`;

// Form Section
const FormSection = styled.div`
  margin-bottom: 4rem;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background-color: rgba(70, 98, 13, 0.05);
    border-radius: 0 0 0 150px;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #46620d;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: ${props => props.fullWidth ? '1 / -1' : 'auto'};
`;

const Label = styled.label`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
  display: flex;
  align-items: center;
  
  i {
    margin-right: 0.5rem;
    color: #46620d;
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  padding: 0.9rem 1.2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #46620d;
    box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 0.9rem 1.2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #46620d;
    box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1);
  }
`;

const SubmitButton = styled.button`
  background-color: #46620d;
  color: white;
  border: none;
  border-radius: 40px;
  padding: 0.9rem 2.5rem;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  justify-self: center;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  i {
    font-size: 0.9rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background-color: #344709;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    
    i {
      transform: translateX(3px);
    }
  }
`;

// Map Section
const MapSection = styled.div`
  margin-bottom: 4rem;
`;

const MapContainer = styled.div`
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

// Contact Details Section
const ContactDetailsSection = styled.div`
  margin-bottom: 0;
`;

const ContactDetailsContainer = styled.div`
  background-color: #898989;
  color: white;
  border-radius: 10px;
  padding: 3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 200px 0 0 0;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ContactDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactDetailsLeft = styled.div``;

const ContactDetailsRight = styled.div``;

const ContactDetailsTitle = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  color: white;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const ContactDetail = styled.div`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  i {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 0.2rem;
  }
  
  div {
    display: flex;
    flex-direction: column;
  }
  
  strong {
    font-weight: 600;
    margin-bottom: 0.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

const BusinessHours = styled.div`
  margin-top: 2rem;
  
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      &:last-child {
        border-bottom: none;
      }
      
      span:last-child {
        font-weight: 500;
      }
    }
  }
`;

const ContactUsPage = () => {
  useEffect(() => {
    // Animation for the hero section
    gsap.fromTo(".hero-content", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    // Animation for contact sections
    gsap.fromTo(".contact-section", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-options",
          start: "top 80%"
        }
      }
    );
    
    // Animation for form section
    gsap.fromTo(".form-container", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".form-container",
          start: "top 80%"
        }
      }
    );
    
    // Animation for map section
    gsap.fromTo(".map-container", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".map-container",
          start: "top 80%"
        }
      }
    );
    
    // Animation for details section
    gsap.fromTo(".details-container", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".details-container",
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContent className="hero-content">
          <BreadcrumbNav>
            <ul>
              <li><a href="/">Home</a></li>
              <li>Contact Us</li>
            </ul>
          </BreadcrumbNav>
          <HeroTitle>Get in Touch with Rockdale</HeroTitle>
          <HeroSubtitle>
            Have questions or need assistance? Our team is ready to help you with all your real estate and construction needs.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      <ContactPageContainer>
        <ContentWrapper>
          <ContactOptionsSection className="contact-options">
            <SectionTitle>How Can We Help?</SectionTitle>
            <SectionDescription>
              Reach out to us for assistance with your inquiries
            </SectionDescription>
            
            <ContactGrid>
              <ContactSection className="contact-section">
                <SectionIcon>
                  <i className="bi bi-info-circle-fill"></i>
                </SectionIcon>
                <ContactSectionTitle>General Inquiries</ContactSectionTitle>
                <ContactInfo>General inquiries and support for all stakeholders.</ContactInfo>
                <ContactInfo><strong>Hotline:</strong> 16634</ContactInfo>
                <ContactInfo><strong>Email:</strong> info@rockdale.com</ContactInfo>
              </ContactSection>

              <FormContainer className="form-container">
                <FormTitle>Get in Touch</FormTitle>
                <Form>
                  <FormGroup>
                    <Label htmlFor="name"><i className="bi bi-person"></i> Name</Label>
                    <Input type="text" id="name" name="name" placeholder="Your full name" required />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="phone"><i className="bi bi-telephone"></i> Phone</Label>
                    <Input type="tel" id="phone" name="phone" placeholder="Your phone number" />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="subject"><i className="bi bi-chat-left-text"></i> Subject</Label>
                    <Input type="text" id="subject" name="subject" placeholder="What is this regarding?" />
                  </FormGroup>
                  
                  <FormGroup fullWidth>
                    <Label htmlFor="message"><i className="bi bi-pencil-square"></i> Message</Label>
                    <Textarea id="message" name="message" placeholder="How can we help you?" required></Textarea>
                  </FormGroup>
                  
                  <SubmitButton type="submit">
                    Submit Message <i className="bi bi-arrow-right"></i>
                  </SubmitButton>
                </Form>
              </FormContainer>
            </ContactGrid>
          </ContactOptionsSection>
          
          {/* Form Section removed as it's now merged with General Inquiries */}
          
          <MapSection>
            <SectionTitle>Visit Our Office</SectionTitle>
            <SectionDescription>
              Find us at our headquarters in Dhaka, Bangladesh
            </SectionDescription>
            
            <MapContainer className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9038568390297!2d90.3946185!3d23.750568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd5c624d6f%3A0x2c8657e5f73f7b7b!2sTejgaon%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1656582592244!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Rockdale Office Location"
              ></iframe>
            </MapContainer>
          </MapSection>
          
          <ContactDetailsSection>
            <ContactDetailsContainer className="details-container">
              <ContactDetailsGrid>
                <ContactDetailsLeft>
                  <ContactDetailsTitle>Contact Information</ContactDetailsTitle>
                  <ContactDetail>
                    <i className="bi bi-geo-alt-fill"></i>
                    <div>
                      <strong>Address</strong>
                      <span>Rockdale Tower, Level 20-22, 187-188/B, Bir Uttam Mir Shawkat Sarak Tejgaon, Dhaka 1208</span>
                    </div>
                  </ContactDetail>
                  <ContactDetail>
                    <i className="bi bi-telephone-fill"></i>
                    <div>
                      <strong>Hotline</strong>
                      <span>16634</span>
                    </div>
                  </ContactDetail>
                  <ContactDetail>
                    <i className="bi bi-phone-fill"></i>
                    <div>
                      <strong>Sales</strong>
                      <span>+88 01678666444</span>
                    </div>
                  </ContactDetail>
                  <ContactDetail>
                    <i className="bi bi-envelope-fill"></i>
                    <div>
                      <strong>Email</strong>
                      <span>info@rockdale.com</span>
                    </div>
                  </ContactDetail>
                  
                  <SocialLinks>
                    <SocialLink href="#"><i className="bi bi-facebook"></i></SocialLink>
                    <SocialLink href="#"><i className="bi bi-twitter"></i></SocialLink>
                    <SocialLink href="#"><i className="bi bi-instagram"></i></SocialLink>
                    <SocialLink href="#"><i className="bi bi-linkedin"></i></SocialLink>
                  </SocialLinks>
                </ContactDetailsLeft>
                
                <ContactDetailsRight>
                  <ContactDetailsTitle>Business Hours</ContactDetailsTitle>
                  <BusinessHours>
                    <ul>
                      <li>
                        <span>Monday - Thursday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li>
                        <span>Friday</span>
                        <span>10:00 AM - 5:00 PM</span>
                      </li>
                      <li>
                        <span>Saturday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li>
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </BusinessHours>
                </ContactDetailsRight>
              </ContactDetailsGrid>
            </ContactDetailsContainer>
          </ContactDetailsSection>
        </ContentWrapper>
      </ContactPageContainer>
    </>
  );
};

export default ContactUsPage; 