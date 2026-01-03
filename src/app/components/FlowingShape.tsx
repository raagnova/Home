import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FlowingShapeProps {
  position: 'left' | 'right';
  artistImage: string;
  index?: number;
}

export function FlowingShape({ position, artistImage, index = 0 }: FlowingShapeProps) {
  const isLeft = position === 'left';
  
  return (
    <div className={`absolute ${isLeft ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none z-0`}>
      {/* Irregular Blob Shape with Flowing Colors */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.2 }}
      >
        {/* Animated Blob */}
        <svg
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id={`gradient-${index}-1`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7">
                <animate
                  attributeName="stop-color"
                  values="#a855f7; #3b82f6; #8b5cf6; #a855f7"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#3b82f6">
                <animate
                  attributeName="stop-color"
                  values="#3b82f6; #8b5cf6; #a855f7; #3b82f6"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#8b5cf6">
                <animate
                  attributeName="stop-color"
                  values="#8b5cf6; #a855f7; #3b82f6; #8b5cf6"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            
            <filter id={`goo-${index}`}>
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
          
          <motion.path
            d={isLeft 
              ? "M100,200 Q100,100 200,100 Q300,100 300,200 Q300,300 200,300 Q100,300 100,200 Z"
              : "M300,200 Q300,100 200,100 Q100,100 100,200 Q100,300 200,300 Q300,300 300,200 Z"
            }
            fill={`url(#gradient-${index}-1)`}
            opacity="0.6"
            filter={`url(#goo-${index})`}
            animate={{
              d: isLeft ? [
                "M100,200 Q100,100 200,100 Q300,100 300,200 Q300,300 200,300 Q100,300 100,200 Z",
                "M120,180 Q80,120 200,80 Q320,120 280,220 Q320,300 200,320 Q80,280 120,180 Z",
                "M100,200 Q100,100 200,100 Q300,100 300,200 Q300,300 200,300 Q100,300 100,200 Z",
              ] : [
                "M300,200 Q300,100 200,100 Q100,100 100,200 Q100,300 200,300 Q300,300 300,200 Z",
                "M280,220 Q320,120 200,80 Q80,120 120,180 Q80,300 200,320 Q320,280 280,220 Z",
                "M300,200 Q300,100 200,100 Q100,100 100,200 Q100,300 200,300 Q300,300 300,200 Z",
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
        
        {/* Additional flowing blobs */}
        <motion.div
          className={`absolute top-10 ${isLeft ? 'left-10' : 'right-10'} w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-2xl`}
          animate={{
            x: isLeft ? [0, 30, 0] : [0, -30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className={`absolute bottom-10 ${isLeft ? 'right-10' : 'left-10'} w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-2xl`}
          animate={{
            x: isLeft ? [0, -20, 0] : [0, 20, 0],
            y: [0, 15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
      
      {/* Artist Image */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'left-8' : 'right-8'} w-64 h-80`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
      >
        <div className="relative w-full h-full">
          <ImageWithFallback
            src={artistImage}
            alt="Band member"
            className="w-full h-full object-cover object-center mix-blend-lighten opacity-80"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
