import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// We will build these components in Part 2
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// We will build these pages in Part 3 & 4
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import Guests from './pages/Guests';
import Collaborations from './pages/Collaborations';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router basename="/The-KalyanChronicles">
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/guests" element={<Guests />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;