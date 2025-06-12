import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Photos from "./pages/Photos/Photos";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Bellabeat from "./pages/Projects/views/Bellabeat";
import Runs from "./pages/Runs/Runs";
import Resources from "./pages/Resources/Resources";
import Websites from "./pages/Resources/views/Websites";
import Videos from "./pages/Resources/views/Videos";
import Books from "./pages/Resources/views/Books";
import NotFound from "./pages/NotFound/NotFound";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/projects" element={<Projects />}>
              <Route
                path="/projects/bellabeat-case-study"
                element={<Bellabeat />}
              />
            </Route>
            <Route path="/runs" element={<Runs />} />
            <Route path="/resources" element={<Resources />}>
              <Route index element={<Websites />} />
              <Route path="/resources/videos" element={<Videos />} />
              <Route path="/resources/books" element={<Books />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
}
