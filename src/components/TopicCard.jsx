import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopicCard({ topic, index }) {
  // Dynamically resolve icon from lucide-react based on string name
  const IconComponent = Icons[topic.icon] || Icons.HelpCircle;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link 
        to="/episodes" 
        className="block group relative rounded-2xl overflow-hidden aspect-[4/5] border border-[#222] hover:border-brand-gold/50 cursor-pointer"
      >
        {/* Background Image with slow cinematic zoom on hover */}
        <img 
          src={topic.image} 
          alt={topic.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Dark overlay that fades slightly to reveal the image on hover */}
        <div className="absolute inset-0 bg-[#0B1120]/80 group-hover:bg-[#0B1120]/40 transition-colors duration-500" />
        
        {/* Bottom-to-top gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent opacity-90" />

        {/* Content animated to slide up slightly on hover */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <IconComponent 
              size={32} 
              strokeWidth={1.5} 
              className="text-brand-gold mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 origin-left transition-all duration-300" 
            />
            <h4 className="font-serif text-xl text-white group-hover:text-brand-gold transition-colors duration-300">
              {topic.title}
            </h4>
            
            {/* Animated gold underline that expands on hover */}
            <div className="h-0.5 w-8 bg-brand-gold mt-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}