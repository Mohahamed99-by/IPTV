import React, { createContext, useContext, useState } from 'react';
// Create a Context for Dark Mode
const DarkModeContext = createContext();

// Create a Provider Component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom Hook to use Dark Mode Context
export const useDarkMode = () => {
  return useContext(DarkModeContext); // Uncommented and properly exporting the hook
};

// Exporting both the provider and context
export { DarkModeContext };
