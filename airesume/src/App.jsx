import React, { useState } from 'react';
import LandingPage from './LandingPage';
import AuthPage from './AuthPage';
import LoginPage from './LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  // We can pass these down or use window.location hash for a simple route,
  // but for now, we'll just listen to hash changes for a dirty quick route.
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#auth') {
        setCurrentPage('auth');
      } else if (hash === '#login') {
        setCurrentPage('login');
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
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'auth' && <AuthPage />}
      {currentPage === 'login' && <LoginPage />}
    </>
  );
}

export default App;
