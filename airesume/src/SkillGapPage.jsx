import React, { useState } from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  BookOpen, 
  ChevronRight, 
  Search, 
  Sparkles,
  Award,
  Clock,
  ExternalLink,
  ArrowRight,
  GraduationCap,
  Target
} from 'lucide-react';
import './SkillGapPage.css';

const SKILLS_ANALYSIS = {
  role: "Data Analyst",
  matchPercentage: 68,
  possessedSkills: [
    { name: "SQL", level: "Advanced", icon: "database" },
    { name: "Excel", level: "Expert", icon: "table" },
    { name: "Tableau", level: "Intermediate", icon: "pie-chart" },
    { name: "Statistics", level: "Intermediate", icon: "bar-chart" },
  ],
  missingSkills: [
    { name: "Python", importance: "Critical", timeToLearn: "4-6 weeks" },
    { name: "Power BI", importance: "High", timeToLearn: "2-3 weeks" },
    { name: "Machine Learning", importance: "Growth", timeToLearn: "8-12 weeks" },
    { name: "Cloud Basics (AWS/Azure)", importance: "Medium", timeToLearn: "2-4 weeks" },
  ],
  recommendedCourses: [
    {
      title: "Python for Data Science Masterclass",
      provider: "Coursera",
      rating: 4.8,
      duration: "40 hours",
      level: "Beginner to Intermediate",
      link: "#"
    },
    {
      title: "Advanced Power BI Desktop",
      provider: "Udemy",
      rating: 4.9,
      duration: "15 hours",
      level: "Intermediate",
      link: "#"
    },
    {
      title: "Probability and Statistics for Business",
      provider: "edX",
      rating: 4.7,
      duration: "30 hours",
      level: "Beginner",
      link: "#"
    }
  ]
};

const SkillGapPage = () => {
  const [selectedRole, setSelectedRole] = useState("Data Analyst");

  return (
    <div className="skill-gap-page">
      <div className="sg-background">
        <div className="sg-glow sg-glow-1"></div>
        <div className="sg-glow sg-glow-2"></div>
      </div>

      <header className="sg-header">
        <div className="container sg-nav">
          <div className="sg-logo">
            <TrendingUp className="sg-logo-icon" />
            <span>AI Skill Gap Analyzer</span>
          </div>
          <div className="sg-user-badge">
            <div className="avatar-mini"></div>
            <span>Career Path: <strong>Data Science</strong></span>
          </div>
        </div>
      </header>

      <main className="container sg-main">
        {/* Hero Section */}
        <section className="sg-hero text-center">
          <h1 className="sg-title">Close the Gap to your <span className="text-gradient">Dream Role</span></h1>
          <p className="sg-subtitle">We compared your resume with 5,000+ job descriptions for <strong>{selectedRole}</strong>.</p>
          
          <div className="sg-role-selector">
            <Search size={18} className="sg-search-icon" />
            <input type="text" className="sg-role-input" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} />
            <button className="btn btn-primary btn-sm">Change Role</button>
          </div>
        </section>

        <div className="sg-grid">
          {/* Analysis Overview */}
          <div className="sg-card analysis-card">
            <div className="card-header">
              <Sparkles size={20} className="text-brand" />
              <h3>Skill Comparison</h3>
              <div className="match-tag">{SKILLS_ANALYSIS.matchPercentage}% Match</div>
            </div>

            <div className="skills-comparison">
              <div className="skill-group">
                <h4 className="group-label possessed">Skills You Have</h4>
                <div className="skill-items">
                  {SKILLS_ANALYSIS.possessedSkills.map(skill => (
                    <div key={skill.name} className="skill-item have">
                      <CheckCircle2 size={18} className="icon-success" />
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-group">
                <h4 className="group-label missing">Skills Missing</h4>
                <div className="skill-items">
                  {SKILLS_ANALYSIS.missingSkills.map(skill => (
                    <div key={skill.name} className="skill-item lack">
                      <XCircle size={18} className="icon-error" />
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`importance-tag ${skill.importance.toLowerCase()}`}>
                          {skill.importance}
                        </span>
                      </div>
                      <div className="time-est">
                        <Clock size={12} />
                        {skill.timeToLearn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Learning Roadmap */}
          <div className="sg-card roadmap-card">
            <div className="card-header">
              <GraduationCap size={20} className="text-brand" />
              <h3>Your AI Learning Roadmap</h3>
            </div>
            
            <div className="roadmap-steps">
              <div className="roadmap-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>Master Python Fundamentals</h4>
                  <p>Focus on Pandas, NumPy, and Data Structures for analysis.</p>
                  <div className="step-meta">
                    <span className="duration">Est. 20 Days</span>
                    <button className="btn-link">View Notes <ArrowRight size={14}/></button>
                  </div>
                </div>
              </div>

              <div className="roadmap-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>Business Intelligence with Power BI</h4>
                  <p>Learn DAX, data modeling, and creating dynamic dashboards.</p>
                  <div className="step-meta">
                    <span className="duration">Est. 12 Days</span>
                    <button className="btn-link">View Notes <ArrowRight size={14}/></button>
                  </div>
                </div>
              </div>

              <div className="roadmap-step future">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>Deployment & Cloud Basics</h4>
                  <p>Understand how to deploy models and manage SQL on AWS.</p>
                  <div className="step-meta">
                    <span className="duration">Unlock after Step 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Recommendations */}
        <section className="sg-courses-section">
          <div className="section-header">
            <h3>Recommended Courses to <span className="text-gradient">Bridge the Gap</span></h3>
            <button className="btn btn-secondary btn-sm">Explore More</button>
          </div>

          <div className="courses-grid">
            {SKILLS_ANALYSIS.recommendedCourses.map((course, idx) => (
              <div key={idx} className="course-card">
                <div className="course-provider">{course.provider}</div>
                <h4>{course.title}</h4>
                <div className="course-meta">
                  <div className="meta-item">
                    <Award size={14} />
                    <span>{course.rating} / 5.0</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="course-footer">
                  <span className="level-badge">{course.level}</span>
                  <a href={course.link} className="enroll-btn">
                    Enroll Now
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="sg-footer-cta glass-panel">
          <div className="cta-content">
            <Target size={40} className="cta-icon" />
            <div className="cta-text">
              <h3>Ready to update your resume?</h3>
              <p>Once you acquire a new skill, we can automatically update your resume sections with AI.</p>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => window.location.hash = '#dashboard'}>
            Go to Dashboard
          </button>
        </div>
      </main>
    </div>
  );
};

export default SkillGapPage;
