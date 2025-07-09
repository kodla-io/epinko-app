"use client";

import React, { useState, useEffect, useRef } from "react";

const games = [
  {
    id: 1,
    image: "https://placehold.co/300x300?text=PUBG+UC+60",
    title: "PUBG UC 60",
    discountedPrice: "60 UC",
    originalPrice: "500₺",
    description: "PUBG Mobile için 60 UC. Hızlı teslimat!",
  },
  {
    id: 2,
    image: "https://placehold.co/300x300?text=PUBG+UC+325",
    title: "PUBG UC 325",
    discountedPrice: "325 UC",
    originalPrice: "500₺",
    description: "PUBG Mobile için 325 UC. Hızlı teslimat!",
  },
  {
    id: 3,
    image: "https://placehold.co/300x300?text=PUBG+UC+660",
    title: "PUBG UC 660",
    discountedPrice: "660 UC",
    originalPrice: "500₺",
    description: "PUBG Mobile için 660 UC. Hızlı teslimat!",
  },
  {
    id: 4,
    image: "https://placehold.co/300x300?text=PUBG+UC+1800",
    title: "PUBG UC 1800",
    discountedPrice: "1800 UC",
    originalPrice: "500₺",
    description: "PUBG Mobile için 1800 UC. Hızlı teslimat!",
  },
  {
    id: 5,
    image: "https://placehold.co/300x300?text=PUBG+UC+3850",
    title: "PUBG UC 3850",
    discountedPrice: "3850 UC",
    originalPrice: "500₺",
    description: "PUBG Mobile için 3850 UC. Hızlı teslimat!",
  },
  {
    id: 6,
    image: "https://placehold.co/300x300?text=PUBG+UC+8100",
    title: "PUBG UC 8100",
    discountedPrice: "8100 UC",
    originalPrice: "500₺",
    description: "PUBG Mobile için 8100 UC. Hızlı teslimat!",
  },
  {
    id: 7,
    image: "https://placehold.co/300x300?text=PUBG+UC+16200",
    title: "PUBG UC 16200",
    discountedPrice: "16200 UC",
    originalPrice: "500₺",
    description: "PUBG Mobile için 16200 UC. Hızlı teslimat!",
  },
  {
    id: 8,
    image: "https://placehold.co/300x300?text=PUBG+UC+32400",
    title: "PUBG UC 32400",
    discountedPrice: "32400 UC",
    originalPrice: "500₺",
    description: "PUBG Mobile için 32400 UC. Hızlı teslimat!",
  },
  {
    id: 9,
    image: "https://placehold.co/300x300?text=PUBG+UC+64800",
    title: "PUBG UC 64800",
    discountedPrice: "64800 UC",
    originalPrice: "500₺",
    description: "PUBG Mobile için 64800 UC. Hızlı teslimat!",
  },
];

