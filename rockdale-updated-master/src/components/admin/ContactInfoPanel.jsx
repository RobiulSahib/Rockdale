



import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

// ... (All your styled components are here, unchanged)
const ContactInfoContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-family: 'DM Sans', sans-serif;
`;

const Subtitle = styled.p`
  color: #7f8c8d;
  font-size: 1.1rem;
  margin: 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f3f4;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-family: 'DM Sans', sans-serif;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-family: 'DM Sans', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: #46620d;
    box-shadow: 0 0 0 3px rgba(70, 98, 13, 0.1);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #46620d 0%, #344709 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'DM Sans', sans-serif;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
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
  
  &:hover {
    background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%);
    transform: translateY(-2px);
    box-shadow: 
      0 8px 20px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    
    &::before {
      display: none;
    }
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f3f4;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-family: 'DM Sans', sans-serif;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  i {
    color: #46620d;
    font-size: 1.1rem;
    width: 20px;
  }
  
  .label {
    font-weight: 600;
    color: #2c3e50;
    font-size: 0.9rem;
  }
  
  .value {
    color: #7f8c8d;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #46620d;
  background: white;
  color: #46620d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #46620d;
    color: white;
    transform: translateY(-2px);
  }
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  
  .status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.active ? '#27ae60' : '#e74c3c'};
  }
  
  .text {
    font-size: 0.9rem;
    color: ${props => props.active ? '#27ae60' : '#e74c3c'};
    font-weight: 600;
  }
`;
// --- MAIN COMPONENT LOGIC ---
const ContactInfoPanel = () => {
  const [contactInfo, setContactInfo] = useState({}); // This is the "empty cup"
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const getAuthToken = () => localStorage.getItem('adminToken');

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const config = { headers: { 'x-auth-token': getAuthToken() } };
        // This is "pouring the coffee" into the empty cup
        const response = await axios.get('http://localhost:5000/api/admin/contact-info', config);
        setContactInfo(response.data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };
    fetchContactInfo();
  }, []); // The empty array [] means this runs once when the page loads

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const config = { headers: { 'x-auth-token': getAuthToken() } };
      // This sends the updated data to the backend to be saved
      const response = await axios.put('http://localhost:5000/api/admin/contact-info', contactInfo, config);
      setContactInfo(response.data); // Update state with the newly saved data
      alert('Contact information updated successfully!');
    } catch (error) {
      console.error('Error saving contact info:', error);
      alert('Failed to update contact information.');
    } finally {
      setIsSaving(false);
      setIsEditing(false);
    }
  };

  const handleInputChange = (field, value) => {
    setContactInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <ContactInfoContainer>
      <Header>
        <Title>Contact Information</Title>
        <Subtitle>Manage your company's contact details and social media links</Subtitle>
      </Header>

      <ContentGrid>
        <ContactForm>
          <FormSection>
            <SectionTitle>Company Information</SectionTitle>
            <FormGrid>
              <FormGroup>
                <Label>Company Name</Label>
                <Input type="text" value={contactInfo.companyName || ''} onChange={(e) => handleInputChange('companyName', e.target.value)} disabled={!isEditing} />
              </FormGroup>
              <FormGroup>
                <Label>Website</Label>
                <Input type="text" value={contactInfo.website || ''} onChange={(e) => handleInputChange('website', e.target.value)} disabled={!isEditing} />
              </FormGroup>
            </FormGrid>
            <FormGroup>
              <Label>Company Description</Label>
              <TextArea value={contactInfo.description || ''} onChange={(e) => handleInputChange('description', e.target.value)} disabled={!isEditing} />
            </FormGroup>
          </FormSection>

          <FormSection>
            <SectionTitle>Contact Details</SectionTitle>
            <FormGrid>
              <FormGroup>
                <Label>Phone Number</Label>
                <Input type="tel" value={contactInfo.phone || ''} onChange={(e) => handleInputChange('phone', e.target.value)} disabled={!isEditing} />
              </FormGroup>
              <FormGroup>
                <Label>Email Address</Label>
                <Input type="email" value={contactInfo.email || ''} onChange={(e) => handleInputChange('email', e.target.value)} disabled={!isEditing} />
              </FormGroup>
            </FormGrid>
            <FormGroup>
              <Label>Address</Label>
              <Input type="text" value={contactInfo.address || ''} onChange={(e) => handleInputChange('address', e.target.value)} disabled={!isEditing} />
            </FormGroup>
            <FormGroup>
              <Label>Working Hours</Label>
              <Input type="text" value={contactInfo.workingHours || ''} onChange={(e) => handleInputChange('workingHours', e.target.value)} disabled={!isEditing} />
            </FormGroup>
          </FormSection>

          <FormSection>
            <SectionTitle>Social Media Links</SectionTitle>
            <FormGrid>
              <FormGroup>
                <Label>Facebook</Label>
                <Input type="url" value={contactInfo.facebook || ''} onChange={(e) => handleInputChange('facebook', e.target.value)} disabled={!isEditing} />
              </FormGroup>
              <FormGroup>
                <Label>Twitter</Label>
                <Input type="url" value={contactInfo.twitter || ''} onChange={(e) => handleInputChange('twitter', e.target.value)} disabled={!isEditing} />
              </FormGroup>
              <FormGroup>
                <Label>Instagram</Label>
                <Input type="url" value={contactInfo.instagram || ''} onChange={(e) => handleInputChange('instagram', e.target.value)} disabled={!isEditing} />
              </FormGroup>
              <FormGroup>
                <Label>LinkedIn</Label>
                <Input type="url" value={contactInfo.linkedin || ''} onChange={(e) => handleInputChange('linkedin', e.target.value)} disabled={!isEditing} />
              </FormGroup>
            </FormGrid>
          </FormSection>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            {!isEditing ? (
              <Button onClick={() => setIsEditing(true)}>
                <i className="bi bi-pencil"></i> Edit Information
              </Button>
            ) : (
              <>
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button onClick={() => setIsEditing(false)} style={{ backgroundColor: '#6c757d' }}>
                  Cancel
                </Button>
              </>
            )}
          </div>
        </ContactForm>

        <Sidebar>
          <InfoCard>
            <CardTitle>Current Information</CardTitle>
            <InfoItem>
              <i className="bi bi-building"></i>
              <div>
                <div className="label">Company</div>
                <div className="value">{contactInfo.companyName}</div>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="bi bi-geo-alt"></i>
              <div>
                <div className="label">Address</div>
                <div className="value">{contactInfo.address}</div>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="bi bi-telephone"></i>
              <div>
                <div className="label">Phone</div>
                <div className="value">{contactInfo.phone}</div>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="bi bi-envelope"></i>
              <div>
                <div className="label">Email</div>
                <div className="value">{contactInfo.email}</div>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="bi bi-clock"></i>
              <div>
                <div className="label">Hours</div>
                <div className="value">{contactInfo.workingHours}</div>
              </div>
            </InfoItem>
          </InfoCard>

          <InfoCard>
            <CardTitle>Social Media</CardTitle>
            <SocialLinks>
              <SocialButton><i className="bi bi-facebook"></i></SocialButton>
              <SocialButton><i className="bi bi-twitter-x"></i></SocialButton>
              <SocialButton><i className="bi bi-instagram"></i></SocialButton>
              <SocialButton><i className="bi bi-linkedin"></i></SocialButton>
            </SocialLinks>
            <StatusIndicator active={true}>
              <div className="status"></div>
              <div className="text">All links active</div>
            </StatusIndicator>
          </InfoCard>
        </Sidebar>
      </ContentGrid>
    </ContactInfoContainer>
  );
};

export default ContactInfoPanel;