import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Briefcase, Sparkles, TrendingUp, Users, PlayCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const collabTracks = [
  {
    icon: Mic,
    title: "Guest Appearances",
    desc: "Are you an expert, founder, or someone with a powerful life story? Sit down with Kalyan to share your raw, unfiltered journey with our highly engaged audience."
  },
  {
    icon: Briefcase,
    title: "Brand Sponsorships",
    desc: "Align your brand with deep, meaningful content. We integrate sponsors seamlessly, providing high-converting, authentic endorsements that our viewers trust."
  },
  {
    icon: Sparkles,
    title: "Creator Partnerships",
    desc: "Let's cross-pollinate our audiences. If you run a premium YouTube channel or podcast, we are always open to exciting content collaborations and swaps."
  }
];

export default function Collaborations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    collabType: 'Guest Appearance',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    try {
      const subject = encodeURIComponent(`Collaboration Enquiry: ${formData.collabType} - ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProfession: ${formData.profession}\nCollaboration Type: ${formData.collabType}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:Thekalyanchronicles@gmail.com?subject=${subject}&body=${body}`;
      setError('If your email application does not open, please email us directly at Thekalyanchronicles@gmail.com.');
    } catch (err) {
      console.error('Mailto error:', err);
      setError('Something went wrong. Please contact us at Thekalyanchronicles@gmail.com.');
    }
  };

  return (
    <div className="pt-24 pb-0 min-h-screen bg-brand-bg overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[50vh] min-h-[500px] w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606159068539-43f36b99d1b2?auto=format&fit=crop&q=80&w=2000" 
            alt="Podcast Studio Setup" 
            className="w-full h-full object-cover opacity-40 transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg to-transparent opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-gold text-sm tracking-[0.3em] font-bold uppercase mb-4 block flex items-center gap-2">
              <PlayCircle size={16} /> Partner With Us
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
              Let's Create <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">
                Something Massive.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted font-light leading-relaxed mb-8">
              Whether you have a story that needs to be heard or a brand that belongs in front of a premium audience, you are in the right place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE YOUTUBE ADVANTAGE (Stats/Value Props) */}
      <section className="py-12 border-b border-[#222] bg-brand-secondary/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#333]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6">
            <Users size={32} className="mx-auto text-brand-gold mb-4" />
            <h4 className="text-white text-xl font-serif mb-2">Engaged Audience</h4>
            <p className="text-brand-muted text-sm leading-relaxed">Connecting with viewers who actively seek depth, growth, and premium content.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6">
            <TrendingUp size={32} className="mx-auto text-brand-gold mb-4" />
            <h4 className="text-white text-xl font-serif mb-2">High Retention</h4>
            <p className="text-brand-muted text-sm leading-relaxed">Our long-form unscripted conversations keep listeners locked in from start to finish.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6">
            <Sparkles size={32} className="mx-auto text-brand-gold mb-4" />
            <h4 className="text-white text-xl font-serif mb-2">Cinematic Quality</h4>
            <p className="text-brand-muted text-sm leading-relaxed">Shot in 4K with broadcast-level audio to make every guest and brand look incredible.</p>
          </motion.div>
        </div>
      </section>

      {/* 3. COLLABORATION TRACKS (Animated Cards) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle subtitle="Ways to Partner" title="How We Can Collaborate" alignment="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {collabTracks.map((track, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group bg-brand-secondary p-8 rounded-3xl border border-[#222] hover:border-brand-gold transition-colors duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-[40px] transform group-hover:scale-150 transition-transform duration-700" />
              <track.icon size={36} className="text-brand-gold mb-6 transform group-hover:-translate-y-2 transition-transform duration-500" />
              <h3 className="text-2xl font-serif text-white mb-4">{track.title}</h3>
              <p className="text-brand-muted leading-relaxed font-light relative z-10">{track.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. THE APPLICATION FORM & VISUAL SPLIT */}
      <section className="py-24 bg-[#060A16] border-t border-[#222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Image & Trust Markers */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-[#222]">
              <img 
                src="https://plus.unsplash.com/premium_photo-1722859269438-dcacf0c6f26a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" 
                alt="Collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl font-serif text-white mb-3">Pitch Your Story.</h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Due to high volume, we carefully curate our guests and partners. Provide as much detail as possible about the value you bring to the audience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 bg-brand-card p-8 md:p-12 rounded-3xl border border-[#222] shadow-xl"
          >
            <h3 className="text-2xl font-serif text-white mb-8">Official Enquiry Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#0A0F24] border border-[#333] text-white rounded-xl p-4 focus:outline-none focus:border-brand-gold transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#0A0F24] border border-[#333] text-white rounded-xl p-4 focus:outline-none focus:border-brand-gold transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">Phone Number</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#0A0F24] border border-[#333] text-white rounded-xl p-4 focus:outline-none focus:border-brand-gold transition-colors" placeholder="+1 234 567 890" />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">Profession / Brand</label>
                  <input required type="text" name="profession" value={formData.profession} onChange={handleChange} className="w-full bg-[#0A0F24] border border-[#333] text-white rounded-xl p-4 focus:outline-none focus:border-brand-gold transition-colors" placeholder="CEO, Company Name" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">Partnership Type</label>
                <div className="relative">
                  <select name="collabType" value={formData.collabType} onChange={handleChange} className="w-full bg-[#0A0F24] border border-[#333] text-white rounded-xl p-4 focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer">
                    <option value="Guest Appearance">Podcast Guest Appearance</option>
                    <option value="Sponsorship/Brand Deal">Brand Sponsorship</option>
                    <option value="Media Partnership">Content/Media Partnership</option>
                    <option value="Other">Other Enquiry</option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-widest text-brand-muted uppercase mb-2">The Pitch</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-[#0A0F24] border border-[#333] text-white rounded-xl p-4 focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Tell us why this collaboration is a perfect fit for our audience..." />
              </div>

              <button type="submit" className="w-full bg-brand-gold text-[#0A0F24] py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(234,179,8,0.2)]">
                Submit Proposal
              </button>

              {error && (
                <p className="text-xs text-red-400 text-center leading-relaxed bg-red-400/10 py-3 rounded-lg border border-red-400/20">
                  {error}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}