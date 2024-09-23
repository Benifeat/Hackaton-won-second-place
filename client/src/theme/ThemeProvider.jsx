import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as MThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(window.localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const savedMode = window.localStorage.getItem('theme') || 'light';
    setMode(savedMode);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', mode)
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <MThemeProvider theme={theme}>
        {children}
      </MThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext }

