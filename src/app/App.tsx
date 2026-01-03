import { motion } from 'motion/react';
import { LiquidLogo } from './components/LiquidLogo';
import { VideoGallery } from './components/VideoGallery';
import { PhotoGallery } from './components/PhotoGallery';
import { Venues } from './components/Venues';
import { FlowingShape } from './components/FlowingShape';
import { Music, Mail, Phone } from 'lucide-react';

export default function App() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1766366328797-acf7da0dde40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwYmFuZCUyMHBlcmZvcm1hbmNlJTIwc3RhZ2V8ZW58MXx8fHwxNzY3NDYyNDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1671124894290-337fdc830f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xseXdvb2QlMjBtdXNpYyUyMGNvbmNlcnR8ZW58MXx8fHwxNzY3NDYyNDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1679039324734-ea40aca53440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtdXNpY2lhbnMlMjBwZXJmb3JtaW5nfGVufDF8fHx8MTc2NzQ2MjQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1681149341674-45fd772fd463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGJhbmQlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3Njc0NjI0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1647524904834-1ed784e73d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwYXVkaWVuY2UlMjBjcm93ZHxlbnwxfHx8fDE3Njc0NjI0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576269077567-8bcd80fe5c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGluc3RydW1lbnRzJTIwc3RhZ2V8ZW58MXx8fHwxNzY3NDYyNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const artistImages = [
    "https://images.unsplash.com/photo-1661432432103-42999ae07367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHNpbGhvdWV0dGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc0NjI2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1677947226901-5164b32d5cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nZXIlMjBwZXJmb3JtaW5nJTIwbWljcm9waG9uZXxlbnwxfHx8fDE3NjczNjU0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1599594407558-957c79005316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXJpc3QlMjBtdXNpY2lhbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzQ2MjYyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1575426158836-0be172e108ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBzaW5naW5nJTIwc3RhZ2V8ZW58MXx8fHwxNzY3NDYyNjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            RaagNova
          </div>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#videos" className="hover:text-purple-400 transition-colors">Videos</a>
            <a href="#gallery" className="hover:text-purple-400 transition-colors">Gallery</a>
            <a href="#venues" className="hover:text-purple-400 transition-colors">Venues</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center">
          <LiquidLogo />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-2xl text-gray-300"
          >
            India's Premier Bollywood Live Band
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/50"
            >
              Book Us Now
            </a>
            <a
              href="#videos"
              className="px-8 py-4 border-2 border-purple-500 rounded-full hover:bg-purple-500/20 transition-all"
            >
              Watch Performances
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-950/50 to-purple-950/50 relative overflow-hidden" id="about">
        <FlowingShape position="right" artistImage={artistImages[0]} index={0} />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <Music className="w-12 h-12 text-purple-400" />
              <h2 className="text-5xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                About RaagNova
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              RaagNova is India's premier Bollywood live band, bringing the magic of Hindi cinema music to life
              with electrifying performances. Our talented ensemble of musicians and vocalists specialize in
              creating unforgettable musical experiences for weddings, corporate events, and celebrations.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              With a repertoire spanning classic Bollywood hits to contemporary chartbusters, we ensure your
              event is filled with energy, emotion, and entertainment. From romantic melodies to foot-tapping
              dance numbers, RaagNova delivers performances that resonate with every generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <VideoGallery artistImage={artistImages[1]} />

      {/* Gallery Section */}
      <PhotoGallery images={galleryImages} artistImage={artistImages[2]} />

      {/* Venues Section */}
      <Venues artistImage={artistImages[3]} />

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-950/30 to-blue-950/30 relative overflow-hidden" id="contact">
        <FlowingShape position="right" artistImage={artistImages[0]} index={4} />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-purple-500/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white">Email Us</h3>
                  <p className="text-purple-300">bookings@raagnova.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-purple-500/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white">Call Us</h3>
                  <p className="text-purple-300">+91 98765 43210</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            RaagNova
          </div>
          <p className="text-gray-400">
            © 2026 RaagNova. All rights reserved. Making celebrations memorable, one song at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}