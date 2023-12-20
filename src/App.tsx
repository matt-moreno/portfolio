import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Photos from './pages/Photos/Photos'
import Contact from './pages/Contact/Contact'
import Runs from "./pages/Runs/Runs"
import Recommendations from './pages/Recommendations/Recommendations'
import NotFound from './pages/NotFound/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="photos" element={<Photos />} />
          <Route path="runs" element={<Runs />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="contact" element={<Contact />} /> 
        </Route> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
