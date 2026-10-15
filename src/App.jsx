import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import FlyRankCaseStudy from "./pages/FlyRankCaseStudy";
import SmartDocumentCaseStudy from "./pages/SmartDocumentCaseStudy";
import SentiAwareCaseStudy from "./pages/SentiAwareCaseStudy";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="site-wrapper">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route
            path="/case-studies/flyrank"
            element={<FlyRankCaseStudy />}
          />

          <Route
            path="/case-studies/smart-document-verification"
            element={<SmartDocumentCaseStudy />}
          />

          <Route
            path="/case-studies/sentiaware"
            element={<SentiAwareCaseStudy />}
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;