import React, { useState } from 'react';
import Preloader from './Pages/Preloader';
import Pages from './Pages';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      {isLoading && <Preloader setLoading={setLoading} />}
      <Pages
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  );
}

export default App; 