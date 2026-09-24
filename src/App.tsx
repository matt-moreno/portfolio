import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Photos from "./pages/Photos/Photos";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Bellabeat from "./pages/Projects/views/Bellabeat";
import Runs from "./pages/Runs/Runs";
import MarathonDetail from "./pages/Runs/views/MarathonDetail";
import Resources from "./pages/Resources/Resources";
import NotFound from "./pages/NotFound/NotFound";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

export default function App() {
  return (
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
            <Route path="/runs/:stravaId" element={<MarathonDetail />} />
            <Route path="/resources" element={<Resources />} />
            {/* Old tab URLs now land on the single reading list */}
            <Route
              path="/resources/*"
              element={<Navigate to="/resources" replace />}
            />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
    </BrowserRouter>
  );
}
