
const express = require('express');
const router = express.Router();

// Import all models
const Message = require('../models/Message');
const Project = require('../models/Project');
const News = require('../models/News');
const Service = require('../models/Service');
const ContactInfo = require('../models/ContactInfo'); // <-- THIS WAS THE MISSING LINE

// @route   GET api/admin/stats
// @desc    Get dashboard statistics
router.get('/stats', async (req, res) => {
  try {
    const totalMessages = await Message.countDocuments();
    const totalProjects = await Project.countDocuments();
    const totalNews = await News.countDocuments();
    const totalServices = await Service.countDocuments();
    res.json({ totalMessages, totalProjects, totalNews, totalServices });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// --- PROJECT ROUTES ---
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) { res.status(500).send('Server Error'); }
});
router.post('/projects', async (req, res) => {
  try {
    const newProject = new Project({
      title: req.body.title || 'Untitled Project',
      description: req.body.description || 'No description provided.',
      status: req.body.status || 'upcoming',
    });
    const project = await newProject.save();
    res.json(project);
  } catch (err) { res.status(500).send('Server Error'); }
});
router.delete('/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Project removed' });
  } catch (err) { res.status(500).send('Server Error'); }
});

// --- MESSAGE ROUTES ---
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ receivedAt: -1 });
    res.json(messages);
  } catch (err) { res.status(500).send('Server Error'); }
});
router.delete('/messages/:id', async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Message removed' });
  } catch (err) { res.status(500).send('Server Error'); }
});

// --- SERVICE ROUTES ---
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) { res.status(500).send('Server Error'); }
});
router.post('/services', async (req, res) => {
  try {
    const newService = new Service({
      title: req.body.title || 'Untitled Service',
      description: req.body.description || 'No description provided.',
      status: req.body.status || 'active',
      category: req.body.category || 'General'
    });
    const service = await newService.save();
    res.json(service);
  } catch (err) { res.status(500).send('Server Error'); }
});
router.delete('/services/:id', async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Service removed' });
  } catch (err) { res.status(500).send('Server Error'); }
});

// --- NEWS & EVENTS ROUTES ---
router.get('/news', async (req, res) => {
  try {
    const newsItems = await News.find().sort({ publishDate: -1 });
    res.json(newsItems);
  } catch (err) { res.status(500).send('Server Error'); }
});
router.post('/news', async (req, res) => {
  try {
    const newNewsItem = new News({
      title: req.body.title || 'Untitled Article',
      excerpt: req.body.excerpt || 'No excerpt provided.',
      content: req.body.content || '',
      status: req.body.status || 'draft',
      type: req.body.type || 'news',
    });
    const newsItem = await newNewsItem.save();
    res.json(newsItem);
  } catch (err) { res.status(500).send('Server Error'); }
});
router.delete('/news/:id', async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ msg: 'News item removed' });
  } catch (err) { res.status(500).send('Server Error'); }
});

// --- CONTACT INFO ROUTES ---
router.get('/contact-info', async (req, res) => {
  try {
    let info = await ContactInfo.findOne();
    if (!info) {
      info = new ContactInfo({});
      await info.save();
    }
    res.json(info);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/contact-info', async (req, res) => {
  try {
    const updatedInfo = await ContactInfo.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(updatedInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;