import React, { useState } from 'react';
import { 
  Home, 
  LogIn, 
  UserPlus, 
  LayoutDashboard, 
  Layers, 
  BarChart3, 
  Target,
  Briefcase,
  TrendingUp,
  MessageSquare,
  Layout,
  Linkedin,
  CreditCard,
  ShieldCheck,
  Settings2,
  ChevronUp,
  X
} from 'lucide-react';
import './DevNav.css';

const DevNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: 'Landing', hash: '#', icon: Home },
    { name: 'Login', hash: '#login', icon: LogIn },
    { name: 'Onboarding', hash: '#onboarding', icon: UserPlus },
    { name: 'Dashboard', hash: '#dashboard', icon: LayoutDashboard },
    { name: 'Templates', hash: '#templates', icon: Layers },
    { name: 'AI Analysis', hash: '#analysis', icon: BarChart3 },
    { name: 'AI Tailoring', hash: '#tailor', icon: Target },
    { name: 'AI Job Match', hash: '#job-match', icon: Briefcase },
    { name: 'Skill Gap', hash: '#skill-gap', icon: TrendingUp },
    { name: 'Interview Prep', hash: '#interview-prep', icon: MessageSquare },
    { name: 'Portfolio', hash: '#portfolio', icon: Layout },
    { name: 'LinkedIn Opt', hash: '#linkedin-optimizer', icon: Linkedin },
    { name: 'Pricing', hash: '#pricing-plans', icon: CreditCard },
    { name: 'Admin', hash: '#admin', icon: ShieldCheck },
  ];

  return (
    <div className={`dev-nav-container ${isOpen ? 'is-open' : ''}`}>
      <div className="dev-nav-menu">
        <div className="dev-nav-header">
          <span>Dev Navigation</span>
          <button onClick={() => setIsOpen(false)} className="close-btn">
            <X size={16} />
          </button>
        </div>
        <div className="dev-nav-links">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <a 
                key={route.name} 
                href={route.hash} 
                className="dev-nav-item"
                onClick={() => setIsOpen(false)}
              >
                <Icon size={18} />
                <span>{route.name}</span>
              </a>
            );
          })}
        </div>
      </div>
      
      <button 
        className="dev-nav-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        title="Development Navigation"
      >
        {isOpen ? <ChevronUp size={24} /> : <Settings2 size={24} />}
      </button>
    </div>
  );
};

export default DevNav;
