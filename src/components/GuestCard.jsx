import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function GuestCard({ guest, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-[#222]"
    >
      <img 
        src={guest.image} 
        alt={guest.name} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
        <h3 className="text-2xl font-serif text-white mb-1">{guest.name}</h3>
        <p className="text-brand-gold text-sm font-medium mb-4">{guest.profession}</p>
        
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white text-xs mb-3 italic line-clamp-1">"{guest.episodeTitle}"</p>
          <a 
            href={guest.youtubeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-white hover:text-brand-gold transition-colors"
          >
            WATCH CONVERSATION <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}