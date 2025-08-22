// import { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import styled from 'styled-components';

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

// // Styled components
// const AuthContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   padding: 80px 20px;
//   background-color: #f8f9fa;
//   background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/images/Hero-Background.jpeg');
//   background-size: cover;
//   background-position: center;
//   position: relative;
// `;

// const GlassOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(255, 255, 255, 0.03);
//   backdrop-filter: blur(3px);
// `;

// const AuthBox = styled.div`
//   background-color: white;
//   padding: 50px;
//   border-radius: 20px;
//   box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
//   width: 100%;
//   max-width: 90vw;
//   text-align: center;
//   position: relative;
//   z-index: 10;
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   animation: fadeIn 0.6s ease-out;
  
//   /* Desktop - Landscape layout */
//   @media (min-width: 1024px) {
//     max-width: 900px;
//     max-height: 85vh;
//     padding: 3rem;
//     display: flex;
//     flex-direction: column;
//     overflow-y: auto;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     max-height: 95vh;
//     padding: 2rem;
//     overflow-y: visible;
    
//     @media (min-width: 1024px) {
//       padding: 1.5rem;
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
//     padding: 30px 20px;
//     max-height: 90vh;
//     overflow-y: auto;
//   }
  
//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// const LogoContainer = styled.div`
//   margin-bottom: 25px;
  
//   img {
//     height: 70px;
//     width: auto;
//     filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     margin-bottom: 15px;
    
//     img {
//       height: 50px;
//     }
//   `}
// `;

// const Title = styled.h2`
//   color: #46620d;
//   margin-bottom: 10px;
//   font-weight: 700;
//   font-family: 'DM Sans', sans-serif;
//   font-size: 28px;
  
//   @media (min-width: 1024px) {
//     font-size: 2.25rem;
//     margin-bottom: 0.75rem;
//   }
  
//   @media (max-width: 767px) {
//     font-size: 1.5rem;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 1.5rem;
//     margin-bottom: 0.5rem;
    
//     @media (min-width: 1024px) {
//       font-size: 1.75rem;
//     }
//   `}
// `;

// const Subtitle = styled.p`
//   color: #666;
//   margin-bottom: 30px;
//   font-family: 'DM Sans', sans-serif;
//   font-size: 16px;
  
//   @media (min-width: 1024px) {
//     font-size: 1.1rem;
//     margin-bottom: 2rem;
//   }
  
//   @media (max-width: 767px) {
//     font-size: 0.9rem;
//     margin-bottom: 1.5rem;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 0.9rem;
//     margin-bottom: 1rem;
    
//     @media (min-width: 1024px) {
//       font-size: 1rem;
//       margin-bottom: 1.25rem;
//     }
//   `}
// `;

// const AuthToggle = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 35px;
//   position: relative;
//   border-radius: 12px;
//   background-color: #f5f7f9;
//   padding: 5px;
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     margin-bottom: 20px;
//     padding: 3px;
//   `}
// `;

// const ToggleButton = styled.button`
//   background: ${props => props.active ? '#46620d' : 'transparent'};
//   border: none;
//   font-size: 16px;
//   cursor: pointer;
//   color: ${props => props.active ? 'white' : '#666'};
//   padding: 12px 25px;
//   border-radius: 8px;
//   transition: all 0.3s ease;
//   font-family: 'DM Sans', sans-serif;
//   font-weight: 600;
//   width: 50%;
//   z-index: 2;
  
//   &:hover {
//     color: ${props => props.active ? 'white' : '#46620d'};
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 14px;
//     padding: 8px 20px;
    
//     @media (min-width: 1024px) {
//       font-size: 13px;
//       padding: 6px 16px;
//     }
//   `}
// `;

// const AuthForm = styled.form`
//   display: ${props => props.active ? 'block' : 'none'};
//   animation: ${props => props.active ? 'formFadeIn 0.4s ease-out' : 'none'};
  
//   @keyframes formFadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(10px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// const InputGroup = styled.div`
//   position: relative;
//   margin-bottom: 20px;
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     margin-bottom: 12px;
//   `}
// `;

