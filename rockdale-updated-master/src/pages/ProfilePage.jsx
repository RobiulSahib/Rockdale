// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { Link, useNavigate } from 'react-router-dom';

// const ProfileContainer = styled.div`
//   min-height: 100vh;
//   background-color: #f8f9fa;
//   padding-top: 80px;
// `;

// const ProfileHeader = styled.div`
//   background: linear-gradient(135deg, #46620d 0%, #344709 100%);
//   color: white;
//   padding: 3rem 0;
//   text-align: center;
// `;

// const ProfileAvatar = styled.div`
//   width: 120px;
//   height: 120px;
//   border-radius: 50%;
//   background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto 1.5rem;
//   font-size: 3rem;
//   color: #46620d;
//   font-weight: bold;
//   border: 4px solid white;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
// `;

// const ProfileName = styled.h1`
//   font-size: 2.5rem;
//   font-weight: 700;
//   margin-bottom: 0.5rem;
//   font-family: 'DM Sans', sans-serif;
// `;

// const ProfileEmail = styled.p`
//   font-size: 1.1rem;
//   opacity: 0.9;
//   margin-bottom: 0;
// `;

// const ProfileContent = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 3rem 20px;
// `;

// const ProfileGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 2fr;
//   gap: 2rem;
  
//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Sidebar = styled.div`
//   background: white;
//   border-radius: 12px;
//   padding: 2rem;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
//   height: fit-content;
// `;

// const SidebarTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 600;
//   color: #333;
//   margin-bottom: 1.5rem;
//   font-family: 'DM Sans', sans-serif;
// `;

// const SidebarMenu = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const SidebarMenuItem = styled.li`
//   margin-bottom: 0.5rem;
// `;

// const SidebarMenuLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   padding: 0.75rem 1rem;
//   border-radius: 8px;
//   color: ${props => props.active ? '#46620d' : '#666'};
//   background-color: ${props => props.active ? 'rgba(70, 98, 13, 0.1)' : 'transparent'};
//   text-decoration: none;
//   font-weight: ${props => props.active ? '600' : '400'};
//   transition: all 0.3s ease;
  
//   &:hover {
//     background-color: rgba(70, 98, 13, 0.1);
//     color: #46620d;
//   }
// `;

// const MainContent = styled.div`
//   background: white;
//   border-radius: 12px;
//   padding: 2rem;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
// `;

// const SectionTitle = styled.h2`
//   font-size: 1.8rem;
//   font-weight: 700;
//   color: #333;
//   margin-bottom: 1.5rem;
//   font-family: 'DM Sans', sans-serif;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 1.5rem;
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: 600;
//   color: #333;
//   margin-bottom: 0.5rem;
//   font-family: 'DM Sans', sans-serif;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   font-size: 1rem;
//   font-family: 'DM Sans', sans-serif;
//   transition: all 0.3s ease;
  
//   &:focus {
//     outline: none;
//     border-color: #46620d;
//     box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1);
//   }
// `;

// const Button = styled.button`
//   background-color: #46620d;
//   color: white;
//   border: none;
//   padding: 0.75rem 1.5rem;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   font-family: 'DM Sans', sans-serif;
  
//   &:hover {
//     background-color: #344709;
//     transform: translateY(-2px);
//   }
  
//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//     transform: none;
//   }
// `;

// const DangerButton = styled(Button)`
//   background-color: #dc3545;
  
//   &:hover {
//     background-color: #c82333;
//   }
// `;

// const InfoCard = styled.div`
//   background-color: #e7f3ff;
//   border: 1px solid #b3d9ff;
//   border-radius: 8px;
//   padding: 1rem;
//   margin-bottom: 1.5rem;
// `;

// const InfoText = styled.p`
//   color: #0056b3;
//   margin: 0;
//   font-size: 0.9rem;
// `;

// const ProfilePage = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('profile');
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phone: '+880 171 234 5678',
//     job: 'Software Engineer',
//     location: 'Dhaka, Bangladesh'
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // Check if user is logged in
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     if (!isLoggedIn) {
//       navigate('/auth');
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('userData');
//     navigate('/');
//   };

//   const handleSaveProfile = async () => {
//     setIsLoading(true);
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     setIsEditing(false);
//     setIsLoading(false);
//   };

//   const getInitials = (name) => {
//     return name.split(' ').map(n => n[0]).join('').toUpperCase();
//   };

//   return (
//     <ProfileContainer>
//       <ProfileHeader>
//         <ProfileAvatar>
//           {getInitials(user.name)}
//         </ProfileAvatar>
//         <ProfileName>{user.name}</ProfileName>
//         <ProfileEmail>{user.email}</ProfileEmail>
//       </ProfileHeader>

//       <ProfileContent>
//         <ProfileGrid>
//           <Sidebar>
//             <SidebarTitle>Account</SidebarTitle>
//             <SidebarMenu>
//               <SidebarMenuItem>
//                 <SidebarMenuLink 
//                   to="#" 
//                   active={activeTab === 'profile'}
//                   onClick={() => setActiveTab('profile')}
//                 >
//                   <i className="bi bi-person"></i>
//                   Profile Information
//                 </SidebarMenuLink>
//               </SidebarMenuItem>
//               <SidebarMenuItem>
//                 <SidebarMenuLink 
//                   to="#" 
//                   active={activeTab === 'security'}
//                   onClick={() => setActiveTab('security')}
//                 >
//                   <i className="bi bi-shield-lock"></i>
//                   Security Settings
//                 </SidebarMenuLink>
//               </SidebarMenuItem>
//               <SidebarMenuItem>
//                 <SidebarMenuLink 
//                   to="#" 
//                   active={activeTab === 'notifications'}
//                   onClick={() => setActiveTab('notifications')}
//                 >
//                   <i className="bi bi-bell"></i>
//                   Notifications
//                 </SidebarMenuLink>
//               </SidebarMenuItem>
//               <SidebarMenuItem>
//                 <SidebarMenuLink 
//                   to="#" 
//                   active={activeTab === 'preferences'}
//                   onClick={() => setActiveTab('preferences')}
//                 >
//                   <i className="bi bi-gear"></i>
//                   Preferences
//                 </SidebarMenuLink>
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </Sidebar>

//           <MainContent>
//             {activeTab === 'profile' && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <SectionTitle>Profile Information</SectionTitle>
                
//                 <FormGroup>
//                   <Label>Full Name</Label>
//                   <Input 
//                     type="text" 
//                     value={user.name}
//                     onChange={(e) => setUser({...user, name: e.target.value})}
//                     disabled={!isEditing}
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <Label>Email Address</Label>
//                   <Input 
//                     type="email" 
//                     value={user.email}
//                     onChange={(e) => setUser({...user, email: e.target.value})}
//                     disabled={!isEditing}
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <Label>Phone Number</Label>
//                   <Input 
//                     type="tel" 
//                     value={user.phone}
//                     onChange={(e) => setUser({...user, phone: e.target.value})}
//                     disabled={!isEditing}
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <Label>Job Title</Label>
//                   <Input 
//                     type="text" 
//                     value={user.job}
//                     onChange={(e) => setUser({...user, job: e.target.value})}
//                     disabled={!isEditing}
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <Label>Location</Label>
//                   <Input 
//                     type="text" 
//                     value={user.location}
//                     onChange={(e) => setUser({...user, location: e.target.value})}
//                     disabled={!isEditing}
//                   />
//                 </FormGroup>

//                 {!isEditing ? (
//                   <Button onClick={() => setIsEditing(true)}>
//                     Edit Profile
//                   </Button>
//                 ) : (
//                   <div style={{ display: 'flex', gap: '1rem' }}>
//                     <Button onClick={handleSaveProfile} disabled={isLoading}>
//                       {isLoading ? 'Saving...' : 'Save Changes'}
//                     </Button>
//                     <Button 
//                       onClick={() => setIsEditing(false)}
//                       style={{ backgroundColor: '#6c757d' }}
//                     >
//                       Cancel
//                     </Button>
//                   </div>
//                 )}
//               </motion.div>
//             )}

//             {activeTab === 'security' && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <SectionTitle>Security Settings</SectionTitle>
                
//                 <FormGroup>
//                   <Label>Current Password</Label>
//                   <Input type="password" placeholder="Enter current password" />
//                 </FormGroup>

//                 <FormGroup>
//                   <Label>New Password</Label>
//                   <Input type="password" placeholder="Enter new password" />
//                 </FormGroup>

//                 <FormGroup>
//                   <Label>Confirm New Password</Label>
//                   <Input type="password" placeholder="Confirm new password" />
//                 </FormGroup>

//                 <Button>Update Password</Button>
//               </motion.div>
//             )}

//             {activeTab === 'notifications' && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <SectionTitle>Notification Preferences</SectionTitle>
                
//                 <InfoCard>
//                   <InfoText>
//                     <i className="bi bi-info-circle"></i>
//                     Manage your notification preferences to stay updated with our latest projects and services.
//                   </InfoText>
//                 </InfoCard>

//                 <p>Notification settings will be available soon.</p>
//               </motion.div>
//             )}

//             {activeTab === 'preferences' && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <SectionTitle>Account Preferences</SectionTitle>
                
//                 <InfoCard>
//                   <InfoText>
//                     <i className="bi bi-info-circle"></i>
//                     Customize your account preferences and settings.
//                   </InfoText>
//                 </InfoCard>

//                 <p>Account preferences will be available soon.</p>
//               </motion.div>
//             )}
//           </MainContent>
//         </ProfileGrid>

//         <div style={{ textAlign: 'center', marginTop: '2rem' }}>
//           <DangerButton onClick={handleLogout}>
//             <i className="bi bi-box-arrow-right"></i> Logout
//           </DangerButton>
//         </div>
//       </ProfileContent>
//     </ProfileContainer>
//   );
// };

// export default ProfilePage; 



import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

// --- STYLED COMPONENTS (UNCHANGED) ---
const ProfileContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-top: 80px;
`;

const ProfileHeader = styled.div`
  background: linear-gradient(135deg, #46620d 0%, #344709 100%);
  color: white;
  padding: 3rem 0;
  text-align: center;
`;

const ProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 3rem;
  color: #46620d;
  font-weight: bold;
  border: 4px solid white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ProfileName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: 'DM Sans', sans-serif;
`;

const ProfileEmail = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 0;
`;

const ProfileContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 20px;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  height: fit-content;
`;

const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  font-family: 'DM Sans', sans-serif;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarMenuItem = styled.li`
  margin-bottom: 0.5rem;
`;

const SidebarMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: ${props => props.active ? '#46620d' : '#666'};
  background-color: ${props => props.active ? 'rgba(70, 98, 13, 0.1)' : 'transparent'};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(70, 98, 13, 0.1);
    color: #46620d;
  }
`;

const MainContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  font-family: 'DM Sans', sans-serif;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-family: 'DM Sans', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #46620d;
    box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1);
  }
`;

const Button = styled.button`
  background-color: #46620d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  
  &:hover {
    background-color: #344709;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const DangerButton = styled(Button)`
  background-color: #dc3545;
  
  &:hover {
    background-color: #c82333;
  }
`;

const InfoCard = styled.div`
  background-color: #e7f3ff;
  border: 1px solid #b3d9ff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const InfoText = styled.p`
  color: #0056b3;
  margin: 0;
  font-size: 0.9rem;
`;

// --- MAIN COMPONENT LOGIC ---
const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Initialize user state with empty strings
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    job: '',
    location: ''
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Read user data from localStorage when the page loads
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserData = localStorage.getItem('userData');
    
    if (!isLoggedIn || !storedUserData) {
      navigate('/auth');
    } else {
      const userData = JSON.parse(storedUserData);
      // We set a default for fields that might be missing from our login response
      setUser({
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone || '+880 123 456 7890', // Default value
        job: userData.job || 'N/A', // Default value
        location: userData.location || 'N/A' // Default value
      });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('authStateChanged'));
    navigate('/');
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    localStorage.setItem('userData', JSON.stringify(user)); // Save updated data
    setIsEditing(false);
    setIsLoading(false);
  };

  const getInitials = (name) => {
    if (typeof name !== 'string' || !name) return '';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileAvatar>
          {getInitials(user.name)}
        </ProfileAvatar>
        <ProfileName>{user.name}</ProfileName>
        <ProfileEmail>{user.email}</ProfileEmail>
      </ProfileHeader>

      <ProfileContent>
        <ProfileGrid>
          <Sidebar>
            <SidebarTitle>Account</SidebarTitle>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuLink 
                  to="#" 
                  active={activeTab === 'profile'}
                  onClick={() => setActiveTab('profile')}
                >
                  <i className="bi bi-person"></i>
                  Profile Information
                </SidebarMenuLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuLink 
                  to="#" 
                  active={activeTab === 'security'}
                  onClick={() => setActiveTab('security')}
                >
                  <i className="bi bi-shield-lock"></i>
                  Security Settings
                </SidebarMenuLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuLink 
                  to="#" 
                  active={activeTab === 'notifications'}
                  onClick={() => setActiveTab('notifications')}
                >
                  <i className="bi bi-bell"></i>
                  Notifications
                </SidebarMenuLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuLink 
                  to="#" 
                  active={activeTab === 'preferences'}
                  onClick={() => setActiveTab('preferences')}
                >
                  <i className="bi bi-gear"></i>
                  Preferences
                </SidebarMenuLink>
              </SidebarMenuItem>
            </SidebarMenu>
          </Sidebar>

          <MainContent>
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SectionTitle>Profile Information</SectionTitle>
                
                <FormGroup>
                  <Label>Full Name</Label>
                  <Input 
                    type="text" 
                    value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}
                    disabled={!isEditing}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Email Address</Label>
                  <Input 
                    type="email" 
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    disabled={!isEditing}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input 
                    type="tel" 
                    value={user.phone}
                    onChange={(e) => setUser({...user, phone: e.target.value})}
                    disabled={!isEditing}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Job Title</Label>
                  <Input 
                    type="text" 
                    value={user.job}
                    onChange={(e) => setUser({...user, job: e.target.value})}
                    disabled={!isEditing}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Location</Label>
                  <Input 
                    type="text" 
                    value={user.location}
                    onChange={(e) => setUser({...user, location: e.target.value})}
                    disabled={!isEditing}
                  />
                </FormGroup>

                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                ) : (
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button onClick={handleSaveProfile} disabled={isLoading}>
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </Button>
                    <Button 
                      onClick={() => setIsEditing(false)}
                      style={{ backgroundColor: '#6c757d' }}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SectionTitle>Security Settings</SectionTitle>
                
                <FormGroup>
                  <Label>Current Password</Label>
                  <Input type="password" placeholder="Enter current password" />
                </FormGroup>

                <FormGroup>
                  <Label>New Password</Label>
                  <Input type="password" placeholder="Enter new password" />
                </FormGroup>

                <FormGroup>
                  <Label>Confirm New Password</Label>
                  <Input type="password" placeholder="Confirm new password" />
                </FormGroup>

                <Button>Update Password</Button>
              </motion.div>
            )}

            {activeTab === 'notifications' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SectionTitle>Notification Preferences</SectionTitle>
                
                <InfoCard>
                  <InfoText>
                    <i className="bi bi-info-circle"></i>
                    Manage your notification preferences to stay updated with our latest projects and services.
                  </InfoText>
                </InfoCard>

                <p>Notification settings will be available soon.</p>
              </motion.div>
            )}

            {activeTab === 'preferences' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SectionTitle>Account Preferences</SectionTitle>
                
                <InfoCard>
                  <InfoText>
                    <i className="bi bi-info-circle"></i>
                    Customize your account preferences and settings.
                  </InfoText>
                </InfoCard>

                <p>Account preferences will be available soon.</p>
              </motion.div>
            )}
          </MainContent>
        </ProfileGrid>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <DangerButton onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i> Logout
          </DangerButton>
        </div>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfilePage;