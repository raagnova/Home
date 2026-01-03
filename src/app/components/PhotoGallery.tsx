import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FlowingShape } from './FlowingShape';

interface PhotoGalleryProps {
  images: string[];
  artistImage: string;
}

export function PhotoGallery({ images, artistImage }: PhotoGalleryProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-950/30 to-blue-950/30 relative overflow-hidden" id="gallery">
      <FlowingShape position="right" artistImage={artistImage} index={2} />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          Gallery
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-1 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={image}
                  alt={`Performance ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}