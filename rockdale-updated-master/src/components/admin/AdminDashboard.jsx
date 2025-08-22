// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// const DashboardContainer = styled.div`
//   padding: 2rem;
// `;

// const DashboardHeader = styled.div`
//   margin-bottom: 2rem;
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: 700;
//   color: #2c3e50;
//   margin-bottom: 0.5rem;
//   font-family: 'DM Sans', sans-serif;
// `;

// const Subtitle = styled.p`
//   color: #7f8c8d;
//   font-size: 1.1rem;
//   margin: 0;
// `;

// const StatsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 1.5rem;
//   margin-bottom: 2rem;
// `;

// const StatCard = styled(motion.div)`
//   background: white;
//   border-radius: 15px;
//   padding: 1.5rem;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
//   border: 1px solid #f1f3f4;
//   position: relative;
//   overflow: hidden;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 4px;
//     background: ${props => props.color || '#46620d'};
//   }
// `;

// const StatIcon = styled.div`
//   width: 50px;
//   height: 50px;
//   border-radius: 12px;
//   background: ${props => props.bgColor || '#46620d'};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
// `;

// const StatValue = styled.div`
//   font-size: 2rem;
//   font-weight: 700;
//   color: #2c3e50;
//   margin-bottom: 0.5rem;
//   font-family: 'DM Sans', sans-serif;
// `;

// const StatLabel = styled.div`
//   color: #7f8c8d;
//   font-size: 0.9rem;
//   font-weight: 500;
// `;

// const StatChange = styled.div`
//   font-size: 0.8rem;
//   color: ${props => props.positive ? '#27ae60' : '#e74c3c'};
//   font-weight: 600;
//   margin-top: 0.5rem;
// `;

// const ContentGrid = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   gap: 2rem;
  
//   @media (max-width: 1024px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const RecentActivity = styled.div`
//   background: white;
//   border-radius: 15px;
//   padding: 1.5rem;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
//   border: 1px solid #f1f3f4;
// `;

// const SectionTitle = styled.h2`
//   font-size: 1.3rem;
//   font-weight: 600;
//   color: #2c3e50;
//   margin-bottom: 1rem;
//   font-family: 'DM Sans', sans-serif;
// `;

// const ActivityList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const ActivityItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   padding: 1rem;
//   border-radius: 10px;
//   background: #f8f9fa;
//   border-left: 4px solid #46620d;
// `;

// const ActivityIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: #46620d;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-size: 1rem;
// `;

// const ActivityContent = styled.div`
//   flex: 1;
// `;

// const ActivityTitle = styled.div`
//   font-weight: 600;
//   color: #2c3e50;
//   margin-bottom: 0.25rem;
// `;

// const ActivityTime = styled.div`
//   font-size: 0.8rem;
//   color: #7f8c8d;
// `;

// const QuickActions = styled.div`
//   background: white;
//   border-radius: 15px;
//   padding: 1.5rem;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
//   border: 1px solid #f1f3f4;
// `;

// const ActionButton = styled.button`
//   width: 100%;
//   padding: 1rem;
//   margin-bottom: 1rem;
//   background: ${props => props.variant === 'primary' ? 'linear-gradient(135deg, #46620d 0%, #344709 100%)' : 'white'};
//   color: ${props => props.variant === 'primary' ? 'white' : '#46620d'};
//   border: 2px solid #46620d;
//   border-radius: 10px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   font-family: 'DM Sans', sans-serif;
//   box-shadow: ${props => props.variant === 'primary' ? `
//     0 4px 15px rgba(0, 0, 0, 0.2),
//     inset 0 1px 0 rgba(255, 255, 255, 0.3),
//     inset 0 -1px 0 rgba(0, 0, 0, 0.2)
//   ` : '0 2px 8px rgba(0, 0, 0, 0.1)'};
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
//     opacity: ${props => props.variant === 'primary' ? '1' : '0'};
//   }
  
//   &:hover {
//     background: ${props => props.variant === 'primary' ? 'linear-gradient(135deg, #344709 0%, #2d3e0a 100%)' : '#f8f9fa'};
//     transform: translateY(-2px);
//     box-shadow: ${props => props.variant === 'primary' ? `
//       0 8px 20px rgba(0, 0, 0, 0.15),
//       inset 0 1px 0 rgba(255, 255, 255, 0.4),
//       inset 0 -1px 0 rgba(0, 0, 0, 0.3)
//     ` : '0 5px 15px rgba(0, 0, 0, 0.1)'};
    
//     &::before {
//       left: 100%;
//     }
//   }
  
//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({
//     totalMessages: 24,
//     totalProjects: 12,
//     totalNews: 8,
//     totalServices: 6
//   });

