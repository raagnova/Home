import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { FlowingShape } from './FlowingShape';

interface VenuesProps {
  artistImage: string;
}

export function Venues({ artistImage }: VenuesProps) {
  const venues = [
    {
      name: "The Grand Ballroom, Mumbai",
      event: "Wedding Reception",
      date: "December 2024"
    },
    {
      name: "ITC Maurya, New Delhi",
      event: "Corporate Gala",
      date: "November 2024"
    },
    {
      name: "Phoenix Marketcity, Pune",
      event: "Music Festival",
      date: "October 2024"
    },
    {
      name: "Leela Palace, Bangalore",
      event: "Anniversary Celebration",
      date: "September 2024"
    },
    {
      name: "JW Marriott, Kolkata",
      event: "Awards Night",
      date: "August 2024"
    },
    {
      name: "Taj Falaknuma, Hyderabad",
      event: "Royal Wedding",
      date: "July 2024"
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="venues">
      <FlowingShape position="left" artistImage={artistImage} index={3} />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          Where We've Performed
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2 text-white">{venue.name}</h3>
                  <p className="text-purple-300">{venue.event}</p>
                  <p className="text-sm text-gray-400 mt-1">{venue.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}