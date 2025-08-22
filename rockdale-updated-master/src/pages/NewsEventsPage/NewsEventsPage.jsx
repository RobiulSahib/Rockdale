import React, { useState, useEffect } from 'react';
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
    background: url('/build-1.jpeg') no-repeat center center;
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
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
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
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

// Main Content Section
const NewsEventsContainer = styled.div`
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

// Featured News
const FeaturedNewsSection = styled.div`
  margin-bottom: 4rem;
`;

const FeaturedNewsCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImageContainer = styled.div`
  height: 100%;
  min-height: 400px;
  
  @media (max-width: 992px) {
    min-height: 300px;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FeaturedContent = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeaturedCategory = styled.span`
  display: inline-block;
  background-color: ${props => props.type === 'news' ? '#e6f0d8' : '#d8e6f0'};
  color: ${props => props.type === 'news' ? '#46620d' : '#0d4662'};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FeaturedTitle = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.2rem;
  line-height: 1.3;
`;

const FeaturedText = styled.p`
  color: #666;
  margin-bottom: 1.8rem;
  line-height: 1.7;
  font-size: 1.05rem;
`;

const FeaturedMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const FeaturedDate = styled.div`
  color: #999;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  
  i {
    margin-right: 0.5rem;
    font-size: 0.9rem;
  }
`;

// Tabs
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TabButton = styled.button`
  background-color: ${props => props.active ? '#46620d' : 'transparent'};
  color: ${props => props.active ? 'white' : '#46620d'};
  border: 2px solid #46620d;
  border-radius: 30px;
  padding: 0.7rem 1.8rem;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#3a5209' : 'rgba(70, 98, 13, 0.1)'};
  }
`;

// News Grid
const NewsItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsItem = styled.article`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const NewsImageContainer = styled.div`
  height: 220px;
  overflow: hidden;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${NewsItem}:hover & {
    transform: scale(1.05);
  }
`;

const NewsContent = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const NewsCategory = styled.span`
  display: inline-block;
  background-color: ${props => props.type === 'news' ? '#e6f0d8' : '#d8e6f0'};
  color: ${props => props.type === 'news' ? '#46620d' : '#0d4662'};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const NewsTitle = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const NewsText = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const NewsMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const NewsDate = styled.div`
  color: #999;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  
  i {
    margin-right: 0.5rem;
    font-size: 0.85rem;
  }
`;

const ReadMoreButton = styled.button`
  background-color: transparent;
  color: #46620d;
  border: none;
  padding: 0;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
  
  i {
    font-size: 0.85rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: #3a5209;
    
    i {
      transform: translateX(3px);
    }
  }
`;

// Pagination
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 0.3rem;
  background-color: ${props => props.active ? '#46620d' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid ${props => props.active ? '#46620d' : '#ddd'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#3a5209' : '#f5f5f5'};
  }
`;

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // News and events data
  const newsItems = [
    {
      id: 1,
      category: 'news',
      title: 'Rockdale Launches New Eco-Friendly Building Project in Dhaka',
      content: 'Rockdale has officially launched its newest eco-friendly building project in Tejgaon, focusing on sustainable materials and energy-efficient design. The project aims to set new standards for green construction in Bangladesh.',
      date: 'June 15, 2025',
      image: '/images/Hero-Background.jpeg',
      featured: true
    },
    {
      id: 2,
      category: 'event',
      title: 'Annual Architecture & Design Exhibition',
      content: 'Join us for our annual Architecture & Design Exhibition showcasing innovative designs and sustainable building practices. Meet our architects and engineers to discuss the latest trends in construction and real estate development.',
      date: 'July 10, 2025',
      image: '/images/Hero-Background.jpeg',
      featured: false
    },
    {
      id: 3,
      category: 'news',
      title: 'Rockdale Wins Best Real Estate Developer Award',
      content: 'We are proud to announce that Rockdale has been recognized as the Best Real Estate Developer at the Bangladesh Property Awards 2025. This prestigious award acknowledges our commitment to quality and innovation.',
      date: 'May 28, 2025',
      image: '/images/Hero-Background.jpeg',
      featured: false
    },
    {
      id: 4,
      category: 'event',
      title: 'Property Investment Workshop',
      content: 'Learn about the latest trends in property investment and how to maximize returns in the current market. Our experts will share insights and strategies for both new and experienced investors looking to expand their portfolios.',
      date: 'August 5, 2025',
      image: '/images/Hero-Background.jpeg',
      featured: false
    },
    {
      id: 5,
      category: 'news',
      title: 'Rockdale Announces Partnership with International Architects',
      content: 'Rockdale is excited to announce a new partnership with renowned international architects to bring world-class design to our upcoming projects. This collaboration will elevate our offerings and bring fresh perspectives to the market.',
      date: 'June 3, 2025',
      image: '/images/Hero-Background.jpeg',
      featured: false
    },
    {
      id: 6,
      category: 'event',
      title: 'Sustainable Building Materials Showcase',
      content: 'Explore the future of construction at our Sustainable Building Materials Showcase. Discover innovative eco-friendly materials that reduce environmental impact while maintaining durability and aesthetic appeal.',
      date: 'September 12, 2025',
      image: '/images/Hero-Background.jpeg',
      featured: false
    },
  ];
  
  // Get featured news item
  const featuredNews = newsItems.find(item => item.featured);
  
  // Filter remaining items
  const filteredItems = newsItems.filter(item => {
    if (!item.featured) {
      if (activeTab === 'all') return true;
      return item.category === activeTab;
    }
    return false;
  });
  
  useEffect(() => {
    // Animation for the hero section
    gsap.fromTo(".hero-content", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    // Animation for the featured news
    gsap.fromTo(".featured-news", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".featured-news",
          start: "top 80%"
        }
      }
    );
    
    // Animation for news items
    gsap.fromTo(".news-item", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".news-grid",
          start: "top 80%"
        }
      }
    );
  }, [activeTab]);

  return (
    <>
      <HeroSection>
        <HeroContent className="hero-content">
          <BreadcrumbNav>
            <ul>
              <li><a href="/">Home</a></li>
              <li>News & Events</li>
            </ul>
          </BreadcrumbNav>
          <HeroTitle>Latest News & Upcoming Events</HeroTitle>
          <HeroSubtitle>
            Stay updated with Rockdale's latest developments, industry news, and upcoming events in the real estate and construction sector.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      <NewsEventsContainer>
        <ContentWrapper>
          {featuredNews && (
            <FeaturedNewsSection className="featured-news">
              <SectionTitle>Featured</SectionTitle>
              <SectionDescription>
                Discover our most significant announcements and upcoming events
              </SectionDescription>
              
              <FeaturedNewsCard>
                <FeaturedImageContainer>
                  <FeaturedImage src={featuredNews.image} alt={featuredNews.title} />
                </FeaturedImageContainer>
                <FeaturedContent>
                  <FeaturedCategory type={featuredNews.category}>
                    {featuredNews.category}
                  </FeaturedCategory>
                  <FeaturedTitle>{featuredNews.title}</FeaturedTitle>
                  <FeaturedText>{featuredNews.content}</FeaturedText>
                  <FeaturedMeta>
                    <FeaturedDate>
                      <i className="bi bi-calendar3"></i>
                      {featuredNews.date}
                    </FeaturedDate>
                    <ReadMoreButton>
                      Read more <i className="bi bi-arrow-right"></i>
                    </ReadMoreButton>
                  </FeaturedMeta>
                </FeaturedContent>
              </FeaturedNewsCard>
            </FeaturedNewsSection>
          )}
          
          <div>
            <SectionTitle>All News & Events</SectionTitle>
            <SectionDescription>
              Browse through our collection of news articles and upcoming events
            </SectionDescription>
            
            <TabsContainer>
              <TabButton 
                active={activeTab === 'all'} 
                onClick={() => setActiveTab('all')}
              >
                All
              </TabButton>
              <TabButton 
                active={activeTab === 'news'} 
                onClick={() => setActiveTab('news')}
              >
                News
              </TabButton>
              <TabButton 
                active={activeTab === 'event'} 
                onClick={() => setActiveTab('event')}
              >
                Events
              </TabButton>
            </TabsContainer>
            
            <NewsItemsGrid className="news-grid">
              {filteredItems.map(item => (
                <NewsItem key={item.id} className="news-item">
                  <NewsImageContainer>
                    <NewsImage src={item.image} alt={item.title} />
                  </NewsImageContainer>
                  <NewsContent>
                    <NewsCategory type={item.category}>
                      {item.category}
                    </NewsCategory>
                    <NewsTitle>{item.title}</NewsTitle>
                    <NewsText>{item.content}</NewsText>
                    <NewsMeta>
                      <NewsDate>
                        <i className="bi bi-calendar3"></i>
                        {item.date}
                      </NewsDate>
                      <ReadMoreButton>
                        Read more <i className="bi bi-arrow-right"></i>
                      </ReadMoreButton>
                    </NewsMeta>
                  </NewsContent>
                </NewsItem>
              ))}
            </NewsItemsGrid>
            
            {/* Pagination removed as requested */}
          </div>
        </ContentWrapper>
      </NewsEventsContainer>
    </>
  );
};

export default NewsEventsPage; 