import { motion } from 'framer-motion';
import { Mail, Mic, Globe, Lightbulb, ArrowRight } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

const corePillars = [
  {
    icon: Mic,
    title: "Unfiltered Authenticity",
    desc: "No scripts. No fabricated drama. Just raw, honest conversations that reveal the reality behind the success."
  },
  {
    icon: Lightbulb,
    title: "Relentless Curiosity",
    desc: "We ask the questions others shy away from, diving deep into the psychology and mindset of our guests."
  },
  {
    icon: Globe,
    title: "Real-World Impact",
    desc: "Every episode is designed to leave you with actionable wisdom that shifts your perspective and elevates your life."
  }
];

export default function About() {
  return (
    <div className="pt-32 pb-0 w-full overflow-hidden">

      {/* 1. CINEMATIC HERO */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 text-center mb-24 lg:mb-32">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-gold text-sm tracking-[0.3em] font-bold uppercase mb-6 block"
        >
          Discover The Story
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]"
        >
          A Space For <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">
            Unscripted Truth.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-brand-muted font-light leading-relaxed max-w-3xl mx-auto"
        >
          No fake motivation. No unnecessary noise. Just real conversations, real experiences, and real perspectives.
        </motion.p>
      </section>

      {/* 2. THE ORIGIN STORY & VALUES */}
      <section className="bg-brand-secondary py-24 border-y border-[#222]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle subtitle="The Origin" title="Why We Started." />
              <div className="space-y-6 text-brand-muted text-lg font-light leading-relaxed">
                <p>
                  In a digital world crowded with 60-second viral clips and superficial "hustle culture" advice, we noticed a massive void. People were starving for depth.
                </p>
                <p>
                  <strong>The Kalyan Chronicles</strong> was created as a rebellion against surface-level media. We wanted to build a sanctuary where guests feel safe enough to drop their public relations persona and discuss the actual grind, the painful failures, and the quiet victories.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-card p-10 rounded-3xl border border-[#222] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-[50px] rounded-full" />
              <blockquote className="text-2xl md:text-3xl font-serif text-white leading-snug relative z-10">
                "The most powerful lessons aren't taught in classrooms; they are extracted from the lived experiences of those who dared to walk the fire."
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-brand-gold" />
                <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Kalyan K Bharath</span>
              </div>
            </motion.div>
          </div>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#0A0F24] p-8 rounded-2xl border border-[#222] hover:border-brand-gold/50 transition-colors duration-500"
              >
                <pillar.icon size={32} className="text-brand-gold mb-6 transform group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-xl font-serif text-white mb-4">{pillar.title}</h4>
                <p className="text-brand-muted text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION OVERLAP */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-card p-10 md:p-16 rounded-3xl border border-[#222]"
        >
          <h3 className="text-brand-gold text-sm tracking-[0.2em] font-bold uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brand-gold"></span> Our Mission
          </h3>
          <p className="text-white text-xl md:text-2xl font-serif leading-relaxed">
            To create a platform where genuine dialogue thrives. We believe that by sharing unscripted truths and lived experiences, we can challenge perspectives and foster profound personal growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-brand-secondary p-10 md:p-16 rounded-3xl border border-[#222] mt-0 md:mt-12"
        >
          <h3 className="text-brand-gold text-sm tracking-[0.2em] font-bold uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brand-gold"></span> Our Vision
          </h3>
          <p className="text-white text-xl md:text-2xl font-serif leading-relaxed">
            To become the leading space for high-impact conversations that bridge the gap between extraordinary achievements and the raw human reality behind them.
          </p>
        </motion.div>
      </section>

      {/* 4. CINEMATIC PARALLAX BREAK */}
      {/* Replace this Unsplash image with a wide studio/equipment shot when you have one */}
      <section className="h-[40vh] md:h-[60vh] w-full relative overflow-hidden my-12 border-y border-[#222]">
        <img 
          src="https://plus.unsplash.com/premium_photo-1668130718429-7abf7b186f2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" 
          alt="Podcast Studio" 
          className="w-full h-full object-cover opacity-40 object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg opacity-90" />
      </section>

      {/* 5. HOST BIO */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-start">
        {/* Sticky Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12 sticky top-32"
        >
          <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-[#222] mb-8 relative group">
            <img
              src="/The-KalyanChronicles/images/kalyanbio.png"
              alt="Kalyan K Bharath"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F24] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white font-serif text-3xl">Kalyan K Bharath</h3>
              <p className="text-brand-gold text-sm font-bold tracking-widest uppercase">Host & Founder</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.youtube.com/@TheKalyanChronicles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-brand-card py-4 rounded-xl hover:bg-brand-gold hover:text-[#0A0F24] transition-all duration-300 border border-[#222]"
            >
              <FaYoutube size={20} />
              <span className="text-xs font-bold tracking-widest">YOUTUBE</span>
            </a>
            <a
              href="https://www.instagram.com/KalyankBharath/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-brand-card py-4 rounded-xl hover:bg-brand-gold hover:text-[#0A0F24] transition-all duration-300 border border-[#222]"
            >
              <FaInstagram size={20} />
              <span className="text-xs font-bold tracking-widest">INSTAGRAM</span>
            </a>
          </div>
        </motion.div>

        {/* Scrolling Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-7/12 pt-8 lg:pt-0"
        >
          <SectionTitle
            subtitle="Meet The Host"
            title="The Voice Behind The Mic."
          />

          <div className="space-y-8 text-brand-muted text-lg leading-relaxed font-light">
            <p className="text-2xl text-white font-serif leading-snug">
              An Ex-Radio Presenter from the UK, Podcaster, and Entrepreneur.
            </p>

            <p>
              Kalyan's journey through media and business has always been driven by one core element: a deep fascination with human psychology and lived experiences. During his tenure as a radio presenter in the UK, he realized that the most captivating moments on air weren't the polished, scripted segments, but the raw, spontaneous conversations that revealed the truth behind the persona.
            </p>

            {/* Editorial Pull Quote */}
            <div className="border-l-4 border-brand-gold pl-6 py-2 my-10">
              <p className="text-xl text-white italic font-serif">
                "Everyone has a headline, but true growth happens when we sit down and read the entire article. That's what this podcast is about."
              </p>
            </div>

            <p>
              Transitioning into entrepreneurship taught him the hard realities of building something from nothing. It exposed him to the emotional toll, the required resilience, and the unspoken challenges that leaders face behind closed doors—topics rarely discussed openly in mainstream media.
            </p>

            <p>
              By sitting down with doctors, politicians, life coaches, and public figures, Kalyan aims to extract actionable wisdom and genuine perspectives. He strips away the noise to bring you conversations that actually matter.
            </p>

            <div className="pt-10 mt-10 border-t border-[#222]">
              <h4 className="text-brand-text font-serif text-2xl mb-4">Direct Contact</h4>
              <a
                href="mailto:Thekalyanchronicles@gmail.com"
                className="inline-flex items-center gap-3 text-brand-gold hover:text-white transition-colors text-lg"
              >
                <Mail size={20} />
                Thekalyanchronicles@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="bg-brand-gold py-20 px-6 mt-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A0F24] mb-6">Ready to join the conversation?</h2>
          <p className="text-[#0A0F24]/80 text-lg mb-10 font-medium max-w-xl mx-auto">
            Explore our library of deep-dive interviews and start challenging your perspectives today.
          </p>
          <Link 
            to="/episodes"
            className="inline-flex items-center gap-3 bg-[#0A0F24] text-white px-8 py-4 rounded-full font-bold tracking-widest text-sm hover:bg-white hover:text-[#0A0F24] transition-colors duration-300"
          >
            WATCH EPISODES <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}