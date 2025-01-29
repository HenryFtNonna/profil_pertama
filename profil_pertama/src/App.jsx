import React, { useState } from 'react';
import Pages from './Pages';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <Pages isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
}

export default App;