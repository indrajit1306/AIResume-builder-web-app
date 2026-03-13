import React, { useState } from 'react';
import { 
  Linkedin, 
  Sparkles, 
  Search, 
  Zap, 
  CheckCircle2, 
  Copy, 
  RefreshCw, 
  MessageSquare, 
  User, 
  Briefcase, 
  TrendingUp,
  ArrowRight,
  ClipboardCheck,
  Award,
  AlertCircle
} from 'lucide-react';
import './LinkedInOptimizerPage.css';

const OPTIMIZED_DATA = {
  headline: {
    original: "Software Engineer at TechCorp",
    optimized: "Senior Software Engineer | Full-Stack Specialist (React, Node.js) | Passionate about Scalable Architecture & AI Integration",
    impact: "94% more searchable",
    reason: "Added specific technologies and professional focus areas that recruiters search for."
  },
  summary: {
    original: "I am a software engineer with 5 years of experience. I like building web apps.",
    optimized: "🚀 Passionate Senior Software Engineer with 5+ years of experience in building high-performance web applications. Expertise in React, Node.js, and AWS. \n\nProven track record of improving system performance by 40% and leading cross-functional teams to deliver enterprise-grade solutions. Always staying at the forefront of AI and cloud technologies to drive business innovation.",
    impact: "88% more engagement",
    reason: "Used strong action verbs, quantified achievements, and added a modern professional voice."
  },
  experience: [
    {
      role: "Software Engineer",
      original: "Responsible for fixing bugs and adding new features to the existing platform.",
      optimized: "Architected and implemented 15+ high-priority features using React & Redux, leading to a 25% increase in user retention. Reduced technical debt by 30% through comprehensive code refactoring and unit testing implementation.",
    }
  ],
  skills: {
    suggested: ["System Design", "Cloud Computing", "Team Leadership", "Microservices", "CI/CD Pipelines", "Agile Methodology"],
    missing: ["Kubernetes", "GraphQL"]
  }
};

