
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // YouTube Icon
  const YouTubeIcon = ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );

  // Instagram Icon
  const InstagramIcon = ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );

  return (
    <footer className="bg-[#050505] border-t border-[#181818] pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

        {/* Brand Col */}
        <div className="md:col-span-2">

          <Link to="/" className="flex flex-col mb-6">
            <span className="font-serif text-2xl font-bold tracking-wider text-white">
              THE KALYAN
            </span>

            <span className="font-sans text-xs tracking-[0.3em] text-brand-gold uppercase">
              Chronicles
            </span>
          </Link>

          <p className="text-brand-muted max-w-sm leading-relaxed mb-6">
            Conversations that inspire, challenge perspectives, and create real impact. No fake motivation. Just real experiences.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4">

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@TheKalyanChronicles"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 bg-[#121212] rounded-full hover:bg-brand-gold hover:text-white transition-colors"
            >
              <YouTubeIcon size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/KalyankBharath/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 bg-[#121212] rounded-full hover:bg-brand-gold hover:text-white transition-colors"
            >
              <InstagramIcon size={20} />
            </a>

            {/* Email */}
            <a
              href="mailto:Thekalyanchronicles@gmail.com"
              aria-label="Email"
              className="p-2 bg-[#121212] rounded-full hover:bg-brand-gold hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-white">
            Navigation
          </h4>

          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/about" className="text-brand-muted hover:text-brand-gold transition-colors">
                About Kalyan
              </Link>
            </li>

            <li>
              <Link to="/episodes" className="text-brand-muted hover:text-brand-gold transition-colors">
                All Episodes
              </Link>
            </li>

            <li>
              <Link to="/guests" className="text-brand-muted hover:text-brand-gold transition-colors">
                Our Guests
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-white">
            Connect
          </h4>

          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/collaborations" className="text-brand-muted hover:text-brand-gold transition-colors">
                Collaborate with us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-brand-muted hover:text-brand-gold transition-colors">
                Contact Form
              </Link>
            </li>

            <li>
              <a
                href="mailto:Thekalyanchronicles@gmail.com"
                className="text-brand-muted hover:text-brand-gold transition-colors break-all"
              >
                Thekalyanchronicles@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-[#181818] flex flex-col md:flex-row justify-between items-center text-sm text-brand-muted">

        <p>
          &copy; {currentYear} The Kalyan Chronicles. All rights reserved.
        </p>

        <p className="mt-2 md:mt-0">
          Hosted by Kalyan K Bharath
        </p>

      </div>

    </footer>
  );
}
