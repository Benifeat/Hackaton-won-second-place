import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { ThemeProvider } from '@mui/material/styles'
import { ThemeProvider } from './theme/ThemeProvider.jsx'
// import ThemeSwitcher from './theme/ThemeSwitcher.jsx'
import CssBaseline from '@mui/material/CssBaseline'
// import theme from './theme/Theme'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)