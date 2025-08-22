import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

// Import images from assets
import heroImage from '../../Assets/Hero-Background.jpeg';
import buildingImage1 from '../../Assets/build-1.jpeg';
import buildingImage2 from '../../Assets/build-2.jpeg';
import buildingImage3 from '../../Assets/build-3.jpeg';
import buildingImage4 from '../../Assets/build-4.jpeg';

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when URL has a hash
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when no hash is present
      window.scrollTo(0, 0);
    }
  }, [location]);

  const teamMembers = [
    {
      name: 'Mohammed Rahman',
      role: 'Chief Executive Officer',
      image: buildingImage1,
      description: 'Leading Rockdale\'s vision of transforming Bangladesh\'s real estate landscape.'
    },
    {
      name: 'Fatima Ahmed',
      role: 'Chief Financial Officer',
      image: buildingImage2,
      description: 'Ensuring sustainable growth and financial excellence in all our ventures.'
    },
    {
      name: 'Arif Khan',
      role: 'Lead Architect',
      image: buildingImage3,
      description: 'Creating iconic designs that define modern Bangladesh architecture.'
    },
    {
      name: 'Nadia Islam',
      role: 'Director of Operations',
      image: buildingImage4,
      description: 'Orchestrating seamless project execution and delivery.'
    }
  ];

  const coreValues = [
    {
      title: 'Excellence',
      description: 'Pursuing the highest standards in every project we undertake.'
    },
    {
      title: 'Innovation',
      description: 'Pioneering new approaches in sustainable urban development.'
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparent and ethical practices.'
    },
    {
      title: 'Sustainability',
      description: 'Creating environmentally conscious living spaces.'
    },
    {
      title: 'Community',
      description: 'Fostering vibrant communities that thrive together.'
    },
    {
      title: 'Legacy',
      description: 'Building landmarks that stand the test of time.'
    }
  ];

  const timeline = [
    { year: 2008, event: 'Founded in Dhaka' },
    { year: 2012, event: 'Completed first luxury residential project' },
    { year: 2015, event: 'Expanded to commercial real estate' },
    { year: 2017, event: 'Launched sustainable building initiative' },
    { year: 2020, event: 'Achieved 1 million sqft development milestone' },
    { year: 2022, event: 'Pioneered smart home technology integration' }
  ];

  return (
    <StyledAboutPage>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <nav className="breadcrumb-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>About</li>
            </ul>
          </nav>
          <h1>Building Bangladesh's Future</h1>
          <p>Creating exceptional spaces where communities thrive</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/projects" className="hero-cta">View Our Projects</Link>
          </motion.div>
        </motion.div>
      </HeroSection>

      {/* Our Journey & Vision Section */}
      <Section id="our-story">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-content story-content"
        >
          <h2>Our Journey & Vision</h2>
          
          {/* Our Story */}
          <div className="story-section">
            <h3>Our Story</h3>
          <div className="story-grid">
            <div className="story-text">
              <p className="lead-text">
                  We Rockdale Properties Ltd. started our journey in 2021 as apartment land share businesses. Our first project was in 5 katha that architectural designed was G+9 with 18 units residential building. This project has given us top notch confident about constructions, commitment and quality assure which we are committed to our clients.
                </p>
                <p>
                  And our clients inspired us to go for another projects to see our dedications for the commitment and Alhamdulillah from then we are taking projects one after another and all of them are ahead from our given handover time.
              </p>
              <p>
                  So far we are working with 110 flats in various locations. Some are 48,600 sft, 45,000 sft, 20,300 sft and 9,000 sft.
                </p>
              </div>
              <div className="story-stats">
                <div className="stat-item">
                  <span className="stat-number">110+</span>
                  <span className="stat-label">Flats Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">123,900</span>
                  <span className="stat-label">Total Sq Ft</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">On-Time Delivery</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2021</span>
                  <span className="stat-label">Founded</span>
                </div>
              </div>
            </div>
          </div>

          {/* Who We Are */}
          <div className="who-we-are-section">
            <h3>Who We Are</h3>
            <div className="who-we-are-content">
              <p>
                Among thousands of developer in Dhaka city, we see ourselves in different platform through our commitment and quality of services. Our clients exclusively push us to move forward.
              </p>
              <p>
                Our promise is to Life Style Matching Premises, unparalleled quality of services that drive to our success.
              </p>
            </div>
              </div>

          {/* Vision & Mission */}
          <div className="vision-mission-section">
            <div className="vision-mission-grid">
              <div className="vision-card">
                <h3>Our Vision</h3>
                <p>To be the most trusted and admired real estate company known for integrity, profession and client satisfaction.</p>
              </div>
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>To accomplishment each square feet that outreach the expectations of our clients.</p>
              </div>
            </div>
          </div>

          {/* Featured Project */}
          <div className="featured-project-section">
            <h3>Featured Project</h3>
            <div className="featured-project-content">
              <div className="project-info">
                <h4>First Milestone Project</h4>
                <p>Our inaugural project was a landmark achievement - a G+9 architectural design with 18 residential units on 5 katha land. This project established our foundation of excellence in construction, commitment, and quality assurance that we maintain to this day.</p>
                <div className="project-stats">
                  <div className="project-stat">
                    <span className="stat-label">Units</span>
                    <span className="stat-value">18</span>
                  </div>
                  <div className="project-stat">
                    <span className="stat-label">Floors</span>
                    <span className="stat-value">G+9</span>
                  </div>
                  <div className="project-stat">
                    <span className="stat-label">Land Area</span>
                    <span className="stat-value">5 Katha</span>
                  </div>
                </div>
              </div>
              <div className="project-gallery">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="gallery-grid"
            >
              <div className="gallery-item">
                    <img src={buildingImage1} alt="Rockdale First Project" />
              </div>
              <div className="gallery-item">
                    <img src={buildingImage2} alt="Rockdale Development" />
              </div>
              <div className="gallery-item">
                    <img src={buildingImage3} alt="Rockdale Construction" />
              </div>
              <div className="gallery-item">
                    <img src={buildingImage4} alt="Rockdale Quality" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Core Values Section */}
      <Section id="core-values" className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="value-card"
            >
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="section-cta"
        >
          <Link to="/projects" className="cta-button">View Our Projects</Link>
        </motion.div>
      </Section>

      {/* Leadership Team Section */}
      {/* <Section id="leadership" className="team-section">
        <h2>Our Leadership Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="team-card"
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="section-cta"
        >
          <Link to="/contact-us" className="cta-button">Connect With Us</Link>
        </motion.div>
      </Section> */}

      {/* Timeline Section */}
      {/* <Section id="journey" className="timeline-section">
        <h2>Our Journey</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="year">{item.year}</div>
              <div className="event">{item.event}</div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="section-cta"
        >
          <Link to="/news-events" className="cta-button">Latest Updates</Link>
        </motion.div>
      </Section> */}

      {/* CSR Section */}
      {/* <Section id="csr" className="csr-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Corporate Social Responsibility</h2>
          <p>At Rockdale, we believe in giving back to the community. Our CSR initiatives focus on sustainable development, education, and environmental conservation across Bangladesh.</p>
          <Link to="/contact-us" className="cta-button">Get Involved</Link>
        </motion.div>
      </Section> */}
    </StyledAboutPage>
  );
};

const StyledAboutPage = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  background-color: #46620d;
  color: white;
  padding: 8rem 0 5rem;
  position: relative;
  overflow: hidden;
  margin-top: 60px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('/build-4.jpeg') no-repeat center center;
    background-size: cover;
    opacity: 0.15;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(70, 98, 13, 0.7) 0%, rgba(70, 98, 13, 0.6) 100%);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 7rem 0 4rem;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;

    .breadcrumb-nav {
      margin-bottom: 1.5rem;
      
      ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        justify-content: center;
        
        li {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          
          &:not(:last-child)::after {
            content: '/';
            margin: 0 0.5rem;
          }
          
          a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            transition: color 0.3s ease;
            
            &:hover {
              color: white;
            }
          }
        }
      }
    }

    h1 {
      font-family: 'DM Sans', sans-serif;
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
      color: #333;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    p {
      font-size: 1.2rem;
      max-width: 550px;
      margin: 0 auto 2rem;
      opacity: 0.9;
      line-height: 1.6;
      color: white;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
  }

  .hero-cta {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: #46620d;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      background-color: #344709;
    }
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  scroll-margin-top: 100px; // Add space for fixed navbar

  h2 {
    text-align: center;
    color: #46620d;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  &.values-section {
    background-color: #f9f9f9;

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 2rem 0;
    }

    .value-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;

      h3 {
        color: #46620d;
        margin-bottom: 1rem;
      }
    }
  }

  &.team-section {
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 3rem;
      padding: 2rem 0;
    }

    .team-card {
      text-align: center;

      .member-image {
        width: 200px;
        height: 200px;
        margin: 0 auto 1.5rem;
        border-radius: 50%;
        overflow: hidden;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      h3 {
        color: #46620d;
        margin-bottom: 0.5rem;
      }

      h4 {
        color: #666;
        margin-bottom: 1rem;
      }
    }
  }

  &.timeline-section {
    background-color: #f9f9f9;

    .timeline {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      padding: 2rem 0;

      &::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background-color: #46620d;
      }
    }

    .timeline-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      position: relative;

      .year {
        background-color: #46620d;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        margin-right: 1rem;
      }

      .event {
        background-color: white;
        padding: 1rem;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        flex: 1;
        max-width: 300px;
      }
    }
  }

  &.csr-section {
    text-align: center;
    background: linear-gradient(rgba(70, 98, 13, 0.9), rgba(70, 98, 13, 0.9));
    color: white;
    margin: 0;
    max-width: none;

    h2 {
      color: white;
    }

    p {
      max-width: 800px;
      margin: 0 auto 2rem;
      font-size: 1.2rem;
      line-height: 1.6;
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: white;
      color: #46620d;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }

  .section-cta {
    text-align: center;
    margin-top: 3rem;
  }

  .cta-button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #46620d;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-3px);
      background-color: #3a5109;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
  }

  .story-content {
    .story-section {
      margin-bottom: 4rem;

      h3 {
        color: #46620d;
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
      }
    }

    .story-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      margin-bottom: 4rem;

      @media (max-width: 992px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    .story-text {
      .lead-text {
        font-size: 1.4rem;
        color: #46620d;
        font-weight: 500;
        margin-bottom: 2rem;
        line-height: 1.6;
      }

      p {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 1.5rem;
        color: #333;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .story-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      .stat-item {
        background: rgba(70, 98, 13, 0.05);
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: #46620d;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          color: #333;
          font-weight: 500;
        }
      }
    }

    .who-we-are-section {
      margin-bottom: 4rem;
      padding: 3rem;
      background: rgba(70, 98, 13, 0.03);
      border-radius: 15px;

      h3 {
        color: #46620d;
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
      }

      .who-we-are-content {
        p {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: #333;
          text-align: center;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .vision-mission-section {
      margin-bottom: 4rem;

      .vision-mission-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }

      .vision-card, .mission-card {
        background: white;
        padding: 3rem;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        text-align: center;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        h3 {
          color: #46620d;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #333;
        }
      }

      .vision-card {
        border-left: 5px solid #46620d;
      }

      .mission-card {
        border-left: 5px solid #28a745;
      }
    }

    .featured-project-section {
      margin-bottom: 4rem;

      h3 {
        color: #46620d;
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: center;
      }

      .featured-project-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;

        @media (max-width: 992px) {
          grid-template-columns: 1fr;
          gap: 3rem;
        }
      }

      .project-info {
        h4 {
          color: #46620d;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          color: #333;
        }

        .project-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;

          .project-stat {
            background: rgba(70, 98, 13, 0.05);
            padding: 1.5rem;
            border-radius: 10px;
            text-align: center;

            .stat-label {
              display: block;
              font-size: 0.9rem;
              color: #666;
              margin-bottom: 0.5rem;
            }

            .stat-value {
              display: block;
              font-size: 1.5rem;
              font-weight: 700;
              color: #46620d;
            }
          }
        }
      }

      .project-gallery {
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;

          .gallery-item {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

            img {
              width: 100%;
              height: 150px;
              object-fit: cover;
              transition: transform 0.3s ease;

              &:hover {
                transform: scale(1.05);
              }
            }
          }
        }
      }
    }

    .story-gallery {
      margin-top: 4rem;

      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;

        @media (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }

        .gallery-item {
          aspect-ratio: 3/4;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;

            &:hover {
              transform: scale(1.05);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 60px 15px;

    h2 {
      font-size: 2rem;
    }

    .hero-content h1 {
      font-size: 2.5rem;
    }

    .timeline::before {
      left: 20px;
    }

    .timeline-item {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 40px;

      .year {
        margin-bottom: 0.5rem;
      }

      .event {
        width: 100%;
      }
    }
  }
`;

export default AboutPage; 