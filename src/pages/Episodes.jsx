import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import EpisodeCard from '../components/EpisodeCard';
import { episodes } from '../data/episodes';

export default function Episodes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Extract unique categories from the episode data dynamically
  const categories = ['All', ...new Set(episodes.map(ep => ep.category))];

  // Filter episodes based on search term and selected category
  const filteredEpisodes = useMemo(() => {
    return episodes.filter(episode => {
      const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            episode.guest.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || episode.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle 
          subtitle="The Library" 
          title="All Episodes" 
        />

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-colors ${
                  activeCategory === category 
                    ? 'bg-brand-gold text-white' 
                    : 'bg-[#121212] text-brand-muted hover:bg-[#222] hover:text-white border border-[#222]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <input 
              type="text" 
              placeholder="Search episodes..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121212] border border-[#222] text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-brand-gold transition-colors"
            />
            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-muted" />
          </div>
        </div>

        {/* Episode Grid */}
        {filteredEpisodes.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredEpisodes.map((episode, index) => (
                <EpisodeCard key={episode.id} episode={episode} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-20 text-center text-brand-muted">
            <p className="text-xl">No episodes found matching your criteria.</p>
            <button 
              onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
              className="mt-4 text-brand-gold hover:text-white transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}