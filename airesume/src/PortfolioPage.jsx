import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Tablet, 
  Settings2, 
  ExternalLink, 
  Sparkles, 
  Palette, 
  Layout, 
  Globe, 
  CheckCircle2, 
  Code2, 
  FolderGit2, 
  Cpu, 
  Send,
  Zap,
  Eye,
  Rocket
} from 'lucide-react';
import './PortfolioPage.css';

const THEMES = [
  { id: 'modern', name: 'Midnight Modern', color: '#3b82f6', preview: 'linear-gradient(135deg, #1e293b, #0f172a)' },
  { id: 'minimalist', name: 'Clean White', color: '#000000', preview: '#f8fafc' },
  { id: 'developer', name: 'Cyber Terminal', color: '#10b981', preview: '#050505' },
  { id: 'creative', name: 'Vibrant Glass', color: '#8b5cf6', preview: 'linear-gradient(45deg, #4f46e5, #ec4899)' }
];

const PortfolioPage = () => {
  const [selectedTheme, setSelectedTheme] = useState('modern');
  const [isGenerating, setIsGenerating] = useState(false);
  const [viewMode, setViewMode] = useState('desktop');
  const [activeTab, setActiveTab] = useState('configuration'); // configuration, preview
  const [progress, setProgress] = useState(0);

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsGenerating(false);
            setActiveTab('preview');
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="portfolio-page">
      <div className="p-background">
        <div className="p-glow p-glow-1"></div>
        <div className="p-glow p-glow-2"></div>
      </div>

      <header className="p-header">
        <div className="container p-nav">
          <div className="p-logo">
            <Rocket className="p-logo-icon" />
            <span>AI Portfolio Creator</span>
          </div>
          <div className="p-steps">
            <span className={`p-step ${activeTab === 'configuration' ? 'active' : ''}`}>1. Configure</span>
            <div className="p-step-line"></div>
            <span className={`p-step ${activeTab === 'preview' ? 'active' : ''}`}>2. Preview & Launch</span>
          </div>
        </div>
      </header>

      <main className="container p-main">
        {activeTab === 'configuration' ? (
          <div className="p-setup-grid animate-fade-in">
            {/* Left: Configuration */}
            <div className="p-config-panel glass-panel">
              <div className="config-section">
                <label><Palette size={18} /> Choose Theme</label>
                <div className="theme-grid">
                  {THEMES.map(theme => (
                    <button 
                      key={theme.id}
                      className={`theme-card ${selectedTheme === theme.id ? 'active' : ''}`}
                      onClick={() => setSelectedTheme(theme.id)}
                    >
                      <div className="theme-preview" style={{ background: theme.preview }}></div>
                      <span>{theme.name}</span>
                      {selectedTheme === theme.id && <CheckCircle2 size={16} className="active-icon" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="config-section">
                <label><Globe size={18} /> Custom Domain</label>
                <div className="domain-input">
                  <span>portfolio.</span>
                  <input type="text" placeholder="indrajit" defaultValue="indrajit" />
                  <span>.dev</span>
                </div>
              </div>

              <div className="config-section">
                <label><Layout size={18} /> Visible Sections</label>
                <div className="sections-toggle">
                  {['Hero', 'Projects', 'Skills', 'Experience', 'Contact'].map(section => (
                    <div key={section} className="toggle-item">
                      <span>{section}</span>
                      <div className="small-switch active"></div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn btn-primary btn-lg w-100 mt-4" onClick={handleGenerate}>
                Generate Portfolio <Sparkles size={20} />
              </button>
            </div>

            {/* Right: Mock Editor Info */}
            <div className="p-info-panel">
              <div className="p-hero-text">
                <h1>Go from <span className="text-gradient">Resume to Live Site</span> in seconds.</h1>
                <p>Our AI intelligently extracts your best projects and experience to create a stunning, SEO-optimized portfolio.</p>
              </div>
              <div className="feature-list">
                <div className="feat-item">
                  <Cpu />
                  <div>
                    <h4>Auto-Project Extraction</h4>
                    <p>AI scans your resume for key contributions and creates project case studies.</p>
                  </div>
                </div>
                <div className="feat-item">
                  <Monitor />
                  <div>
                    <h4>Fully Responsive</h4>
                    <p>Perfect viewing experience on Mobile, Tablet, and Desktop.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-preview-container animate-fade-in">
            <div className="preview-toolbar glass-panel">
              <div className="toolbar-left">
                <button className="btn-icon" onClick={() => setActiveTab('configuration')}><Settings2 size={20} /></button>
                <div className="url-bar">
                  <Globe size={14} />
                  <span>portfolio.indrajit.dev</span>
                </div>
              </div>
              <div className="view-modes">
                <button className={`mode-btn ${viewMode === 'desktop' ? 'active' : ''}`} onClick={() => setViewMode('desktop')}><Monitor size={18} /></button>
                <button className={`mode-btn ${viewMode === 'tablet' ? 'active' : ''}`} onClick={() => setViewMode('tablet')}><Tablet size={18} /></button>
                <button className={`mode-btn ${viewMode === 'mobile' ? 'active' : ''}`} onClick={() => setViewMode('mobile')}><Smartphone size={18} /></button>
              </div>
              <button className="btn btn-primary btn-sm">Publish Site <Rocket size={16} /></button>
            </div>

            <div className={`p-browser-frame ${viewMode}`}>
              <div className={`mock-portfolio theme-${selectedTheme}`}>
                {/* HERO SECTION */}
                <section className="m-hero">
                  <div className="m-container">
                    <span className="m-badge">Available for projects</span>
                    <h1>Creative Full-Stack <span className="m-text-gradient">Developer</span></h1>
                    <p>Turning complex problems into elegant, user-centric digital experiences with AI and modern web technologies.</p>
                    <div className="m-cta">
                      <button className="m-btn-p">View My Work</button>
                      <button className="m-btn-s">Download Resume</button>
                    </div>
                  </div>
                </section>

                {/* SKILLS SECTION */}
                <section className="m-skills">
                  <div className="m-container">
                    <h2 className="m-section-title">Technical Expertise</h2>
                    <div className="m-skills-grid">
                      {['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'Tailwind'].map(skill => (
                        <div key={skill} className="m-skill-tag">{skill}</div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* PROJECTS SECTION */}
                <section className="m-projects">
                  <div className="m-container">
                    <h2 className="m-section-title">Featured Projects</h2>
                    <div className="m-project-grid">
                      <div className="m-project-card">
                        <div className="m-proj-img"></div>
                        <div className="m-proj-content">
                          <h3>AI-Powered Task Manager</h3>
                          <p>A cloud-native application using LLMs to prioritize tasks and generate summaries.</p>
                          <div className="m-proj-links">
                            <span className="m-proj-link"><Code2 size={14}/> Stack</span>
                            <span className="m-proj-link"><FolderGit2 size={14}/> Github</span>
                          </div>
                        </div>
                      </div>
                      <div className="m-project-card">
                        <div className="m-proj-img"></div>
                        <div className="m-proj-content">
                          <h3>E-commerce Analytics</h3>
                          <p>Interactive dashboard visualizing sales data and predicting customer churn with ML.</p>
                          <div className="m-proj-links">
                            <span className="m-proj-link"><Code2 size={14}/> Stack</span>
                            <span className="m-proj-link"><FolderGit2 size={14}/> Github</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* EXPERIENCE SECTION */}
                <section className="m-experience">
                  <div className="m-container">
                    <h2 className="m-section-title">Work Journey</h2>
                    <div className="m-timeline">
                      <div className="m-timeline-item">
                        <div className="m-time-left">
                          <h4>Senior Developer</h4>
                          <p>TechCorp Systems</p>
                        </div>
                        <div className="m-time-right">2021 - Present</div>
                      </div>
                      <div className="m-timeline-item">
                        <div className="m-time-left">
                          <h4>Full Stack Intern</h4>
                          <p>StartUp Lab</p>
                        </div>
                        <div className="m-time-right">2020 - 2021</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* CONTACT SECTION */}
                <section className="m-contact">
                  <div className="m-container">
                    <div className="m-contact-card">
                      <h2>Let's build something <span className="m-text-gradient">awesome</span>.</h2>
                      <p>Have a project in mind? Reach out and let's discuss it.</p>
                      <div className="m-contact-form">
                        <input type="email" placeholder="Email Address" />
                        <button><Send size={18} /></button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {isGenerating && (
          <div className="p-loading-overlay">
            <div className="p-loader-content">
              <Zap size={48} className="p-zap-spinning" />
              <h2>AI is building your portfolio...</h2>
              <div className="p-progress-bar">
                <div className="p-progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <p>{progress < 40 ? 'Analyzing resume...' : progress < 80 ? 'Generating project summaries...' : 'Fine-tuning UI components...'}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PortfolioPage;
