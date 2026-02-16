import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Testimonials from "../pages/Testimonials";
import GallerySection from "../pages/GallerySection";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/gallery" element={<GallerySection />} />
    </Routes>
  );
}

export default AppRoutes;
