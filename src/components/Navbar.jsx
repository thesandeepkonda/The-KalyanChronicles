
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Episodes', path: '/episodes' },
    { name: 'Guests', path: '/guests' },
    { name: 'Collaborations', path: '/collaborations' },
    { name: 'Contact', path: '/contact' },
  ];

  // YouTube SVG Icon
  const YouTubeIcon = ({ size = 18 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-red-600"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090909]/95 backdrop-blur-md border-b border-[#181818] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">

        {/* Brand Logo */}
<Link to="/" className="flex items-center gap-3 z-50">
  <img
    src="/The-KalyanChronicles/images/logok.png"
    alt="The Kalyan Chronicles Logo"
    className="h-12 md:h-16 w-auto object-contain"
  />

  <div className="flex flex-col">
    <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white">
      THE KALYAN
    </span>

    <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-brand-gold uppercase">
      Chronicles
    </span>
  </div>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 hover:text-brand-gold ${
                location.pathname === link.path
                  ? 'text-brand-gold'
                  : 'text-brand-muted'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Desktop Subscribe Button */}
          <a
            href="https://www.youtube.com/@TheKalyanChronicles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-brand-gold hover:text-white transition-colors duration-300"
          >
            <YouTubeIcon size={18} />
            SUBSCRIBE
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-[#090909] flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-serif tracking-wide ${
                    location.pathname === link.path
                      ? 'text-brand-gold'
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Subscribe Button */}
              <a
                href="https://www.youtube.com/@TheKalyanChronicles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand-gold text-white px-8 py-3 rounded-full font-bold mt-4"
              >
                <YouTubeIcon size={20} />
                SUBSCRIBE ON YOUTUBE
              </a>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
