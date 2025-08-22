import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #46620d;
    --primary-dark: #344709;
    --primary-light: #587a1a;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
    --white-color: #ffffff;
    --black-color: #000000;
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #495057;
    --gray-800: #343a40;
    --gray-900: #212529;
    
    --font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --transition: all 0.3s ease;
    
    /* Typography */
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-xxl: 3rem;
    
    /* Border radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    --border-radius-xl: 24px;
    --border-radius-circle: 50%;
    
    /* Shadows */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.15);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-family);
    font-weight: var(--font-weight-normal);
    line-height: 1.6;
    color: var(--gray-800);
    background-color: var(--white-color);
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
    color: var(--gray-900);
    margin-bottom: var(--spacing-md);
  }
  
  h1 {
    font-size: 3.2rem;
  }
  
  h2 {
    font-size: 2.5rem;
  }
  
  h3 {
    font-size: 2rem;
  }
  
  h4 {
    font-size: 1.5rem;
  }
  
  h5 {
    font-size: 1.25rem;
  }
  
  h6 {
    font-size: 1rem;
  }
  
  p {
    margin-bottom: var(--spacing-md);
  }
  
  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-dark);
    }
  }
  
  button {
    cursor: pointer;
    font-family: var(--font-family);
    font-weight: var(--font-weight-medium);
    transition: var(--transition);
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  /* Utility Classes */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-left {
    text-align: left;
  }
  
  .text-right {
    text-align: right;
  }
  
  .text-primary {
    color: var(--primary-color);
  }
  
  .bg-primary {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
  
  .bg-light {
    background-color: var(--light-color);
  }
  
  .bg-dark {
    background-color: var(--dark-color);
    color: var(--white-color);
  }
  
  .mb-1 { margin-bottom: var(--spacing-xs); }
  .mb-2 { margin-bottom: var(--spacing-sm); }
  .mb-3 { margin-bottom: var(--spacing-md); }
  .mb-4 { margin-bottom: var(--spacing-lg); }
  .mb-5 { margin-bottom: var(--spacing-xl); }
  .mb-6 { margin-bottom: var(--spacing-xxl); }
  
  .mt-1 { margin-top: var(--spacing-xs); }
  .mt-2 { margin-top: var(--spacing-sm); }
  .mt-3 { margin-top: var(--spacing-md); }
  .mt-4 { margin-top: var(--spacing-lg); }
  .mt-5 { margin-top: var(--spacing-xl); }
  .mt-6 { margin-top: var(--spacing-xxl); }
  
  .py-1 { padding-top: var(--spacing-xs); padding-bottom: var(--spacing-xs); }
  .py-2 { padding-top: var(--spacing-sm); padding-bottom: var(--spacing-sm); }
  .py-3 { padding-top: var(--spacing-md); padding-bottom: var(--spacing-md); }
  .py-4 { padding-top: var(--spacing-lg); padding-bottom: var(--spacing-lg); }
  .py-5 { padding-top: var(--spacing-xl); padding-bottom: var(--spacing-xl); }
  .py-6 { padding-top: var(--spacing-xxl); padding-bottom: var(--spacing-xxl); }
  
  .px-1 { padding-left: var(--spacing-xs); padding-right: var(--spacing-xs); }
  .px-2 { padding-left: var(--spacing-sm); padding-right: var(--spacing-sm); }
  .px-3 { padding-left: var(--spacing-md); padding-right: var(--spacing-md); }
  .px-4 { padding-left: var(--spacing-lg); padding-right: var(--spacing-lg); }
  .px-5 { padding-left: var(--spacing-xl); padding-right: var(--spacing-xl); }
  .px-6 { padding-left: var(--spacing-xxl); padding-right: var(--spacing-xxl); }
  
  .rounded-sm { border-radius: var(--border-radius-sm); }
  .rounded-md { border-radius: var(--border-radius-md); }
  .rounded-lg { border-radius: var(--border-radius-lg); }
  .rounded-xl { border-radius: var(--border-radius-xl); }
  .rounded-full { border-radius: var(--border-radius-circle); }
  
  .shadow-sm { box-shadow: var(--shadow-sm); }
  .shadow-md { box-shadow: var(--shadow-md); }
  .shadow-lg { box-shadow: var(--shadow-lg); }
  .shadow-xl { box-shadow: var(--shadow-xl); }
  
  /* Animation Classes for GSAP */
  .fade-in {
    opacity: 0;
  }
  
  .slide-up {
    opacity: 0;
    transform: translateY(50px);
  }
  
  .slide-down {
    opacity: 0;
    transform: translateY(-50px);
  }
  
  .slide-left {
    opacity: 0;
    transform: translateX(50px);
  }
  
  .slide-right {
    opacity: 0;
    transform: translateX(-50px);
  }
  
  .scale-up {
    opacity: 0;
    transform: scale(0.8);
  }
  
  /* Section styling */
  .section {
    padding: 5rem 0;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-md);
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    color: var(--gray-600);
    margin-bottom: var(--spacing-xl);
  }
  
  /* Button styling */
  .btn {
    display: inline-block;
    font-weight: var(--font-weight-semibold);
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: var(--border-radius-sm);
    transition: var(--transition);
  }
  
  .btn-primary {
    background-color: var(--primary-color);
    color: var(--white-color);
    
    &:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
  }
  
  .btn-outline {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: var(--white-color);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
  }
`;

export default GlobalStyles; 