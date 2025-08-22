// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { motion, AnimatePresence } from 'framer-motion';

// const MessagesContainer = styled.div`
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

// const MessagesGrid = styled.div`
//   display: grid;
//   gap: 1rem;
// `;

// const MessageCard = styled(motion.div)`
//   background: white;
//   border-radius: 12px;
//   padding: 1.5rem;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
//   border: 1px solid #f1f3f4;
//   cursor: pointer;
//   transition: all 0.3s ease;
  
//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
//   }
  
//   ${props => props.unread && `
//     border-left: 4px solid #46620d;
//     background: #f8f9fa;
//   `}
// `;

// const MessageHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   margin-bottom: 1rem;
// `;

// const SenderInfo = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
// `;

// const SenderAvatar = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: linear-gradient(135deg, #46620d 0%, #344709 100%);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   font-weight: bold;
//   font-size: 0.9rem;
// `;

// const SenderDetails = styled.div`
//   h4 {
//     margin: 0;
//     font-size: 1rem;
//     font-weight: 600;
//     color: #2c3e50;
//   }
  
//   p {
//     margin: 0;
//     font-size: 0.9rem;
//     color: #7f8c8d;
//   }
// `;

// const MessageMeta = styled.div`
//   text-align: right;
  
//   .time {
//     font-size: 0.8rem;
//     color: #7f8c8d;
//     margin-bottom: 0.5rem;
//   }
  
//   .status {
//     font-size: 0.75rem;
//     padding: 0.25rem 0.5rem;
//     border-radius: 12px;
//     font-weight: 600;
    
//     &.unread {
//       background: #46620d;
//       color: white;
//     }
    
//     &.read {
//       background: #e9ecef;
//       color: #6c757d;
//     }
//   }
// `;

// const MessageContent = styled.div`
//   margin-bottom: 1rem;
  
//   .subject {
//     font-weight: 600;
//     color: #2c3e50;
//     margin-bottom: 0.5rem;
//   }
  
//   .preview {
//     color: #7f8c8d;
//     font-size: 0.9rem;
//     line-height: 1.5;
//   }
// `;

// const MessageActions = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   justify-content: flex-end;
// `;

// const ActionButton = styled.button`
//   padding: 0.5rem 1rem;
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
  
//   &.reply {
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
  
//   &.mark-read {
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

// const MessagesPanel = () => {
//   const [filter, setFilter] = useState('all');
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       phone: '+880 171 234 5678',
//       subject: 'Inquiry about Luxury Apartments',
//       message: 'I am interested in your luxury apartment project. Could you please provide more details about pricing and availability?',
//       time: '2 minutes ago',
//       status: 'unread',
//       type: 'general'
//     },
//     {
//       id: 2,
//       name: 'Sarah Wilson',
//       email: 'sarah.wilson@example.com',
//       phone: '+880 181 345 6789',
//       subject: 'Project Consultation Request',
//       message: 'I would like to schedule a consultation for a new residential project. Please let me know your availability.',
//       time: '1 hour ago',
//       status: 'read',
//       type: 'consultation'
//     },
//     {
//       id: 3,
//       name: 'Michael Brown',
//       email: 'michael.brown@example.com',
//       phone: '+880 191 456 7890',
//       subject: 'Service Information',
//       message: 'Can you provide information about your interior design services and pricing packages?',
//       time: '3 hours ago',
//       status: 'unread',
//       type: 'service'
//     },
//     {
//       id: 4,
//       name: 'Emily Davis',
//       email: 'emily.davis@example.com',
//       phone: '+880 161 567 8901',
//       subject: 'Partnership Opportunity',
//       message: 'I represent a real estate agency and would like to discuss potential partnership opportunities.',
//       time: '1 day ago',
//       status: 'read',
//       type: 'partnership'
//     }
//   ]);

//   const filteredMessages = messages.filter(message => {
//     if (filter === 'all') return true;
//     if (filter === 'unread') return message.status === 'unread';
//     if (filter === 'read') return message.status === 'read';
//     return message.type === filter;
//   });

//   const handleMarkAsRead = (id) => {
//     setMessages(messages.map(msg => 
//       msg.id === id ? { ...msg, status: 'read' } : msg
//     ));
//   };

//   const handleDelete = (id) => {
//     setMessages(messages.filter(msg => msg.id !== id));
//   };

//   const getInitials = (name) => {
//     return name.split(' ').map(n => n[0]).join('').toUpperCase();
//   };

//   return (
//     <MessagesContainer>
//       <Header>
//         <Title>Messages</Title>
//         <div>
//           <span style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
//             {messages.filter(m => m.status === 'unread').length} unread messages
//           </span>
//         </div>
//       </Header>

