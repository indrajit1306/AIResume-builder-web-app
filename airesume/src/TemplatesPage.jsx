import React, { useState } from 'react';
import './TemplatesPage.css';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  CheckCircle2, 
  Sparkles, 
  Layout, 
  Rocket, 
  Zap,
  Star,
  Download,
  Eye,
  ArrowLeft
} from 'lucide-react';

const TEMPLATES = [
  {
    id: 1,
    name: 'Modern Edge',
    type: 'Modern',
    image: '/templates/modern.png',
    atsScore: 94,
    industry: 'Technology',
    experience: 'Mid-Level',
    isPopular: true
  },
  {
    id: 2,
    name: 'Executive Suite',
    type: 'Corporate',
    image: '/templates/corporate.png',
    atsScore: 98,
    industry: 'Finance',
    experience: 'Executive',
    isPopular: false
  },
  {
    id: 3,
    name: 'Creative Canvas',
    type: 'Creative',
    image: '/templates/creative.png',
    atsScore: 82,
    industry: 'Design',
    experience: 'Entry-Level',
    isPopular: true
  },
  {
    id: 4,
    name: 'Pure Minimal',
    type: 'Minimal',
    image: '/templates/minimal.png',
    atsScore: 88,
    industry: 'Healthcare',
    experience: 'Senior',
    isPopular: false
  },
  {
    id: 5,
    name: 'Standard ATS',
    type: 'ATS-friendly',
    image: '/templates/ats.png',
    atsScore: 100,
    industry: 'Engineering',
    experience: 'All Levels',
    isPopular: true
  },
  {
    id: 6,
    name: 'Dynamic Flow',
    type: 'Modern',
    image: '/templates/modern.png',
    atsScore: 91,
    industry: 'Marketing',
    experience: 'Mid-Level',
    isPopular: false
  }
];

function TemplatesPage() {
  const [filterType, setFilterType] = useState('All');
  const [filterIndustry, setFilterIndustry] = useState('All');
  const [filterExp, setFilterExp] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = TEMPLATES.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'All' || t.type === filterType;
    const matchesIndustry = filterIndustry === 'All' || t.industry === filterIndustry;
    const matchesExp = filterExp === 'All' || t.experience === filterExp;
    return matchesSearch && matchesType && matchesIndustry && matchesExp;
  });

  return (
    <div className="templates-page">
      {/* Dynamic Background */}
      <div className="background-glows">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <nav className="tp-nav">
        <div className="container tp-nav-container">
          <a href="#" className="back-link" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}>
            <ArrowLeft size={20} />
            Back to Home
          </a>
          <div className="logo-compact">
            <Layout className="logo-icon" size={24} />
            <span>Template Gallery</span>
          </div>
          <button className="btn btn-primary btn-sm">
            Sign In
          </button>
        </div>
      </nav>

      <header className="tp-header">
        <div className="container">
          <h1 className="tp-title">Choose your <span className="text-gradient">Career Path</span></h1>
          <p className="tp-subtitle">Explore our collection of high-converting, AI-optimized resume templates designed for every industry.</p>
          
          <div className="tp-controls">
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search templates..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="filters-row">
              <div className="filter-group">
                <span className="filter-label">Style:</span>
                <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                  <option>All</option>
                  <option>Modern</option>
                  <option>Corporate</option>
                  <option>Creative</option>
                  <option>Minimal</option>
                  <option>ATS-friendly</option>
                </select>
              </div>

              <div className="filter-group">
                <span className="filter-label">Industry:</span>
                <select value={filterIndustry} onChange={(e) => setFilterIndustry(e.target.value)}>
                  <option>All</option>
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Design</option>
                  <option>Healthcare</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                </select>
              </div>

              <div className="filter-group">
                <span className="filter-label">Experience:</span>
                <select value={filterExp} onChange={(e) => setFilterExp(e.target.value)}>
                  <option>All</option>
                  <option>Entry-Level</option>
                  <option>Mid-Level</option>
                  <option>Senior</option>
                  <option>Executive</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container tp-main">
        <div className="templates-grid">
          {filteredTemplates.map(template => (
            <div key={template.id} className="template-card">
              {template.isPopular && (
                <div className="popular-badge">
                  <Star size={12} fill="currentColor" />
                  Popular
                </div>
              )}
              
              <div className="template-preview">
                <img src={template.image} alt={template.name} />
                <div className="template-overlay">
                  <button className="preview-btn">
                    <Eye size={20} />
                    Quick Preview
                  </button>
                  <button className="btn btn-primary" onClick={() => window.location.hash = '#onboarding'}>
                    Use Template
                    <Rocket size={18} />
                  </button>
                </div>
              </div>

              <div className="template-info">
                <div className="info-header">
                  <h3>{template.name}</h3>
                  <div className={`ats-score-badge ${template.atsScore >= 95 ? 'perfect' : ''}`}>
                    <Zap size={12} fill="currentColor" />
                    {template.atsScore}% ATS
                  </div>
                </div>
                <div className="info-tags">
                  <span className="tag">{template.type}</span>
                  <span className="tag">{template.industry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredTemplates.length === 0 && (
          <div className="no-results">
            <Rocket size={48} className="no-results-icon" />
            <h2>No templates found</h2>
            <p>Try adjusting your search or filters to find what you're looking for.</p>
            <button className="btn btn-secondary" onClick={() => {
              setFilterType('All');
              setFilterIndustry('All');
              setFilterExp('All');
              setSearchQuery('');
            }}>Reset All Filters</button>
          </div>
        )}
      </main>

      <footer className="tp-footer">
        <div className="container">
          <div className="footer-cta">
            <h2>Can't find the perfect template?</h2>
            <p>Our AI can build a custom layout just for you.</p>
            <button className="btn btn-secondary">Request Custom Design</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TemplatesPage;
