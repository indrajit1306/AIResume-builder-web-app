import React, { useState } from 'react';
import { 
  FileText, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ClipboardList,
  RefreshCw,
  Search,
  Zap,
  ChevronRight,
  Download,
  Share2
} from 'lucide-react';
import './TailorPage.css';

const TailorPage = () => {
  const [jd, setJd] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [matchScore, setMatchScore] = useState(65);

  const handleOptimize = () => {
    if (!jd.trim()) return;
    setIsOptimizing(true);
    
    // Simulate AI process
    setTimeout(() => {
      setIsOptimizing(false);
      setShowResults(true);
      setMatchScore(94);
    }, 2500);
  };

  return (
    <div className="tailor-page">
      <div className="tailor-background">
        <div className="tailor-glow t-glow-1"></div>
        <div className="tailor-glow t-glow-2"></div>
      </div>

      <header className="tailor-header">
        <div className="container tailor-nav">
          <div className="tailor-logo">
            <Target className="t-icon" />
            <span>AI Job Matcher</span>
          </div>
          <div className="tailor-actions">
            <button className="btn btn-secondary btn-sm" onClick={() => {setShowResults(false); setJd('')}}>
              Start Over
            </button>
          </div>
        </div>
      </header>

      <main className="container tailor-main">
        {!showResults && !isOptimizing ? (
          <div className="tailor-setup">
            <div className="setup-intro">
              <h1>Tailor your resume for <span className="text-gradient">any job</span></h1>
              <p>Paste a job description and our AI will optimize your resume to beat the ATS and match the specific role requirements.</p>
            </div>

            <div className="tailor-grid">
              {/* Left Column: Job Description */}
              <div className="tailor-column">
                <div className="tailor-card">
                  <div className="card-header">
                    <ClipboardList size={20} className="text-brand" />
                    <h3>Job Description</h3>
                  </div>
                  <textarea 
                    className="jd-textarea"
                    placeholder="Paste the job description here..."
                    value={jd}
                    onChange={(e) => setJd(e.target.value)}
                  ></textarea>
                  <div className="jd-hints">
                    <span>💡 Tip: Include requirements and skills for better matching.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Resume Preview */}
              <div className="tailor-column">
                <div className="tailor-card resume-preview-card">
                  <div className="card-header">
                    <FileText size={20} className="text-brand" />
                    <h3>Your Current Resume</h3>
                    <button className="btn-text">Change</button>
                  </div>
                  <div className="resume-mini-preview">
                    <div className="preview-header">
                      <div className="skeleton-line full"></div>
                      <div className="skeleton-line half"></div>
                    </div>
                    <div className="preview-body">
                      <div className="skeleton-line full"></div>
                      <div className="skeleton-line full"></div>
                      <div className="skeleton-line full"></div>
                      <div className="skeleton-line half"></div>
                    </div>
                  </div>
                  <div className="resume-info">
                    <strong>Software_Engineer_Resume.pdf</strong>
                    <span>Updated 2 days ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tailor-cta">
              <button 
                className={`btn btn-primary btn-lg ${!jd.trim() ? 'disabled' : ''}`}
                onClick={handleOptimize}
                disabled={!jd.trim()}
              >
                Optimize Resume for This Job
                <Sparkles size={20} />
              </button>
            </div>
          </div>
        ) : isOptimizing ? (
          <div className="tailor-loading">
            <div className="ai-brain-animation">
              <Zap size={48} className="zap-icon" />
              <div className="pulse-ring"></div>
            </div>
            <h2>AI is optimizing your content...</h2>
            <div className="loading-steps">
              <span>Extracting keywords...</span>
              <span>Matching skills...</span>
              <span>Rewriting impact statements...</span>
            </div>
          </div>
        ) : (
          <div className="tailor-results animate-in">
            <div className="results-header">
              <div className="match-status">
                <div className="match-circle">
                  <svg viewBox="0 0 36 36">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle-fill" strokeDasharray={`${matchScore}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="match-val">
                    <span>{matchScore}%</span>
                    <small>Match</small>
                  </div>
                </div>
                <div className="match-text">
                  <h2>Optimization Complete!</h2>
                  <p>Your resume's match score improved from 65% to 94%.</p>
                </div>
              </div>
              <div className="results-actions">
                <button className="btn btn-secondary">
                  <Download size={18} />
                  Download
                </button>
                <button className="btn btn-primary">
                  <Share2 size={18} />
                  Apply with CareerForge
                </button>
              </div>
            </div>

            <div className="results-grid">
              {/* Keyword Analysis */}
              <div className="results-column">
                <div className="tailor-card keyword-card">
                  <h3>Keyword Matches</h3>
                  <div className="keyword-tags">
                    <span className="tag match"><CheckCircle2 size={14} /> React.js</span>
                    <span className="tag match"><CheckCircle2 size={14} /> Node.js</span>
                    <span className="tag match"><CheckCircle2 size={14} /> AWS</span>
                    <span className="tag match"><CheckCircle2 size={14} /> TypeScript</span>
                    <span className="tag missing"><AlertCircle size={14} /> Docker</span>
                    <span className="tag missing"><AlertCircle size={14} /> Kubernetes</span>
                    <span className="tag suggested"><Sparkles size={14} /> Microservices</span>
                  </div>
                </div>

                <div className="tailor-card bullet-suggestions">
                  <h3>Bullet Improvements</h3>
                  <div className="suggestion-item">
                    <div className="s-before">
                      <span>Before:</span>
                      <p>"Worked on the frontend using React and improved performance."</p>
                    </div>
                    <div className="s-arrow"><ChevronRight size={16} /></div>
                    <div className="s-after">
                      <div className="s-label"><Sparkles size={14} /> AI Optimized</div>
                      <p>"Architected a high-performance React frontend, reducing initial load times by 40% through code-splitting and memoization."</p>
                    </div>
                  </div>
                  <div className="suggestion-item">
                    <div className="s-before">
                      <span>Before:</span>
                      <p>"Managed a team of developers on various projects."</p>
                    </div>
                    <div className="s-arrow"><ChevronRight size={16} /></div>
                    <div className="s-after">
                      <div className="s-label"><Sparkles size={14} /> AI Optimized</div>
                      <p>"Spearheaded an Agile team of 8, delivering 12+ enterprise-grade features while maintaining a 98% sprint velocity."</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Preview */}
              <div className="results-column">
                <div className="tailor-card preview-final">
                  <div className="card-header">
                    <h3>Updated Resume Preview</h3>
                    <div className="preview-controls">
                      <button className="ctrl-btn active">Optimized</button>
                      <button className="ctrl-btn">Original</button>
                    </div>
                  </div>
                  <div className="final-resume-scroll">
                    <div className="resume-paper">
                      <div className="r-header">
                        <h1>MICHAEL SCOTT</h1>
                        <p>Senior Software Engineer | AWS Certified</p>
                      </div>
                      <div className="r-section">
                        <h2>EXPERIENCE</h2>
                        <div className="r-exp">
                          <div className="exp-meta">
                            <strong>Dunder Mifflin Tech</strong>
                            <span>2020 - Present</span>
                          </div>
                          <ul>
                            <li><span className="ai-highlight">Architected a responsive React dashboard</span> for local supply chain tracking, serving 500+ daily active users.</li>
                            <li><span className="ai-highlight">Optimized Node.js backend services</span> by implementing Redis caching, leading to a 30% reduction in API latency.</li>
                            <li>Integrated AWS Lambda for serverless image processing, reducing infrastructure costs by $2k/month.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="r-section">
                        <h2>SKILLS</h2>
                        <p>React.js, Node.js, AWS, TypeScript, <span className="ai-highlight">Microservices</span>, SQL, GraphQL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TailorPage;
