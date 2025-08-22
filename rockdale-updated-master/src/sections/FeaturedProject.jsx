import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FeaturedProjectContainer = styled.section`
  padding: 6rem 0;
  background-color: #f9fafb;
  font-family: 'DM Sans', sans-serif;
`;

const TopLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const LeftContent = styled.div`
  max-width: 600px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #46620d;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #212529;
`;

const SeeAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #46620d;
  border-radius: 50px;
  color: #46620d;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(70, 98, 13, 0.1);
    transform: translateY(-3px);
    color: #46620d;
  }
  
  i {
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: rotate(-45deg) translate(2px, -2px);
  }
`;

const ProjectRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 350px;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
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

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%);
`;

const ProjectDetails = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const ArrowButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  margin-left: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;
  
  i {
    transform: rotate(-45deg);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: white;
  }
  
  &:hover i {
    transform: rotate(-45deg) translate(2px, -2px);
  }
`;

const FeaturedProject = () => {
  const featuredProjectRef = useRef(null);
  
  // Sample project data
  const projects = [
    {
      title: "Rockdale Signature",
      location: "Gulshan",
      area: "10 Katha",
      image: "/20250801-183825.949-1.webp"
    },
    {
      title: "Rockdale Prestige",
      location: "Baridhara",
      area: "12 Katha",
      image: "/20250801-183825.949-3.webp"
    },
    {
      title: "Rockdale Elegance",
      location: "Dhanmondi",
      area: "8 Katha",
      image: "/20250801-183825.949-5.webp"
    },
    {
      title: "Rockdale Horizon",
      location: "Banani",
      area: "15 Katha",
      image: "/20250801-183825.949-7.webp"
    }
  ];
  
  return (
    <FeaturedProjectContainer id="featured-project" ref={featuredProjectRef}>
      <div className="container">
        {/* Top Layer */}
        <TopLayer>
          <LeftContent>
            <SectionTitle>Featured Projects</SectionTitle>
        <SectionSubtitle>
              We are a passionate team driven by creativity, innovation, and purpose. From day one, our mission has been to create meaningful experiences that make life easier and more enjoyable.
        </SectionSubtitle>
          </LeftContent>
          
          <SeeAllButton to="/projects">
            See All <i className="bi bi-arrow-right"></i>
          </SeeAllButton>
        </TopLayer>
        
        {/* Middle Layer - First row of projects */}
        <ProjectRow>
          <ProjectCard>
            <ProjectImage>
              <img src={projects[0].image} alt={projects[0].title} />
            </ProjectImage>
            <ProjectInfo>
              <ProjectDetails>
                <ProjectTitle>{projects[0].title}</ProjectTitle>
                <ProjectDescription>Location: {projects[0].location} | Area: {projects[0].area}</ProjectDescription>
              </ProjectDetails>
              <ArrowButton to="/projects">
                <i className="bi bi-arrow-right"></i>
              </ArrowButton>
            </ProjectInfo>
          </ProjectCard>
        
        <ProjectCard>
              <ProjectImage>
              <img src={projects[1].image} alt={projects[1].title} />
              </ProjectImage>
            <ProjectInfo>
              <ProjectDetails>
                <ProjectTitle>{projects[1].title}</ProjectTitle>
                <ProjectDescription>Location: {projects[1].location} | Area: {projects[1].area}</ProjectDescription>
              </ProjectDetails>
              <ArrowButton to="/projects">
                <i className="bi bi-arrow-right"></i>
              </ArrowButton>
            </ProjectInfo>
          </ProjectCard>
        </ProjectRow>
        
        {/* Bottom Layer - Second row of projects */}
        {/* <ProjectRow>
          <ProjectCard>
            <ProjectImage>
              <img src={projects[2].image} alt={projects[2].title} />
            </ProjectImage>
            <ProjectInfo>
              <ProjectDetails>
                <ProjectTitle>{projects[2].title}</ProjectTitle>
                <ProjectDescription>{projects[2].description}</ProjectDescription>
              </ProjectDetails>
              <ArrowButton to="/projects">
                <i className="bi bi-arrow-right"></i>
              </ArrowButton>
            </ProjectInfo>
          </ProjectCard>
          
          <ProjectCard>
            <ProjectImage>
              <img src={projects[3].image} alt={projects[3].title} />
            </ProjectImage>
            <ProjectInfo>
              <ProjectDetails>
                <ProjectTitle>{projects[3].title}</ProjectTitle>
                <ProjectDescription>{projects[3].description}</ProjectDescription>
              </ProjectDetails>
              <ArrowButton to="/projects">
                <i className="bi bi-arrow-right"></i>
              </ArrowButton>
            </ProjectInfo>
        </ProjectCard>
        </ProjectRow> */}
      </div>
    </FeaturedProjectContainer>
  );
};

export default FeaturedProject; 