import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-serif text-brand-gold mb-6">404</h1>
      <h2 className="text-3xl font-serif text-white mb-6">Page Not Found</h2>
      <p className="text-brand-muted mb-10">The conversation you are looking for doesn't exist.</p>
      <Link to="/" className="border border-brand-gold text-brand-gold px-8 py-3 rounded-full hover:bg-brand-gold hover:text-white transition-colors font-bold tracking-widest text-sm">
        RETURN HOME
      </Link>
    </div>
  );
}