// const InputIcon = styled.span`
//   position: absolute;
//   left: 15px;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #aaa;
//   font-size: 18px;
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 16px;
//     left: 12px;
//   `}
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 15px 15px 15px 45px;
//   border: 1px solid #e0e0e0;
//   border-radius: 10px;
//   font-size: 16px;
//   transition: all 0.3s ease;
//   background-color: #f9f9f9;
  
//   &:focus {
//     outline: none;
//     border-color: #46620d;
//     box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1);
//     background-color: white;
//   }
  
//   &::placeholder {
//     color: #aaa;
//   }
  
//   @media (min-width: 1024px) {
//     padding: 0.875rem 1rem 0.875rem 2.5rem;
//     font-size: 0.95rem;
//   }
  
//   @media (max-width: 767px) {
//     padding: 0.75rem 0.875rem 0.75rem 2.25rem;
//     font-size: 0.95rem;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     padding: 10px 12px 10px 35px;
//     font-size: 14px;
//     border-radius: 8px;
    
//     @media (min-width: 1024px) {
//       padding: 8px 10px 8px 30px;
//       font-size: 13px;
//     }
//   `}
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 16px;
//   margin-top: 20px;
//   background: linear-gradient(135deg, #46620d 0%, #344709 100%);
//   color: white;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: 18px;
//   font-weight: 600;
//   transition: all 0.3s ease;
//   font-family: 'DM Sans', sans-serif;
//   position: relative;
//   overflow: hidden;
//   box-shadow: 
//     0 4px 15px rgba(0, 0, 0, 0.2),
//     inset 0 1px 0 rgba(255, 255, 255, 0.3),
//     inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  
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
//       0 8px 15px rgba(0, 0, 0, 0.1),
//       inset 0 1px 0 rgba(255, 255, 255, 0.4),
//       inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    
//     &::before {
//       left: 100%;
//     }
//   }
  
//   &:active {
//     transform: translateY(0);
//   }
  
//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(255, 255, 255, 0.2);
//     transform: translateX(-100%);
//     transition: transform 0.3s ease;
//   }
  
//   @media (min-width: 1024px) {
//     padding: 0.875rem 1.75rem;
//     font-size: 0.95rem;
//   }
  
//   &:hover::after {
//     transform: translateX(0);
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     padding: 12px;
//     margin-top: 15px;
//     font-size: 16px;
//     border-radius: 8px;
    
//     @media (min-width: 1024px) {
//       padding: 10px;
//       font-size: 14px;
//     }
//   `}
// `;

// const Divider = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 25px 0;
  
//   &::before, &::after {
//     content: '';
//     flex: 1;
//     height: 1px;
//     background-color: #e0e0e0;
//   }
  
//   span {
//     padding: 0 15px;
//     color: #888;
//     font-size: 14px;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     margin: 15px 0;
    
//     span {
//       font-size: 12px;
//       padding: 0 10px;
//     }
//   `}
// `;

// const SocialButtons = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 15px;
//   margin-bottom: 20px;
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     gap: 12px;
//     margin-bottom: 15px;
//   `}
// `;

// const SocialButton = styled.button`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   border: 1px solid #e0e0e0;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   color: #555;
//   font-size: 20px;
  
//   &:hover {
//     background-color: #f5f5f5;
//     transform: translateY(-3px);
//     box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     width: 40px;
//     height: 40px;
//     font-size: 16px;
    
//     @media (min-width: 1024px) {
//       width: 35px;
//       height: 35px;
//       font-size: 14px;
//     }
//   `}
// `;

// const ForgotPassword = styled.a`
//   display: block;
//   text-align: right;
//   color: #46620d;
//   font-size: 14px;
//   margin-top: 10px;
//   text-decoration: none;
//   font-weight: 500;
  
//   &:hover {
//     text-decoration: underline;
//   }
  
//   /* Landscape mode adjustments */
//   ${props => props.isLandscape && `
//     font-size: 12px;
//     margin-top: 8px;
//   `}
// `;

// const BackButton = styled(Link)`
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   background-color: rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(10px);
//   color: white;
//   border: none;
//   border-radius: 50px;
//   width: 44px;
//   height: 44px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 20px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   z-index: 100;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
//   &:hover {
//     background-color: rgba(255, 255, 255, 0.25);
//     transform: translateY(-2px);
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
//   }
  
//   &:active {
//     transform: translateY(0);
//   }
// `;

// const AuthPage = () => {
//   const [activeForm, setActiveForm] = useState('login');
//   const navigate = useNavigate();
//   const isLandscape = useLandscapeMode();
  
//   // Form data state
//   const [loginEmailOrPhone, setLoginEmailOrPhone] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [signupName, setSignupName] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPhone, setSignupPhone] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
  
//   // Add padding to body to account for fixed navbar
//   useEffect(() => {
//     document.body.style.paddingTop = '0';
    
//     // Load Bootstrap Icons if not already loaded
//     const iconLink = document.querySelector('link[href*="bootstrap-icons"]');
//     if (!iconLink) {
//       const link = document.createElement('link');
//       link.rel = 'stylesheet';
//       link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css';
//       document.head.appendChild(link);
//     }
    
//     return () => {
//       document.body.style.paddingTop = '';
//     };
//   }, []);
  
//   const showForm = (formId) => {
//     setActiveForm(formId);
//   };
  
//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
    
//     // Check if input is email or phone number
//     const isEmail = /^\S+@\S+\.\S+$/.test(loginEmailOrPhone);
//     const isPhone = /^[\+]?[1-9][\d]{0,15}$/.test(loginEmailOrPhone.replace(/\s/g, ''));
    
//     if ((isEmail || isPhone) && loginPassword.length >= 6) {
//       // Simulate login process
//       const userData = {
//         name: 'John Doe',
//         email: isEmail ? loginEmailOrPhone : 'john.doe@example.com',
//         phone: isPhone ? loginEmailOrPhone : '+880 171 234 5678',
//         job: 'Software Engineer',
//         location: 'Dhaka, Bangladesh'
//       };
      
//       // Store user data and login status
//       localStorage.setItem('isLoggedIn', 'true');
//       localStorage.setItem('userData', JSON.stringify(userData));
      
//       // Trigger custom event for navbar update
//       window.dispatchEvent(new Event('authStateChanged'));
      
//       navigate('/'); // Redirect to home page after login
//     } else {
//       alert('Please enter a valid email or phone number and password (minimum 6 characters).');
//     }
//   };
  
//   const handleSignupSubmit = (e) => {
//     e.preventDefault();
//     if (signupName && /^\S+@\S+\.\S+$/.test(signupEmail) && signupPhone && signupPassword.length >= 6) {
//       // Store pending user email for confirmation page
//       localStorage.setItem('pendingUserEmail', signupEmail);
      
//       // Navigate to pending users page
//       navigate('/pending-users');
//     } else {
//       alert('Please fill all fields, ensure a valid email, phone number, and password is at least 6 characters.');
//     }
//   };
  
//   return (
//     <AuthContainer>
//       <BackButton to="/">
//         <i className="bi bi-arrow-left"></i>
//       </BackButton>
//       <GlassOverlay />
//       <AuthBox isLandscape={isLandscape}>
//         <LogoContainer isLandscape={isLandscape}>
//           <img src="/images/Logo.png" alt="Rockdale Logo" />
//         </LogoContainer>
//         <Title isLandscape={isLandscape}>Welcome Back</Title>
//         <Subtitle isLandscape={isLandscape}>{activeForm === 'login' ? 'Sign in to continue to Rockdale Properties' : 'Create your Rockdale Properties account'}</Subtitle>
        
