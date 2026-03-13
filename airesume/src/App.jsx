import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import AuthPage from './AuthPage';
import LoginPage from './LoginPage';
import OnboardingPage from './OnboardingPage';
import Dashboard from './Dashboard';
import TemplatesPage from './TemplatesPage';
import AnalysisPage from './AnalysisPage';
import TailorPage from './TailorPage';
import JobMatchPage from './JobMatchPage';
import SkillGapPage from './SkillGapPage';
import InterviewPrepPage from './InterviewPrepPage';
import PortfolioPage from './PortfolioPage';
import LinkedInOptimizerPage from './LinkedInOptimizerPage';
import PricingPage from './PricingPage';
import DevNav from './DevNav';
import { Sun, Moon } from 'lucide-react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const errorHandler = (e) => {
      console.error("App Crash:", e.error);
      setHasError(true);
      setError(e.error?.message || "Something went wrong.");
    };
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div style={{ padding: '2rem', background: '#1a1a1a', color: '#ff4444', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '1rem' }}>Oops! The UI Crashed.</h1>
        <p style={{ color: '#888', marginBottom: '2rem' }}>Error: {error}</p>
        <button onClick={() => window.location.reload()} style={{ padding: '0.75rem 1.5rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Reload Page</button>
      </div>
    );
  }
  return children;
};

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // We can pass these down or use window.location hash for a simple route,
  // but for now, we'll just listen to hash changes for a dirty quick route.
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#auth') {
        setCurrentPage('auth');
      } else if (hash === '#login') {
        setCurrentPage('login');
      } else if (hash === '#onboarding') {
        setCurrentPage('onboarding');
      } else if (hash === '#dashboard') {
        setCurrentPage('dashboard');
      } else if (hash === '#analysis') {
        setCurrentPage('analysis');
      } else if (hash === '#tailor') {
        setCurrentPage('tailor');
      } else if (hash === '#job-match') {
        setCurrentPage('job-match');
      } else if (hash === '#skill-gap') {
        setCurrentPage('skill-gap');
      } else if (hash === '#interview-prep') {
        setCurrentPage('interview-prep');
      } else if (hash === '#portfolio') {
        setCurrentPage('portfolio');
      } else if (hash === '#linkedin-optimizer') {
        setCurrentPage('linkedin-optimizer');
      } else if (hash === '#pricing') {
        setCurrentPage('pricing');
      } else if (hash === '#templates') {
        setCurrentPage('templates');
      } else {
        setCurrentPage('landing');
      }
      
      // Always scroll to top on page change
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ErrorBoundary>
      <div 
        onClick={toggleTheme}
        className="theme-toggle-btn"
        style={{
          position: 'fixed',
          bottom: '2.25rem',
          left: '2rem',
          background: 'rgba(var(--bg-rgb), 0.8)',
          backdropFilter: 'blur(10px)',
          color: 'var(--brand-primary)',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          border: '1px solid var(--border-color)',
          zIndex: 9999,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </div>
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'auth' && <AuthPage />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'onboarding' && <OnboardingPage />}
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'templates' && <TemplatesPage />}
      {currentPage === 'analysis' && <AnalysisPage />}
      {currentPage === 'tailor' && <TailorPage />}
      {currentPage === 'job-match' && <JobMatchPage />}
      {currentPage === 'skill-gap' && <SkillGapPage />}
      {currentPage === 'interview-prep' && <InterviewPrepPage />}
      {currentPage === 'portfolio' && <PortfolioPage />}
      {currentPage === 'linkedin-optimizer' && <LinkedInOptimizerPage />}
      {currentPage === 'pricing' && <PricingPage />}
      <DevNav />
    </ErrorBoundary>
  );
}

export default App;
