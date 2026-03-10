import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Wand2, 
  BarChart, 
  Briefcase, 
  TrendingUp, 
  MessageSquare, 
  Layout, 
  Linkedin, 
  Settings,
  Bell,
  Search,
  User,
  Award,
  Target,
  Lightbulb,
  Download,
  Plus,
  Upload,
  Sparkles,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'My Resumes', icon: FileText },
    { name: 'AI Resume Builder', icon: Wand2 },
    { name: 'Resume Score', icon: BarChart },
    { name: 'Job Match', icon: Briefcase },
    { name: 'Skill Gap Analyzer', icon: TrendingUp },
    { name: 'Interview Prep', icon: MessageSquare },
    { name: 'Portfolio Builder', icon: Layout },
    { name: 'LinkedIn Optimizer', icon: Linkedin },
    { name: 'Settings', icon: Settings },
  ];

  const widgets = [
    { title: 'Resume Score', value: '86/100', icon: Award, trend: '+4% this week', color: 'var(--brand-primary)' },
    { title: 'Jobs Matched', value: '24', icon: Target, trend: '8 new today', color: 'var(--success)' },
    { title: 'Skill Suggestions', value: '3', icon: Lightbulb, trend: 'Review needed', color: 'var(--brand-secondary)' },
    { title: 'Downloads', value: '12', icon: Download, trend: '+2 this month', color: '#8b5cf6' },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Left Sidebar */}
      <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Wand2 className="logo-icon" size={24} />
          <h2>CareerForge <span>AI</span></h2>
          <button className="close-sidebar" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <button 
                    className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(item.name);
                      setIsSidebarOpen(false);
                    }}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                    {activeTab === item.name && <ChevronRight size={16} className="active-arrow" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="upgrade-card">
            <Sparkles size={24} className="upgrade-icon" />
            <h3>Go Premium</h3>
            <p>Unlock all AI features</p>
            <button className="upgrade-btn">Upgrade Now</button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* Top Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h1>{activeTab}</h1>
          </div>
          
          <div className="header-right">
            <div className="search-bar">
              <Search size={18} />
              <input type="text" placeholder="Search resumes, jobs..." />
            </div>
            
            <button className="icon-btn notification-btn">
              <Bell size={20} />
              <span className="badge">2</span>
            </button>
            
            <button className="profile-btn">
              <div className="profile-avatar">
                <User size={20} />
              </div>
              <span className="profile-name">Alex Smith</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {activeTab === 'Dashboard' ? (
            <div className="dashboard-overview">
              {/* Welcome Section */}
              <section className="welcome-section">
                <div className="welcome-text">
                  <h2>Welcome back, Alex! 👋</h2>
                  <p>Your resume is performing well in the top 15% of candidates for Front-End Developer roles.</p>
                </div>
                
                <div className="quick-actions">
                  <button className="action-btn primary">
                    <Plus size={18} />
                    Create New
                  </button>
                  <button className="action-btn secondary">
                    <Upload size={18} />
                    Upload
                  </button>
                  <button className="action-btn outline">
                    <Wand2 size={18} />
                    Tailor for Job
                  </button>
                </div>
              </section>

              {/* Widgets Grid */}
              <section className="widgets-grid">
                {widgets.map((widget, index) => {
                  const Icon = widget.icon;
                  return (
                    <div className="widget-card glass-panel" key={index}>
                      <div className="widget-header">
                        <div className="widget-icon-wrapper" style={{ backgroundColor: `${widget.color}20`, color: widget.color }}>
                          <Icon size={24} />
                        </div>
                        <span className="widget-trend">{widget.trend}</span>
                      </div>
                      <div className="widget-body">
                        <h3>{widget.value}</h3>
                        <p>{widget.title}</p>
                      </div>
                    </div>
                  );
                })}
              </section>

              {/* Bottom Sections Area */}
              <div className="dashboard-bottom-grid">
                <section className="recent-activity glass-panel">
                  <h3>Recent Activity</h3>
                  <div className="activity-list">
                    <div className="activity-item">
                      <div className="activity-icon blue"><FileText size={16} /></div>
                      <div className="activity-details">
                        <h4>Software Engineer Resume updated</h4>
                        <p>2 hours ago</p>
                      </div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-icon green"><Target size={16} /></div>
                      <div className="activity-details">
                        <h4>Matched with Senior Dev role at Google</h4>
                        <p>5 hours ago</p>
                      </div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-icon purple"><Wand2 size={16} /></div>
                      <div className="activity-details">
                        <h4>AI analyzed your resume summary</h4>
                        <p>Yesterday</p>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section className="recommended-jobs glass-panel">
                  <div className="section-header">
                    <h3>Recommended Jobs</h3>
                    <button className="view-all-btn">View All</button>
                  </div>
                  <div className="jobs-list">
                    <div className="job-card">
                      <div className="job-info">
                        <h4>Frontend Developer</h4>
                        <p>TechCorp • Remote</p>
                      </div>
                      <div className="job-match">92% Match</div>
                    </div>
                    <div className="job-card">
                      <div className="job-info">
                        <h4>React Engineer</h4>
                        <p>StartUp Inc • New York</p>
                      </div>
                      <div className="job-match">88% Match</div>
                    </div>
                    <div className="job-card">
                      <div className="job-info">
                        <h4>UX/UI Developer</h4>
                        <p>DesignHub • London</p>
                      </div>
                      <div className="job-match">75% Match</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          ) : (
            <div className="placeholder-content glass-panel">
              <LayoutDashboard size={48} className="placeholder-icon" />
              <h2>{activeTab}</h2>
              <p>This section is currently under development.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
