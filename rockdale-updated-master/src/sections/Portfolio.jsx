import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.section`
  padding: 6rem 0;
  background-color: #ffffff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #6c757d;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? '#007bff' : 'transparent'};
  color: ${props => props.active ? '#ffffff' : '#007bff'};
  border: 1px solid #007bff;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#0069d9' : 'rgba(0, 123, 255, 0.1)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    
    .project-overlay {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div`
  height: 250px;
  background-color: #f8f9fa; /* Placeholder for image */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 123, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  background-color: #ffffff;
`;

const ProjectTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProjectCategory = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 0;
`;

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'web', 'app', 'design'];
  
  return (
    <PortfolioContainer id="portfolio" ref={portfolioRef}>
      <div className="container">
        <SectionTitle>Our Portfolio</SectionTitle>
        <SectionSubtitle>
          Check out our latest projects and see what we can do for you
        </SectionSubtitle>
        
        <FilterContainer>
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <ProjectsGrid>
          {/* Project 1 */}
          <ProjectCard>
            <ProjectImage>
              <div>Project Image Placeholder</div>
              <ProjectOverlay className="project-overlay">
                <div>
                  <i className="bi bi-plus-lg fs-1"></i>
                </div>
              </ProjectOverlay>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>Project One</ProjectTitle>
              <ProjectCategory>Web Design</ProjectCategory>
            </ProjectContent>
          </ProjectCard>
          
          {/* Project 2 */}
          <ProjectCard>
            <ProjectImage>
              <div>Project Image Placeholder</div>
              <ProjectOverlay className="project-overlay">
                <div>
                  <i className="bi bi-plus-lg fs-1"></i>
                </div>
              </ProjectOverlay>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>Project Two</ProjectTitle>
              <ProjectCategory>App Development</ProjectCategory>
            </ProjectContent>
          </ProjectCard>
          
          {/* Project 3 */}
          <ProjectCard>
            <ProjectImage>
              <div>Project Image Placeholder</div>
              <ProjectOverlay className="project-overlay">
                <div>
                  <i className="bi bi-plus-lg fs-1"></i>
                </div>
              </ProjectOverlay>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>Project Three</ProjectTitle>
              <ProjectCategory>UI/UX Design</ProjectCategory>
            </ProjectContent>
          </ProjectCard>
          
          {/* Project 4 */}
          <ProjectCard>
            <ProjectImage>
              <div>Project Image Placeholder</div>
              <ProjectOverlay className="project-overlay">
                <div>
                  <i className="bi bi-plus-lg fs-1"></i>
                </div>
              </ProjectOverlay>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>Project Four</ProjectTitle>
              <ProjectCategory>Web Development</ProjectCategory>
            </ProjectContent>
          </ProjectCard>
          
          {/* Project 5 */}
          <ProjectCard>
            <ProjectImage>
              <div>Project Image Placeholder</div>
              <ProjectOverlay className="project-overlay">
                <div>
                  <i className="bi bi-plus-lg fs-1"></i>
                </div>
              </ProjectOverlay>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>Project Five</ProjectTitle>
              <ProjectCategory>Mobile App</ProjectCategory>
            </ProjectContent>
          </ProjectCard>
          
          {/* Project 6 */}
          <ProjectCard>
            <ProjectImage>
              <div>Project Image Placeholder</div>
              <ProjectOverlay className="project-overlay">
                <div>
                  <i className="bi bi-plus-lg fs-1"></i>
                </div>
              </ProjectOverlay>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>Project Six</ProjectTitle>
              <ProjectCategory>Branding</ProjectCategory>
            </ProjectContent>
          </ProjectCard>
        </ProjectsGrid>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio; 