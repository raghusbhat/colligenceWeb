import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Careers from "./components/careers";
import Contact from "./components/contact";

/**
 * Main App component that sets up routing and layout
 * @returns {JSX.Element} The rendered App component
 */
const App = (): JSX.Element => {
  return (
    <Router>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
