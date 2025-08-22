// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// // Custom hook to detect landscape mode
// const useLandscapeMode = () => {
//   const [isLandscape, setIsLandscape] = useState(false);

//   useEffect(() => {
//     const checkOrientation = () => {
//       const isLandscapeOrientation = window.innerWidth > window.innerHeight;
//       const isDesktopLandscape = window.innerWidth >= 1024 && window.innerHeight < 768;
//       setIsLandscape(isLandscapeOrientation || isDesktopLandscape);
//     };

//     checkOrientation();
//     window.addEventListener('resize', checkOrientation);
//     window.addEventListener('orientationchange', checkOrientation);

//     return () => {
//       window.removeEventListener('resize', checkOrientation);
//       window.removeEventListener('orientationchange', checkOrientation);
//     };
//   }, []);

//   return isLandscape;
// };

// const Overlay = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(8px);
//   -webkit-backdrop-filter: blur(8px);
//   z-index: 9999;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
// `;

// const Modal = styled(motion.div)`
//   background: white;
//   border-radius: 20px;
//   padding: 2.5rem;
//   max-width: 90vw;
//   width: 100%;
//   position: relative;
//   box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  
//   /* Desktop - Landscape layout */
//   @media (min-width: 1024px) {
//     max-width: 900px;
//     max-height: 80vh;
//     padding: 2.5rem;
//     display: flex;
//     flex-direction: column;
//     overflow-y: auto;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     max-height: 95vh;
//     padding: 1.5rem;
//     overflow-y: visible;
    
//     @media (min-width: 1024px) {
//       padding: 1rem;
//       max-height: 98vh;
//     }
//   `}
  
//   /* Tablet - Medium layout */
//   @media (min-width: 768px) and (max-width: 1023px) {
//     max-width: 600px;
//     max-height: 85vh;
//     overflow-y: auto;
//   }
  
//   /* Mobile - Compact layout */
//   @media (max-width: 767px) {
//     padding: 1.5rem;
//     margin: 10px;
//     max-height: 90vh;
//     overflow-y: auto;
//   }
// `;

// const BackButton = styled.button`
//   position: absolute;
//   top: 1rem;
//   left: 1.5rem;
//   background: none;
//   border: none;
//   font-size: 1.25rem;
//   color: #666;
//   cursor: pointer;
//   padding: 0.5rem;
//   border-radius: 50%;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   justify-content: center;
  
//   &:hover {
//     background-color: #f0f0f0;
//     color: #333;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 1rem;
//     padding: 0.4rem;
//     top: 0.75rem;
//     left: 1rem;
//   `}
// `;

// const FormTitle = styled.h2`
//   font-size: 2rem;
//   font-weight: 700;
//   color: #46620d;
//   margin-bottom: 0.5rem;
//   font-family: 'DM Sans', sans-serif;
//   text-align: center;
  
//   @media (min-width: 1024px) {
//     font-size: 2rem;
//     text-align: center;
//     margin-bottom: 0.5rem;
//   }
  
//   @media (max-width: 767px) {
//     font-size: 1.5rem;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 1.5rem;
//     margin-bottom: 0.25rem;
    
//     @media (min-width: 1024px) {
//       font-size: 1.75rem;
//     }
//   `}
// `;

// const FormSubtitle = styled.p`
//   font-size: 1rem;
//   color: #666;
//   margin-bottom: 2rem;
//   text-align: center;
//   line-height: 1.6;
//   font-family: 'DM Sans', sans-serif;
  
//   @media (min-width: 1024px) {
//     text-align: center;
//     margin-bottom: 1rem;
//     font-size: 1rem;
//   }
  
//   @media (max-width: 767px) {
//     font-size: 0.9rem;
//     margin-bottom: 1.5rem;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 0.9rem;
//     margin-bottom: 1rem;
//     line-height: 1.4;
    
//     @media (min-width: 1024px) {
//       font-size: 0.95rem;
//       margin-bottom: 0.75rem;
//     }
//   `}
// `;

// const FormHeader = styled.div`
//   @media (min-width: 1024px) {
//     margin-bottom: 1.5rem;
//     text-align: center;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     margin-bottom: 1rem;
    
//     @media (min-width: 1024px) {
//       margin-bottom: 0.75rem;
//     }
//   `}
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
  
//   @media (min-width: 1024px) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 2rem;
//     align-items: start;
//   }
  
//   @media (max-width: 767px) {
//     gap: 1.25rem;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     gap: 1rem;
    
//     @media (min-width: 1024px) {
//       gap: 1.25rem;
//     }
//   `}
  
//   .form-left-column {
//     display: flex;
//     flex-direction: column;
//     gap: 1.5rem;
    
//     @media (min-width: 1024px) {
//       gap: 1rem;
//     }
    
//     @media (max-width: 767px) {
//       gap: 1.25rem;
//     }
    
//     /* Landscape mode adjustments */
//     ${props => props.isLandscape && `
//       gap: 0.75rem;
      
//       @media (min-width: 1024px) {
//         gap: 0.5rem;
//       }
//     `}
//   }
  
//   .form-right-column {
//     display: flex;
//     flex-direction: column;
//     gap: 1.5rem;
    
//     @media (min-width: 1024px) {
//       gap: 1rem;
//     }
    
//     @media (max-width: 767px) {
//       gap: 1.25rem;
//     }
    
//     /* Landscape mode adjustments */
//     ${props => props.isLandscape && `
//       gap: 0.75rem;
      
//       @media (min-width: 1024px) {
//         gap: 0.5rem;
//       }
//     `}
//   }
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
  
//   @media (min-width: 1024px) {
//     gap: 0.4rem;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     gap: 0.25rem;
    
//     @media (min-width: 1024px) {
//       gap: 0.2rem;
//     }
//   `}
// `;

// const Label = styled.label`
//   font-weight: 600;
//   color: #333;
//   font-size: 0.95rem;
//   font-family: 'DM Sans', sans-serif;
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 0.85rem;
    
//     @media (min-width: 1024px) {
//       font-size: 0.8rem;
//     }
//   `}
// `;

// const Input = styled.input`
//   padding: 0.875rem 1rem;
//   border: 2px solid #e1e5e9;
//   border-radius: 8px;
//   font-size: 1rem;
//   font-family: 'DM Sans', sans-serif;
//   transition: all 0.3s ease;
  
//   &:focus {
//     outline: none;
//     border-color: #46620d;
//     box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1);
//   }
  
//   &::placeholder {
//     color: #999;
//   }
  
//   @media (min-width: 1024px) {
//     padding: 0.7rem 0.8rem;
//     font-size: 0.9rem;
//   }
  
//   @media (max-width: 767px) {
//     padding: 0.75rem 0.875rem;
//     font-size: 0.95rem;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     padding: 0.6rem 0.75rem;
//     font-size: 0.85rem;
//     border-radius: 6px;
    
//     @media (min-width: 1024px) {
//       padding: 0.5rem 0.6rem;
//       font-size: 0.8rem;
//     }
//   `}
// `;

// const TextArea = styled.textarea`
//   padding: 0.875rem 1rem;
//   border: 2px solid #e1e5e9;
//   border-radius: 8px;
//   font-size: 1rem;
//   font-family: 'DM Sans', sans-serif;
//   resize: vertical;
//   min-height: 120px;
//   transition: all 0.3s ease;
  
//   &:focus {
//     outline: none;
//     border-color: #46620d;
//     box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1);
//   }
  
//   &::placeholder {
//     color: #999;
//   }
  
//   @media (min-width: 1024px) {
//     padding: 0.7rem 0.8rem;
//     font-size: 0.9rem;
//     min-height: 80px;
//   }
  
//   @media (max-width: 767px) {
//     padding: 0.75rem 0.875rem;
//     font-size: 0.95rem;
//     min-height: 80px;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     padding: 0.6rem 0.75rem;
//     font-size: 0.85rem;
//     border-radius: 6px;
//     min-height: 60px;
    
//     @media (min-width: 1024px) {
//       padding: 0.5rem 0.6rem;
//       font-size: 0.8rem;
//       min-height: 50px;
//     }
//   `}
// `;

// const SubmitButton = styled.button`
//   background: linear-gradient(135deg, #46620d 0%, #344709 100%);
//   color: white;
//   border: none;
//   padding: 1rem 2rem;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 1rem;
//   font-family: 'DM Sans', sans-serif;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   margin-top: 0.5rem;
//   box-shadow: 
//     0 4px 15px rgba(0, 0, 0, 0.2),
//     inset 0 1px 0 rgba(255, 255, 255, 0.3),
//     inset 0 -1px 0 rgba(0, 0, 0, 0.2);
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
  
