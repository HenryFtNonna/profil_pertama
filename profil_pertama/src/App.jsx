import React, { useState } from 'react';
import Pages from './Pages';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' untuk English, 'id' untuk Indonesia

  return (
    
    <div className={isDarkMode ? 'dark' : 'light'}>
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