//   const [recentActivities] = useState([
//     {
//       id: 1,
//       title: 'New message received from John Doe',
//       time: '2 minutes ago',
//       icon: 'bi-envelope'
//     },
//     {
//       id: 2,
//       title: 'Project "Luxury Apartments" updated',
//       time: '1 hour ago',
//       icon: 'bi-building'
//     },
//     {
//       id: 3,
//       title: 'New service "Interior Design" added',
//       time: '3 hours ago',
//       icon: 'bi-gear'
//     },
//     {
//       id: 4,
//       title: 'News article "Market Trends" published',
//       time: '5 hours ago',
//       icon: 'bi-newspaper'
//     },
//     {
//       id: 5,
//       title: 'Contact information updated',
//       time: '1 day ago',
//       icon: 'bi-telephone'
//     }
//   ]);

//   return (
//     <DashboardContainer>
//       <DashboardHeader>
//         <Title>Dashboard Overview</Title>
//         <Subtitle>Welcome back! Here's what's happening with your website.</Subtitle>
//       </DashboardHeader>

//       <StatsGrid>
//         <StatCard
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           color="#46620d"
//         >
//           <StatIcon bgColor="#46620d">
//             <i className="bi bi-envelope"></i>
//           </StatIcon>
//           <StatValue>{stats.totalMessages}</StatValue>
//           <StatLabel>Total Messages</StatLabel>
//           <StatChange positive>+12% from last month</StatChange>
//         </StatCard>

//         <StatCard
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           color="#3498db"
//         >
//           <StatIcon bgColor="#3498db">
//             <i className="bi bi-building"></i>
//           </StatIcon>
//           <StatValue>{stats.totalProjects}</StatValue>
//           <StatLabel>Active Projects</StatLabel>
//           <StatChange positive>+3 new this month</StatChange>
//         </StatCard>

//         <StatCard
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           color="#e74c3c"
//         >
//           <StatIcon bgColor="#e74c3c">
//             <i className="bi bi-newspaper"></i>
//           </StatIcon>
//           <StatValue>{stats.totalNews}</StatValue>
//           <StatLabel>News & Events</StatLabel>
//           <StatChange positive>+2 published this week</StatChange>
//         </StatCard>

//         <StatCard
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           color="#f39c12"
//         >
//           <StatIcon bgColor="#f39c12">
//             <i className="bi bi-gear"></i>
//           </StatIcon>
//           <StatValue>{stats.totalServices}</StatValue>
//           <StatLabel>Services Offered</StatLabel>
//           <StatChange positive>+1 new service added</StatChange>
//         </StatCard>
//       </StatsGrid>

//       <ContentGrid>
//         <RecentActivity>
//           <SectionTitle>Recent Activity</SectionTitle>
//           <ActivityList>
//             {recentActivities.map((activity, index) => (
//               <motion.div
//                 key={activity.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.1 * index }}
//               >
//                 <ActivityItem>
//                   <ActivityIcon>
//                     <i className={activity.icon}></i>
//                   </ActivityIcon>
//                   <ActivityContent>
//                     <ActivityTitle>{activity.title}</ActivityTitle>
//                     <ActivityTime>{activity.time}</ActivityTime>
//                   </ActivityContent>
//                 </ActivityItem>
//               </motion.div>
//             ))}
//           </ActivityList>
//         </RecentActivity>

//         <QuickActions>
//           <SectionTitle>Quick Actions</SectionTitle>
//           <ActionButton variant="primary">
//             <i className="bi bi-plus-circle"></i>
//             Add New Project
//           </ActionButton>
//           <ActionButton>
//             <i className="bi bi-envelope"></i>
//             View Messages
//           </ActionButton>
//           <ActionButton>
//             <i className="bi bi-newspaper"></i>
//             Publish News
//           </ActionButton>
//           <ActionButton>
//             <i className="bi bi-gear"></i>
//             Manage Services
//           </ActionButton>
//           <ActionButton>
//             <i className="bi bi-telephone"></i>
//             Update Contact Info
//           </ActionButton>
//         </QuickActions>
//       </ContentGrid>
//     </DashboardContainer>
//   );
// };

// export default AdminDashboard; 



import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

// --- STYLED COMPONENTS (UNCHANGED) ---
const DashboardContainer = styled.div`
  padding: 2rem;
`;

const DashboardHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-family: 'DM Sans', sans-serif;
`;

const Subtitle = styled.p`
  color: #7f8c8d;
  font-size: 1.1rem;
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f3f4;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.color || '#46620d'};
  }
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${props => props.bgColor || '#46620d'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-family: 'DM Sans', sans-serif;
`;

const StatLabel = styled.div`
  color: #7f8c8d;
  font-size: 0.9rem;
  font-weight: 500;
`;

const StatChange = styled.div`
  font-size: 0.8rem;
  color: ${props => props.positive ? '#27ae60' : '#e74c3c'};
  font-weight: 600;
  margin-top: 0.5rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const RecentActivity = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f3f4;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-family: 'DM Sans', sans-serif;
`;

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background: #f8f9fa;
  border-left: 4px solid #46620d;
`;

const ActivityIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #46620d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.div`
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.25rem;
`;

const ActivityTime = styled.div`
  font-size: 0.8rem;
  color: #7f8c8d;
`;

const QuickActions = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f3f4;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${props => props.variant === 'primary' ? 'linear-gradient(135deg, #46620d 0%, #344709 100%)' : 'white'};
  color: ${props => props.variant === 'primary' ? 'white' : '#46620d'};
  border: 2px solid #46620d;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'DM Sans', sans-serif;
  box-shadow: ${props => props.variant === 'primary' ? `
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2)
  ` : '0 2px 8px rgba(0, 0, 0, 0.1)'};
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
    opacity: ${props => props.variant === 'primary' ? '1' : '0'};
  }
  
  &:hover {
    background: ${props => props.variant === 'primary' ? 'linear-gradient(135deg, #344709 0%, #2d3e0a 100%)' : '#f8f9fa'};
    transform: translateY(-2px);
    box-shadow: ${props => props.variant === 'primary' ? `
      0 8px 20px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3)
    ` : '0 5px 15px rgba(0, 0, 0, 0.1)'};
    
    &::before {
      left: 100%;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// --- MAIN COMPONENT LOGIC ---
const AdminDashboard = () => {
  // Initialize state with 0s
  const [stats, setStats] = useState({
    totalMessages: 0,
    totalProjects: 0,
    totalNews: 0,
    totalServices: 0
  });

  const [recentActivities] = useState([
    // This is still static for now, we can make it dynamic later
    { id: 1, title: 'New message received from John Doe', time: '2 minutes ago', icon: 'bi-envelope' },
    { id: 2, title: 'Project "Luxury Apartments" updated', time: '1 hour ago', icon: 'bi-building' },
  ]);

  // This useEffect hook runs once when the component loads
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Get the admin token from localStorage
        const adminToken = localStorage.getItem('adminToken'); // Assuming you save the token here

        // Make a GET request to our new backend endpoint
        const response = await axios.get('http://localhost:5000/api/admin/stats', {
          headers: {
            'x-auth-token': adminToken // Pass the token in the headers
          }
        });
        
        // Update the state with the real data from the backend
        setStats(response.data);

      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        // Handle error (e.g., show a message, redirect to login if unauthorized)
      }
    };

    fetchStats();
  }, []); // The empty array [] means this effect runs only once

  return (
    <DashboardContainer>
      <DashboardHeader>
        <Title>Dashboard Overview</Title>
        <Subtitle>Welcome back! Here's what's happening with your website.</Subtitle>
      </DashboardHeader>

      <StatsGrid>
        <StatCard color="#46620d">
          <StatIcon bgColor="#46620d"><i className="bi bi-envelope"></i></StatIcon>
          <StatValue>{stats.totalMessages}</StatValue>
          <StatLabel>Total Messages</StatLabel>
        </StatCard>

        <StatCard color="#3498db">
          <StatIcon bgColor="#3498db"><i className="bi bi-building"></i></StatIcon>
          <StatValue>{stats.totalProjects}</StatValue>
          <StatLabel>Active Projects</StatLabel>
        </StatCard>

        <StatCard color="#e74c3c">
          <StatIcon bgColor="#e74c3c"><i className="bi bi-newspaper"></i></StatIcon>
          <StatValue>{stats.totalNews}</StatValue>
          <StatLabel>News & Events</StatLabel>
        </StatCard>

        <StatCard color="#f39c12">
          <StatIcon bgColor="#f39c12"><i className="bi bi-gear"></i></StatIcon>
          <StatValue>{stats.totalServices}</StatValue>
          <StatLabel>Services Offered</StatLabel>
        </StatCard>
      </StatsGrid>
      
      {/* (The rest of the component remains the same for now) */}
      <ContentGrid>
        <RecentActivity>
          <SectionTitle>Recent Activity</SectionTitle>
          <ActivityList>
            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <ActivityItem>
                  <ActivityIcon>
                    <i className={activity.icon}></i>
                  </ActivityIcon>
                  <ActivityContent>
                    <ActivityTitle>{activity.title}</ActivityTitle>
                    <ActivityTime>{activity.time}</ActivityTime>
                  </ActivityContent>
                </ActivityItem>
              </motion.div>
            ))}
          </ActivityList>
        </RecentActivity>
        <QuickActions>
          <SectionTitle>Quick Actions</SectionTitle>
          <ActionButton variant="primary"><i className="bi bi-plus-circle"></i> Add New Project</ActionButton>
          <ActionButton><i className="bi bi-envelope"></i> View Messages</ActionButton>
          <ActionButton><i className="bi bi-newspaper"></i> Publish News</ActionButton>
        </QuickActions>
      </ContentGrid>
    </DashboardContainer>
  );
};

export default AdminDashboard;