//   &:hover {
//     background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%);
//     transform: translateY(-2px);
//     box-shadow: 
//       0 8px 20px rgba(70, 98, 13, 0.3),
//       inset 0 1px 0 rgba(255, 255, 255, 0.4),
//       inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    
//     &::before {
//       left: 100%;
//     }
//   }
  
//   &:disabled {
//     background: #ccc;
//     cursor: not-allowed;
//     transform: none;
//     box-shadow: none;
    
//     &::before {
//       display: none;
//     }
//   }
  
//   @media (min-width: 1024px) {
//     padding: 0.875rem 1.75rem;
//     font-size: 0.95rem;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     padding: 0.75rem 1.5rem;
//     font-size: 0.9rem;
//     border-radius: 6px;
//     margin-top: 0.25rem;
    
//     @media (min-width: 1024px) {
//       padding: 0.6rem 1.25rem;
//       font-size: 0.85rem;
//     }
//   `}
// `;

// const ErrorMessage = styled.div`
//   color: #dc3545;
//   font-size: 0.875rem;
//   margin-top: 0.25rem;
//   font-family: 'DM Sans', sans-serif;
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 0.75rem;
//     margin-top: 0.2rem;
//   `}
// `;

// const SuccessMessage = styled.div`
//   color: #28a745;
//   font-size: 0.875rem;
//   margin-top: 0.25rem;
//   font-family: 'DM Sans', sans-serif;
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 0.75rem;
//     margin-top: 0.2rem;
//   `}
// `;

// const PopupForm = ({ isOpen, onClose }) => {
//   const navigate = useNavigate();
//   const isLandscape = useLandscapeMode();
//   const [formData, setFormData] = useState({
//     name: '',
//     location: '',
//     phone: '',
//     message: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     // Commented out location validation
//     /*
//     if (!formData.location.trim()) {
//       newErrors.location = 'Desired location is required';
//     }
//     */

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
//       newErrors.phone = 'Please enter a valid phone number';
//     }

//     // Commented out message validation
//     /*
//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     }
//     */

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
    
//     // Simulate form submission
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setSubmitSuccess(true);
//       setFormData({ name: '', location: '', phone: '', message: '' });
      
//       // Close modal after 2 seconds
//       setTimeout(() => {
//         onClose();
//         setSubmitSuccess(false);
//       }, 2000);
      
//     } catch (error) {
//       console.error('Form submission error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   const handleBackButtonClick = () => {
//     onClose();
//     navigate('/');
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <Overlay
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={handleOverlayClick}
//         >
//           <Modal
//             initial={{ scale: 0.8, opacity: 0, y: 50 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.8, opacity: 0, y: 50 }}
//             transition={{ type: "spring", damping: 25, stiffness: 300 }}
//             isLandscape={isLandscape}
//           >
//             <BackButton onClick={handleBackButtonClick} isLandscape={isLandscape}>
//               <i className="bi bi-arrow-left"></i>
//             </BackButton>
            
//             <FormHeader isLandscape={isLandscape}>
//               <FormTitle isLandscape={isLandscape}>Get In Touch</FormTitle>
//               <FormSubtitle isLandscape={isLandscape}>
//                 Ready to start your real estate journey? Let's discuss your project.
//               </FormSubtitle>
//             </FormHeader>
            
//             <Form onSubmit={handleSubmit} isLandscape={isLandscape}>
//               <div className="form-left-column">
//                 <FormGroup isLandscape={isLandscape}>
//                   <Label htmlFor="name" isLandscape={isLandscape}>Full Name *</Label>
//                   <Input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Enter your full name"
//                     disabled={isSubmitting}
//                     isLandscape={isLandscape}
//                   />
//                   {errors.name && <ErrorMessage isLandscape={isLandscape}>{errors.name}</ErrorMessage>}
//                 </FormGroup>

//                 {/* <FormGroup isLandscape={isLandscape}>
//                   <Label htmlFor="location" isLandscape={isLandscape}>Desired Location *</Label>
//                   <Input
//                     type="text"
//                     id="location"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleInputChange}
//                     placeholder="Enter your desired location"
//                     disabled={isSubmitting}
//                     isLandscape={isLandscape}
//                   />
//                   {errors.location && <ErrorMessage isLandscape={isLandscape}>{errors.location}</ErrorMessage>}
//                 </FormGroup> */}

