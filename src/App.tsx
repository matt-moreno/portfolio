import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Photos from './pages/Photos'
import Contact from './pages/Contact'
import Runs from "./pages/Runs"
import Recommendations from './pages/Recommendations'
import NotFound from './pages/NotFound'
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