//         <AuthToggle isLandscape={isLandscape}>
//           <ToggleButton 
//             active={activeForm === 'login'} 
//             onClick={() => showForm('login')}
//             isLandscape={isLandscape}
//           >
//             Sign In
//           </ToggleButton>
//           <ToggleButton 
//             active={activeForm === 'signup'} 
//             onClick={() => showForm('signup')}
//             isLandscape={isLandscape}
//           >
//             Sign Up
//           </ToggleButton>
//         </AuthToggle>
        
//         <AuthForm active={activeForm === 'login'} onSubmit={handleLoginSubmit}>
//           <InputGroup isLandscape={isLandscape}>
//             <InputIcon className="bi bi-envelope-fill" isLandscape={isLandscape} />
//             <Input 
//               type="text" 
//               placeholder="Email or Phone Number" 
//               required 
//               value={loginEmailOrPhone}
//               onChange={(e) => setLoginEmailOrPhone(e.target.value)}
//               isLandscape={isLandscape}
//             />
//           </InputGroup>
//           <InputGroup isLandscape={isLandscape}>
//             <InputIcon className="bi bi-lock" isLandscape={isLandscape} />
//             <Input 
//               type="password" 
//               placeholder="Password" 
//               required 
//               value={loginPassword}
//               onChange={(e) => setLoginPassword(e.target.value)}
//               isLandscape={isLandscape}
//             />
//           </InputGroup>
//           <ForgotPassword href="#" isLandscape={isLandscape}>Forgot password?</ForgotPassword>
//           <Button type="submit" isLandscape={isLandscape}>Sign In</Button>
          
//           <Divider isLandscape={isLandscape}>
//             <span>OR CONTINUE WITH</span>
//           </Divider>
          
//           <SocialButtons isLandscape={isLandscape}>
//             <SocialButton type="button" isLandscape={isLandscape}>
//               <i className="bi bi-google"></i>
//             </SocialButton>
//             <SocialButton type="button" isLandscape={isLandscape}>
//               <i className="bi bi-facebook"></i>
//             </SocialButton>
//             <SocialButton type="button" isLandscape={isLandscape}>
//               <i className="bi bi-apple"></i>
//             </SocialButton>
//           </SocialButtons>
//         </AuthForm>
        
//         <AuthForm active={activeForm === 'signup'} onSubmit={handleSignupSubmit}>
//           <InputGroup isLandscape={isLandscape}>
//             <InputIcon className="bi bi-person" isLandscape={isLandscape} />
//             <Input 
//               type="text" 
//               placeholder="Full Name" 
//               required 
//               value={signupName}
//               onChange={(e) => setSignupName(e.target.value)}
//               isLandscape={isLandscape}
//             />
//           </InputGroup>
//           <InputGroup isLandscape={isLandscape}>
//             <InputIcon className="bi bi-envelope" isLandscape={isLandscape} />
//             <Input 
//               type="email" 
//               placeholder="Email Address" 
//               required 
//               value={signupEmail}
//               onChange={(e) => setSignupEmail(e.target.value)}
//               isLandscape={isLandscape}
//             />
//           </InputGroup>
//           <InputGroup isLandscape={isLandscape}>
//             <InputIcon className="bi bi-telephone" isLandscape={isLandscape} />
//             <Input 
//               type="tel" 
//               placeholder="Phone Number" 
//               required 
//               value={signupPhone}
//               onChange={(e) => setSignupPhone(e.target.value)}
//               isLandscape={isLandscape}
//             />
//           </InputGroup>
//           <InputGroup isLandscape={isLandscape}>
//             <InputIcon className="bi bi-lock" isLandscape={isLandscape} />
//             <Input 
//               type="password" 
//               placeholder="Password" 
//               required 
//               value={signupPassword}
//               onChange={(e) => setSignupPassword(e.target.value)}
//               isLandscape={isLandscape}
//             />
//           </InputGroup>
//           <Button type="submit" isLandscape={isLandscape}>Create Account</Button>
          
//           <Divider isLandscape={isLandscape}>
//             <span>OR SIGN UP WITH</span>
//           </Divider>
          
