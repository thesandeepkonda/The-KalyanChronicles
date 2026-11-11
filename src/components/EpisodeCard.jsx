
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

export default function EpisodeCard({ episode, index }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube thumbnail
  const thumbnailUrl = `https://img.youtube.com/vi/${episode.youtubeId}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-brand-card rounded-2xl overflow-hidden border border-[#222] hover:border-brand-gold/50 transition-colors duration-500 flex flex-col h-full"
    >
      <div className="relative aspect-video bg-black overflow-hidden">
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1`}
            title={episode.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={thumbnailUrl}
              alt={episode.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${episode.youtubeId}/hqdefault.jpg`;
              }}
            />

            <div
              className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer group-hover:bg-black/20 transition-all duration-300"
              onClick={() => setIsPlaying(true)}
            >
              <PlayCircle
                size={64}
                className="text-white drop-shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                strokeWidth={1}
              />
            </div>
          </>
        )}
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <span className="text-brand-gold text-xs font-bold tracking-widest uppercase mb-3 block">
          {episode.category}
        </span>

        <h3 className="text-xl md:text-2xl font-serif text-white mb-2 line-clamp-2">
          {episode.title}
        </h3>

        <p className="text-sm text-brand-muted mb-4 font-medium">
          Guest: <span className="text-white">{episode.guest}</span>
        </p>

        <p className="text-brand-muted text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {episode.description}
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-auto">
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-white hover:text-brand-gold transition-colors cursor-pointer"
            >
              <PlayCircle size={18} />
              PLAY HERE
            </button>
          )}

          <a
            href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-brand-muted hover:text-red-500 transition-colors"
          >
            <FaYoutube size={18} />
            YOUTUBE
          </a>
        </div>
      </div>
    </motion.div>
  );
}
