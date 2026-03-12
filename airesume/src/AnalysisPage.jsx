import React, { useState, useEffect } from 'react';
import './AnalysisPage.css';
import { 
  FileText, 
  Upload, 
  Search, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  Sparkles,
  ArrowRight,
  Target,
  BarChart3,
  Layers,
  MousePointer2,
  ChevronRight,
  ShieldCheck,
  Layout,
  Type
} from 'lucide-react';

function AnalysisPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [analysisPhase, setAnalysisPhase] = useState(0);

  const phases = [
    "Parsing resume structure...",
    "Scanning for industry keywords...",
    "Analyzing impact statements...",
    "Evaluating formatting & ATS compliance...",
    "Finalizing score..."
  ];

  const handleUpload = () => {
    setIsUploading(true);
    setAnalysisPhase(0);
    
    // Simulate analysis steps
    const timer = setInterval(() => {
      setAnalysisPhase(prev => {
        if (prev >= phases.length - 1) {
          clearInterval(timer);
          setTimeout(() => {
            setIsUploading(false);
            setShowResults(true);
            animateScore(78); // Target score
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
  };

  const animateScore = (target) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        setScore(current);
      }
    }, 20);
  };

  if (!showResults && !isUploading) {
    return (
      <div className="analysis-page">
        <div className="background-glows">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
        </div>

        <main className="container upload-view">
          <div className="analysis-hero">
            <div className="badge-ai">
              <Sparkles size={14} />
              AI-Powered Evaluation
            </div>
            <h1>How does your resume <span className="text-gradient">rank</span>?</h1>
            <p>Get a deep-dive analysis of your resume’s ATS compatibility, keyword density, and overall impact in seconds.</p>
          </div>

          <div className="upload-section">
            <div className="upload-box" onClick={handleUpload}>
              <div className="upload-icon-pulse">
                <Upload size={40} />
              </div>
              <h3>Upload your resume</h3>
              <p>Drag and drop or click to select (PDF, DOCX)</p>
              <div className="upload-info">
                <span><ShieldCheck size={14} /> Secure & Private</span>
                <span><FileText size={14} /> Max 5MB</span>
              </div>
            </div>

            <div className="upload-features">
              <div className="u-feat">
                <Target className="u-feat-icon" />
                <div>
                  <h4>Industry Matching</h4>
                  <p>We compare your skills against current market demands.</p>
                </div>
              </div>
              <div className="u-feat">
                <Zap className="u-feat-icon" />
                <div>
                  <h4>Instant Feedback</h4>
                  <p>Get actionable suggestions to improve your score immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (isUploading) {
    return (
      <div className="analysis-page loading-view">
        <div className="loading-container">
          <div className="ai-loader">
            <div className="scanner-line"></div>
            <FileText size={48} className="loader-icon" />
          </div>
          <div className="loading-text">
            <h2>AI Analysis in Progress</h2>
            <p className="phase-text">{phases[analysisPhase]}</p>
          </div>
          <div className="progress-bar-container">
            <div className="progress-fill" style={{ width: `${(analysisPhase + 1) * 20}%` }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="analysis-page results-view">
      <div className="background-glows">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <nav className="analysis-nav">
        <div className="container nav-row">
          <div className="logo">
            <Sparkles className="logo-icon" />
            <span>AI Resume Analyzer</span>
          </div>
          <button className="btn btn-secondary" onClick={() => setShowResults(false)}>
            Re-upload
          </button>
        </div>
      </nav>

      <main className="container">
        <div className="results-grid">
          {/* Main Score Column */}
          <div className="score-column">
            <div className="card score-card">
              <h3>Overall ATS Score</h3>
              <div className="score-meter-container">
                <svg viewBox="0 0 100 100" className="score-svg">
                  <circle className="score-bg" cx="50" cy="50" r="45"></circle>
                  <circle 
                    className="score-fill" 
                    cx="50" cy="50" r="45" 
                    style={{ strokeDashoffset: 283 - (283 * score) / 100 }}
                  ></circle>
                </svg>
                <div className="score-value">
                  <span className="number">{score}</span>
                  <span className="total">/100</span>
                </div>
              </div>
              <div className="score-label">
                {score >= 80 ? 'Excellent' : score >= 60 ? 'Needs Improvement' : 'Critical'}
              </div>
              <p className="score-desc">Your resume has a solid foundation but lacks specific industry keywords that recruiters search for.</p>
              
              <button className="btn btn-primary w-100 mt-2">
                Fix Resume with AI
                <Sparkles size={18} />
              </button>
            </div>

            <div className="card quick-actions">
              <h4>Quick Fixes</h4>
              <ul className="action-list">
                <li><CheckCircle2 size={16} className="text-success" /> Standardize job dates</li>
                <li><AlertCircle size={16} className="text-warning" /> Add LinkedIn profile link</li>
                <li><XCircle size={16} className="text-danger" /> Remove complex graphics</li>
              </ul>
            </div>
          </div>

          {/* Analysis Details Column */}
          <div className="details-column">
            <div className="card analysis-breakdown">
              <h3>Deep Analysis</h3>
              
              <div className="breakdown-grid">
                <div className="breakdown-item">
                  <div className="item-header">
                    <Search className="item-icon" />
                    <span>Keywords</span>
                    <span className="item-status yellow">72%</span>
                  </div>
                  <div className="item-bar"><div className="fill" style={{ width: '72%', background: '#fbbf24' }}></div></div>
                </div>

                <div className="breakdown-item">
                  <div className="item-header">
                    <Layout className="item-icon" />
                    <span>Formatting</span>
                    <span className="item-status green">95%</span>
                  </div>
                  <div className="item-bar"><div className="fill" style={{ width: '95%', background: '#22c55e' }}></div></div>
                </div>

                <div className="breakdown-item">
                  <div className="item-header">
                    <BarChart3 className="item-icon" />
                    <span>Impact Statements</span>
                    <span className="item-status red">45%</span>
                  </div>
                  <div className="item-bar"><div className="fill" style={{ width: '45%', background: '#ef4444' }}></div></div>
                </div>

                <div className="breakdown-item">
                  <div className="item-header">
                    <Layers className="item-icon" />
                    <span>Skill Relevance</span>
                    <span className="item-status green">88%</span>
                  </div>
                  <div className="item-bar"><div className="fill" style={{ width: '88%', background: '#22c55e' }}></div></div>
                </div>

                <div className="breakdown-item">
                  <div className="item-header">
                    <Zap className="item-icon" />
                    <span>Experience Quality</span>
                    <span className="item-status yellow">65%</span>
                  </div>
                  <div className="item-bar"><div className="fill" style={{ width: '65%', background: '#fbbf24' }}></div></div>
                </div>
              </div>
            </div>

            <div className="card suggestions-card">
              <h3>Tailored Suggestions</h3>
              <div className="suggestions-list">
                <div className="suggestion-item bad">
                  <div className="s-status"><XCircle size={18} /> <span>Weak bullet points</span></div>
                  <p>"Responsible for managing a team and handling daily operations."</p>
                </div>
                <div className="suggestion-item divider">
                  <ChevronRight size={16} />
                </div>
                <div className="suggestion-item good">
                  <div className="s-status"><CheckCircle2 size={18} /> <span>Impact-driven metrics</span></div>
                  <p>"Led a cross-functional team of 12, increasing operational efficiency by 24% through automated workflows."</p>
                </div>
              </div>
              
              <div className="suggestion-tip">
                <Type size={18} className="text-brand" />
                <p><strong>Pro Tip:</strong> Use stronger action verbs like <em>Optimized</em>, <em>Spearheaded</em>, or <em>Engineered</em> to stand out.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AnalysisPage;