//           <SocialButtons isLandscape={isLandscape}>
//             <SocialButton type="button" isLandscape={isLandscape}>
//               <i className="bi bi-google"></i>
//             </SocialButton>
//             <SocialButton type="button" isLandscape={isLandscape}>
//               <i className="bi bi-facebook"></i>
//             </SocialButton>
//             <SocialButton type="button" isLandscape={isLandscape}>
//               <i className="bi bi-apple"></i>
//             </SocialButton>
//           </SocialButtons>
//         </AuthForm>
//       </AuthBox>
//     </AuthContainer>
//   );
// };

// export default AuthPage; 



import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'; // We need this to make API calls

// Custom hook to detect landscape mode - THIS WAS THE MISSING PART
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

// Styled components
const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 80px 20px;
  background-color: #f8f9fa;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/images/Hero-Background.jpeg');
  background-size: cover;
  background-position: center;
  position: relative;
`;

const GlassOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(3px);
`;

const AuthBox = styled.div`
  background-color: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 90vw;
  text-align: center;
  position: relative;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeIn 0.6s ease-out;
  
  /* Desktop - Landscape layout */
  @media (min-width: 1024px) {
    max-width: 900px;
    max-height: 85vh;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    max-height: 95vh;
    padding: 2rem;
    overflow-y: visible;
    
    @media (min-width: 1024px) {
      padding: 1.5rem;
      max-height: 98vh;
    }
  `}
  
  /* Tablet - Medium layout */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 600px;
    max-height: 85vh;
    overflow-y: auto;
  }
  
  /* Mobile - Compact layout */
  @media (max-width: 767px) {
    padding: 30px 20px;
    max-height: 90vh;
    overflow-y: auto;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 25px;
  
  img {
    height: 70px;
    width: auto;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  }
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    margin-bottom: 15px;
    
    img {
      height: 50px;
    }
  `}
`;

const Title = styled.h2`
  color: #46620d;
  margin-bottom: 10px;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  font-size: 28px;
  
  @media (min-width: 1024px) {
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    
    @media (min-width: 1024px) {
      font-size: 1.75rem;
    }
  `}
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 30px;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  
  @media (min-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 767px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    font-size: 0.9rem;
    margin-bottom: 1rem;
    
    @media (min-width: 1024px) {
      font-size: 1rem;
      margin-bottom: 1.25rem;
    }
  `}
`;

const AuthToggle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
  position: relative;
  border-radius: 12px;
  background-color: #f5f7f9;
  padding: 5px;
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    margin-bottom: 20px;
    padding: 3px;
  `}
`;

const ToggleButton = styled.button`
  background: ${props => props.active ? '#46620d' : 'transparent'};
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${props => props.active ? 'white' : '#666'};
  padding: 12px 25px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  width: 50%;
  z-index: 2;
  
  &:hover {
    color: ${props => props.active ? 'white' : '#46620d'};
  }
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    font-size: 14px;
    padding: 8px 20px;
    
    @media (min-width: 1024px) {
      font-size: 13px;
      padding: 6px 16px;
    }
  `}
`;

const AuthForm = styled.form`
  display: ${props => props.active ? 'block' : 'none'};
  animation: ${props => props.active ? 'formFadeIn 0.4s ease-out' : 'none'};
  
  @keyframes formFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    margin-bottom: 12px;
  `}
`;

