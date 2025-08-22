import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const PendingContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PendingCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 90%;
`;

const PendingIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2.5rem;
  color: white;
`;

const PendingTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'DM Sans', sans-serif;
`;

const PendingSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const EmailInfo = styled.div`
  background-color: #e7f3ff;
  border: 1px solid #b3d9ff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const EmailText = styled.p`
  color: #0056b3;
  margin: 0;
  font-weight: 600;
`;

const ResendButton = styled.button`
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
  margin-right: 1rem;
  
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

const BackButton = styled(Link)`
  background-color: transparent;
  color: #46620d;
  border: 2px solid #46620d;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: #46620d;
    color: white;
    transform: translateY(-2px);
  }
`;

const TimerText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const PendingUsersPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Get user email from localStorage or URL params
    const email = localStorage.getItem('pendingUserEmail') || 'user@example.com';
    setUserEmail(email);

    // Start countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleResendEmail = async () => {
    setIsResending(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setCountdown(60);
    setCanResend(false);
    setIsResending(false);
  };

  const handleBackToAuth = () => {
    localStorage.removeItem('pendingUserEmail');
    navigate('/auth');
  };

  return (
    <PendingContainer>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PendingCard>
          <PendingIcon>
            <i className="bi bi-envelope-check"></i>
          </PendingIcon>
          
          <PendingTitle>Check Your Email</PendingTitle>
          <PendingSubtitle>
            We've sent a confirmation email to your address. Please check your inbox and click the verification link to activate your account.
          </PendingSubtitle>
          
          <EmailInfo>
            <EmailText>
              <i className="bi bi-envelope"></i> {userEmail}
            </EmailText>
          </EmailInfo>
          
          <div>
            <ResendButton 
              onClick={handleResendEmail}
              disabled={!canResend || isResending}
            >
              {isResending ? 'Sending...' : 'Resend Email'}
            </ResendButton>
            <BackButton to="/auth">
              Back to Login
            </BackButton>
          </div>
          
          {!canResend && (
            <TimerText>
              You can resend the email in {countdown} seconds
            </TimerText>
          )}
          
          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
              <i className="bi bi-info-circle"></i> 
              Can't find the email? Check your spam folder or try a different email address.
            </p>
          </div>
        </PendingCard>
      </motion.div>
    </PendingContainer>
  );
};

export default PendingUsersPage; 