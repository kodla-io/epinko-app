"use client";

import React, { useEffect, useRef, useState } from 'react';

const icons = [
  { name: 'valorant', bg: '#ff4655' },
  { name: 'lol', bg: '#0b161a' },
  { name: 'pubg', bg: '#f7b500' },
  { name: 'roblox', bg: '#ffffff' },
  { name: 'valorant', bg: '#ff4655' },
  { name: 'lol', bg: '#0b161a' },
  { name: 'pubg', bg: '#f7b500' },
  { name: 'roblox', bg: '#ffffff' },
  { name: 'valorant', bg: '#ff4655' },
  { name: 'lol', bg: '#0b161a' },
  { name: 'pubg', bg: '#f7b500' },
  { name: 'roblox', bg: '#ffffff' },
  { name: 'valorant', bg: '#ff4655' },
  { name: 'lol', bg: '#0b161a' },
  { name: 'pubg', bg: '#f7b500' },
  { name: 'roblox', bg: '#ffffff' },
];

const Preloader = ({ isLoading = true }) => {
  const [frame, setFrame] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [faceIndex, setFaceIndex] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 0.2; // derece/ms, daha yavaş ve pürüzsüz
    function animate(now) {
      const delta = now - lastTime;
      lastTime = now;
      setRotation(r => r + speed * delta);
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  if (!isLoading) return null;

  const frontIdx = frame % icons.length;
  const backIdx = (frame + 1) % icons.length;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(20, 20, 30, 0.95)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        transition: 'opacity 0.5s ease-out',
        opacity: isLoading ? 1 : 0,
      }}
    >
      <div className="glass-loader">
        <div className="preloader-content">
          {/* Dönüş açısına göre ikon ve bg seçimi */}
          {(() => {
            const totalCycle = 90 + (icons.length - 1) * 180;
            const rot = ((rotation % totalCycle) + totalCycle) % totalCycle;
            let idx;
            if (rot < 90) {
              idx = 0;
            } else {
              idx = 1 + Math.floor((rot - 90) / 180);
            }
            idx = idx % icons.length;
            const icon = icons[idx];
            return (
              <>
                <div className="cube-container">
                  <div
                    className="cube-3d"
                    style={{ transform: `rotateY(${rotation}deg)`, transition: 'none' }}
                  >
                    {/* Ön yüz */}
                    <div className="cube-face cube-face-front" style={{ background: icon.bg }}>
                      <img src={`/media/game-logos/${icon.name}.png`} alt={icon.name} className="cube-icon" />
                    </div>
                    {/* Arka yüz */}
                    <div className="cube-face cube-face-back" style={{ background: icon.bg }}>
                      <img src={`/media/game-logos/${icon.name}.png`} alt={icon.name} className="cube-icon" />
                    </div>
                    {/* Sağ yüz */}
                    <div className="cube-face cube-face-right" />
                    {/* Sol yüz */}
                    <div className="cube-face cube-face-left" />
                    {/* Üst yüz */}
                    <div className="cube-face cube-face-top" />
                    {/* Alt yüz */}
                    <div className="cube-face cube-face-bottom" />
                  </div>
                </div>
                <div className="epinko-label">{icon.name.toUpperCase()}</div>
              </>
            );
          })()}
        </div>
      </div>
      <style jsx>{`
        .glass-loader {
          border-radius: 2rem;
          padding: 3rem 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cube-container {
          position: relative;
          width: 120px;
          height: 120px;
          perspective: 1000px;
          margin: 0 auto;
        }
        .cube-3d {
          position: relative;
          width: 120px;
          height: 120px;
          transform-style: preserve-3d;
          animation: none;
        }
        .cube-face {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.10);
          border: 2px solid rgba(200, 220, 255, 0.25);
          box-shadow: 0 4px 24px 0 rgba(31,38,135,0.13), 0 0 0 1px rgba(255,255,255,0.08) inset;
          backdrop-filter: blur(6px) brightness(1.15);
        }
        .cube-face-front, .cube-face-back {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cube-face-front {
          transform: rotateY(0deg) translateZ(8px);
        }
        .cube-face-back {
          transform: rotateY(180deg) translateZ(8px);
        }
        .cube-face-right, .cube-face-left {
          width: 16px;
          height: 120px;
          left: 52px;
        }
        .cube-face-right {
          transform: rotateY(90deg) translateZ(60px);
        }
        .cube-face-left {
          transform: rotateY(-90deg) translateZ(60px);
        }
        .cube-face-top, .cube-face-bottom {
          width: 120px;
          height: 16px;
          top: 52px;
        }
        .cube-face-top {
          transform: rotateX(90deg) translateZ(52px);
        }
        .cube-face-bottom {
          transform: rotateX(-90deg) translateZ(52px);
        }
        .cube-icon {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
        }
        .epinko-label {
          margin-top: 24px;
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #fff;
          text-shadow: 0 2px 16px rgba(0,0,0,0.18), 0 1px 0 #b3b3b3;
          font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default Preloader; 