const InputIcon = styled.span`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 18px;
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    font-size: 16px;
    left: 12px;
  `}
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
  
  &:focus {
    outline: none;
    border-color: #46620d;
    box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1);
    background-color: white;
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  @media (min-width: 1024px) {
    padding: 0.875rem 1rem 0.875rem 2.5rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 767px) {
    padding: 0.75rem 0.875rem 0.75rem 2.25rem;
    font-size: 0.95rem;
  }
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    padding: 10px 12px 10px 35px;
    font-size: 14px;
    border-radius: 8px;
    
    @media (min-width: 1024px) {
      padding: 8px 10px 8px 30px;
      font-size: 13px;
    }
  `}
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  margin-top: 20px;
  background: linear-gradient(135deg, #46620d 0%, #344709 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  
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
  
  &:hover {
    background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%);
    transform: translateY(-2px);
    box-shadow: 
      0 8px 15px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  @media (min-width: 1024px) {
    padding: 0.875rem 1.75rem;
    font-size: 0.95rem;
  }
  
  &:hover::after {
    transform: translateX(0);
  }
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    padding: 12px;
    margin-top: 15px;
    font-size: 16px;
    border-radius: 8px;
    
    @media (min-width: 1024px) {
      padding: 10px;
      font-size: 14px;
    }
  `}
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #e0e0e0;
  }
  
  span {
    padding: 0 15px;
    color: #888;
    font-size: 14px;
  }
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    margin: 15px 0;
    
    span {
      font-size: 12px;
      padding: 0 10px;
    }
  `}
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    gap: 12px;
    margin-bottom: 15px;
  `}
