import React, { useState, useRef } from 'react';
import './OnboardingPage.css';
import {
  BrainCircuit,
  GraduationCap,
  Briefcase,
  User,
  RefreshCw,
  Code,
  Megaphone,
  LineChart,
  Database,
  PenTool,
  Upload,
  Target,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  X,
  FileText
} from 'lucide-react';

function OnboardingPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    careerLevel: '',
    industry: '',
    experienceLevel: '',
    skills: [],
    resumeFile: null,
    careerGoals: []
  });

  const [currentSkill, setCurrentSkill] = useState('');

  const handleNext = () => {
    // Basic validation per step can go here
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = (e) => {
    if (e.key === 'Enter' && currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      updateData('skills', [...formData.skills, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    updateData('skills', formData.skills.filter(s => s !== skillToRemove));
  };

  const toggleGoal = (goal) => {
    const goals = formData.careerGoals;
    if (goals.includes(goal)) {
      updateData('careerGoals', goals.filter(g => g !== goal));
    } else {
      updateData('careerGoals', [...goals, goal]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      updateData('resumeFile', e.target.files[0]);
    }
  };

  const removeFile = () => {
    updateData('resumeFile', null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="ob-step fade-in">
            <h2 className="ob-title">What's your current career level?</h2>
            <p className="ob-subtitle">This helps us tailor the resume templates perfectly for you.</p>
            
            <div className="ob-grid">
              {[
                { id: 'student', title: 'Student', icon: <GraduationCap size={28} />, desc: 'Currently enrolled in school/university' },
                { id: 'fresher', title: 'Fresher', icon: <User size={28} />, desc: 'Recent graduate looking for first job' },
                { id: 'professional', title: 'Professional', icon: <Briefcase size={28} />, desc: 'Experienced in my field' },
                { id: 'switcher', title: 'Career Switcher', icon: <RefreshCw size={28} />, desc: 'Transitioning to a new industry' }
              ].map(option => (
                <div 
                  key={option.id}
                  className={`ob-card ${formData.careerLevel === option.id ? 'selected' : ''}`}
                  onClick={() => updateData('careerLevel', option.id)}
                >
                  <div className="ob-icon-wrapper">{option.icon}</div>
                  <div className="ob-card-content">
                    <h3>{option.title}</h3>
                    <p>{option.desc}</p>
                  </div>
                  {formData.careerLevel === option.id && <CheckCircle2 className="ob-check" />}
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="ob-step fade-in">
            <h2 className="ob-title">Select your target industry</h2>
            <p className="ob-subtitle">Choose the primary field you're applying in to optimize ATS keywords.</p>
            
            <div className="ob-grid minimal">
              {[
                { id: 'software', title: 'Software', icon: <Code size={24} /> },
                { id: 'marketing', title: 'Marketing', icon: <Megaphone size={24} /> },
                { id: 'finance', title: 'Finance', icon: <LineChart size={24} /> },
                { id: 'data', title: 'Data Science', icon: <Database size={24} /> },
                { id: 'design', title: 'Design', icon: <PenTool size={24} /> }
              ].map(option => (
                <div 
                  key={option.id}
                  className={`ob-card minimal-card ${formData.industry === option.id ? 'selected' : ''}`}
                  onClick={() => updateData('industry', option.id)}
                >
                  <div className="ob-icon-wrapper small">{option.icon}</div>
                  <h3>{option.title}</h3>
                  {formData.industry === option.id && <CheckCircle2 className="ob-check small" />}
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="ob-step fade-in">
            <h2 className="ob-title">Years of experience</h2>
            <p className="ob-subtitle">How much professional experience do you have in this field?</p>
            
            <div className="ob-list">
              {[
                { id: '0-1', label: '0-1 years' },
                { id: '1-3', label: '1-3 years' },
                { id: '3-5', label: '3-5 years' },
                { id: '5-10', label: '5-10 years' },
                { id: '10+', label: '10+ years' }
              ].map(exp => (
                <button 
                  key={exp.id}
                  className={`ob-list-btn ${formData.experienceLevel === exp.id ? 'selected' : ''}`}
                  onClick={() => updateData('experienceLevel', exp.id)}
                >
                  {exp.label}
                  {formData.experienceLevel === exp.id && <CheckCircle2 size={18} />}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="ob-step fade-in">
            <h2 className="ob-title">Add your core skills</h2>
            <p className="ob-subtitle">Type a skill and press Enter. Aim for 5-10 key skills.</p>
            
            <div className="ob-input-container">
              <input 
                type="text" 
                placeholder="e.g. React, Project Management, Python..." 
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyDown={addSkill}
                className="ob-input"
              />
            </div>
            
            <div className="ob-tags-container">
              {formData.skills.map(skill => (
                <span key={skill} className="ob-tag">
                  {skill}
                  <X size={14} className="ob-tag-remove" onClick={() => removeSkill(skill)} />
                </span>
              ))}
              {formData.skills.length === 0 && (
                <span className="ob-placeholder-tag">Skills will appear here...</span>
              )}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="ob-step fade-in">
            <h2 className="ob-title">Upload existing resume <span className="optional">(Optional)</span></h2>
            <p className="ob-subtitle">Let our AI extract your details automatically to save time.</p>
            
            <div className="ob-upload-area" onClick={() => fileInputRef.current?.click()}>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept=".pdf,.doc,.docx" 
                hidden 
              />
              
              {!formData.resumeFile ? (
                <div className="ob-upload-prompt">
                  <div className="ob-upload-icon">
                     <Upload size={48} />
                  </div>
                  <h3>Click to browse or drag & drop</h3>
                  <p>PDF or DOCX (max 5MB)</p>
                </div>
              ) : (
                <div className="ob-file-preview" onClick={e => e.stopPropagation()}>
                  <div className="file-info">
                    <FileText size={28} className="text-brand" />
                    <span className="file-name">{formData.resumeFile.name}</span>
                  </div>
                  <button className="file-remove" onClick={removeFile}>
                    <X size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="ob-step fade-in">
            <h2 className="ob-title">What are your career goals?</h2>
            <p className="ob-subtitle">Select all that apply to help us generate targeted recommendations.</p>
            
            <div className="ob-goals-grid">
              {[
                { id: 'promotion', label: 'Get promoted' },
                { id: 'salary', label: 'Increase salary' },
                { id: 'brand', label: 'Build personal brand' },
                { id: 'remote', label: 'Find remote work' },
                { id: 'relocate', label: 'Relocate' },
                { id: 'lead', label: 'Transition to leadership' }
              ].map(goal => (
                <div 
                  key={goal.id}
                  className={`ob-goal-card ${formData.careerGoals.includes(goal.id) ? 'selected' : ''}`}
                  onClick={() => toggleGoal(goal.id)}
                >
                  <Target size={20} className="goal-icon" />
                  <span>{goal.label}</span>
                  {formData.careerGoals.includes(goal.id) && <CheckCircle2 className="ob-check small" />}
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="ob-container">
      {/* Dynamic Background */}
      <div className="ob-glow-1"></div>
      <div className="ob-glow-2"></div>

      <div className="ob-wrapper">
        <div className="ob-header">
          <a href="#landing" className="ob-brand">
            <BrainCircuit size={28} className="logo-icon" />
            <span>CareerForge AI</span>
          </a>
          <a href="#login" className="btn btn-secondary btn-sm">Save & Exit</a>
        </div>

        <div className="ob-main-card">
          {/* Progress Bar */}
          <div className="ob-progress">
            <div className="ob-progress-track">
              <div 
                className="ob-progress-fill"
                style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              ></div>
            </div>
            <div className="ob-progress-labels">
              <span>Start</span>
              <span className="current-step">Step {step} of {totalSteps}</span>
              <span>Finish</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="ob-content">
            {renderStepContent()}
          </div>

          {/* Footer Actions */}
          <div className="ob-footer">
            <button 
              className={`btn btn-secondary ob-back-btn ${step === 1 ? 'hidden' : ''}`}
              onClick={handleBack}
            >
              <ArrowLeft size={18} /> Back
            </button>
            <button 
              className="btn btn-primary ob-next-btn"
              onClick={step === totalSteps ? () => alert('Setup Complete! Redirecting to Dashboard...') : handleNext}
            >
              {step === totalSteps ? 'Complete Profile' : 'Continue'}
              {step !== totalSteps && <ArrowRight size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage;
