import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/10 selection:text-primary scroll-smooth bg-white">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          {/* Catch-all route to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Professional Institutional Footer */}
      <Footer />

      {/* Global Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default App;
