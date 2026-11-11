import SectionTitle from '../components/SectionTitle';
import GuestCard from '../components/GuestCard';
import { guests } from '../data/guests';

export default function Guests() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionTitle 
          subtitle="The Voices" 
          title="Our Featured Guests" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {guests.map((guest, index) => (
            <GuestCard key={guest.id} guest={guest} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}