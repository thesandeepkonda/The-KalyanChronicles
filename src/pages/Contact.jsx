
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    try {
      const subject = encodeURIComponent(
        `General Enquiry - ${formData.name}`
      );

      const body = encodeURIComponent(
        `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
      );

      const mailtoLink =
        `mailto:Thekalyanchronicles@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      setError(
        "If your email application doesn't open, please email us directly at Thekalyanchronicles@gmail.com."
      );

    } catch (err) {
      console.error('Mailto error:', err);

      setError(
        'Something went wrong. Please contact us at Thekalyanchronicles@gmail.com.'
      );
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16">

        {/* Contact Information */}
        <div className="w-full md:w-5/12">

          <SectionTitle
            subtitle="Get In Touch"
            title="Contact Us"
          />

          <div className="space-y-8 mt-12">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#121212] rounded-xl border border-[#222]">
                <Mail className="text-brand-gold" />
              </div>

              <div>
                <h4 className="text-white font-bold mb-1">
                  Business Email
                </h4>

                <a
                  href="mailto:Thekalyanchronicles@gmail.com"
                  className="text-brand-muted hover:text-brand-gold transition-colors"
                >
                  Thekalyanchronicles@gmail.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#121212] rounded-xl border border-[#222]">
                <FaInstagram className="text-brand-gold" size={20} />
              </div>

              <div>
                <h4 className="text-white font-bold mb-1">
                  Instagram
                </h4>

                <a
                  href="https://www.instagram.com/KalyankBharath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-muted hover:text-brand-gold transition-colors"
                >
                  @KalyankBharath
                </a>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#121212] rounded-xl border border-[#222]">
                <FaYoutube className="text-brand-gold" size={20} />
              </div>

              <div>
                <h4 className="text-white font-bold mb-1">
                  YouTube Channel
                </h4>

                <a
                  href="https://www.youtube.com/@TheKalyanChronicles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-muted hover:text-brand-gold transition-colors"
                >
                  The Kalyan Chronicles
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-7/12 bg-[#121212] p-8 md:p-12 rounded-3xl border border-[#222]"
        >

          <h3 className="text-2xl font-serif text-white mb-8">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">
                Name
              </label>

              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    name: e.target.value
                  });
                  setError('');
                }}
                placeholder="Enter your name"
                className="w-full bg-[#090909] border border-[#222] text-white rounded-lg p-4 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">
                Email
              </label>

              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value
                  });
                  setError('');
                }}
                placeholder="Enter your email"
                className="w-full bg-[#090909] border border-[#222] text-white rounded-lg p-4 focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">
                Message
              </label>

              <textarea
                required
                rows="5"
                value={formData.message}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    message: e.target.value
                  });
                  setError('');
                }}
                placeholder="Write your message here..."
                className="w-full bg-[#090909] border border-[#222] text-white rounded-lg p-4 focus:outline-none focus:border-brand-gold transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-white text-black py-4 rounded-lg font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-white transition-colors duration-300"
            >
              Send Message
            </button>

            {/* Fallback Message */}
            {error && (
              <p className="text-xs text-brand-muted text-center leading-relaxed">
                {error}
              </p>
            )}

            <p className="text-xs text-brand-muted text-center">
              Prefer email? Contact us directly at{' '}
              <a
                href="mailto:Thekalyanchronicles@gmail.com"
                className="text-brand-gold hover:underline"
              >
                Thekalyanchronicles@gmail.com
              </a>
            </p>

          </form>
        </motion.div>

      </div>
    </div>
  );
}
