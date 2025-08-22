import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Using webp images from public folder

// Styled components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: column;
`;

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
    background: url('/20250801-183825.949-3.webp') no-repeat center center;
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
  text-align: center;
`;

const BreadcrumbNav = styled.nav`
  margin-bottom: 1.5rem;
  
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    
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
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 550px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;
  font-family: 'DM Sans', sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const MainContent = styled.main`
  flex: 1;
  padding: 80px 0;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #46620d;
  margin-bottom: 15px;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #555;
  margin-bottom: 40px;
  font-size: 1.1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 12px 25px;
  color: ${props => props.active ? '#46620d' : '#666'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.active ? '3px solid #46620d' : 'none'};
  font-family: 'DM Sans', sans-serif;
  font-weight: ${props => props.active ? '600' : '400'};
  position: relative;
  
  &:hover {
    color: #46620d;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 3px;
    background-color: #46620d;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(70, 98, 13, 0.15);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ProjectCard}:hover &:before {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover img {
    transform: scale(1.1);
  }
`;

const CategoryTag = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${props => {
    switch(props.category) {
      case 'ongoing': return 'rgba(70, 98, 13, 0.9)';
      case 'upcoming': return 'rgba(0, 123, 255, 0.9)';
      case 'completed': return 'rgba(40, 167, 69, 0.9)';
      default: return 'rgba(70, 98, 13, 0.9)';
    }
  }};
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 2;
`;

const ProjectInfo = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  color: #333;
  margin-bottom: 12px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  transition: color 0.3s ease;
  
  ${ProjectCard}:hover & {
    color: #46620d;
  }
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 20px;
  font-family: 'DM Sans', sans-serif;
  line-height: 1.6;
  font-size: 1rem;
`;

const ViewDetailsButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: transparent;
  color: #46620d;
  border: 2px solid #46620d;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  
  &:hover {
    background-color: #46620d;
    color: white;
  }
`;

const ModalOverlay = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  width: 600px;
  max-width: 90%;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
`;

const CloseModal = styled.span`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    color: #46620d;
    background-color: rgba(70, 98, 13, 0.1);
  }
`;

const ModalTitle = styled.h3`
  color: #46620d;
  margin-bottom: 20px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
`;

const ModalDetails = styled.p`
  color: #444;
  line-height: 1.8;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const NoProjectsMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
  font-size: 1.2rem;