const GameTabs = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const activeGame = games[activeIndex];
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(60);
  const [targetIndex, setTargetIndex] = useState(null);
  const animationRef = useRef();
  const [visibleCount, setVisibleCount] = useState(9);
  const offsetCount = Math.floor(visibleCount / 2);

  // Tik sound effect
  const tikAudioRef = useRef(null);
  const caseOpenAudioRef = useRef(null);
  
  useEffect(() => {
    if (!tikAudioRef.current) {
      tikAudioRef.current = typeof Audio !== 'undefined' ? new Audio('/tik.mp3') : null;
    }
    if (!caseOpenAudioRef.current) {
      caseOpenAudioRef.current = typeof Audio !== 'undefined' ? new Audio('/case-open.mp3') : null;
    }
  }, []);

  useEffect(() => {
    if (isAnimating && tikAudioRef.current) {
      tikAudioRef.current.currentTime = 0;
      tikAudioRef.current.play();
    }
  }, [activeIndex, isAnimating]);

  // Only for animation, not for tab navigation
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1200) setVisibleCount(9);
      else if (width >= 900) setVisibleCount(7);
      else if (width >= 600) setVisibleCount(5);
      else setVisibleCount(3);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animasyonu başlatan fonksiyon
  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    // Rastgele bir hedef index seç (ortadaki hariç)
    let randomTarget = Math.floor(Math.random() * games.length);
    setTargetIndex(randomTarget);
    setAnimationSpeed(60);
    animateSliderTimed(randomTarget);
  };

  // Zaman kontrollü animasyon fonksiyonu
  const animateSliderTimed = (finalIndex) => {
    let currentIndex = activeIndex;
    let speed = 60;
    const startTime = Date.now();
    const totalDuration = 10000;
    const slowStart = 3000;
    function step() {
      const elapsed = Date.now() - startTime;
      currentIndex = (currentIndex + 1) % games.length;
      setActiveIndex(currentIndex);
      if (elapsed > slowStart) {
        const slowProgress = (elapsed - slowStart) / (totalDuration - slowStart);
        speed = 60 + slowProgress * 340;
      }
      setAnimationSpeed(speed);
      if (elapsed >= totalDuration) {
        setIsAnimating(false);
        setTargetIndex(null);
        setActiveIndex(finalIndex);
        // Kasa açma animasyonu bittiğinde case-open.mp3 sesini çal
        if (caseOpenAudioRef.current) {
          caseOpenAudioRef.current.currentTime = 0;
          caseOpenAudioRef.current.play();
        }
        return;
      }
      animationRef.current = setTimeout(step, speed);
    }
    step();
  };

  React.useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  // Sabit üst bilgi (ör: PUBG UC Kasa)
  const fixedInfo = {
    image: "https://placehold.co/300x300?text=PUBG+UC+Kasa",
    title: "PUBG UC Kasa",
    description: "Bu kasadan rastgele PUBG Mobile UC ürünleri kazanabilirsin! Şansını dene!",
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold"
        >
          BRONZ KASA AÇ
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="w-full mx-auto p-4 bg-[var(--advert-card-bg)] rounded-lg">
        {/* Sabit Üst Bilgi */}
        <div className="text-[var(--foreground)] p-6 flex flex-col md:flex-row gap-6">
          <div>
            <div className="relative rounded-lg">
              <img
                src={fixedInfo.image}
                alt={fixedInfo.title}
                className="w-full h-full md:max-h-[200px] md:min-h-[200px] md:max-w-[200px] md:min-w-[200px] rounded-lg object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent rounded-b-lg backdrop-blur-md flex flex-col justify-end px-4 pb-2">
                <h3 className="text-white text-lg font-semibold text-lg text-center">
                  15₺
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-2">{fixedInfo.title}</h2>
            <p className="text-sm mb-4">{fixedInfo.description}</p>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-[var(--label2)] rounded-xl font-semibold">
                500₺
              </span>
              <button
                className="px-6 py-2 bg-indigo-400 text-white rounded-lg font-bold text-lg disabled:opacity-50"
                onClick={startAnimation}
                disabled={isAnimating}
              >
                Kasa Aç
              </button>
            </div>
          </div>
        </div>

        {/* Animasyon Alanı (Slider) */}
        <div className="overflow-x-hidden w-full mt-6">
          <div
            className="flex items-end justify-center gap-2 w-full relative"
            style={{
              width: "100%",
              minHeight: "160px",
              transition: isAnimating ? "transform 0.1s linear" : "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {Array.from({ length: visibleCount }).map((_, i) => {
              const offset = i - offsetCount;
              let gameIndex = (activeIndex + offset + games.length) % games.length;
              const game = games[gameIndex];
              const isActive = offset === 0;
              return (
                <div
                  key={game.id + '-' + i}
                  className={`relative flex flex-col items-center justify-center transition-all duration-500 overflow-hidden game-card-top-price
                    ${isActive ? "border-[5px] border-b-0 border-[var(--success)] h-[156px] z-10" : "h-[130px] z-0"}
                    w-[140px] bg-[var(--advert-card-bg)] rounded-lg shadow-md`}
                  style={{
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    opacity: Math.abs(offset) > offsetCount ? 0 : 1,
                  }}
                >
                  <style>{`
                  .game-card-top-price::before {
                    content: "";
                    position: absolute;
                    top: -10px;
                    left: -14px;
                    width: 67px;
                    height: 41px;
                    background-color: var(--before-bg-color);
                    border-radius: 15px;
                    transform: rotate(-10deg);
                    z-index: 1;
                  }
                `}</style>
                  <img
                    src={game.image}
                    alt={game.title}
                    className={`w-full h-full object-cover ${isActive ? "" : "grayscale"}`}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent flex flex-col justify-end px-4 pb-2">
                    <h3 className="text-white text-lg font-semibold text-xs clamp-1">
                      {game.title}
                    </h3>
                    <p className="text-xs clamp-1">Lorem Ipsum</p>
                  </div>
                  <div className="absolute text-left z-20 font-semibold top-0 left-1 w-full flex flex-col">
                    <p className="text-md">{game.discountedPrice}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTabs;
