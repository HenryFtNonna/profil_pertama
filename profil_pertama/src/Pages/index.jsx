import React from 'react';
import Header from './header';
import HeroSection from './section/herosection';
import SosmedSection from './section/sosmedsection';

export default function Pages({ isDarkMode, setIsDarkMode, language, setLanguage }) {
  return (
    <div>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <HeroSection isDarkMode={isDarkMode} language={language} />
      <SosmedSection isDarkMode={isDarkMode} language={language} />
    </div>
  );
}