`;

// Main component
const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  
  const projectsRef = useRef(null);
  const heroRef = useRef(null);
  
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
    
    // Project cards animation
    gsap.fromTo(
      ".project-card",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
        }
      }
    );
  }, [activeTab]);
  
  // Project data
  const projects = [
    {
      category: 'ongoing',
      image: "/20250801-183825.949-1.webp",
      title: 'Rockdale Signature',
      location: 'Gulshan',
      area: '10 Katha',
      details: 'Located in Gulshan Avenue, Dhaka, this luxury residential project features modern amenities, rooftop gardens, and 24/7 security. Expected completion in 2026.'
    },
    {
      category: 'ongoing',
      image: "/20250801-183825.949-3.webp",
      title: 'Rockdale Prestige',
      location: 'Banani',
      area: '12 Katha',
      details: 'Situated in Banani Road 11, this prime commercial hub is under construction with smart office solutions and sustainable design, set for 2025 launch.'
    },
    {
      category: 'ongoing',
      image: "/20250801-183825.949-5.webp",
      title: 'Rockdale Elegance',
      location: 'Bashundhara R/A',
      area: '8 Katha',
      details: 'Located in Bashundhara Residential Area, Block G, this project offers luxury apartments with eco-friendly features, swimming pools, and fitness centers. Expected completion in 2027.'
    },
    {
      category: 'upcoming',
      image: "/20250801-183825.949-7.webp",
      title: 'Rockdale Horizon',
      location: 'Purbachal New Town',
      area: '15 Katha',
      details: 'Planned in Purbachal New Town, Sector 3, this sustainable residential project features solar power integration, rainwater harvesting, and community gardens. Launching in 2026.'
    },
    {
      category: 'upcoming',
      image: "/20250801-183825.949-8.webp",
      title: 'Rockdale Innovation',
      location: 'Uttara',
      area: '20 Katha',
      details: 'Located in Uttara Sector 10, this project will feature cutting-edge office spaces, high-speed internet infrastructure, and automated building management systems. Slated for launch in 2027.'
    },
    {
      category: 'upcoming',
      image: "/20250801-183825.949-10.webp",
      title: 'Rockdale Lakeside',
      location: 'Baridhara',
      area: '18 Katha',
      details: 'Planned in Baridhara DOHS, these exclusive villas will offer private gardens, smart home technology, and unparalleled lake views. Construction begins in 2026.'
    },
    {
      category: 'completed',
      image: "/20250801-183825.949-11.webp",
      title: 'Rockdale Platinum',
      location: 'Dhanmondi',
      area: '9 Katha',
      details: 'Located in Dhanmondi Road 27, completed in 2024, this residential complex features modern architecture, spacious apartments, and is fully occupied.'
    },
    {
      category: 'completed',
      image: "/20250801-183825.949-14.webp",
      title: 'Rockdale Commercial',
      location: 'Motijheel',
      area: '14 Katha',
      details: 'Situated in Motijheel Commercial Area, completed in 2023, this business center hosts major corporations and financial institutions with state-of-the-art facilities.'
    },
    {
      category: 'completed',
      image: "/20250801-183825.949-17.webp",
      title: 'Rockdale Gardens',
      location: 'Mirpur DOHS',
      area: '11 Katha',
      details: 'Located in Mirpur DOHS, completed in 2022, this project is a benchmark for sustainable urban living with its community parks and energy-efficient design.'
    },
    {
      category: 'completed',
      image: "/20250801-183825.949-19.webp",
      title: 'Rockdale Central',
      location: 'Tejgaon',
      area: '16 Katha',
      details: 'Situated in Tejgaon Industrial Area, completed in 2021, this development has transformed the area with its modern architecture and diverse commercial offerings.'
    }
  ];
  
  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);
  
  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  // Handle view details click
  const handleViewDetails = (project) => {
    setModalProject(project);
    setShowModal(true);
  };
  
  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };
  
  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  
  return (
    <PageContainer>
      <HeroSection ref={heroRef}>
        <HeroContent>
          <BreadcrumbNav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </BreadcrumbNav>
          <HeroTitle>Our Portfolio</HeroTitle>
          <HeroSubtitle>
            Discover our prestigious collection of properties across Bangladesh, showcasing our commitment to excellence and innovation in real estate development.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      <MainContent>
        <ProjectsContainer ref={projectsRef}>
          <SectionTitle>Explore Our Projects</SectionTitle>
          <SectionSubtitle>
            Browse through our diverse portfolio of ongoing, upcoming, and completed projects in prime locations across Dhaka and beyond.
          </SectionSubtitle>
          
          <TabsContainer>
            <TabButton 
              active={activeTab === 'all'} 
              onClick={() => handleTabClick('all')}
            >
              All Projects
            </TabButton>
            <TabButton 
              active={activeTab === 'ongoing'} 
              onClick={() => handleTabClick('ongoing')}
            >
              Ongoing
            </TabButton>
            <TabButton 
              active={activeTab === 'upcoming'} 
              onClick={() => handleTabClick('upcoming')}
            >
              Upcoming
            </TabButton>
            <TabButton 
              active={activeTab === 'completed'} 
              onClick={() => handleTabClick('completed')}
            >
              Completed
            </TabButton>
          </TabsContainer>
          
          {filteredProjects.length > 0 ? (
            <ProjectGrid>
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={`${project.category}-${index}`}
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProjectImage>
                      <img src={project.image} alt={project.title} />
                      <CategoryTag category={project.category}>
                        {project.category}
                      </CategoryTag>
                    </ProjectImage>
                    <ProjectInfo>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>Location: {project.location} | Area: {project.area}</ProjectDescription>
                      <ViewDetailsButton onClick={() => handleViewDetails(project)}>
                        View Details
                      </ViewDetailsButton>
                    </ProjectInfo>
                  </ProjectCard>
                ))}
              </AnimatePresence>
            </ProjectGrid>
          ) : (
            <NoProjectsMessage>
              No projects found in this category. Please check back later.
            </NoProjectsMessage>
          )}
        </ProjectsContainer>
      </MainContent>
      
      {/* Modal for Project Details */}
      <ModalOverlay show={showModal} onClick={handleOverlayClick}>
        {modalProject && (
          <ModalContent
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseModal onClick={closeModal}>×</CloseModal>
            <ModalImage src={modalProject.image} alt={modalProject.title} />
            <ModalTitle>{modalProject.title}</ModalTitle>
            <ModalDetails>
              <strong>Location:</strong> {modalProject.location}<br />
              <strong>Area:</strong> {modalProject.area}<br /><br />
              {modalProject.details}
            </ModalDetails>
          </ModalContent>
        )}
      </ModalOverlay>
    </PageContainer>
  );
};

export default ProjectsPage;
