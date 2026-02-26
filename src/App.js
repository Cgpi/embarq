import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import "@fontsource-variable/fraunces";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05, // balanced smoothness
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </HashRouter>
  );
}

export default App;