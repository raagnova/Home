import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function LiquidLogo() {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch('/logo.svg')
      .then(res => res.text())
      .then(text => setSvgContent(text));
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <svg viewBox="0 0 800 200" className="w-full">
          <defs>
            {/* Animated Gradient 1 - Purple to Blue */}
            <linearGradient id="liquidGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7">
                <animate
                  attributeName="stop-color"
                  values="#a855f7; #3b82f6; #8b5cf6; #6366f1; #a855f7"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="33%" stopColor="#3b82f6">
                <animate
                  attributeName="stop-color"
                  values="#3b82f6; #8b5cf6; #6366f1; #a855f7; #3b82f6"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="66%" stopColor="#8b5cf6">
                <animate
                  attributeName="stop-color"
                  values="#8b5cf6; #6366f1; #a855f7; #3b82f6; #8b5cf6"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#6366f1">
                <animate
                  attributeName="stop-color"
                  values="#6366f1; #a855f7; #3b82f6; #8b5cf6; #6366f1"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 0.5 0.5"
                to="360 0.5 0.5"
                dur="8s"
                repeatCount="indefinite"
              />
            </linearGradient>

            {/* Animated Gradient 2 - For overlay effect */}
            <linearGradient id="liquidGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8">
                <animate
                  attributeName="stop-color"
                  values="#ec4899; #8b5cf6; #3b82f6; #ec4899"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6">
                <animate
                  attributeName="stop-color"
                  values="#3b82f6; #ec4899; #8b5cf6; #3b82f6"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8">
                <animate
                  attributeName="stop-color"
                  values="#8b5cf6; #3b82f6; #ec4899; #8b5cf6"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="360 0.5 0.5"
                to="0 0.5 0.5"
                dur="10s"
                repeatCount="indefinite"
              />
            </linearGradient>

            {/* Liquid Goo Filter */}
            <filter id="gooFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>

            {/* Turbulence for liquid flow effect */}
            <filter id="turbulence">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01 0.003"
                numOctaves="2"
                result="turbulence"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.01 0.003; 0.015 0.005; 0.01 0.003"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="8"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>

            {/* Flowing liquid blobs filter */}
            <filter id="liquidBlobs">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.02"
                numOctaves="3"
                result="turbulence"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.02; 0.03; 0.02"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="12"
                xChannelSelector="R"
                yChannelSelector="G"
                result="displacement"
              />
              <feGaussianBlur in="displacement" stdDeviation="6" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              />
            </filter>
          </defs>

          {/* Background glow layer with goo effect */}
          <g opacity="0.3" filter="url(#gooFilter)">
            <text
              x="400"
              y="140"
              textAnchor="middle"
              fontSize="120"
              fontWeight="700"
              fill="url(#liquidGradient1)"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-2px' }}
            >
              RaagNova
              <animate
                attributeName="opacity"
                values="0.3; 0.5; 0.3"
                dur="4s"
                repeatCount="indefinite"
              />
            </text>
          </g>

          {/* Main text with turbulence liquid effect */}
          <text
            x="400"
            y="140"
            textAnchor="middle"
            fontSize="120"
            fontWeight="700"
            fill="url(#liquidGradient1)"
            filter="url(#turbulence)"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-2px' }}
          >
            RaagNova
          </text>

          {/* Overlay gradient layer with screen blend */}
          <text
            x="400"
            y="140"
            textAnchor="middle"
            fontSize="120"
            fontWeight="700"
            fill="url(#liquidGradient2)"
            opacity="0.7"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif', 
              letterSpacing: '-2px',
              mixBlendMode: 'screen' 
            }}
          >
            RaagNova
          </text>

          {/* Animated liquid droplet bubbles below each letter */}
          {[
            { x: 140, letter: 'R' },
            { x: 200, letter: 'a' },
            { x: 260, letter: 'a' },
            { x: 320, letter: 'g' },
            { x: 400, letter: 'N' },
            { x: 480, letter: 'o' },
            { x: 550, letter: 'v' },
            { x: 620, letter: 'a' }
          ].map((item, index) => (
            <g key={index}>
              <circle
                cx={item.x}
                cy="160"
                r="8"
                fill="url(#liquidGradient2)"
                filter="url(#gooFilter)"
              >
                <animate
                  attributeName="cy"
                  values="160; 140; 160"
                  dur="2s"
                  begin={`${index * 0.15}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  values="8; 12; 8"
                  dur="2s"
                  begin={`${index * 0.15}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6; 1; 0.6"
                  dur="2s"
                  begin={`${index * 0.15}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Secondary smaller bubble */}
              <circle
                cx={item.x + 5}
                cy="165"
                r="4"
                fill="url(#liquidGradient1)"
                filter="url(#gooFilter)"
              >
                <animate
                  attributeName="cy"
                  values="165; 145; 165"
                  dur="2.5s"
                  begin={`${index * 0.15 + 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4; 0.8; 0.4"
                  dur="2.5s"
                  begin={`${index * 0.15 + 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}

          {/* Flowing blob shapes behind the text */}
          <g opacity="0.2" filter="url(#liquidBlobs)">
            <ellipse cx="200" cy="100" rx="60" ry="40" fill="url(#liquidGradient1)">
              <animate attributeName="rx" values="60; 80; 60" dur="6s" repeatCount="indefinite" />
              <animate attributeName="ry" values="40; 50; 40" dur="6s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="600" cy="100" rx="70" ry="45" fill="url(#liquidGradient2)">
              <animate attributeName="rx" values="70; 85; 70" dur="7s" repeatCount="indefinite" />
              <animate attributeName="ry" values="45; 55; 45" dur="7s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="400" cy="80" rx="50" ry="35" fill="url(#liquidGradient1)">
              <animate attributeName="rx" values="50; 65; 50" dur="5s" repeatCount="indefinite" />
              <animate attributeName="ry" values="35; 45; 35" dur="5s" repeatCount="indefinite" />
            </ellipse>
          </g>
        </svg>
      </motion.div>

      {/* Animated background glow */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-3xl -z-10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
