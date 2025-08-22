




import React, { useState, useEffect } from 'react'; // Import useEffect
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios'; // Import axios

// --- STYLED COMPONENTS (UNCHANGED) ---
const NewsEventsContainer = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  font-family: 'DM Sans', sans-serif;
`;

const AddButton = styled.button`
  background: #46620d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #344709;
    transform: translateY(-2px);
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.active ? '#46620d' : '#e9ecef'};
  background: ${props => props.active ? '#46620d' : 'white'};
  color: ${props => props.active ? 'white' : '#46620d'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #46620d;
    background: ${props => props.active ? '#344709' : '#f8f9fa'};
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
`;

const NewsCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f3f4;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const NewsImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewsStatus = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  
  &.published {
    background: #27ae60;
    color: white;
  }
  
  &.draft {
    background: #f39c12;
    color: white;
  }
  
  &.scheduled {
    background: #3498db;
    color: white;
  }
`;

const NewsContent = styled.div`
  padding: 1.5rem;
`;

const NewsTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-family: 'DM Sans', sans-serif;
`;

const NewsExcerpt = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
`;

const NewsMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #7f8c8d;
`;

const NewsActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
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
  
  &.edit {
    background: linear-gradient(135deg, #46620d 0%, #344709 100%);
    color: white;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    &:hover { background: linear-gradient(135deg, #344709 0%, #2d3e0a 100%); box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3); &::before { left: 100%; } }
  }
  
  &.delete {
    background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
    color: white;
    box-shadow: 0 3px 10px rgba(220, 53, 69, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    &:hover { background: linear-gradient(135deg, #c82333 0%, #a71e2a 100%); box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3); &::before { left: 100%; } }
  }
  
  &.view {
    background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
    color: white;
    box-shadow: 0 3px 10px rgba(108, 117, 125, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    &:hover { background: linear-gradient(135deg, #5a6268 0%, #495057 100%); box-shadow: 0 5px 15px rgba(108, 117, 125, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3); &::before { left: 100%; } }
  }
  
  &.publish {
    background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
    color: white;
    box-shadow: 0 3px 10px rgba(39, 174, 96, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    &:hover { background: linear-gradient(135deg, #229954 0%, #1e8449 100%); box-shadow: 0 5px 15px rgba(39, 174, 96, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.3); &::before { left: 100%; } }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #7f8c8d;
  grid-column: 1 / -1;

  i {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #bdc3c7;
  }
  
  h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
`;

// --- MAIN COMPONENT LOGIC (UPDATED) ---
const NewsEventsPanel = () => {
  const [filter, setFilter] = useState('all');
  const [news, setNews] = useState([]); // Start with empty array

  const getAuthToken = () => localStorage.getItem('adminToken');

  const fetchNews = async () => {
    try {
      const config = { headers: { 'x-auth-token': getAuthToken() } };
      const response = await axios.get('http://localhost:5000/api/admin/news', config);
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleAddArticle = async () => {
    const newArticleData = {
      title: 'New Sample Article',
      excerpt: 'This is a test article added from the admin panel.',
      type: 'news',
      status: 'draft',
    };
    try {
      const config = { headers: { 'x-auth-token': getAuthToken() } };
      await axios.post('http://localhost:5000/api/admin/news', newArticleData, config);
      fetchNews(); // Refresh the list
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        const config = { headers: { 'x-auth-token': getAuthToken() } };
        await axios.delete(`http://localhost:5000/api/admin/news/${id}`, config);
        fetchNews(); // Refresh the list
      } catch (error) {
        console.error('Error deleting article:', error);
      }
    }
  };

  // handlePublish can be implemented later with a PUT route
  const handlePublish = (id) => {
    console.log("Publishing article ID:", id);
    // Real implementation would be:
    // await axios.put(`/api/admin/news/${id}/publish`, {}, config);
    // fetchNews();
  };

  const filteredNews = news.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'news') return item.type === 'news';
    if (filter === 'events') return item.type === 'event';
    return item.status === filter;
  });

  const getStatusCount = (status) => news.filter(item => item.status === status).length;
  const getTypeCount = (type) => news.filter(item => item.type === type).length;

  return (
    <NewsEventsContainer>
      <Header>
        <Title>News & Events</Title>
        <AddButton onClick={handleAddArticle}>
          <i className="bi bi-plus-circle"></i>
          Add New Article
        </AddButton>
      </Header>

      <FilterBar>
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>All ({news.length})</FilterButton>
        <FilterButton active={filter === 'news'} onClick={() => setFilter('news')}>News ({getTypeCount('news')})</FilterButton>
        <FilterButton active={filter === 'events'} onClick={() => setFilter('events')}>Events ({getTypeCount('event')})</FilterButton>
        <FilterButton active={filter === 'published'} onClick={() => setFilter('published')}>Published ({getStatusCount('published')})</FilterButton>
        <FilterButton active={filter === 'draft'} onClick={() => setFilter('draft')}>Draft ({getStatusCount('draft')})</FilterButton>
        <FilterButton active={filter === 'scheduled'} onClick={() => setFilter('scheduled')}>Scheduled ({getStatusCount('scheduled')})</FilterButton>
      </FilterBar>

      <NewsGrid>
        <AnimatePresence>
          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <NewsCard
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <NewsImage>
                  <i className="bi bi-newspaper"></i>
                  <NewsStatus className={item.status}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </NewsStatus>
                </NewsImage>

                <NewsContent>
                  <NewsTitle>{item.title}</NewsTitle>
                  <NewsExcerpt>{item.excerpt}</NewsExcerpt>
                  <NewsMeta>
                    <span>By {item.author}</span>
                    <span>{new Date(item.publishDate).toLocaleDateString()}</span>
                  </NewsMeta>
                  <NewsActions>
                    <ActionButton className="view"><i className="bi bi-eye"></i></ActionButton>
                    <ActionButton className="edit"><i className="bi bi-pencil"></i></ActionButton>
                    {item.status === 'draft' && (
                      <ActionButton className="publish" onClick={() => handlePublish(item._id)}>
                        <i className="bi bi-check-circle"></i>
                      </ActionButton>
                    )}
                    <ActionButton className="delete" onClick={() => handleDelete(item._id)}>
                      <i className="bi bi-trash"></i>
                    </ActionButton>
                  </NewsActions>
                </NewsContent>
              </NewsCard>
            ))
          ) : (
            <EmptyState>
              <i className="bi bi-journal-x"></i>
              <h3>No articles found</h3>
              <p>Click "Add New Article" to create your first one.</p>
            </EmptyState>
          )}
        </AnimatePresence>
      </NewsGrid>
    </NewsEventsContainer>
  );
};

export default NewsEventsPanel;