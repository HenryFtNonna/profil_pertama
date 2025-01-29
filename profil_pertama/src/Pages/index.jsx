import React, { useState } from 'react';
import HeroSection from './section/herosection';
import SosmedSection from './section/sosmedsection';

export default function Pages() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <HeroSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <SosmedSection isDarkMode={isDarkMode} />
    </div>
  );
}