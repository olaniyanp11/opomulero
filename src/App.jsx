import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';  // Assuming Loader component exists
import { Contact } from "./components/Contact";


function App() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false); // Hide loader after 5 seconds
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Show loader if animate is true */}
      {animate ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
