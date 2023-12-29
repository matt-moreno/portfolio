import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Photos from "./pages/Photos/Photos";
import Contact from "./pages/Contact/Contact";
import Runs from "./pages/Runs/Runs";
import Resources from "./pages/Resources/Resources";
import Websites from "./pages/Resources/components/Websites";
import Videos from "./pages/Resources/components/Videos";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/runs" element={<Runs />} />
          <Route path="/resources" element={<Resources />}>
            <Route path="/resources/websites" element={<Websites />} />
            <Route path="/resources/videos" element={<Videos />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
