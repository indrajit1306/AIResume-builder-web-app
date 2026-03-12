import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Target, 
  Filter, 
  Search, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Bookmark,
  Building2,
  Clock,
  RefreshCw
} from 'lucide-react';
import './JobMatchPage.css';

const JOBS_DATA = [
  {
    id: 1,
    company: 'TechFlow Systems',
    role: 'Senior Frontend Engineer',
    location: 'San Francisco, CA',
    salary: '$160k - $210k',
    matchScore: 98,
    type: 'Full-time',
    isRemote: true,
    experience: 'Senior',
    posted: '2 hours ago',
    tags: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 2,
    company: 'Nexus Digital',
    role: 'Lead Product Designer',
    location: 'Remote',
    salary: '$140k - $180k',
    matchScore: 92,
    type: 'Contract',
    isRemote: true,
    experience: 'Senior',
    posted: '5 hours ago',
    tags: ['Figma', 'UI/UX', 'Design Systems']
  },
  {
    id: 3,
    company: 'CloudScale AI',
    role: 'Full Stack Developer',
    location: 'New York, NY',
    salary: '$130k - $170k',
    matchScore: 89,
    type: 'Full-time',
    isRemote: false,
    experience: 'Mid-Level',
    posted: '1 day ago',
    tags: ['Python', 'React', 'PostgreSQL']
  },
  {
    id: 4,
    company: 'Evergreen Health',
    role: 'Software Architect',
    location: 'Austin, TX',
    salary: '$180k - $240k',
    matchScore: 85,
    type: 'Full-time',
    isRemote: true,
    experience: 'Expert',
    posted: '3 days ago',
    tags: ['Microservices', 'AWS', 'Java']
  },
  {
    id: 5,
    company: 'Innova Solutions',
    role: 'Junior Web Developer',
    location: 'Chicago, IL',
    salary: '$80k - $110k',
    matchScore: 81,
    type: 'Full-time',
    isRemote: false,
    experience: 'Entry-Level',
    posted: '12 hours ago',
    tags: ['JavaScript', 'HTML/CSS', 'Vue.js']
  },
  {
    id: 6,
    company: 'Starlight Media',
    role: 'DevOps Engineer',
    location: 'Remote',
    salary: '$150k - $190k',
    matchScore: 78,
    type: 'Full-time',
    isRemote: true,
    experience: 'Senior',
    posted: '6 hours ago',
    tags: ['Docker', 'Kubernetes', 'CI/CD']
  }
];

