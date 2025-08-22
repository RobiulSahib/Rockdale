import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import GlobalStyles
import GlobalStyles from './styles/GlobalStyles';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import sections for home page
import Hero from './sections/Hero';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import FeaturedProject from './sections/FeaturedProject';
import Contact from './sections/Contact';
import Faqs from './sections/Faqs';

// Import separate pages
import NewsEventsPage from './pages/NewsEventsPage';
import ContactUsPage from './pages/ContactUsPage';
import AuthPage from './pages/AuthPage';
import AboutPage from './pages/AboutPage';
import LifeAtRockdalePage from './pages/LifeAtRockdalePage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ProfilePage from './pages/ProfilePage';
import PendingUsersPage from './pages/PendingUsersPage';
import AdminPage from './pages/AdminPage';
import TestRoute from './components/TestRoute';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Styled components
const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

// Home page component that contains all sections
const HomePage = () => (
  <>
    <Hero />
    <FeaturedProject />
    {/* <Services /> */}
    <Testimonials />
    <Contact />
    <Faqs />
  </>
);

// Layout component that conditionally renders Navbar and Footer
const AppLayout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';
  const isPendingUsersPage = location.pathname === '/pending-users';
  const isAdminPage = location.pathname === '/admin';
  
  return (
    <>
      {!isAuthPage && !isPendingUsersPage && !isAdminPage && <Navbar />}
      <main>
        {children}
      </main>
      {!isAuthPage && !isPendingUsersPage && !isAdminPage && <Footer />}
    </>
  );
};

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Initialize Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <MainContainer ref={appRef}>
          <Routes>
          <Route path="/" element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          } />
          <Route path="/news-events" element={
            <AppLayout>
              <NewsEventsPage />
            </AppLayout>
          } />
          <Route path="/contact-us" element={
            <AppLayout>
              <ContactUsPage />
            </AppLayout>
          } />
          <Route path="/about" element={
            <AppLayout>
              <AboutPage />
            </AppLayout>
          } />
          <Route path="/about/testimonials" element={
            <AppLayout>
              <TestimonialsPage />
            </AppLayout>
          } />
          <Route path="/life-at-rockdale" element={
            <AppLayout>
              <LifeAtRockdalePage />
            </AppLayout>
          } />
          <Route path="/projects" element={
            <AppLayout>
              <ProjectsPage />
            </AppLayout>
          } />
          <Route path="/services" element={
            <AppLayout>
              <ServicesPage />
            </AppLayout>
          } />
          <Route path="/services/:serviceId" element={
            <AppLayout>
              <ServiceDetailPage />
            </AppLayout>
          } />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/pending-users" element={<PendingUsersPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/test" element={<TestRoute />} />
          <Route path="*" element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          } />
          </Routes>
      </MainContainer>
    </Router>
  );
}

export default App;