//       <FilterBar>
//         <FilterButton 
//           active={filter === 'all'} 
//           onClick={() => setFilter('all')}
//         >
//           All ({messages.length})
//         </FilterButton>
//         <FilterButton 
//           active={filter === 'unread'} 
//           onClick={() => setFilter('unread')}
//         >
//           Unread ({messages.filter(m => m.status === 'unread').length})
//         </FilterButton>
//         <FilterButton 
//           active={filter === 'read'} 
//           onClick={() => setFilter('read')}
//         >
//           Read ({messages.filter(m => m.status === 'read').length})
//         </FilterButton>
//         <FilterButton 
//           active={filter === 'general'} 
//           onClick={() => setFilter('general')}
//         >
//           General
//         </FilterButton>
//         <FilterButton 
//           active={filter === 'consultation'} 
//           onClick={() => setFilter('consultation')}
//         >
//           Consultation
//         </FilterButton>
//       </FilterBar>

//       <MessagesGrid>
//         <AnimatePresence>
//           {filteredMessages.length > 0 ? (
//             filteredMessages.map((message, index) => (
//               <MessageCard
//                 key={message.id}
//                 unread={message.status === 'unread'}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <MessageHeader>
//                   <SenderInfo>
//                     <SenderAvatar>
//                       {getInitials(message.name)}
//                     </SenderAvatar>
//                     <SenderDetails>
//                       <h4>{message.name}</h4>
//                       <p>{message.email}</p>
//                     </SenderDetails>
//                   </SenderInfo>
//                   <MessageMeta>
//                     <div className="time">{message.time}</div>
//                     <div className={`status ${message.status}`}>
//                       {message.status === 'unread' ? 'New' : 'Read'}
//                     </div>
//                   </MessageMeta>
//                 </MessageHeader>

//                 <MessageContent>
//                   <div className="subject">{message.subject}</div>
//                   <div className="preview">{message.message}</div>
//                 </MessageContent>

//                 <MessageActions>
//                   {message.status === 'unread' && (
//                     <ActionButton 
//                       className="mark-read"
//                       onClick={() => handleMarkAsRead(message.id)}
//                     >
//                       Mark as Read
//                     </ActionButton>
//                   )}
//                   <ActionButton className="reply">
//                     Reply
//                   </ActionButton>
//                   <ActionButton 
//                     className="delete"
//                     onClick={() => handleDelete(message.id)}
//                   >
//                     Delete
//                   </ActionButton>
//                 </MessageActions>
//               </MessageCard>
//             ))
//           ) : (
//             <EmptyState>
//               <i className="bi bi-envelope"></i>
//               <h3>No messages found</h3>
//               <p>There are no messages matching your current filter.</p>
//             </EmptyState>
//           )}
//         </AnimatePresence>
//       </MessagesGrid>
//     </MessagesContainer>
//   );
// };

// export default MessagesPanel; 


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

// (Your styled-components are unchanged)
const MessagesContainer = styled.div` padding: 2rem; `;
const Header = styled.div` display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; `;
const Title = styled.h1` font-size: 2rem; font-weight: 700; color: #2c3e50; margin: 0; font-family: 'DM Sans', sans-serif; `;
const FilterBar = styled.div` display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; `;
const FilterButton = styled.button` padding: 0.5rem 1rem; border: 2px solid ${props => props.active ? '#46620d' : '#e9ecef'}; background: ${props => props.active ? '#46620d' : 'white'}; color: ${props => props.active ? 'white' : '#46620d'}; border-radius: 25px; cursor: pointer; font-weight: 600; transition: all 0.3s ease; &:hover { border-color: #46620d; background: ${props => props.active ? '#344709' : '#f8f9fa'}; } `;
const MessagesGrid = styled.div` display: grid; gap: 1rem; `;
const MessageCard = styled(motion.div)` background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08); border: 1px solid #f1f3f4; cursor: pointer; transition: all 0.3s ease; &:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12); } ${props => props.unread && `border-left: 4px solid #46620d; background: #f8f9fa;`} `;
const MessageHeader = styled.div` display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; `;
const SenderInfo = styled.div` display: flex; align-items: center; gap: 0.75rem; `;
const SenderAvatar = styled.div` width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #46620d 0%, #344709 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.9rem; `;
const SenderDetails = styled.div` h4 { margin: 0; font-size: 1rem; font-weight: 600; color: #2c3e50; } p { margin: 0; font-size: 0.9rem; color: #7f8c8d; } `;
const MessageMeta = styled.div` text-align: right; .time { font-size: 0.8rem; color: #7f8c8d; margin-bottom: 0.5rem; } .status { font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 12px; font-weight: 600; &.unread { background: #46620d; color: white; } &.read { background: #e9ecef; color: #6c757d; } } `;
const MessageContent = styled.div` margin-bottom: 1rem; .subject { font-weight: 600; color: #2c3e50; margin-bottom: 0.5rem; } .preview { color: #7f8c8d; font-size: 0.9rem; line-height: 1.5; } `;
const MessageActions = styled.div` display: flex; gap: 0.5rem; justify-content: flex-end; `;
const ActionButton = styled.button` padding: 0.5rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 600; transition: all 0.3s ease; position: relative; overflow: hidden; &::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent); transition: left 0.5s ease; } &.reply { background: linear-gradient(135deg, #46620d 0%, #344709 100%); color: white; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2); &:hover { background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3); &::before { left: 100%; } } } &.delete { background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); color: white; box-shadow: 0 3px 10px rgba(220, 53, 69, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2); &:hover { background: linear-gradient(135deg, #c82333 0%, #a71e2a 100%); box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3); &::before { left: 100%; } } } &.mark-read { background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%); color: white; box-shadow: 0 3px 10px rgba(108, 117, 125, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2); &:hover { background: linear-gradient(135deg, #5a6268 0%, #495057 100%); box-shadow: 0 5px 15px rgba(108, 117, 125, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3); &::before { left: 100%; } } } `;
const EmptyState = styled.div` text-align: center; padding: 3rem; color: #7f8c8d; i { font-size: 3rem; margin-bottom: 1rem; color: #bdc3c7; } h3 { margin-bottom: 0.5rem; color: #2c3e50; } `;

