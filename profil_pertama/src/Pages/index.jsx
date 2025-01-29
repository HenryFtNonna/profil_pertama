import React from 'react';
import Header from './header';
import HeroSection from './section/herosection';
import SosmedSection from './section/sosmedsection';

export default function Pages({ isDarkMode, setIsDarkMode }) {
  return (
    <div>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection isDarkMode={isDarkMode} />
      <SosmedSection isDarkMode={isDarkMode} />
    </div>
  );
}