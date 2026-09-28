import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { BookCallModal } from './components/BookCallModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // System Preference Theme Logic
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    // Initial check
    handleThemeChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  // Simple Router Logic
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const handleOpenModal = (serviceName: string = '') => {
      setSelectedService(serviceName);
      setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedService('');
  };

  // Normalize path to ignore trailing slashes
  const normalizedPath = currentPath.endsWith('/') && currentPath.length > 1 
    ? currentPath.slice(0, -1) 
    : currentPath;

  // Route Matching
  let content;
  
  // Exact match routes
  if (normalizedPath === '/' || normalizedPath === '') {
    content = <Home onBookCall={handleOpenModal} navigate={navigate} />;
  } else if (normalizedPath === '/about') {
    content = <About onBookCall={() => handleOpenModal()} navigate={navigate} />;
  } else if (normalizedPath === '/services' || normalizedPath.startsWith('/services/')) {
    // Redirect any specific service link back to the main service landing page
    content = <Services onBookCall={handleOpenModal} navigate={navigate} />;
  } else if (normalizedPath === '/contact') {
    content = <Contact onBookCall={() => handleOpenModal()} navigate={navigate} />;
  } else {
    // 404 fallback to home
    content = <Home onBookCall={handleOpenModal} navigate={navigate} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark text-brand-black dark:text-white font-sans selection:bg-purple-100 selection:text-purple-900 flex flex-col">
      <Navbar onBookCall={() => handleOpenModal()} navigate={navigate} currentPath={normalizedPath} />
      
      <main className="flex-grow">
        {content}
      </main>

      <Footer navigate={navigate} />
      <Chatbot />
      <BookCallModal isOpen={isModalOpen} onClose={handleCloseModal} initialService={selectedService} />
    </div>
  );
}

export default App;