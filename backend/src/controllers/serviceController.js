const { v4: uuidv4 } = require('uuid');
const engagementRequests = [];

// Get all services
const getServices = (req, res) => {
  const services = require('../data/services.json');
  res.json(services);
};

// Get all engagement models
const getEngagementModels = (req, res) => {
  const models = require('../data/engagement-models.json');
  res.json(models);
};

// Get single engagement model
const getEngagementModel = (req, res) => {
  const models = require('../data/engagement-models.json');
  const { id } = req.params;
  const model = models.find(m => m.id === parseInt(id));
  
  if (!model) {
    return res.status(404).json({ error: 'Engagement model not found' });
  }
  
  res.json(model);
};

// Get all AI tools
const getAITools = (req, res) => {
  const tools = require('../data/ai-tools.json');
  res.json(tools);
};

// Get single AI tool
const getAITool = (req, res) => {
  const tools = require('../data/ai-tools.json');
  const { id } = req.params;
  const tool = tools.find(t => t.id === parseInt(id));
  
  if (!tool) {
    return res.status(404).json({ error: 'AI tool not found' });
  }
  
  res.json(tool);
};

// Get all blog posts
const getBlogPosts = (req, res) => {
  const posts = require('../data/blog-posts.json');
  const featured = req.query.featured === 'true';
  
  if (featured) {
    return res.json(posts.filter(p => p.featured));
  }
  
  res.json(posts);
};

// Get single blog post
const getBlogPost = (req, res) => {
  const posts = require('../data/blog-posts.json');
  const { slug } = req.params;
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return res.status(404).json({ error: 'Blog post not found' });
  }
  
  res.json(post);
};

// Submit engagement request
const submitEngagementRequest = (req, res) => {
  const {
    contact_name,
    email,
    phone,
    company,
    country,
    industry,
    matter_type,
    mandate_summary,
    deadline,
    exposure_band,
    existing_advisers,
    meeting_mode,
    privacy_consent,
    conflict_check
  } = req.body;
  
  // Validation
  if (!contact_name || !email || !company || !mandate_summary || !privacy_consent || !conflict_check) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const request = {
    id: uuidv4(),
    contact_name,
    email,
    phone,
    company,
    country,
    industry,
    matter_type,
    mandate_summary,
    deadline,
    exposure_band,
    existing_advisers,
    meeting_mode,
    privacy_consent,
    conflict_check,
    submitted_at: new Date().toISOString(),
    status: 'pending',
    lead_score: calculateLeadScore({
      industry,
      matter_type,
      exposure_band,
      mandate_summary
    })
  };
  
  engagementRequests.push(request);
  
  res.status(201).json({
    success: true,
    message: 'Engagement request submitted successfully',
    request_id: request.id,
    expected_response: 'Our team will review your request and contact you within 2-3 business days.'
  });
};

// Helper function to calculate lead score
const calculateLeadScore = (data) => {
  let score = 50; // Base score
  
  // Matter type scoring
  if (data.matter_type === 'Tax' || data.matter_type === 'GST') {
    score += 15;
  } else if (data.matter_type === 'Entry') {
    score += 20;
  }
  
  // Exposure band scoring
  if (data.exposure_band === 'high' || data.exposure_band === 'critical') {
    score += 20;
  } else if (data.exposure_band === 'medium') {
    score += 10;
  }
  
  // Mandate length scoring
  if (data.mandate_summary && data.mandate_summary.length > 500) {
    score += 15;
  }
  
  return Math.min(score, 100);
};

// Get engagement request status
const getEngagementStatus = (req, res) => {
  const { request_id } = req.params;
  const request = engagementRequests.find(r => r.id === request_id);
  
  if (!request) {
    return res.status(404).json({ error: 'Request not found' });
  }
  
  res.json({
    request_id: request.id,
    status: request.status,
    lead_score: request.lead_score,
    submitted_at: request.submitted_at,
    next_steps: request.lead_score >= 80 
      ? 'Partner callback or specialist review queue'
      : request.lead_score >= 60
      ? 'Clarification mail + analyst screening'
      : 'Redirect to Contact or Knowledge Hub'
  });
};

module.exports = {
  getServices,
  getEngagementModels,
  getEngagementModel,
  getAITools,
  getAITool,
  getBlogPosts,
  getBlogPost,
  submitEngagementRequest,
  getEngagementStatus
};