`;

const SocialButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #555;
  font-size: 20px;
  
  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  }
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    width: 40px;
    height: 40px;
    font-size: 16px;
    
    @media (min-width: 1024px) {
      width: 35px;
      height: 35px;
      font-size: 14px;
    }
  `}
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: right;
  color: #46620d;
  font-size: 14px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
  
  /* Landscape mode adjustments */
  ${props => props.isLandscape && `
    font-size: 12px;
    margin-top: 8px;
  `}
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  border: none;
  border-radius: 50px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('login');
  const navigate = useNavigate();
  const isLandscape = useLandscapeMode();
  
  const [loginEmailOrPhone, setLoginEmailOrPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  
  useEffect(() => {
    document.body.style.paddingTop = '0';
    
    const iconLink = document.querySelector('link[href*="bootstrap-icons"]');
    if (!iconLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css';
      document.head.appendChild(link);
    }
    
    return () => {
      document.body.style.paddingTop = '';
    };
  }, []);
  
  const showForm = (formId) => {
    setActiveForm(formId);
  };
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    const userCredentials = {
      email: loginEmailOrPhone,
      password: loginPassword,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', userCredentials);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify(user));

      window.dispatchEvent(new Event('authStateChanged'));
      navigate('/');

    } catch (error) {
      console.error("--- FULL LOGIN ERROR ---", error);
      let errorMessage = "An unknown error occurred. Please try again.";
      if (error.response && error.response.data && error.response.data.msg) {
        errorMessage = error.response.data.msg;
      } else if (error.message) {
        errorMessage = error.message;
      }
      alert(errorMessage);
    }
  };
  
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPhone || signupPassword.length < 6) {
      return alert('Please fill all fields. Password must be at least 6 characters.');
    }
    const newUser = {
      name: signupName,
      email: signupEmail,
      phone: signupPhone,
      password: signupPassword,
    };
    try {
      await axios.post('http://localhost:5000/api/auth/register', newUser);
      localStorage.setItem('pendingUserEmail', signupEmail);
      navigate('/pending-users');
    } catch (error) {
      console.error("--- FULL SIGNUP ERROR ---", error);
      let errorMessage = "An unknown error occurred during signup.";
      if (error.response && error.response.data && error.response.data.msg) {
        errorMessage = error.response.data.msg;
      } else if (error.message) {
        errorMessage = error.message;
      }
      alert(errorMessage);
    }
  };
  
  return (
    <AuthContainer>
      <BackButton to="/">
        <i className="bi bi-arrow-left"></i>
      </BackButton>
      <GlassOverlay />
      <AuthBox isLandscape={isLandscape}>
        <LogoContainer isLandscape={isLandscape}>
          <img src="/images/Logo.png" alt="Rockdale Logo" />
        </LogoContainer>
        <Title isLandscape={isLandscape}>Welcome Back</Title>
        <Subtitle isLandscape={isLandscape}>{activeForm === 'login' ? 'Sign in to continue to Rockdale Properties' : 'Create your Rockdale Properties account'}</Subtitle>
        
        <AuthToggle isLandscape={isLandscape}>
          <ToggleButton 
            active={activeForm === 'login'} 
            onClick={() => showForm('login')}
            isLandscape={isLandscape}
          >
            Sign In
          </ToggleButton>
          <ToggleButton 
            active={activeForm === 'signup'} 
            onClick={() => showForm('signup')}
            isLandscape={isLandscape}
          >
            Sign Up
          </ToggleButton>
        </AuthToggle>
        
        <AuthForm active={activeForm === 'login'} onSubmit={handleLoginSubmit}>
          <InputGroup isLandscape={isLandscape}>
            <InputIcon className="bi bi-envelope-fill" isLandscape={isLandscape} />
            <Input 
              type="text" 
              placeholder="Email or Phone Number" 
              required 
              value={loginEmailOrPhone}
              onChange={(e) => setLoginEmailOrPhone(e.target.value)}
              isLandscape={isLandscape}
            />
          </InputGroup>
          <InputGroup isLandscape={isLandscape}>
            <InputIcon className="bi bi-lock" isLandscape={isLandscape} />
            <Input 
              type="password" 
              placeholder="Password" 
              required 
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              isLandscape={isLandscape}
            />
          </InputGroup>
          <ForgotPassword href="#" isLandscape={isLandscape}>Forgot password?</ForgotPassword>
          <Button type="submit" isLandscape={isLandscape}>Sign In</Button>
          
          <Divider isLandscape={isLandscape}>
            <span>OR CONTINUE WITH</span>
          </Divider>
          
          <SocialButtons isLandscape={isLandscape}>
            <SocialButton type="button" isLandscape={isLandscape}>
              <i className="bi bi-google"></i>
            </SocialButton>
            <SocialButton type="button" isLandscape={isLandscape}>
              <i className="bi bi-facebook"></i>
            </SocialButton>
            <SocialButton type="button" isLandscape={isLandscape}>
              <i className="bi bi-apple"></i>
            </SocialButton>
          </SocialButtons>
        </AuthForm>
        
        <AuthForm active={activeForm === 'signup'} onSubmit={handleSignupSubmit}>
          <InputGroup isLandscape={isLandscape}>
            <InputIcon className="bi bi-person" isLandscape={isLandscape} />
            <Input 
              type="text" 
              placeholder="Full Name" 
              required 
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              isLandscape={isLandscape}
            />
          </InputGroup>
          <InputGroup isLandscape={isLandscape}>
            <InputIcon className="bi bi-envelope" isLandscape={isLandscape} />
            <Input 
              type="email" 
              placeholder="Email Address" 
              required 
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              isLandscape={isLandscape}
            />
          </InputGroup>
          <InputGroup isLandscape={isLandscape}>
            <InputIcon className="bi bi-telephone" isLandscape={isLandscape} />
            <Input 
              type="tel" 
              placeholder="Phone Number" 
              required 
              value={signupPhone}
              onChange={(e) => setSignupPhone(e.target.value)}
              isLandscape={isLandscape}
            />
          </InputGroup>
          <InputGroup isLandscape={isLandscape}>
            <InputIcon className="bi bi-lock" isLandscape={isLandscape} />
            <Input 
              type="password" 
              placeholder="Password" 
              required 
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              isLandscape={isLandscape}
            />
          </InputGroup>
          <Button type="submit" isLandscape={isLandscape}>Create Account</Button>
          
          <Divider isLandscape={isLandscape}>
            <span>OR SIGN UP WITH</span>
          </Divider>
          
          <SocialButtons isLandscape={isLandscape}>
            <SocialButton type="button" isLandscape={isLandscape}>
              <i className="bi bi-google"></i>
            </SocialButton>
            <SocialButton type="button" isLandscape={isLandscape}>
              <i className="bi bi-facebook"></i>
            </SocialButton>
            <SocialButton type="button" isLandscape={isLandscape}>
              <i className="bi bi-apple"></i>
            </SocialButton>
          </SocialButtons>
        </AuthForm>
      </AuthBox>
    </AuthContainer>
  );
};

export default AuthPage;