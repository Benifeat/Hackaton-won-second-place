import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/HomePage'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import MapPage from './pages/MapPage/MapPage'
import CalendarPage from './pages/CalendarPage/CalendarPage'
import Donations from './pages/donations/Donations'
import Footer from './components/footer/Footer'
import FAQ from './pages/FAQ/FAQ'
import Posts from './pages/posts/Posts'



import ExpertRegister from './pages/ExpertRegister/ExpertRegister'
import Verify from './components/Verify/Verify'


function App() {
  return (
    <Router>
      <Navbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/expertregister" element={<ExpertRegister />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/verify" element={<Verify />} />

          <Route path='/faq' element={<FAQ/>} />
            <Route path="/Posts" element={<Posts />} />
        </Routes>
      </Container>
            <Footer />
    </Router>
  )
}

export default App