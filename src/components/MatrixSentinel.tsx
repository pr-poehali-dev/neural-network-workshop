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
      className="fixed left-1/2 pointer-events-none z-40 transition-all duration-300 ease-out"
      style={{
        top: `${scrollProgress}%`,
        transform: `translate(-50%, -50%) scale(${0.5 + scrollProgress / 200})`,
        opacity: 0.15
      }}
    >
      <svg
        width="200"
        height="300"
        viewBox="0 0 200 300"
        className="drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="sentinelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00FF99', stopOpacity: 0.8 }} />
            <stop offset="50%" style={{ stopColor: '#00CC77', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#008855', stopOpacity: 0.4 }} />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <radialGradient id="coreGlow">
            <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: '#FF4400', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#FF8800', stopOpacity: 0.2 }} />
          </radialGradient>
        </defs>

        <g filter="url(#glow)">
          <ellipse cx="100" cy="80" rx="60" ry="70" fill="url(#sentinelGradient)" opacity="0.7">
            <animate attributeName="ry" values="70;75;70" dur="3s" repeatCount="indefinite" />
          </ellipse>

          <ellipse cx="100" cy="50" rx="35" ry="40" fill="url(#sentinelGradient)" opacity="0.8">
            <animate attributeName="ry" values="40;45;40" dur="2.5s" repeatCount="indefinite" />
          </ellipse>

          <circle cx="100" cy="35" r="22" fill="url(#coreGlow)">
            <animate attributeName="r" values="22;25;22" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;1;0.9" dur="1.5s" repeatCount="indefinite" />
          </circle>

          <path
            d="M 70 110 Q 60 180 50 250"
            stroke="url(#sentinelGradient)"
            strokeWidth="12"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="d" values="M 70 110 Q 60 180 50 250;M 70 110 Q 65 180 55 250;M 70 110 Q 60 180 50 250" dur="4s" repeatCount="indefinite" />
          </path>

          <path
            d="M 130 110 Q 140 180 150 250"
            stroke="url(#sentinelGradient)"
            strokeWidth="12"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="d" values="M 130 110 Q 140 180 150 250;M 130 110 Q 135 180 145 250;M 130 110 Q 140 180 150 250" dur="4s" repeatCount="indefinite" />
          </path>

          <path
            d="M 40 90 Q 10 120 5 160"
            stroke="url(#sentinelGradient)"
            strokeWidth="10"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="d" values="M 40 90 Q 10 120 5 160;M 40 90 Q 15 125 10 160;M 40 90 Q 10 120 5 160" dur="3.5s" repeatCount="indefinite" />
          </path>

          <path
            d="M 160 90 Q 190 120 195 160"
            stroke="url(#sentinelGradient)"
            strokeWidth="10"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="d" values="M 160 90 Q 190 120 195 160;M 160 90 Q 185 125 190 160;M 160 90 Q 190 120 195 160" dur="3.5s" repeatCount="indefinite" />
          </path>

          <ellipse cx="50" cy="260" rx="20" ry="8" fill="url(#sentinelGradient)" opacity="0.4">
            <animate attributeName="rx" values="20;24;20" dur="4s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="150" cy="260" rx="20" ry="8" fill="url(#sentinelGradient)" opacity="0.4">
            <animate attributeName="rx" values="20;24;20" dur="4s" repeatCount="indefinite" />
          </ellipse>

          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const x = 100 + Math.cos(angle) * 70;
            const y = 80 + Math.sin(angle) * 70;
            return (
              <circle key={i} cx={x} cy={y} r="3" fill="#00FF99" opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="2s"
                  begin={`${i * 0.25}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}

          <path
            d="M 100 35 L 85 10 L 95 15 L 100 5 L 105 15 L 115 10 Z"
            fill="#FF6600"
            opacity="0.7"
          >
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
          </path>
        </g>

        <circle cx="92" cy="32" r="4" fill="#FFFFFF" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="108" cy="32" r="4" fill="#FFFFFF" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.3;0.9" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default MatrixSentinel;
