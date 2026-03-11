import React, { useState } from 'react';
import { 
  Wand2, 
  Sparkles, 
  Download, 
  FileText, 
  Share2, 
  Briefcase, 
  GraduationCap, 
  Code,
  FolderDot,
  User,
  Zap,
  CheckCircle,
  Scissors
} from 'lucide-react';
import './AiResumeBuilder.css';

const AiResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    name: 'Alex Smith',
    title: 'Senior Frontend Developer',
    experience: 'Spearheaded the complete redesign of the core web application using React and TypeScript, resulting in a 40% improvement in load times and a 25% increase in user engagement. Led a team of 4 junior developers, mentoring them in modern frontend practices and agile methodologies.',
    skills: 'React, TypeScript, CSS/SASS, Node.js, GraphQL, Webpack, Jest',
    projects: 'E-commerce Platform: Built a scalable frontend for a high-traffic e-commerce site handling 10k+ daily visitors.\nPortfolio CMS: Developed a headless CMS integration for dynamic portfolio generation.',
    education: 'B.S. Computer Science, Tech University (2015-2019)'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const aiTools = [
    { name: 'Rewrite with AI', icon: Wand2, color: '#8b5cf6' },
    { name: 'Improve bullet points', icon: Sparkles, color: '#ec4899' },
    { name: 'Make ATS optimized', icon: CheckCircle, color: '#10b981' },
    { name: 'Shorten text', icon: Scissors, color: '#f59e0b' }
  ];

  return (
    <div className="builder-container">
      {/* Left Panel - Editor */}
      <div className="builder-editor">
        <div className="editor-header glass-panel">
          <h2>Resume Details</h2>
          <p>Fill in your details below. The preview will update automatically.</p>
        </div>

        <div className="editor-form">
          {/* Personal Info */}
          <section className="form-section glass-panel">
            <h3 className="section-title">
              <User size={18} />
              Personal Information
            </h3>
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={resumeData.name} 
                onChange={handleInputChange}
                placeholder="e.g. Jane Doe"
              />
            </div>
            <div className="input-group">
              <label>Professional Title</label>
              <input 
                type="text" 
                name="title" 
                value={resumeData.title} 
                onChange={handleInputChange}
                placeholder="e.g. Frontend Engineer"
              />
            </div>
          </section>

          {/* Experience */}
          <section className="form-section glass-panel">
            <h3 className="section-title">
              <Briefcase size={18} />
              Work Experience
            </h3>
            <div className="input-group">
              <label>Experience Details</label>
              <textarea 
                name="experience" 
                value={resumeData.experience} 
                onChange={handleInputChange}
                placeholder="Describe your past roles, responsibilities, and achievements..."
                rows={6}
              />
            </div>
          </section>

          {/* Skills */}
          <section className="form-section glass-panel">
            <h3 className="section-title">
              <Code size={18} />
              Skills
            </h3>
            <div className="input-group">
              <label>Technical & Soft Skills</label>
              <textarea 
                name="skills" 
                value={resumeData.skills} 
                onChange={handleInputChange}
                placeholder="List your skills separated by commas..."
                rows={3}
              />
            </div>
          </section>

          {/* Projects */}
          <section className="form-section glass-panel">
            <h3 className="section-title">
              <FolderDot size={18} />
              Projects
            </h3>
            <div className="input-group">
              <label>Notable Projects</label>
              <textarea 
                name="projects" 
                value={resumeData.projects} 
                onChange={handleInputChange}
                placeholder="Highlight key projects you've worked on..."
                rows={4}
              />
            </div>
          </section>

          {/* Education */}
          <section className="form-section glass-panel">
            <h3 className="section-title">
              <GraduationCap size={18} />
              Education
            </h3>
            <div className="input-group">
              <label>Educational Background</label>
              <textarea 
                name="education" 
                value={resumeData.education} 
                onChange={handleInputChange}
                placeholder="Where did you study?"
                rows={3}
              />
            </div>
          </section>
        </div>
      </div>

      {/* Right Panel - Preview & Toolbar */}
      <div className="builder-preview-wrapper">
        {/* AI Toolbar */}
        <div className="ai-toolbar glass-panel">
          <div className="toolbar-label">
            <Zap size={16} className="zap-icon" />
            <span>AI Assistant</span>
          </div>
          <div className="ai-actions">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <button key={index} className="ai-tool-btn" title={tool.name}>
                  <Icon size={16} style={{ color: tool.color }} />
                  <span>{tool.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Bar (Export) */}
        <div className="preview-action-bar glass-panel">
          <span className="live-badge">
            <span className="live-dot"></span> Live Preview
          </span>
          <div className="export-actions">
            <button className="export-btn">
              <Download size={16} />
              PDF
            </button>
            <button className="export-btn">
              <FileText size={16} />
              Word
            </button>
            <button className="export-btn primary">
              <Share2 size={16} />
              Share
            </button>
          </div>
        </div>

        {/* Classic A4 Document Preview */}
        <div className="document-preview-container">
          <div className="document-page">
            <header className="resume-header">
              <h1>{resumeData.name || 'Your Name'}</h1>
              <h2>{resumeData.title || 'Professional Title'}</h2>
            </header>

            <div className="resume-body">
              {resumeData.experience && (
                <div className="resume-section">
                  <h3>Experience</h3>
                  <div className="resume-content experience-content">
                    {resumeData.experience.split('\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {resumeData.skills && (
                <div className="resume-section">
                  <h3>Skills</h3>
                  <div className="resume-content">
                    <p>{resumeData.skills}</p>
                  </div>
                </div>
              )}

              {resumeData.projects && (
                <div className="resume-section">
                  <h3>Projects</h3>
                  <div className="resume-content">
                    {resumeData.projects.split('\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {resumeData.education && (
                <div className="resume-section">
                  <h3>Education</h3>
                  <div className="resume-content">
                    {resumeData.education.split('\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiResumeBuilder;
