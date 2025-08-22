// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { motion, AnimatePresence } from 'framer-motion';

// const ProjectsContainer = styled.div`
//   padding: 2rem;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 2rem;
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: 700;
//   color: #2c3e50;
//   margin: 0;
//   font-family: 'DM Sans', sans-serif;
// `;

// const AddButton = styled.button`
//   background: #46620d;
//   color: white;
//   border: none;
//   padding: 0.75rem 1.5rem;
//   border-radius: 8px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
  
//   &:hover {
//     background: #344709;
//     transform: translateY(-2px);
//   }
// `;

// const FilterBar = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-bottom: 2rem;
//   flex-wrap: wrap;
// `;

// const FilterButton = styled.button`
//   padding: 0.5rem 1rem;
//   border: 2px solid ${props => props.active ? '#46620d' : '#e9ecef'};
//   background: ${props => props.active ? '#46620d' : 'white'};
//   color: ${props => props.active ? 'white' : '#46620d'};
//   border-radius: 25px;
//   cursor: pointer;
//   font-weight: 600;
//   transition: all 0.3s ease;
  
//   &:hover {
//     border-color: #46620d;
//     background: ${props => props.active ? '#344709' : '#f8f9fa'};
//   }
// `;

// const ProjectsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//   gap: 1.5rem;
// `;

// const ProjectCard = styled(motion.div)`
//   background: white;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
//   border: 1px solid #f1f3f4;
//   transition: all 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
//   }
// `;

// const ProjectImage = styled.div`
//   height: 200px;
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-size: 3rem;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const ProjectStatus = styled.div`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   padding: 0.25rem 0.75rem;
//   border-radius: 20px;
//   font-size: 0.75rem;
//   font-weight: 600;
  
//   &.ongoing {
//     background: #f39c12;
//     color: white;
//   }
  
//   &.completed {
//     background: #27ae60;
//     color: white;
//   }
  
//   &.upcoming {
//     background: #3498db;
//     color: white;
//   }
// `;

// const ProjectContent = styled.div`
//   padding: 1.5rem;
// `;

// const ProjectTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 700;
//   color: #2c3e50;
//   margin: 0 0 0.5rem 0;
//   font-family: 'DM Sans', sans-serif;
// `;

// const ProjectDescription = styled.p`
//   color: #7f8c8d;
//   font-size: 0.9rem;
//   line-height: 1.5;
//   margin: 0 0 1rem 0;
// `;

// const ProjectDetails = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 1rem;
//   margin-bottom: 1.5rem;
// `;

// const DetailItem = styled.div`
//   .label {
//     font-size: 0.8rem;
//     color: #7f8c8d;
//     font-weight: 600;
//     margin-bottom: 0.25rem;
//   }
  
//   .value {
//     font-size: 0.9rem;
//     color: #2c3e50;
//     font-weight: 600;
//   }
// `;

// const ProjectActions = styled.div`
//   display: flex;
//   gap: 0.5rem;
// `;

// const ActionButton = styled.button`
//   flex: 1;
//   padding: 0.5rem;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   font-size: 0.8rem;
//   font-weight: 600;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
//     transition: left 0.5s ease;
//   }
  
//   &.edit {
//     background: linear-gradient(135deg, #46620d 0%, #344709 100%);
//     color: white;
//     box-shadow: 
//       0 3px 10px rgba(0, 0, 0, 0.2),
//       inset 0 1px 0 rgba(255, 255, 255, 0.3),
//       inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    
//     &:hover {
//       background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%);
//       box-shadow: 
//         0 5px 15px rgba(0, 0, 0, 0.3),
//         inset 0 1px 0 rgba(255, 255, 255, 0.4),
//         inset 0 -1px 0 rgba(0, 0, 0, 0.3);
      
//       &::before {
//         left: 100%;
//       }
//     }
//   }
  