const LinkedInOptimizerPage = () => {
  const [profileText, setProfileText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState('headline');

  const handleOptimize = () => {
    if (!profileText.trim()) return;
    setIsAnalyzing(true);
    
    // Simulate AI analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // Simple alert or toast could be added here
  };

  return (
    <div className="linkedin-optimizer-page">
      <div className="li-background">
        <div className="li-glow li-glow-1"></div>
        <div className="li-glow li-glow-2"></div>
      </div>

      <header className="li-header">
        <div className="container li-nav">
          <div className="li-logo">
            <Linkedin className="li-logo-icon" />
            <span>AI LinkedIn Optimizer</span>
          </div>
          <div className="li-badge">
            <Sparkles size={16} />
            <span>Premium AI Mode</span>
          </div>
        </div>
      </header>

      <main className="container li-main">
        {!showResults && !isAnalyzing ? (
          <div className="li-input-view animate-fade-in">
            <div className="li-hero">
              <div className="li-icon-box">
                <Linkedin size={40} />
              </div>
              <h1>Optimize your <span className="text-gradient">LinkedIn Profile</span></h1>
              <p>Our AI analyzes your profile and generates high-impact text to help you stand out to top recruiters and hiring managers.</p>
            </div>

            <div className="li-card glass-panel">
              <div className="card-header">
                <h3>Paste Your Current Profile</h3>
                <p>Paste your 'About' section, headline, or experience bullets below.</p>
              </div>
              <textarea 
                className="li-textarea"
                placeholder="Example: Software Engineer at Company X. I like coding..."
                value={profileText}
                onChange={(e) => setProfileText(e.target.value)}
              ></textarea>
              <div className="li-actions">
                <button 
                  className={`btn btn-primary btn-lg ${!profileText.trim() ? 'disabled' : ''}`}
                  onClick={handleOptimize}
                  disabled={!profileText.trim()}
                >
                  Analyze & Optimize <Zap size={20} />
                </button>
              </div>
            </div>

            <div className="li-features-grid">
              <div className="li-feat">
                <Search className="li-feat-icon" />
                <h4>Search Visualization</h4>
                <p>We optimize for LinkedIn's search algorithm to put you at the top.</p>
              </div>
              <div className="li-feat">
                <TrendingUp className="li-feat-icon" />
                <h4>Engagement Boost</h4>
                <p>Convert profile views into interview invitations with punchy copy.</p>
              </div>
              <div className="li-feat">
                <MessageSquare className="li-feat-icon" />
                <h4>Professional Tone</h4>
                <p>Perfectly balanced tone of voice for your specific industry.</p>
              </div>
            </div>
          </div>
        ) : isAnalyzing ? (
          <div className="li-loading">
            <div className="li-spinner">
              <RefreshCw size={50} className="spinning" />
              <div className="spinner-pulse"></div>
            </div>
            <h2>AI is reframing your professional story...</h2>
            <div className="loading-steps">
              <span>Scanning for SEO keywords...</span>
              <span>Measuring readability scores...</span>
              <span>Enhancing action-oriented language...</span>
            </div>
          </div>
        ) : (
          <div className="li-results-view animate-fade-in">
            <div className="results-header">
              <div className="li-score-card">
                <div className="score-num">91</div>
                <div className="score-info">
                  <h4>New Profile Score</h4>
                  <p>Up from your current 64%</p>
                </div>
              </div>
              <div className="header-actions">
                <button className="btn btn-secondary" onClick={() => {setShowResults(false); setProfileText('')}}>
                  Start Over
                </button>
                <button className="btn btn-primary">
                  Apply All Changes <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="results-layout">
              {/* Sidebar Navigation */}
              <aside className="results-sidebar">
                <button className={`side-btn ${activeTab === 'headline' ? 'active' : ''}`} onClick={() => setActiveTab('headline')}>
                  <MessageSquare size={18} /> Headline
                </button>
                <button className={`side-btn ${activeTab === 'summary' ? 'active' : ''}`} onClick={() => setActiveTab('summary')}>
                  <User size={18} /> About Summary
                </button>
                <button className={`side-btn ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>
                  <Briefcase size={18} /> Experience
                </button>
                <button className={`side-btn ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
                  <Award size={18} /> Skills & Keywords
                </button>
              </aside>

              {/* Main Feedback Area */}
              <div className="results-content">
                {activeTab === 'headline' && (
                  <div className="content-card animate-fade-in">
                    <div className="content-header">
                      <h3>LinkedIn Headline</h3>
                      <span className="impact-tag green">{OPTIMIZED_DATA.headline.impact}</span>
                    </div>
                    <div className="comparison-box">
                      <div className="comp-item original">
                        <label>Original</label>
                        <p>"{OPTIMIZED_DATA.headline.original}"</p>
                      </div>
                      <div className="comp-item optimized">
                        <label>Optimized <Sparkles size={14} /></label>
                        <p>"{OPTIMIZED_DATA.headline.optimized}"</p>
                        <button className="copy-btn" onClick={() => handleCopy(OPTIMIZED_DATA.headline.optimized)}>
                          <Copy size={14} /> Copy
                        </button>
                      </div>
                    </div>
                    <div className="reasoning-box">
                      <AlertCircle size={20} />
                      <p><strong>Recruiter Insight:</strong> {OPTIMIZED_DATA.headline.reason}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'summary' && (
                  <div className="content-card animate-fade-in">
                    <div className="content-header">
                      <h3>About (Summary)</h3>
                      <span className="impact-tag green">{OPTIMIZED_DATA.summary.impact}</span>
                    </div>
                    <div className="comparison-box vertical">
                      <div className="comp-item original">
                        <label>Original</label>
                        <p>{OPTIMIZED_DATA.summary.original}</p>
                      </div>
                      <div className="comp-item optimized">
                        <label>Optimized <Sparkles size={14} /></label>
                        <p className="pre-wrap">{OPTIMIZED_DATA.summary.optimized}</p>
                        <button className="copy-btn" onClick={() => handleCopy(OPTIMIZED_DATA.summary.optimized)}>
                          <Copy size={14} /> Copy Section
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="content-card animate-fade-in">
                    <div className="content-header">
                      <h3>Experience Benchmarking</h3>
                    </div>
                    {OPTIMIZED_DATA.experience.map((exp, idx) => (
                      <div key={idx} className="comparison-box vertical mb-4">
                        <div className="comp-item original">
                          <label>{exp.role} (Old)</label>
                          <p>"{exp.original}"</p>
                        </div>
                        <div className="comp-item optimized">
                          <label>AI Enhancement <Sparkles size={14} /></label>
                          <p>"{exp.optimized}"</p>
                          <button className="copy-btn" onClick={() => handleCopy(exp.optimized)}>
                            <Copy size={14} /> Copy Bullet
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="content-card animate-fade-in">
                    <div className="content-header">
                      <h3>Skills & Keywords Optimization</h3>
                    </div>
                    <div className="skills-grid">
                      <div className="skills-column">
                        <h4>Suggested Skills to Add</h4>
                        <div className="skills-list">
                          {OPTIMIZED_DATA.skills.suggested.map(skill => (
                            <span key={skill} className="skill-tag suggested">
                              <CheckCircle2 size={14} /> {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="skills-column">
                        <h4>Priority Gaps Found</h4>
                        <div className="skills-list">
                          {OPTIMIZED_DATA.skills.missing.map(skill => (
                            <span key={skill} className="skill-tag missing">
                              <ClipboardCheck size={14} /> {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LinkedInOptimizerPage;