//                 <FormGroup isLandscape={isLandscape}>
//                   <Label htmlFor="phone" isLandscape={isLandscape}>Phone Number *</Label>
//                   <Input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     placeholder="Enter your phone number"
//                     disabled={isSubmitting}
//                     isLandscape={isLandscape}
//                   />
//                   {errors.phone && <ErrorMessage isLandscape={isLandscape}>{errors.phone}</ErrorMessage>}
//                 </FormGroup>
//               </div>

//               <div className="form-right-column">
//                 {/* <FormGroup isLandscape={isLandscape}>
//                   <Label htmlFor="message" isLandscape={isLandscape}>Message *</Label>
//                   <TextArea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder="Tell us about your project or requirements..."
//                     disabled={isSubmitting}
//                     isLandscape={isLandscape}
//                   />
//                   {errors.message && <ErrorMessage isLandscape={isLandscape}>{errors.message}</ErrorMessage>}
//                 </FormGroup> */}

//                 {submitSuccess && (
//                   <SuccessMessage isLandscape={isLandscape}>
//                     Thank you! Your message has been sent successfully.
//                   </SuccessMessage>
//                 )}

//                 <SubmitButton type="submit" disabled={isSubmitting} isLandscape={isLandscape}>
//                   {isSubmitting ? 'Sending...' : 'Send Message'}
//                 </SubmitButton>
//               </div>
//             </Form>
//           </Modal>
//         </Overlay>
//       )}
//     </AnimatePresence>
//   );
// };

// export default PopupForm; 






