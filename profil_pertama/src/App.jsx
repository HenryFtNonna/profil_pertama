// import React, { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import Pages from './Pages';

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [language, setLanguage] = useState('en'); // 'en' untuk English, 'id' untuk Indonesia

//   return (
    
//     <div className={isDarkMode ? 'dark' : 'light'}>
//       <AnimatePresence mode='wait'>
//         <Pages
//           isDarkMode={isDarkMode}
//           setIsDarkMode={setIsDarkMode}
//           language={language}
//           setLanguage={setLanguage}
//           key={language + (isDarkMode ? 'dark' : 'light')} // Force re-render on theme/lang change
//         />
//       </AnimatePresence>
//     </div>
//   );
// }

// export default App;


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