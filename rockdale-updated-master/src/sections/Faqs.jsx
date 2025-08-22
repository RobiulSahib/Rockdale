import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FaqsContainer = styled.section`
  padding: 6rem 0;
  background-color: #ffffff;
  font-family: 'DM Sans', sans-serif;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SmallTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #46620d;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  letter-spacing: 1px;
`;

const BigQuestion = styled.h2`
  font-size: 2.75rem;
  font-weight: 700;
  color: #46620d;
  margin-bottom: 2.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #46620d 0%, #344709 100%);
  border-radius: 50px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
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
  
  i {
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%);
    transform: translateY(-3px);
    color: white;
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    
    &::before {
      left: 100%;
    }
    
    i {
      transform: rotate(-45deg) translate(2px, -2px);
    }
  }
`;

const RightColumn = styled.div``;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AccordionItem = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  background-color: ${props => props.isOpen ? '#f9faf7' : 'white'};
  transition: background-color 0.3s ease;
`;
  
const QuestionNumber = styled.span`
  font-size: 1rem;
  font-weight: 700;
    color: #46620d;
  opacity: 0.5;
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const AccordionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #46620d;
  flex: 1;
`;

const AccordionIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  color: #46620d;
  flex-shrink: 0;
  margin-left: 1rem;
`;

const AccordionContent = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.4s ease;
  background-color: #f9faf7;
`;

const AccordionText = styled.p`
  color: #6c757d;
  line-height: 1.7;
  padding: 0 1.5rem 1.25rem 4.25rem;
  margin: 0;
`;

const Faqs = () => {
  const faqsRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqItems = [
    {
      question: "What types of properties do you specialize in developing?",
      answer: "We specialize in developing a wide range of properties including luxury residential homes, modern apartment complexes, commercial buildings, and mixed-use developments. Our team has extensive experience in both urban and suburban settings, focusing on sustainable design and premium quality construction."
    },
    {
      question: "How long does a typical construction project take?",
      answer: "Project timelines vary based on size, complexity, and scope. Typically, residential projects range from 12-24 months, while larger commercial developments may take 24-48 months. During the initial consultation, we provide a detailed timeline specific to your project with key milestones and expected completion dates."
    },
    {
      question: "What sets your architectural designs apart from others?",
      answer: "Our architectural approach combines local cultural elements with modern design principles. We focus on sustainability, functionality, and aesthetic appeal unique to Dhaka's urban landscape. Each design is custom-crafted to maximize space utilization, natural light, and energy efficiency while maintaining a distinctive visual identity."
    },
    {
      question: "Do you handle all necessary permits and regulations?",
      answer: "Yes, our experienced team manages all aspects of the regulatory process. We handle building permits, environmental clearances, and ensure compliance with all local building codes and regulations. Our relationships with regulatory authorities help streamline the approval process, saving you time and potential complications."
    },
    {
      question: "What payment structure do you offer for new projects?",
      answer: "We offer flexible payment structures tailored to each project. Typically, this includes an initial deposit, followed by milestone-based payments throughout the construction process. We work with several financial institutions to offer financing options for qualified clients, making premium construction more accessible."
    }
  ];
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  const formatNumber = (num) => {
    return num < 10 ? `0${num + 1}` : `${num + 1}`;
  };
  
  return (
    <FaqsContainer id="faqs" ref={faqsRef}>
      <div className="container">
        <ContentWrapper>
          <LeftColumn>
            <SmallTitle>FAQs</SmallTitle>
            <BigQuestion>Why Work With Us ?</BigQuestion>
            <ContactButton to="/contact-us">
              Contact Us <i className="bi bi-arrow-right"></i>
            </ContactButton>
          </LeftColumn>
          
          <RightColumn>
        <AccordionContainer>
          {faqItems.map((item, index) => (
            <AccordionItem key={index}>
                  <AccordionHeader 
                    onClick={() => toggleAccordion(index)}
                    isOpen={openIndex === index}
                  >
                    <QuestionNumber>{formatNumber(index)}</QuestionNumber>
                    <AccordionTitle>{item.question}</AccordionTitle>
                <AccordionIcon isOpen={openIndex === index}>
                      <i className="bi bi-chevron-down"></i>
                </AccordionIcon>
              </AccordionHeader>
              <AccordionContent isOpen={openIndex === index}>
                <AccordionText>{item.answer}</AccordionText>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionContainer>
          </RightColumn>
        </ContentWrapper>
      </div>
    </FaqsContainer>
  );
};

export default Faqs; 