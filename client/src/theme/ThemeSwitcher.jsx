import React, { useContext , useState , useEffect} from 'react';
// import { Button } from '@mui/material';
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"
import { ThemeContext } from './ThemeProvider.jsx';

const ThemeSwitcher = () => {
  const { mode, setMode } = useContext(ThemeContext);
  const [isToggled, setToggle] = useState(mode === 'dark' ? false : true)
  
    useEffect (() => {
      setMode(isToggled === true ? 'light' : 'dark');
  }, [isToggled]);

  return (
    <Classic toggled={isToggled} toggle={setToggle} duration={750}/> 
  );
};

export default ThemeSwitcher;
