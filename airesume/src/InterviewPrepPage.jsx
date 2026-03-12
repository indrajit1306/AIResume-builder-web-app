import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Mic, 
  Square, 
  RefreshCw, 
  ChevronRight, 
  Target, 
  Award, 
  Zap, 
  CheckCircle2, 
  PlayCircle,
  BarChart,
  Video,
  Sparkles,
  Search,
  Building,
  BrainCircuit
} from 'lucide-react';
import './InterviewPrepPage.css';

const MOCK_QUESTIONS = [
  "Tell me about a time you had to handle a conflict within your team. How did you resolve it?",
  "Why do you want to work for this specific company?",
  "Can you describe a challenging technical problem you solved recently?",
  "How do you prioritize your tasks when you have multiple tight deadlines?",
  "Where do you see yourself in five years?"
];

const InterviewPrepPage = () => {
  const [step, setStep] = useState('setup'); // setup, interview, results
  const [role, setRole] = useState('Frontend Developer');
  const [companyType, setCompanyType] = useState('FAANG');
  const [expLevel, setExpLevel] = useState('Senior');
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [interviewProgress, setInterviewProgress] = useState(0);
  
  // Simulation states
  const [aiFeedback, setAiFeedback] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const startInterview = () => {
    setStep('interview');
    setInterviewProgress(20);
  };

  const handleRecord = () => {
    if (isRecording) {
      stopRecording();
    } else {
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsAnalyzing(true);
    // Simulate AI analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setAiFeedback({
        confidence: 88,
        strengths: ["Clear structure (STAR method)", "Strong technical terminology", "Good pacing"],
        improvements: ["Mention specific metrics", "Maintain better eye contact (simulated)", "Reduce 'um' and 'eh' sounds"],
        suggestion: "Your answer was very technical, which is great, but don't forget to mention the business impact of your solution. Try to quantify the results (e.g., 'reduced latency by 30%')."
      });
      setStep('results');
    }, 3000);
  };

  return (
    <div className="interview-prep-page">
      <div className="ip-background">
        <div className="ip-glow ip-glow-1"></div>
        <div className="ip-glow ip-glow-2"></div>
      </div>

      <header className="ip-header">
        <div className="container ip-nav">
          <div className="ip-logo">
            <BrainCircuit className="ip-logo-icon" />
            <span>AI Interview Coach</span>
          </div>
          <div className="ip-session-meta">
            {step === 'interview' && <div className="live-badge">LIVE SESSION</div>}
          </div>
        </div>
      </header>

      <main className="container ip-main">
        {step === 'setup' && (
          <div className="setup-container animate-fade-in">
            <div className="setup-hero">
              <Sparkles className="hero-sparkle" />
              <h1>Master Your <span className="text-gradient">Next Interview</span></h1>
              <p>Practice with our AI that adapts to the company’s culture and technical requirements.</p>
            </div>

            <div className="setup-card glass-panel">
              <div className="setup-grid">
                <div className="setup-field">
                  <label><Target size={16} /> Target Role</label>
                  <div className="input-wrapper">
                    <Search size={18} />
                    <input 
                      type="text" 
                      value={role} 
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Senior Product Manager" 
                    />
                  </div>
                </div>

                <div className="setup-field">
                  <label><Building size={16} /> Company Type</label>
                  <select value={companyType} onChange={(e) => setCompanyType(e.target.value)}>
                    <option>FAANG / Big Tech</option>
                    <option>Rapid-Growth Startup</option>
                    <option>Enterprise Corp</option>
                    <option>Creative Agency</option>
                  </select>
                </div>

                <div className="setup-field">
                  <label><Award size={16} /> Experience Level</label>
                  <select value={expLevel} onChange={(e) => setExpLevel(e.target.value)}>
                    <option>Entry-Level</option>
                    <option>Mid-Level</option>
                    <option>Senior</option>
                    <option>Lead / Manager</option>
                  </select>
                </div>
              </div>

              <div className="setup-footer">
                <button className="btn btn-primary btn-lg" onClick={startInterview}>
                  Start Mock Interview
                  <Zap size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 'interview' && (
          <div className="interview-container animate-fade-in">
            <div className="interview-layout">
              <div className="ai-host-side">
                <div className="ai-avatar-container">
                  <div className={`ai-avatar ${isRecording ? 'active' : ''}`}>
                    <div className="avatar-pulse"></div>
                    <img src="https://ui-avatars.com/api/?name=AI+Coach&background=3b82f6&color=fff&size=128" alt="AI Coach" />
                  </div>
                  <div className="ai-status">AI Interviwer is listening...</div>
                </div>

                <div className="question-card glass-panel">
                  <span className="q-label">QUESTION {currentQuestionIndex + 1} OF 5</span>
                  <h3>"{MOCK_QUESTIONS[currentQuestionIndex]}"</h3>
                </div>
              </div>

              <div className="user-recording-side">
                <div className="recording-preview shadow-lg">
                  <div className="camera-overlay">
                    <Video size={24} />
                    <span>Camera is active</span>
                  </div>
                  {isRecording && (
                    <div className="visualizer">
                      <span></span><span></span><span></span><span></span><span></span>
                    </div>
                  )}
                </div>

                <div className="recording-controls">
                  <div className="timer">00:45 / 02:00</div>
                  <button 
                    className={`record-btn ${isRecording ? 'recording' : ''}`}
                    onClick={handleRecord}
                  >
                    {isRecording ? <Square size={24} /> : <Mic size={24} />}
                    {isRecording ? "Stop & Analyze" : "Record Answer"}
                  </button>
                  <button className="btn btn-secondary btn-icon" title="Skip Question">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isAnalyzing && (
          <div className="analysis-overlay">
            <div className="loader-container">
              <RefreshCw className="spinning" size={48} />
              <h2>AI is analyzing your response...</h2>
              <p>Evaluating tone, keywords, and structural clarity.</p>
            </div>
          </div>
        )}

        {step === 'results' && aiFeedback && (
          <div className="results-container animate-fade-in">
            <div className="results-header">
              <div className="score-widget">
                <div className="score-circle">
                  <svg viewBox="0 0 36 36">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="circle-fill" strokeDasharray={`${aiFeedback.confidence}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="score-text">
                    <span className="val">{aiFeedback.confidence}%</span>
                    <span className="lab">Confidence</span>
                  </div>
                </div>
                <div className="verdict">Great job! You're ready for {companyType}.</div>
              </div>
              <div className="actions">
                <button className="btn btn-secondary" onClick={() => setStep('interview')}>Try Again</button>
                <button className="btn btn-primary" onClick={() => setStep('setup')}>Other Questions</button>
              </div>
            </div>

            <div className="results-grid">
              <div className="feedback-card strengths">
                <h4><CheckCircle2 size={18} /> Strengths</h4>
                <ul>
                  {aiFeedback.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>

              <div className="feedback-card improvements">
                <h4><BarChart size={18} /> Areas for Improvement</h4>
                <ul>
                  {aiFeedback.improvements.map((imp, i) => <li key={i}>{imp}</li>)}
                </ul>
              </div>

              <div className="feedback-card suggestion-full">
                <h4><Sparkles size={18} /> AI Expert Suggestion</h4>
                <p>{aiFeedback.suggestion}</p>
                <button className="btn-text">
                  Hear Model Answer <PlayCircle size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default InterviewPrepPage;