const MessagesPanel = () => {
  const [filter, setFilter] = useState('all');
  const [messages, setMessages] = useState([]);

  const getAuthToken = () => localStorage.getItem('adminToken');

  const fetchMessages = async () => {
    try {
      const config = { headers: { 'x-auth-token': getAuthToken() } };
      const response = await axios.get('http://localhost:5000/api/admin/messages', config);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const config = { headers: { 'x-auth-token': getAuthToken() } };
        await axios.delete(`http://localhost:5000/api/admin/messages/${id}`, config);
        fetchMessages();
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  const handleMarkAsRead = (id) => {
    // This is still a local-only function for now. 
    // To make it persistent, we would need a PUT /api/admin/messages/:id/read endpoint.
    setMessages(messages.map(msg => msg._id === id ? { ...msg, status: 'read' } : msg));
  };

  const filteredMessages = messages.filter(message => {
    if (filter === 'all') return true;
    return message.status === filter;
  });

  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : '';
  };

  return (
    <MessagesContainer>
      <Header>
        <Title>Messages</Title>
        <div><span style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>{messages.filter(m => m.status === 'unread').length} unread messages</span></div>
      </Header>
      <FilterBar>
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>All ({messages.length})</FilterButton>
        <FilterButton active={filter === 'unread'} onClick={() => setFilter('unread')}>Unread ({messages.filter(m => m.status === 'unread').length})</FilterButton>
        <FilterButton active={filter === 'read'} onClick={() => setFilter('read')}>Read ({messages.filter(m => m.status === 'read').length})</FilterButton>
      </FilterBar>
      <MessagesGrid>
        <AnimatePresence>
          {filteredMessages.length > 0 ? (
            filteredMessages.map((message, index) => (
              <MessageCard key={message._id} unread={message.status === 'unread'} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ delay: index * 0.1 }}>
                <MessageHeader>
                  <SenderInfo>
                    <SenderAvatar>{getInitials(message.name)}</SenderAvatar>
                    <SenderDetails>
                      <h4>{message.name}</h4>
                      <p>{message.email}</p>
                    </SenderDetails>
                  </SenderInfo>
                  <MessageMeta>
                    <div className="time">{new Date(message.receivedAt).toLocaleString()}</div>
                    <div className={`status ${message.status}`}>{message.status === 'unread' ? 'New' : 'Read'}</div>
                  </MessageMeta>
                </MessageHeader>
                <MessageContent>
                  <div className="subject">{message.subject}</div>
                  <div className="preview">{message.message}</div>
                </MessageContent>
                <MessageActions>
                  {message.status === 'unread' && (<ActionButton className="mark-read" onClick={() => handleMarkAsRead(message._id)}>Mark as Read</ActionButton>)}
                  <ActionButton className="reply">Reply</ActionButton>
                  <ActionButton className="delete" onClick={() => handleDelete(message._id)}>Delete</ActionButton>
                </MessageActions>
              </MessageCard>
            ))
          ) : (
            <EmptyState>
              <i className="bi bi-envelope-open"></i>
              <h3>No messages found</h3>
              <p>When users send messages through the contact form, they will appear here.</p>
            </EmptyState>
          )}
        </AnimatePresence>
      </MessagesGrid>
    </MessagesContainer>
  );
};

export default MessagesPanel;