import React from 'react';
import styled from 'styled-components';

const TestContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
`;

const TestRoute = () => {
  return (
    <TestContainer>
      <div>
        <h1>Test Route Working!</h1>
        <p>If you can see this, routing is working correctly.</p>
        <p>Current URL: {window.location.href}</p>
      </div>
    </TestContainer>
  );
};

export default TestRoute; 