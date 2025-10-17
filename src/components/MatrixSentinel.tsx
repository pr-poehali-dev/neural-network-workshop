import { useEffect, useState } from 'react';

const MatrixSentinel = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed right-10 pointer-events-none z-40 transition-all duration-700 ease-out hidden lg:block"
      style={{
        top: `${5 + scrollProgress * 0.85}%`,
        transform: `translateY(-50%) scale(${0.7 + scrollProgress / 180})`,
        opacity: 0.2
      }}
    >
      <div className="relative">
        <img 
          src="https://cdn.poehali.dev/files/8a241011-2f0f-4e6a-875b-765f72f8ebed.jpeg"
          alt="AI Assistant"
          className="w-64 h-auto object-contain drop-shadow-2xl"
          style={{
            filter: 'brightness(0.9) contrast(1.1)',
            animation: 'float-android 6s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl"
          style={{
            animation: 'glow-pulse 3s ease-in-out infinite'
          }}
        />

        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ mixBlendMode: 'screen' }}
        >
          <defs>
            <linearGradient id="cyberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00ffff', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#ff00ff', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#00ffff', stopOpacity: 0.4 }} />
            </linearGradient>
            
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {[...Array(5)].map((_, i) => {
            const startY = 20 + i * 15;
            return (
              <line
                key={`scan-${i}`}
                x1="0"
                y1={`${startY}%`}
                x2="100%"
                y2={`${startY}%`}
                stroke="url(#cyberGlow)"
                strokeWidth="2"
                opacity="0.4"
                filter="url(#neonGlow)"
              >
                <animate
                  attributeName="y1"
                  values={`${startY}%;${startY + 60}%;${startY}%`}
                  dur={`${4 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y2"
                  values={`${startY}%;${startY + 60}%;${startY}%`}
                  dur={`${4 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.4;0.8;0.4"
                  dur={`${4 + i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </line>
            );
          })}

          {[...Array(8)].map((_, i) => {
            const cx = 30 + (i % 4) * 20;
            const cy = 20 + Math.floor(i / 4) * 60;
            return (
              <circle
                key={`particle-${i}`}
                cx={`${cx}%`}
                cy={`${cy}%`}
                r="2"
                fill="#00ffff"
                opacity="0.6"
                filter="url(#neonGlow)"
              >
                <animate
                  attributeName="cy"
                  values={`${cy}%;${cy + 40}%;${cy}%`}
                  dur={`${3 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur={`${2 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}

          <circle
            cx="70%"
            cy="25%"
            r="3"
            fill="#ff00ff"
            filter="url(#neonGlow)"
          >
            <animate
              attributeName="r"
              values="3;5;3"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="75%"
            cy="28%"
            r="2"
            fill="#00ffff"
            filter="url(#neonGlow)"
          >
            <animate
              attributeName="r"
              values="2;4;2"
              dur="1.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {[...Array(3)].map((_, i) => (
          <div
            key={`glow-ring-${i}`}
            className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border-2 border-cyan-400/20"
            style={{
              animation: `expand-ring ${3 + i}s ease-out infinite ${i * 0.8}s`,
              transformOrigin: 'center'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float-android {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(-1deg);
          }
          50% {
            transform: translateY(-5px) rotate(0deg);
          }
          75% {
            transform: translateY(-12px) rotate(1deg);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        @keyframes expand-ring {
          0% {
            transform: scale(0.5);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MatrixSentinel;
