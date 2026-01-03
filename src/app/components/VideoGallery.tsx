import { motion } from 'motion/react';
import { FlowingShape } from './FlowingShape';

interface VideoGalleryProps {
  artistImage: string;
}

export function VideoGallery({ artistImage }: VideoGalleryProps) {
  const videos = [
    {
      id: 1,
      title: "Live at Mumbai Music Festival 2024",
      embedId: "dQw4w9WgXcQ", // Placeholder
    },
    {
      id: 2,
      title: "Delhi Wedding Performance",
      embedId: "dQw4w9WgXcQ", // Placeholder
    },
    {
      id: 3,
      title: "Corporate Event Highlights",
      embedId: "dQw4w9WgXcQ", // Placeholder
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="videos">
      <FlowingShape position="left" artistImage={artistImage} index={1} />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          Performance Videos
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-1">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-300">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
