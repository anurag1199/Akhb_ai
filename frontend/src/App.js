import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentPage === 'services') {
      fetchServices();
    }
  }, [currentPage]);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="main-content">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'services' && <ServicesPage services={services} loading={loading} />}
        {currentPage === 'engagement' && <EngagementPage />}
        {currentPage === 'ai-tools' && <AIToolsPage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      
      <Footer />
    </div>
  );
}

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">⚖️</span>
          <span className="logo-text">AKHB.ai</span>
        </div>
        
        <ul className="nav-menu">
          <li><button className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>Home</button></li>
          <li><button className={currentPage === 'services' ? 'active' : ''} onClick={() => setCurrentPage('services')}>Services</button></li>
          <li><button className={currentPage === 'engagement' ? 'active' : ''} onClick={() => setCurrentPage('engagement')}>Engagement Models</button></li>
          <li><button className={currentPage === 'ai-tools' ? 'active' : ''} onClick={() => setCurrentPage('ai-tools')}>AI Tools</button></li>
          <li><button className={currentPage === 'blog' ? 'active' : ''} onClick={() => setCurrentPage('blog')}>Insights</button></li>
          <li><button className={currentPage === 'contact' ? 'active' : ''} onClick={() => setCurrentPage('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Tax & Advisory Services</h1>
          <p>Expert guidance on tax controversies, GST compliance, cross-border structuring, and business growth strategies</p>
          <button className="cta-button primary" onClick={() => setCurrentPage('contact')}>Request an Engagement</button>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose AKHB.ai</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Specialized Expertise</h3>
            <p>Deep knowledge in tax, compliance, and advisory services tailored to your needs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>AI-Powered Efficiency</h3>
            <p>Advanced tools that accelerate analysis while maintaining professional quality</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Partner-Led Reviews</h3>
            <p>All AI outputs reviewed by experienced professionals before delivery</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Perspective</h3>
            <p>Cross-border expertise for international expansion and structuring</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Work With Us?</h2>
        <p>Choose the engagement model that fits your needs</p>
        <button className="cta-button primary" onClick={() => setCurrentPage('engagement')}>Explore Engagement Models</button>
      </section>
    </div>
  );
}

function ServicesPage({ services, loading }) {
  if (loading) {
    return <div className="loading">Loading services...</div>;
  }

  return (
    <div className="services-page">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>Comprehensive solutions for your financial and tax challenges</p>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div className="service-footer">
              <span className="output-label">{service.typical_output}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EngagementPage() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get('/api/engagement-models');
        setModels(response.data);
      } catch (error) {
        console.error('Error fetching engagement models:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, []);

  if (loading) {
    return <div className="loading">Loading engagement models...</div>;
  }

  return (
    <div className="engagement-page">
      <div className="page-header">
        <h1>Engagement Models</h1>
        <p>Choose the engagement model that best fits your needs</p>
      </div>

      <div className="engagement-grid">
        {models.map(model => (
          <div key={model.id} className="engagement-card">
            <h3>{model.label}</h3>
            <div className="engagement-fee">{model.fee_range}</div>
            <p className="engagement-best-for">Best for: {model.best_for}</p>
            <p className="engagement-description">{model.description}</p>
            <button className="cta-button secondary">{model.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIToolsPage() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await axios.get('/api/ai-tools');
        setTools(response.data);
      } catch (error) {
        console.error('Error fetching AI tools:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) {
    return <div className="loading">Loading AI tools...</div>;
  }

  return (
    <div className="ai-tools-page">
      <div className="page-header">
        <h1>AI Tools</h1>
        <p>AI-powered workflows for professional work, reviewed by experts</p>
      </div>

      <div className="tools-grid">
        {tools.map(tool => (
          <div key={tool.id} className="tool-card">
            <div className="tool-header">
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.name}</h3>
            </div>
            <p className="tool-description">{tool.description}</p>
            
            <div className="ideal-users">
              <strong>Ideal for:</strong>
              <ul>
                {tool.ideal_users.map((user, idx) => (
                  <li key={idx}>{user}</li>
                ))}
              </ul>
            </div>

            <div className="tool-features">
              <strong>Features:</strong>
              <ul>
                {tool.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <button className="cta-button secondary">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/blog');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading">Loading insights...</div>;
  }

  return (
    <div className="blog-page">
      <div className="page-header">
        <h1>Insights & Resources</h1>
        <p>Expert articles on tax, compliance, and business strategy</p>
      </div>

      <div className="blog-grid">
        {posts.map(post => (
          <div key={post.id} className="blog-card">
            {post.featured && <div className="featured-badge">Featured</div>}
            <h3>{post.title}</h3>
            <p className="blog-meta">{new Date(post.date).toLocaleDateString()} • {post.category}</p>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-author">By {post.author}</div>
            <button className="cta-button secondary">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    contact_name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    industry: '',
    matter_type: '',
    mandate_summary: '',
    deadline: '',
    meeting_mode: 'call',
    privacy_consent: false,
    conflict_check: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/engagement/request', formData);
      setSubmitted(true);
      setFormData({
        contact_name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        industry: '',
        matter_type: '',
        mandate_summary: '',
        deadline: '',
        meeting_mode: 'call',
        privacy_consent: false,
        conflict_check: false
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit engagement request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Request an Engagement</h1>
        <p>Tell us about your mandate and we'll determine the right fit</p>
      </div>

      <div className="form-container">
        {submitted && (
          <div className="success-message">
            ✓ Engagement request submitted successfully. Our team will contact you within 2-3 business days.
          </div>
        )}

        {error && (
          <div className="error-message">
            ✗ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="engagement-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="contact_name"
                value={formData.contact_name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div className="form-group">
              <label>Company *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="India"
              />
            </div>
            <div className="form-group">
              <label>Industry</label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="e.g., Technology, Manufacturing"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Matter Type</label>
              <select name="matter_type" value={formData.matter_type} onChange={handleChange}>
                <option value="">Select matter type</option>
                <option value="Tax">Tax</option>
                <option value="GST">GST</option>
                <option value="Entry">Market Entry</option>
                <option value="Assurance">Assurance</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Deadline</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Mandate Summary *</label>
            <textarea
              name="mandate_summary"
              value={formData.mandate_summary}
              onChange={handleChange}
              required
              placeholder="Describe your mandate in detail (minimum 50 characters)"
              rows="5"
            />
          </div>

          <div className="form-group">
            <label>Preferred Meeting Mode</label>
            <select name="meeting_mode" value={formData.meeting_mode} onChange={handleChange}>
              <option value="call">Phone Call</option>
              <option value="video">Video Call</option>
              <option value="inperson">In-Person</option>
            </select>
          </div>

          <div className="form-checkboxes">
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="privacy_consent"
                checked={formData.privacy_consent}
                onChange={handleChange}
                required
              />
              <label>I consent to AKHB.ai processing my information per the Privacy Policy *</label>
            </div>
            <div className="checkbox-group">
              <input
                type="checkbox"
                name="conflict_check"
                checked={formData.conflict_check}
                onChange={handleChange}
                required
              />
              <label>I acknowledge AKHB.ai will conduct a conflict-of-interest check *</label>
            </div>
          </div>

          <button type="submit" className="cta-button primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Engagement Request'}
          </button>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>AKHB.ai</h4>
          <p>Professional Tax & Advisory Services with AI-enabled Workflows</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#tools">AI Tools</a></li>
            <li><a href="#engagement">Engagement Models</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: hello@akhb.ai</p>
          <p>Phone: +91-XXXXX-XXXXX</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AKHB.ai. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;
