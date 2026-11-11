
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import EpisodeCard from '../components/EpisodeCard';
import TopicCard from '../components/TopicCard';
import { episodes } from '../data/episodes';
import { topics } from '../data/topics';

// Custom YouTube Icon
const YouTubeIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);

export default function Home() {
  // Grab the first three episodes to feature on the homepage
  const featuredEpisodes = episodes.slice(0, 3);

  return (
    <div className="w-full">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/The-KalyanChronicles/images/kalyan.png" 
            alt="Kalyan K Bharath in Studio" 
            className="w-full h-full object-cover opacity-60 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/50 to-brand-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-brand-gold tracking-[0.3em] text-sm md:text-base font-bold uppercase mb-6">
              Hosted by Kalyan K Bharath
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-white mb-8">
              
              {/* Line 1 */}
              <span className="block overflow-hidden">
                <motion.span 
                  initial={{ y: "110%" }} 
                  animate={{ y: 0 }} 
                  transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} 
                  className="block pb-2 pt-2"
                >
                  Conversations
                </motion.span>
              </span>
              
              {/* Line 2 */}
              <span className="block overflow-hidden">
                <motion.span 
                  initial={{ y: "110%" }} 
                  animate={{ y: 0 }} 
                  transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} 
                  className="block text-brand-muted pb-2"
                >
                  That Go Beyond
                </motion.span>
              </span>
              
              {/* Line 3 */}
              <span className="block overflow-hidden">
                <motion.span 
                  initial={{ y: "110%" }} 
                  animate={{ y: 0 }} 
                  transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} 
                  className="block pb-2"
                >
                  The Surface.
                </motion.span>
              </span>

            </h1>

            <p className="text-lg md:text-xl text-brand-muted font-light max-w-2xl mb-10 leading-relaxed">
              Real people. Powerful stories. Perspectives that inspire change. No unnecessary noise, just conversations that matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              {/* YouTube Button */}
              <a
                href="https://www.youtube.com/@TheKalyanChronicles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-brand-gold hover:text-white transition-all duration-300"
              >
                <YouTubeIcon size={20} className="text-red-600" />
                WATCH ON YOUTUBE
              </a>

              {/* Episodes Button */}
              <Link
                to="/episodes"
                className="flex items-center justify-center gap-3 border border-[#333] bg-[#121212]/50 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-sm hover:border-brand-gold transition-all duration-300"
              >
                <Play size={18} />
                EXPLORE EPISODES
              </Link>

            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-muted to-transparent" />
        </motion.div>

      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">

          <SectionTitle
            subtitle="The Philosophy"
            title="More Than Just Conversations."
            alignment="center"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-brand-muted font-light leading-relaxed"
          >
            Every conversation has a story. Every story has a perspective. The Kalyan Chronicles brings together voices and experiences that challenge thinking, inspire growth, and create meaningful impact.
          </motion.p>

        </div>
      </section>

      {/* 3. FEATURED EPISODES */}
      <section className="py-24 bg-[#0c0c0c] border-y border-[#181818]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">

            <SectionTitle
              subtitle="Latest Releases"
              title="Featured Conversations"
            />

            <Link
              to="/episodes"
              className="flex items-center gap-2 text-brand-gold text-sm font-bold tracking-widest hover:text-white transition-colors mb-12 md:mb-16"
            >
              VIEW ALL EPISODES <ArrowRight size={16} />
            </Link>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEpisodes.map((episode, index) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. TOPICS */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <SectionTitle
            subtitle="Explore By Category"
            title="Conversations That Matter"
            alignment="center"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
            {topics.map((topic, index) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. HOST HIGHLIGHT */}
      <section className="py-24 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 aspect-[4/5] relative rounded-2xl overflow-hidden"
          >
            <img
              src="/images/kalyanbio.png"
              alt="Kalyan K Bharath"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />

          </motion.div>

          <div className="w-full lg:w-1/2">

            <SectionTitle
              subtitle="The Host"
              title="Meet Kalyan K Bharath"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-brand-muted leading-relaxed"
            >

              <p className="text-lg">
                An Ex-Radio Presenter from the UK, Podcaster, and Entrepreneur, Kalyan brings curiosity, authenticity, and a passion for meaningful conversations to every episode.
              </p>

              <p>
                With a background in broadcasting and business, he understands that the most powerful insights don't come from scripted interviews, but from genuine human connection.
              </p>

              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border-b border-brand-gold text-white pb-1 hover:text-brand-gold transition-colors"
                >
                  READ FULL BIO <ArrowRight size={16} />
                </Link>
              </div>

            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. COLLABORATION CTA */}
      <section className="py-32 bg-brand-bg relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-brand-bg to-brand-bg" />

        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">

          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Have a Story Worth Sharing?
          </h2>

          <p className="text-xl text-brand-muted mb-10 font-light">
            We are always looking to connect with inspiring individuals, experts, entrepreneurs, leaders, and people with extraordinary experiences.
          </p>

          <Link
            to="/collaborations"
            className="inline-block bg-brand-gold text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
          >
            LET'S COLLABORATE
          </Link>

        </div>
      </section>

    </div>
  );
}
