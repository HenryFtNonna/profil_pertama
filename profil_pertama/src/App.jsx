import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Pages from './Pages';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' untuk English, 'id' untuk Indonesia

  return (
    
    <div className={isDarkMode ? 'dark' : 'light'}>
      <AnimatePresence mode='wait'>
        <Pages
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          language={language}
          setLanguage={setLanguage}
          key={language + (isDarkMode ? 'dark' : 'light')} // Force re-render on theme/lang change
        />
      </AnimatePresence>
    </div>
  );
}

export default App;