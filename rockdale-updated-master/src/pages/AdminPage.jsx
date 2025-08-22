import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Admin Components
import AdminDashboard from '../components/admin/AdminDashboard';
import MessagesPanel from '../components/admin/MessagesPanel';
import ProjectsPanel from '../components/admin/ProjectsPanel';
import NewsEventsPanel from '../components/admin/NewsEventsPanel';
import ServicesPanel from '../components/admin/ServicesPanel';
import ContactInfoPanel from '../components/admin/ContactInfoPanel';
import AdminAuth from '../components/admin/AdminAuth';

const AdminContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  position: relative;
`;

const Sidebar = styled.div`
  width: 280px;
  background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);
  color: white;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  z-index: 1000;
  
  @media (max-width: 768px) {
    width: 100%;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
  }
`;

const SidebarHeader = styled.div`
  padding: 2rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  position: relative;
`;

const AdminLogo = styled.img`
  height: 50px;
  width: auto;
  margin-bottom: 1rem;
`;

const AdminTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: white;
  font-family: 'DM Sans', sans-serif;
`;

const AdminSubtitle = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0.5rem 0 0 0;
`;

const MobileCloseButton = styled.button`
  display: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const SidebarNav = styled.nav`
  padding: 1.5rem 0;
`;

const NavItem = styled.div`
  margin-bottom: 0.5rem;
`;

const NavButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
  border: none;
  color: white;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  i {
    font-size: 1.1rem;
    width: 20px;
  }
  
  @media (max-width: 768px) {
    &:active {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 280px;
  padding: 2rem;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: #46620d;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const AdminHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AdminAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #46620d 0%, #344709 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

const AdminInfo = styled.div`
  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
    font-family: 'DM Sans', sans-serif;
  }
  
  p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }
`;

const LogoutButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #c82333;
    transform: translateY(-2px);
  }
`;

const ContentArea = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: calc(100vh - 200px);
`;

const AdminPage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePanel, setActivePanel] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminData, setAdminData] = useState({
    name: 'Admin User',
    email: 'admin@rockdale.com',
    role: 'Website Owner'
  });

  useEffect(() => {
    console.log('AdminPage: Component mounted');
    
    try {
      // Check if admin is authenticated
      const adminAuth = localStorage.getItem('adminAuthenticated');
      console.log('AdminPage: Authentication check:', adminAuth);
      
      if (adminAuth === 'true') {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('AdminPage: Error checking authentication:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handlePanelChange = (panel) => {
    setActivePanel(panel);
    // Close mobile menu when navigating
    setMobileMenuOpen(false);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const renderPanel = () => {
    switch (activePanel) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'messages':
        return <MessagesPanel />;
      case 'projects':
        return <ProjectsPanel />;
      case 'news-events':
        return <NewsEventsPanel />;
      case 'services':
        return <ServicesPanel />;
      case 'contact':
        return <ContactInfoPanel />;
      default:
        return <AdminDashboard />;
    }
  };

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Loading Admin Panel...</h2>
          <p>Please wait while we initialize the admin interface.</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <AdminContainer>
      <MobileOverlay isOpen={mobileMenuOpen} onClick={handleMobileMenuClose} />
      <Sidebar isOpen={mobileMenuOpen}>
        <SidebarHeader>
          <MobileCloseButton onClick={handleMobileMenuClose}>
            <i className="bi bi-x-lg"></i>
          </MobileCloseButton>
          <AdminLogo src="/images/Logo.png" alt="Rockdale Admin" />
          <AdminTitle>Admin Panel</AdminTitle>
          <AdminSubtitle>Website Management</AdminSubtitle>
        </SidebarHeader>
        
        <SidebarNav>
          <NavItem>
            <NavButton 
              active={activePanel === 'dashboard'}
              onClick={() => handlePanelChange('dashboard')}
            >
              <i className="bi bi-speedometer2"></i>
              Dashboard
            </NavButton>
          </NavItem>
          
          <NavItem>
            <NavButton 
              active={activePanel === 'messages'}
              onClick={() => handlePanelChange('messages')}
            >
              <i className="bi bi-envelope"></i>
              Messages
            </NavButton>
          </NavItem>
          
          <NavItem>
            <NavButton 
              active={activePanel === 'projects'}
              onClick={() => handlePanelChange('projects')}
            >
              <i className="bi bi-building"></i>
              Projects
            </NavButton>
          </NavItem>
          
          <NavItem>
            <NavButton 
              active={activePanel === 'news-events'}
              onClick={() => handlePanelChange('news-events')}
            >
              <i className="bi bi-newspaper"></i>
              News & Events
            </NavButton>
          </NavItem>
          
          <NavItem>
            <NavButton 
              active={activePanel === 'services'}
              onClick={() => handlePanelChange('services')}
            >
              <i className="bi bi-gear"></i>
              Services
            </NavButton>
          </NavItem>
          
          <NavItem>
            <NavButton 
              active={activePanel === 'contact'}
              onClick={() => handlePanelChange('contact')}
            >
              <i className="bi bi-telephone"></i>
              Contact Info
            </NavButton>
          </NavItem>
        </SidebarNav>
      </Sidebar>

      <MainContent>
        <TopBar>
          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className="bi bi-list"></i>
            Menu
          </MobileMenuButton>
          
          <AdminHeader>
            <AdminAvatar>
              {adminData.name.split(' ').map(n => n[0]).join('')}
            </AdminAvatar>
            <AdminInfo>
              <h3>{adminData.name}</h3>
              <p>{adminData.role}</p>
            </AdminInfo>
          </AdminHeader>
          
          <LogoutButton onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i> Logout
          </LogoutButton>
        </TopBar>

        <ContentArea>
          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderPanel()}
            </motion.div>
          </AnimatePresence>
        </ContentArea>
      </MainContent>
    </AdminContainer>
  );
};

export default AdminPage; 