//   &.delete {
//     background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
//     color: white;
//     box-shadow: 
//       0 3px 10px rgba(220, 53, 69, 0.3),
//       inset 0 1px 0 rgba(255, 255, 255, 0.3),
//       inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    
//     &:hover {
//       background: linear-gradient(135deg, #c82333 0%, #a71e2a 100%);
//       box-shadow: 
//         0 5px 15px rgba(220, 53, 69, 0.4),
//         inset 0 1px 0 rgba(255, 255, 255, 0.4),
//         inset 0 -1px 0 rgba(0, 0, 0, 0.3);
      
//       &::before {
//         left: 100%;
//       }
//     }
//   }
  
//   &.view {
//     background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
//     color: white;
//     box-shadow: 
//       0 3px 10px rgba(108, 117, 125, 0.3),
//       inset 0 1px 0 rgba(255, 255, 255, 0.3),
//       inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    
//     &:hover {
//       background: linear-gradient(135deg, #5a6268 0%, #495057 100%);
//       box-shadow: 
//         0 5px 15px rgba(108, 117, 125, 0.4),
//         inset 0 1px 0 rgba(255, 255, 255, 0.4),
//         inset 0 -1px 0 rgba(0, 0, 0, 0.3);
      
//       &::before {
//         left: 100%;
//       }
//     }
//   }
// `;

// const EmptyState = styled.div`
//   text-align: center;
//   padding: 3rem;
//   color: #7f8c8d;
  
//   i {
//     font-size: 3rem;
//     margin-bottom: 1rem;
//     color: #bdc3c7;
//   }
  
//   h3 {
//     margin-bottom: 0.5rem;
//     color: #2c3e50;
//   }
// `;

// const ProjectsPanel = () => {
//   const [filter, setFilter] = useState('all');
//   const [projects, setProjects] = useState([
//     {
//       id: 1,
//       title: 'Luxury Apartments Complex',
//       description: 'Modern luxury apartments with premium amenities and stunning city views.',
//       status: 'ongoing',
//       location: 'Dhaka, Bangladesh',
//       progress: '75%',
//       budget: '$2.5M',
//       completionDate: '2024-06-15',
//       image: '/build-1.jpeg'
//     },
//     {
//       id: 2,
//       title: 'Modern Office Tower',
//       description: 'Contemporary office building with state-of-the-art facilities.',
//       status: 'completed',
//       location: 'Chittagong, Bangladesh',
//       progress: '100%',
//       budget: '$1.8M',
//       completionDate: '2024-03-20',
//       image: '/build-2.jpeg'
//     },
//     {
//       id: 3,
//       title: 'Residential Community',
//       description: 'Family-friendly residential community with parks and amenities.',
//       status: 'upcoming',
//       location: 'Sylhet, Bangladesh',
//       progress: '0%',
//       budget: '$3.2M',
//       completionDate: '2025-01-10',
//       image: '/build-3.jpeg'
//     },
//     {
//       id: 4,
//       title: 'Shopping Mall',
//       description: 'Modern shopping complex with retail and entertainment spaces.',
//       status: 'ongoing',
//       location: 'Rajshahi, Bangladesh',
//       progress: '45%',
//       budget: '$4.1M',
//       completionDate: '2024-09-30',
//       image: '/build-4.jpeg'
//     }
//   ]);

//   const filteredProjects = projects.filter(project => {
//     if (filter === 'all') return true;
//     return project.status === filter;
//   });

//   const handleDelete = (id) => {
//     setProjects(projects.filter(project => project.id !== id));
//   };

//   const getStatusCount = (status) => {
//     return projects.filter(project => project.status === status).length;
//   };

//   return (
//     <ProjectsContainer>
//       <Header>
//         <Title>Projects</Title>
//         <AddButton>
//           <i className="bi bi-plus-circle"></i>
//           Add New Project
//         </AddButton>
//       </Header>