import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// --- STYLED COMPONENTS AND HOOK (UNCHANGED) ---
const useLandscapeMode = () => {
  const [isLandscape, setIsLandscape] = useState(false);
  useEffect(() => {
    const checkOrientation = () => {
      const isLandscapeOrientation = window.innerWidth > window.innerHeight;
      const isDesktopLandscape = window.innerWidth >= 1024 && window.innerHeight < 768;
      setIsLandscape(isLandscapeOrientation || isDesktopLandscape);
    };
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);
  return isLandscape;
};

const Overlay = styled(motion.div)`
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px); z-index: 9999; display: flex;
  align-items: center; justify-content: center; padding: 20px;
`;

const Modal = styled(motion.div)`
  background: white; border-radius: 20px; padding: 2.5rem;
  max-width: 90vw; width: 100%; position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  @media (min-width: 1024px) { max-width: 900px; max-height: 80vh; padding: 2.5rem; display: flex; flex-direction: column; overflow-y: auto; }
  ${props => props.isLandscape && `max-height: 95vh; padding: 1.5rem; overflow-y: visible; @media (min-width: 1024px) { padding: 1rem; max-height: 98vh; }`}
  @media (min-width: 768px) and (max-width: 1023px) { max-width: 600px; max-height: 85vh; overflow-y: auto; }
  @media (max-width: 767px) { padding: 1.5rem; margin: 10px; max-height: 90vh; overflow-y: auto; }
`;

const BackButton = styled.button`
  position: absolute; top: 1rem; left: 1.5rem; background: none; border: none; font-size: 1.25rem;
  color: #666; cursor: pointer; padding: 0.5rem; border-radius: 50%; transition: all 0.3s ease;
  display: flex; align-items: center; justify-content: center;
  &:hover { background-color: #f0f0f0; color: #333; }
  ${props => props.isLandscape && `font-size: 1rem; padding: 0.4rem; top: 0.75rem; left: 1rem;`}
`;

const FormTitle = styled.h2`
  font-size: 2rem; font-weight: 700; color: #46620d; margin-bottom: 0.5rem;
  font-family: 'DM Sans', sans-serif; text-align: center;
  @media (min-width: 1024px) { font-size: 2rem; text-align: center; margin-bottom: 0.5rem; }
  @media (max-width: 767px) { font-size: 1.5rem; }
  ${props => props.isLandscape && `font-size: 1.5rem; margin-bottom: 0.25rem; @media (min-width: 1024px) { font-size: 1.75rem; }`}
`;

const FormSubtitle = styled.p`
  font-size: 1rem; color: #666; margin-bottom: 2rem; text-align: center; line-height: 1.6;
  font-family: 'DM Sans', sans-serif;
  @media (min-width: 1024px) { text-align: center; margin-bottom: 1rem; font-size: 1rem; }
  @media (max-width: 767px) { font-size: 0.9rem; margin-bottom: 1.5rem; }
  ${props => props.isLandscape && `font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.4; @media (min-width: 1024px) { font-size: 0.95rem; margin-bottom: 0.75rem; }`}
`;

const FormHeader = styled.div`
  @media (min-width: 1024px) { margin-bottom: 1.5rem; text-align: center; }
  ${props => props.isLandscape && `margin-bottom: 1rem; @media (min-width: 1024px) { margin-bottom: 0.75rem; }`}
`;

const Form = styled.form`
  display: flex; flex-direction: column; gap: 1.5rem;
  @media (min-width: 1024px) { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start; }
  @media (max-width: 767px) { gap: 1.25rem; }
  ${props => props.isLandscape && `gap: 1rem; @media (min-width: 1024px) { gap: 1.25rem; }`}
  .form-left-column { display: flex; flex-direction: column; gap: 1.5rem; @media (min-width: 1024px) { gap: 1rem; } @media (max-width: 767px) { gap: 1.25rem; } ${props => props.isLandscape && `gap: 0.75rem; @media (min-width: 1024px) { gap: 0.5rem; }`}}
  .form-right-column { display: flex; flex-direction: column; gap: 1.5rem; @media (min-width: 1024px) { gap: 1rem; } @media (max-width: 767px) { gap: 1.25rem; } ${props => props.isLandscape && `gap: 0.75rem; @media (min-width: 1024px) { gap: 0.5rem; }`}}
`;

const FormGroup = styled.div`
  display: flex; flex-direction: column; gap: 0.5rem;
  @media (min-width: 1024px) { gap: 0.4rem; }
  ${props => props.isLandscape && `gap: 0.25rem; @media (min-width: 1024px) { gap: 0.2rem; }`}
`;

const Label = styled.label`
  font-weight: 600; color: #333; font-size: 0.95rem; font-family: 'DM Sans', sans-serif;
  ${props => props.isLandscape && `font-size: 0.85rem; @media (min-width: 1024px) { font-size: 0.8rem; }`}
`;

const Input = styled.input`
  padding: 0.875rem 1rem; border: 2px solid #e1e5e9; border-radius: 8px; font-size: 1rem;
  font-family: 'DM Sans', sans-serif; transition: all 0.3s ease;
  &:focus { outline: none; border-color: #46620d; box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1); }
  &::placeholder { color: #999; }
  @media (min-width: 1024px) { padding: 0.7rem 0.8rem; font-size: 0.9rem; }
  @media (max-width: 767px) { padding: 0.75rem 0.875rem; font-size: 0.95rem; }
  ${props => props.isLandscape && `padding: 0.6rem 0.75rem; font-size: 0.85rem; border-radius: 6px; @media (min-width: 1024px) { padding: 0.5rem 0.6rem; font-size: 0.8rem; }`}
`;

const TextArea = styled.textarea`
  padding: 0.875rem 1rem; border: 2px solid #e1e5e9; border-radius: 8px; font-size: 1rem;
  font-family: 'DM Sans', sans-serif; resize: vertical; min-height: 120px; transition: all 0.3s ease;
  &:focus { outline: none; border-color: #46620d; box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1); }
  &::placeholder { color: #999; }
  @media (min-width: 1024px) { padding: 0.7rem 0.8rem; font-size: 0.9rem; min-height: 80px; }
  @media (max-width: 767px) { padding: 0.75rem 0.875rem; font-size: 0.95rem; min-height: 80px; }
  ${props => props.isLandscape && `padding: 0.6rem 0.75rem; font-size: 0.85rem; border-radius: 6px; min-height: 60px; @media (min-width: 1024px) { padding: 0.5rem 0.6rem; font-size: 0.8rem; min-height: 50px; }`}
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #46620d 0%, #344709 100%); color: white; border: none; padding: 1rem 2rem;
  border-radius: 8px; font-weight: 600; font-size: 1rem; font-family: 'DM Sans', sans-serif;
  cursor: pointer; transition: all 0.3s ease; margin-top: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  position: relative; overflow: hidden;
  &::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent); transition: left 0.5s ease; }
  &:hover { background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(70, 98, 13, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3); &::before { left: 100%; } }
  &:disabled { background: #ccc; cursor: not-allowed; transform: none; box-shadow: none; &::before { display: none; } }
  @media (min-width: 1024px) { padding: 0.875rem 1.75rem; font-size: 0.95rem; }
  ${props => props.isLandscape && `padding: 0.75rem 1.5rem; font-size: 0.9rem; border-radius: 6px; margin-top: 0.25rem; @media (min-width: 1024px) { padding: 0.6rem 1.25rem; font-size: 0.85rem; }`}
`;

const ErrorMessage = styled.div`
  color: #dc3545; font-size: 0.875rem; margin-top: 0.25rem; font-family: 'DM Sans', sans-serif;
  ${props => props.isLandscape && `font-size: 0.75rem; margin-top: 0.2rem;`}
`;

const SuccessMessage = styled.div`
  color: #28a745; font-size: 0.875rem; margin-top: 0.25rem; font-family: 'DM Sans', sans-serif;
  ${props => props.isLandscape && `font-size: 0.75rem; margin-top: 0.2rem;`}
`;

const PopupForm = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const isLandscape = useLandscapeMode();
  const [formData, setFormData] = useState({ name: '', location: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = 'unset'; }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) { newErrors.name = 'Name is required'; }
    if (!formData.phone.trim()) { newErrors.phone = 'Phone number is required'; }
    else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) { newErrors.phone = 'Please enter a valid phone number'; }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) { setErrors(prev => ({ ...prev, [name]: '' })); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitSuccess(false);
    try {
      await axios.post('http://localhost:5000/api/messages', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', location: '', phone: '', message: '' });
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => { if (e.target === e.currentTarget) onClose(); };
  const handleBackButtonClick = () => { onClose(); navigate('/'); };

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleOverlayClick}>
          <Modal initial={{ scale: 0.8, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0, y: 50 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} isLandscape={isLandscape}>
            <BackButton onClick={handleBackButtonClick} isLandscape={isLandscape}><i className="bi bi-arrow-left"></i></BackButton>
            <FormHeader isLandscape={isLandscape}>
              <FormTitle isLandscape={isLandscape}>Get In Touch</FormTitle>
              <FormSubtitle isLandscape={isLandscape}>Ready to start your real estate journey? Let's discuss your project.</FormSubtitle>
            </FormHeader>
            <Form onSubmit={handleSubmit} isLandscape={isLandscape}>
              <div className="form-left-column">
                <FormGroup isLandscape={isLandscape}>
                  <Label htmlFor="name" isLandscape={isLandscape}>Full Name *</Label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" disabled={isSubmitting} isLandscape={isLandscape} />
                  {errors.name && <ErrorMessage isLandscape={isLandscape}>{errors.name}</ErrorMessage>}
                </FormGroup>

                {/* --- THIS FIELD IS NOW UNCOMMENTED --- */}
                <FormGroup isLandscape={isLandscape}>
                  <Label htmlFor="location" isLandscape={isLandscape}>Desired Location</Label>
                  <Input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} placeholder="e.g., Dhaka, Bangladesh" disabled={isSubmitting} isLandscape={isLandscape} />
                </FormGroup>

                <FormGroup isLandscape={isLandscape}>
                  <Label htmlFor="phone" isLandscape={isLandscape}>Phone Number *</Label>
                  <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" disabled={isSubmitting} isLandscape={isLandscape} />
                  {errors.phone && <ErrorMessage isLandscape={isLandscape}>{errors.phone}</ErrorMessage>}
                </FormGroup>
              </div>

              <div className="form-right-column">
                {/* --- THIS FIELD IS NOW UNCOMMENTED --- */}
                <FormGroup isLandscape={isLandscape}>
                  <Label htmlFor="message" isLandscape={isLandscape}>Message</Label>
                  <TextArea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your project or requirements..." disabled={isSubmitting} isLandscape={isLandscape} />
                </FormGroup>

                {submitSuccess && (<SuccessMessage isLandscape={isLandscape}>Thank you! Your message has been sent successfully.</SuccessMessage>)}
                <SubmitButton type="submit" disabled={isSubmitting} isLandscape={isLandscape}>{isSubmitting ? 'Sending...' : 'Send Message'}</SubmitButton>
              </div>
            </Form>
          </Modal>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;