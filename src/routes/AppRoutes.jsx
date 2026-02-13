import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Testimonials from "../pages/Testimonials";
import GallerySection from "../pages/GallerySection";
import FAQ from "../pages/FAQ";
import Blog from "../pages/blog";
import Gallery from "../pages/Gallery";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/gallery" element={<GallerySection />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default AppRoutes;
