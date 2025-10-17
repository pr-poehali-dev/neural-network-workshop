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
      className="fixed left-1/2 pointer-events-none z-40 transition-all duration-500 ease-out"
      style={{
        top: `${10 + scrollProgress * 0.8}%`,
        transform: `translate(-50%, -50%) scale(${0.6 + scrollProgress / 150})`,
        opacity: 0.3
      }}
    >
      <svg
        width="400"
        height="500"
        viewBox="0 0 400 500"
        className="drop-shadow-2xl filter brightness-75 contrast-125"
      >
        <defs>
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2a2a2a', stopOpacity: 1 }} />
            <stop offset="30%" style={{ stopColor: '#4a4a4a', stopOpacity: 1 }} />
            <stop offset="60%" style={{ stopColor: '#3a3a3a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
          </linearGradient>

          <radialGradient id="eyeGlow">
            <stop offset="0%" style={{ stopColor: '#ff0000', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#cc0000', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#880000', stopOpacity: 0.3 }} />
          </radialGradient>

          <filter id="metallic">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="redGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#metallic)">
          <ellipse cx="200" cy="100" rx="80" ry="50" fill="url(#metalGradient)">
            <animate attributeName="ry" values="50;52;50" dur="2s" repeatCount="indefinite" />
          </ellipse>

          <rect x="160" y="95" width="80" height="15" rx="3" fill="#3a3a3a"/>
          <rect x="165" y="98" width="70" height="9" rx="2" fill="#2a2a2a"/>

          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x = 200 + Math.cos(angle) * 65;
            const y = 100 + Math.sin(angle) * 42;
            return (
              <g key={`eye-${i}`}>
                <circle cx={x} cy={y} r="8" fill="#1a1a1a" />
                <circle cx={x} cy={y} r="5" fill="url(#eyeGlow)" filter="url(#redGlow)">
                  <animate 
                    attributeName="r" 
                    values="5;6;5" 
                    dur={`${1.5 + i * 0.1}s`} 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle cx={x - 1} cy={y - 1} r="2" fill="#ff4444" opacity="0.8"/>
              </g>
            );
          })}

          <ellipse cx="200" cy="150" rx="50" ry="60" fill="url(#metalGradient)">
            <animate attributeName="ry" values="60;63;60" dur="3s" repeatCount="indefinite" />
          </ellipse>

          {[0, 1, 2].map((col) => (
            <g key={`segment-${col}`}>
              <rect 
                x={170 + col * 20} 
                y="140" 
                width="15" 
                height="50" 
                rx="2" 
                fill="#2a2a2a"
              />
              {[...Array(8)].map((_, i) => (
                <rect 
                  key={i}
                  x={172 + col * 20} 
                  y={142 + i * 6} 
                  width="11" 
                  height="4" 
                  rx="1" 
                  fill="#1a1a1a"
                />
              ))}
            </g>
          ))}

          {[
            { startX: 160, startY: 180, endX: 80, endY: 450, delay: 0 },
            { startX: 180, startY: 185, endX: 120, endY: 460, delay: 0.3 },
            { startX: 200, startY: 190, endX: 180, endY: 480, delay: 0.6 },
            { startX: 220, startY: 185, endX: 280, endY: 460, delay: 0.9 },
            { startX: 240, startY: 180, endX: 320, endY: 450, delay: 1.2 },
          ].map((tentacle, idx) => {
            const segments = 15;
            const pathSegments = [];
            
            for (let i = 0; i <= segments; i++) {
              const t = i / segments;
              const x = tentacle.startX + (tentacle.endX - tentacle.startX) * t;
              const y = tentacle.startY + (tentacle.endY - tentacle.startY) * t;
              const wave = Math.sin(t * Math.PI * 3) * 15;
              pathSegments.push(`${i === 0 ? 'M' : 'L'} ${x + wave} ${y}`);
            }

            return (
              <g key={`tentacle-${idx}`}>
                <path
                  d={pathSegments.join(' ')}
                  stroke="url(#metalGradient)"
                  strokeWidth={20 - idx * 2}
                  fill="none"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="d"
                    values={`
                      ${pathSegments.join(' ')};
                      M ${tentacle.startX} ${tentacle.startY} ${pathSegments.slice(1).map((seg, i) => {
                        const t = (i + 1) / segments;
                        const x = tentacle.startX + (tentacle.endX - tentacle.startX) * t;
                        const y = tentacle.startY + (tentacle.endY - tentacle.startY) * t;
                        const wave = Math.sin(t * Math.PI * 3 + 0.5) * 20;
                        return `L ${x + wave} ${y}`;
                      }).join(' ')};
                      ${pathSegments.join(' ')}
                    `}
                    dur={`${4 + idx * 0.5}s`}
                    repeatCount="indefinite"
                    begin={`${tentacle.delay}s`}
                  />
                </path>

                {[...Array(12)].map((_, segIdx) => {
                  const t = segIdx / 12;
                  const x = tentacle.startX + (tentacle.endX - tentacle.startX) * t;
                  const y = tentacle.startY + (tentacle.endY - tentacle.startY) * t;
                  return (
                    <rect
                      key={segIdx}
                      x={x - 6}
                      y={y}
                      width="12"
                      height="8"
                      rx="2"
                      fill="#1a1a1a"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="translate"
                        values={`0,0; ${Math.sin(segIdx) * 5},0; 0,0`}
                        dur={`${3 + idx * 0.5}s`}
                        repeatCount="indefinite"
                        begin={`${tentacle.delay + segIdx * 0.1}s`}
                      />
                    </rect>
                  );
                })}

                <path
                  d={`M ${tentacle.endX - 15} ${tentacle.endY} L ${tentacle.endX} ${tentacle.endY + 15} L ${tentacle.endX + 15} ${tentacle.endY} L ${tentacle.endX} ${tentacle.endY - 5} Z`}
                  fill="#2a2a2a"
                  stroke="#1a1a1a"
                  strokeWidth="2"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values={`0 ${tentacle.endX} ${tentacle.endY}; 5 ${tentacle.endX} ${tentacle.endY}; -5 ${tentacle.endX} ${tentacle.endY}; 0 ${tentacle.endX} ${tentacle.endY}`}
                    dur={`${2 + idx * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            );
          })}

          <ellipse cx="200" cy="130" rx="35" ry="25" fill="#1a1a1a" opacity="0.6"/>
          
          <circle cx="185" cy="125" r="6" fill="url(#eyeGlow)" filter="url(#redGlow)">
            <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="215" cy="125" r="6" fill="url(#eyeGlow)" filter="url(#redGlow)">
            <animate attributeName="opacity" values="1;0.3;1" dur="3s" begin="0.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default MatrixSentinel;
