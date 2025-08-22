import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const ProfileIconContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ProfileAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #46620d;
  font-weight: bold;
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const ProfileName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  z-index: 1000;
  overflow: hidden;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid #f0f0f0;
  
  &:hover {
    background-color: #f8f9fa;
    color: #46620d;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #dc3545;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #fff5f5;
  }
`;

const UserProfileIcon = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Check if user is logged in
    const checkAuthStatus = () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      const userData = localStorage.getItem('userData');
      
      if (isLoggedIn && userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      } else {
        setUser(null);
      }
    };
    
    checkAuthStatus();
    
    // Listen for storage changes and custom events
    const handleStorageChange = () => {
      checkAuthStatus();
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authStateChanged', handleStorageChange);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authStateChanged', handleStorageChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    setIsOpen(false);
    
    // Trigger custom event for navbar update
    window.dispatchEvent(new Event('authStateChanged'));
    
    navigate('/');
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  if (!user) {
    return null; // Don't render if user is not logged in
  }

  return (
    <ProfileIconContainer ref={dropdownRef}>
      <ProfileButton onClick={() => setIsOpen(!isOpen)}>
        <ProfileAvatar>
          {getInitials(user.name || user.email)}
        </ProfileAvatar>
        <ProfileName>
          {user.name || user.email?.split('@')[0]}
        </ProfileName>
        <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </ProfileButton>
      
      <DropdownMenu isOpen={isOpen}>
        <DropdownItem to="/profile">
          <i className="bi bi-person"></i>
          Profile
        </DropdownItem>
        <DropdownItem to="/profile">
          <i className="bi bi-gear"></i>
          Settings
        </DropdownItem>
        <DropdownItem to="/profile">
          <i className="bi bi-bell"></i>
          Notifications
        </DropdownItem>
        <LogoutButton onClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i>
          Logout
        </LogoutButton>
      </DropdownMenu>
    </ProfileIconContainer>
  );
};

export default UserProfileIcon; 