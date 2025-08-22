import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import images
import heroImage from '../../Assets/Hero-Background.jpeg';
import buildingImage1 from '../../Assets/build-1.jpeg';
import buildingImage2 from '../../Assets/build-2.jpeg';
import buildingImage3 from '../../Assets/build-3.jpeg';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Kamal Ahmed',
      role: 'Business Owner',
      location: 'Gulshan Heights',
      image: buildingImage1,
      quote: 'Moving into Rockdale\'s Gulshan Heights was the best decision for my family. The attention to detail in design and the quality of construction is unmatched in Dhaka.',
      rating: 5
    },
    {
      name: 'Nusrat Rahman',
      role: 'Tech Executive',
      location: 'Banani Business Square',
      image: buildingImage2,
      quote: 'As a business owner, the strategic location and modern amenities of Banani Business Square have significantly enhanced our company\'s profile. Rockdale truly understands the needs of modern businesses.',
      rating: 5
    },
    {
      name: 'Dr. Aisha Khan',
      role: 'Medical Professional',
      location: 'Dhanmondi Platinum Towers',
      image: buildingImage3,
      quote: 'The sustainable features and community-focused design of our building show Rockdale\'s commitment to creating not just homes, but thriving communities.',
      rating: 5
    },
    {
      name: 'Mohammed Hassan',
      role: 'Investment Banker',
      location: 'Bashundhara Skyline',
      image: buildingImage1,
      quote: 'From the initial consultation to the final handover, Rockdale\'s professionalism and transparency made the entire process seamless. Their after-sales service is exceptional.',
      rating: 5
    },
    {
      name: 'Farida Begum',
      role: 'Retired Professor',
      location: 'Uttara Tech Park',
      image: buildingImage2,
      quote: 'Living in a Rockdale property means being part of a community that values both luxury and environmental responsibility. Their green initiatives are commendable.',
      rating: 5
    },
    {
      name: 'Rafiq Islam',
      role: 'Entrepreneur',
      location: 'Mirpur Garden Heights',
      image: buildingImage3,
      quote: 'The investment potential of Rockdale properties is outstanding. Their projects consistently appreciate in value while maintaining the highest standards of quality.',
      rating: 5
    }
  ];

  return (
    <StyledTestimonialsPage>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>Client Testimonials</h1>
          <p>Hear from our valued residents and partners</p>
        </motion.div>
      </HeroSection>

      {/* Testimonials Grid */}
      <Section>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>Success Stories</h2>
            <p>Discover what makes Rockdale the preferred choice for discerning clients across Bangladesh</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <p className="quote">{testimonial.quote}</p>
                  <div className="author-info">
                    <h3>{testimonial.name}</h3>
                    <p className="role">{testimonial.role}</p>
                    <p className="location">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="section-cta"
          >
            <Link to="/contact-us" className="cta-button">Share Your Story</Link>
          </motion.div>
        </div>
      </Section>
    </StyledTestimonialsPage>
  );
};

const StyledTestimonialsPage = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(70, 98, 13, 0.85), rgba(70, 98, 13, 0.85)), url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  .hero-content {
    max-width: 800px;
    padding: 0 20px;

    h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 1.5rem;
      opacity: 0.9;
      color: white;
    }
  }
`;

const Section = styled.section`
  padding: 80px 20px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      color: #46620d;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      color: #666;
      max-width: 700px;
      margin: 0 auto;
    }
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .testimonial-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .testimonial-image {
      width: 100%;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .testimonial-content {
      padding: 2rem;

      .rating {
        margin-bottom: 1rem;

        .star {
          color: #46620d;
          font-size: 1.2rem;
          margin-right: 2px;
        }
      }

      .quote {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #333;
        margin-bottom: 1.5rem;
        font-style: italic;
      }

      .author-info {
        h3 {
          color: #46620d;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .role {
          color: #666;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .location {
          color: #46620d;
          font-size: 0.9rem;
          font-weight: 500;
        }
      }
    }
  }

  .section-cta {
    text-align: center;
    margin-top: 3rem;

    .cta-button {
      display: inline-block;
      padding: 1rem 2.5rem;
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
  }

  @media (max-width: 768px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
    }

    .testimonial-card {
      max-width: 500px;
      margin: 0 auto;
    }
  }
`;

export default TestimonialsPage; 