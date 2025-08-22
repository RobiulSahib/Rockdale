


import React, { useState, useEffect } from 'react'; // Added useEffect
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios'; // Import axios

// --- STYLED COMPONENTS (UNCHANGED) ---
const ServicesContainer = styled.div`
  padding: 2rem;
`;
// (omitting the rest of the styled components for brevity, they are all the same as your file)
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const ServiceCard = styled(motion.div)`
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

const ServiceImage = styled.div`
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

const ServiceStatus = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  
  &.active {
    background: #27ae60;
    color: white;
  }
  
  &.inactive {
    background: #e74c3c;
    color: white;
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-family: 'DM Sans', sans-serif;
`;

const ServiceDescription = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
`;

const ServiceDetails = styled.div`
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

const ServiceActions = styled.div`
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
  
  &.toggle {
    background: ${props => props.active ? 'linear-gradient(135deg, #27ae60 0%, #229954 100%)' : 'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)'};
    color: white;
    box-shadow: ${props => props.active ? `
      0 3px 10px rgba(39, 174, 96, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
    ` : `
      0 3px 10px rgba(108, 117, 125, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2)
    `};
    
    &:hover {
      background: ${props => props.active ? 'linear-gradient(135deg, #229954 0%, #1e8449 100%)' : 'linear-gradient(135deg, #5a6268 0%, #495057 100%)'};
      box-shadow: ${props => props.active ? `
        0 5px 15px rgba(39, 174, 96, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, 0.3)
      ` : `
        0 5px 15px rgba(108, 117, 125, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, 0.3)
      `};
      
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
  grid-column: 1 / -1; // Make it span the full width of the grid

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

// --- MAIN COMPONENT LOGIC (UPDATED) ---
const ServicesPanel = () => {
  const [services, setServices] = useState([]); // Start with an empty array

  const getAuthToken = () => localStorage.getItem('adminToken');

  const fetchServices = async () => {
    try {
      const config = { headers: { 'x-auth-token': getAuthToken() } };
      const response = await axios.get('http://localhost:5000/api/admin/services', config);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAddService = async () => {
    const newServiceData = {
      title: 'New Sample Service',
      description: 'A brief description of this new service added from the admin panel.',
      status: 'active',
      price: 'Contact for pricing',
      duration: 'Varies',
      category: 'General'
    };
    try {
      const config = { headers: { 'x-auth-token': getAuthToken() } };
      await axios.post('http://localhost:5000/api/admin/services', newServiceData, config);
      fetchServices(); // Re-fetch to show the new service
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        const config = { headers: { 'x-auth-token': getAuthToken() } };
        await axios.delete(`http://localhost:5000/api/admin/services/${id}`, config);
        fetchServices(); // Re-fetch to reflect the deletion
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  // handleToggleStatus can be implemented later with a PUT route
  const handleToggleStatus = (id) => {
    console.log("Toggling status for service ID:", id);
    // In a real app, this would be an API call:
    // await axios.put(`/api/admin/services/${id}/toggle`, {}, config);
    // fetchServices();
  };

  const activeServices = services.filter(service => service.status === 'active').length;

  return (
    <ServicesContainer>
      <Header>
        <Title>Services</Title>
        <AddButton onClick={handleAddService}>
          <i className="bi bi-plus-circle"></i>
          Add New Service
        </AddButton>
      </Header>

      <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#2c3e50', fontWeight: '600' }}>
            Total Services: {services.length}
          </span>
          <span style={{ color: '#27ae60', fontWeight: '600' }}>
            Active Services: {activeServices}
          </span>
          <span style={{ color: '#e74c3c', fontWeight: '600' }}>
            Inactive Services: {services.length - activeServices}
          </span>
        </div>
      </div>

      <ServicesGrid>
        <AnimatePresence>
          {services.length > 0 ? (
            services.map((service, index) => (
              <ServiceCard
                key={service._id} // Use _id from MongoDB
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceImage>
                  {/* Using a placeholder icon */}
                  <i className="bi bi-tools"></i>
                  <ServiceStatus className={service.status}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </ServiceStatus>
                </ServiceImage>

                <ServiceContent>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>

                  <ServiceDetails>
                    <DetailItem>
                      <div className="label">Category</div>
                      <div className="value">{service.category}</div>
                    </DetailItem>
                    <DetailItem>
                      <div className="label">Price Range</div>
                      <div className="value">{service.price || 'N/A'}</div>
                    </DetailItem>
                    <DetailItem>
                      <div className="label">Duration</div>
                      <div className="value">{service.duration || 'N/A'}</div>
                    </DetailItem>
                    <DetailItem>
                      <div className="label">Status</div>
                      <div className="value">{service.status}</div>
                    </DetailItem>
                  </ServiceDetails>

                  <ServiceActions>
                    <ActionButton className="edit">
                      <i className="bi bi-pencil"></i>
                    </ActionButton>
                    <ActionButton 
                      className="toggle"
                      active={service.status === 'active'}
                      onClick={() => handleToggleStatus(service._id)}
                    >
                      <i className={`bi bi-${service.status === 'active' ? 'pause' : 'play'}`}></i>
                    </ActionButton>
                    <ActionButton 
                      className="delete"
                      onClick={() => handleDelete(service._id)}
                    >
                      <i className="bi bi-trash"></i>
                    </ActionButton>
                  </ServiceActions>
                </ServiceContent>
              </ServiceCard>
            ))
          ) : (
             <EmptyState>
              <i className="bi bi-folder-x"></i>
              <h3>No services found</h3>
              <p>Click "Add New Service" to create your first service.</p>
            </EmptyState>
          )}
        </AnimatePresence>
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default ServicesPanel;