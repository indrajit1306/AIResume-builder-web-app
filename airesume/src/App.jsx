import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import AuthPage from './AuthPage';
import LoginPage from './LoginPage';
import OnboardingPage from './OnboardingPage';
import Dashboard from './Dashboard';
import { Sun, Moon } from 'lucide-react';

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
      } else {
        setCurrentPage('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <div 
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'var(--brand-primary)',
          color: '#fff',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
          zIndex: 9999,
          transition: 'all 0.3s ease'
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
    </>
  );
}

export default App;
