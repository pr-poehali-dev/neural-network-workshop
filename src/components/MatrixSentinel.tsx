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
        opacity: 0.1
      }}
    >
      <div className="relative">
        <img 
          src="https://cdn.poehali.dev/files/87488e65-a37a-4e88-8abb-41615cec4599.png"
          alt="Сергей Черников"
          className="w-80 h-auto object-contain"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(0, 255, 153, 0.6)) drop-shadow(0 0 40px rgba(0, 255, 153, 0.3))',
            animation: 'float-logo 6s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl"
          style={{
            animation: 'glow-pulse 4s ease-in-out infinite'
          }}
        />

        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ mixBlendMode: 'screen' }}
        >
          <defs>
            <linearGradient id="logoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00FF99', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#00CC77', stopOpacity: 0.3 }} />
            </linearGradient>
            
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * Math.PI * 2;
            const baseX = 50;
            const baseY = 50;
            const radius = 40;
            const cx = baseX + Math.cos(angle) * radius;
            const cy = baseY + Math.sin(angle) * radius;
            
            return (
              <circle
                key={`orbit-${i}`}
                cx={`${cx}%`}
                cy={`${cy}%`}
                r="3"
                fill="#00FF99"
                opacity="0.5"
                filter="url(#softGlow)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values={`0 50 50; 360 50 50`}
                  dur={`${8 + i}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;1;0.5"
                  dur={`${2 + i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}

          <circle
            cx="20%"
            cy="20%"
            r="2"
            fill="#00FF99"
            filter="url(#softGlow)"
          >
            <animate
              attributeName="cy"
              values="20%;80%;20%"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="80%"
            cy="30%"
            r="2"
            fill="#00CC77"
            filter="url(#softGlow)"
          >
            <animate
              attributeName="cy"
              values="30%;70%;30%"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {[...Array(2)].map((_, i) => (
          <div
            key={`glow-ring-${i}`}
            className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full border border-primary/10"
            style={{
              animation: `expand-ring ${4 + i * 2}s ease-out infinite ${i * 1.5}s`,
              transformOrigin: 'center'
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float-logo {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.15);
          }
        }

        @keyframes expand-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MatrixSentinel;