const JobMatchPage = () => {
  const [isRemoteOnly, setIsRemoteOnly] = useState(false);
  const [expLevel, setExpLevel] = useState('All');
  const [salaryRange, setSalaryRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  const filteredJobs = JOBS_DATA.filter(job => {
    const matchesRemote = !isRemoteOnly || job.isRemote;
    const matchesExp = expLevel === 'All' || job.experience === expLevel;
    const matchesSearch = job.role.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Simple salary simulation
    let matchesSalary = true;
    if (salaryRange === '150k+') {
        matchesSalary = job.salary.includes('150') || job.salary.includes('180') || job.salary.includes('210');
    } else if (salaryRange === '100k-150k') {
        matchesSalary = job.salary.includes('110') || job.salary.includes('130') || job.salary.includes('140');
    }

    return matchesRemote && matchesExp && matchesSearch && matchesSalary;
  });

  return (
    <div className="job-match-page">
      <div className="jm-bg">
        <div className="jm-glow jm-glow-1"></div>
        <div className="jm-glow jm-glow-2"></div>
      </div>

      <header className="jm-header">
        <div className="container jm-nav">
          <div className="logo">
            <Sparkles className="logo-sparkle" />
            <span>AI Job Matcher</span>
          </div>
          <div className="profile-status">
            <div className="pulse-dot"></div>
            <span>Profile Level: <strong>Expert</strong></span>
          </div>
        </div>
      </header>

      <main className="container jm-main">
        <div className="jm-hero">
          <h1>Discover Your <span className="text-gradient">Perfect Match</span></h1>
          <p>Our AI analyzes thousands of data points to find roles that perfectly align with your unique skills and career goals.</p>
        </div>

        <div className="jm-layout">
          {/* Sidebar Filters */}
          <aside className="jm-filters">
            <div className="filter-card">
              <div className="filter-header">
                <Filter size={18} />
                <h3>Smart Filters</h3>
              </div>

              <div className="filter-section">
                <label>Experience Level</label>
                <select value={expLevel} onChange={(e) => setExpLevel(e.target.value)}>
                  <option>All</option>
                  <option>Entry-Level</option>
                  <option>Mid-Level</option>
                  <option>Senior</option>
                  <option>Expert</option>
                </select>
              </div>

              <div className="filter-section">
                <label>Salary Range</label>
                <select value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)}>
                  <option>All</option>
                  <option>100k-150k</option>
                  <option>150k+</option>
                </select>
              </div>

              <div className="filter-section toggle-section">
                <div className="toggle-label">
                    <Globe size={18} />
                    <span>Remote Only</span>
                </div>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={isRemoteOnly}
                    onChange={(e) => setIsRemoteOnly(e.target.checked)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              <button className="reset-btn" onClick={() => {
                setIsRemoteOnly(false);
                setExpLevel('All');
                setSalaryRange('All');
                setSearchQuery('');
              }}>Reset All Filters</button>
            </div>

            <div className="match-stats-card">
                <h3>Global Match Score</h3>
                <div className="stat-circle">
                    <Target size={40} className="stat-icon" />
                    <div className="stat-value">94%</div>
                </div>
                <p>Your profile is highly competitive in the current market.</p>
                <button className="btn btn-secondary btn-sm" style={{ width: '100%' }}>Improve Score</button>
            </div>
          </aside>

          {/* Job Feed */}
          <section className="jm-feed">
            <div className="feed-controls">
                <div className="search-box">
                    <Search size={20} className="search-icon" />
                    <input 
                        type="text" 
                        placeholder="Search roles or companies..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className={`refresh-btn ${isRefreshing ? 'spinning' : ''}`} onClick={handleRefresh}>
                    <RefreshCw size={20} />
                </button>
            </div>

            <div className="job-list">
              {filteredJobs.map(job => (
                <div key={job.id} className="job-card animate-in" style={{ animationDelay: `${job.id * 0.1}s` }}>
                  <div className="job-card-top">
                    <div className="company-info">
                      <div className="company-logo">
                        <Building2 size={24} />
                      </div>
                      <div className="title-block">
                        <h3>{job.role}</h3>
                        <p>{job.company}</p>
                      </div>
                    </div>
                    <div className="match-score">
                      <div className="score-ring">
                        <svg viewBox="0 0 36 36">
                            <path className="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path className="ring-fill" strokeDasharray={`${job.matchScore}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        </svg>
                        <span>{job.matchScore}%</span>
                      </div>
                      <small>AI Match</small>
                    </div>
                  </div>

                  <div className="job-details">
                    <div className="detail-item">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="detail-item">
                      <DollarSign size={16} />
                      <span>{job.salary}</span>
                    </div>
                    <div className="detail-item">
                      <Clock size={16} />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  <div className="job-tags">
                    {job.tags.map(tag => (
                      <span key={tag} className="job-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="job-footer">
                    <div className="save-btn">
                        <Bookmark size={20} />
                    </div>
                    <div className="footer-actions">
                      <button className="btn btn-secondary btn-sm" onClick={() => window.location.hash = '#tailor'}>
                        Tailor Resume
                      </button>
                      <button className="btn btn-primary btn-sm">
                        Apply Now
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {filteredJobs.length === 0 && (
                <div className="no-matches">
                    <Zap size={48} className="no-matches-icon" />
                    <h2>No matches found nearby</h2>
                    <p>Try broadening your filters or updating your profile to see more relevant roles.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default JobMatchPage;