//       <FilterBar>
//         <FilterButton 
//           active={filter === 'all'} 
//           onClick={() => setFilter('all')}
//         >
//           All ({projects.length})
//         </FilterButton>
//         <FilterButton 
//           active={filter === 'ongoing'} 
//           onClick={() => setFilter('ongoing')}
//         >
//           Ongoing ({getStatusCount('ongoing')})
//         </FilterButton>
//         <FilterButton 
//           active={filter === 'completed'} 
//           onClick={() => setFilter('completed')}
//         >
//           Completed ({getStatusCount('completed')})
//         </FilterButton>
//         <FilterButton 
//           active={filter === 'upcoming'} 
//           onClick={() => setFilter('upcoming')}
//         >
//           Upcoming ({getStatusCount('upcoming')})
//         </FilterButton>
//       </FilterBar>

//       <ProjectsGrid>
//         <AnimatePresence>
//           {filteredProjects.length > 0 ? (
//             filteredProjects.map((project, index) => (
//               <ProjectCard
//                 key={project.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <ProjectImage>
//                   <img src={project.image} alt={project.title} />
//                   <ProjectStatus className={project.status}>
//                     {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
//                   </ProjectStatus>
//                 </ProjectImage>

//                 <ProjectContent>
//                   <ProjectTitle>{project.title}</ProjectTitle>
//                   <ProjectDescription>{project.description}</ProjectDescription>

//                   <ProjectDetails>
//                     <DetailItem>
//                       <div className="label">Location</div>
//                       <div className="value">{project.location}</div>
//                     </DetailItem>
//                     <DetailItem>
//                       <div className="label">Progress</div>
//                       <div className="value">{project.progress}</div>
//                     </DetailItem>
//                     <DetailItem>
//                       <div className="label">Budget</div>
//                       <div className="value">{project.budget}</div>
//                     </DetailItem>
//                     <DetailItem>
//                       <div className="label">Completion</div>
//                       <div className="value">{project.completionDate}</div>
//                     </DetailItem>
//                   </ProjectDetails>

//                   <ProjectActions>
//                     <ActionButton className="view">
//                       <i className="bi bi-eye"></i>
//                     </ActionButton>
//                     <ActionButton className="edit">
//                       <i className="bi bi-pencil"></i>
//                     </ActionButton>
//                     <ActionButton 
//                       className="delete"
//                       onClick={() => handleDelete(project.id)}
//                     >
//                       <i className="bi bi-trash"></i>
//                     </ActionButton>
//                   </ProjectActions>
//                 </ProjectContent>
//               </ProjectCard>
//             ))
//           ) : (
//             <EmptyState>
//               <i className="bi bi-building"></i>
//               <h3>No projects found</h3>
//               <p>There are no projects matching your current filter.</p>
//             </EmptyState>
//           )}
//         </AnimatePresence>
//       </ProjectsGrid>
//     </ProjectsContainer>
//   );
// };

// export default ProjectsPanel; 


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

