// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import "@fontsource-variable/fraunces";

function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
      </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
