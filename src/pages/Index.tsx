
import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Home from './Home';
import Services from './Services';
import CursorGlow from '@/components/CursorGlow';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'loading' | 'home' | 'services'>('loading');

  const handleLoadingComplete = () => {
    setCurrentPage('home');
  };

  const handleEnterServices = () => {
    setCurrentPage('services');
  };

  const handleBackHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="relative">
      <CursorGlow />
      
      {currentPage === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      {currentPage === 'home' && (
        <Home onEnter={handleEnterServices} />
      )}
      
      {currentPage === 'services' && (
        <Services onBackHome={handleBackHome} />
      )}
    </div>
  );
};

export default Index;