// --- STYLED COMPONENTS (UNCHANGED) ---
const ProjectsContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  font-family: 'DM Sans', sans-serif;
`;

const AddButton = styled.button`
  background: #46620d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #344709;
    transform: translateY(-2px);
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.active ? '#46620d' : '#e9ecef'};
  background: ${props => props.active ? '#46620d' : 'white'};
  color: ${props => props.active ? 'white' : '#46620d'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #46620d;
    background: ${props => props.active ? '#344709' : '#f8f9fa'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f3f4;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectStatus = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  
  &.ongoing {
    background: #f39c12;
    color: white;
  }
  
  &.completed {
    background: #27ae60;
    color: white;
  }
  
  &.upcoming {
    background: #3498db;
    color: white;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-family: 'DM Sans', sans-serif;
`;

const ProjectDescription = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
`;

const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const DetailItem = styled.div`
  .label {
    font-size: 0.8rem;
    color: #7f8c8d;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .value {
    font-size: 0.9rem;
    color: #2c3e50;
    font-weight: 600;
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
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
  
  &.edit {
    background: linear-gradient(135deg, #46620d 0%, #344709 100%);
    color: white;
    box-shadow: 
      0 3px 10px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    
    &:hover {
      background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%);
      box-shadow: 
        0 5px 15px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, 0.3);
      
      &::before {
        left: 100%;
      }
    }
  }
  
  &.delete {
    background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
    color: white;
    box-shadow: 
      0 3px 10px rgba(220, 53, 69, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    
    &:hover {
      background: linear-gradient(135deg, #c82333 0%, #a71e2a 100%);
      box-shadow: 
        0 5px 15px rgba(220, 53, 69, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, 0.3);
      
      &::before {
        left: 100%;
      }
    }
  }
  
  &.view {
    background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
    color: white;
    box-shadow: 
      0 3px 10px rgba(108, 117, 125, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    
    &:hover {
      background: linear-gradient(135deg, #5a6268 0%, #495057 100%);
      box-shadow: 
        0 5px 15px rgba(108, 117, 125, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, 0.3);
      
      &::before {
        left: 100%;
      }
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #7f8c8d;
  
  i {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #bdc3c7;
  }
  
  h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
`;

// --- MAIN COMPONENT LOGIC ---
const ProjectsPanel = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]); // Start with an empty array

  const getAuthToken = () => localStorage.getItem('adminToken');

  // Function to fetch projects from the backend
  const fetchProjects = async () => {
    try {
      const config = {
        headers: { 'x-auth-token': getAuthToken() }
      };
      const response = await axios.get('http://localhost:5000/api/admin/projects', config);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Handle error (e.g., if token is invalid, redirect to login)
    }
  };

  // useEffect hook to call fetchProjects when the component loads
  useEffect(() => {
    fetchProjects();
  }, []); // The empty array ensures this runs only once on mount

  const handleAddProject = async () => {
    const newProjectData = {
      title: 'New Sample Project',
      description: 'This is a test project added from the admin panel.',
      status: 'upcoming'
    };
    try {
      const config = { headers: { 'x-auth-token': getAuthToken() } };
      await axios.post('http://localhost:5000/api/admin/projects', newProjectData, config);
      fetchProjects(); // Re-fetch projects to show the new one
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const config = { headers: { 'x-auth-token': getAuthToken() } };
        await axios.delete(`http://localhost:5000/api/admin/projects/${id}`, config);
        fetchProjects(); // Re-fetch projects to reflect the deletion
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  const getStatusCount = (status) => {
    return projects.filter(project => project.status === status).length;
  };

  return (
    <ProjectsContainer>
      <Header>
        <Title>Projects</Title>
        <AddButton onClick={handleAddProject}>
          <i className="bi bi-plus-circle"></i>
          Add Sample Project
        </AddButton>
      </Header>

      <FilterBar>
        {/* Filter buttons remain the same, but now work on real data */}
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>All ({projects.length})</FilterButton>
        <FilterButton active={filter === 'ongoing'} onClick={() => setFilter('ongoing')}>Ongoing ({getStatusCount('ongoing')})</FilterButton>
        <FilterButton active={filter === 'completed'} onClick={() => setFilter('completed')}>Completed ({getStatusCount('completed')})</FilterButton>
        <FilterButton active={filter === 'upcoming'} onClick={() => setFilter('upcoming')}>Upcoming ({getStatusCount('upcoming')})</FilterButton>
      </FilterBar>

      <ProjectsGrid>
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project._id} // Use _id from MongoDB
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectImage>
                  {/* We use a placeholder since we haven't implemented image uploads yet */}
                  <i className="bi bi-building"></i>
                  <ProjectStatus className={project.status}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </ProjectStatus>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectActions>
                    <ActionButton className="view"><i className="bi bi-eye"></i></ActionButton>
                    <ActionButton className="edit"><i className="bi bi-pencil"></i></ActionButton>
                    <ActionButton className="delete" onClick={() => handleDelete(project._id)}>
                      <i className="bi bi-trash"></i>
                    </ActionButton>
                  </ProjectActions>
                </ProjectContent>
              </ProjectCard>
            ))
          ) : (
            <EmptyState>
              <i className="bi bi-building-slash"></i>
              <h3>No projects found</h3>
              <p>Click "Add Sample Project" to create your first project.</p>
            </EmptyState>
          )}
        </AnimatePresence>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsPanel;