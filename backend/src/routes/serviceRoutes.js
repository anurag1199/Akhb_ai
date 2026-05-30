const express = require('express');
const router = express.Router();
const {
  getServices,
  getEngagementModels,
  getEngagementModel,
  getAITools,
  getAITool,
  getBlogPosts,
  getBlogPost,
  submitEngagementRequest,
  getEngagementStatus
} = require('../controllers/serviceController');

// Services routes
router.get('/services', getServices);

// Engagement models routes
router.get('/engagement-models', getEngagementModels);
router.get('/engagement-models/:id', getEngagementModel);

// AI Tools routes
router.get('/ai-tools', getAITools);
router.get('/ai-tools/:id', getAITool);

// Blog routes
router.get('/blog', getBlogPosts);
router.get('/blog/:slug', getBlogPost);

// Engagement request routes
router.post('/engagement/request', submitEngagementRequest);
router.get('/engagement/status/:request_id', getEngagementStatus);

module.exports = router;
