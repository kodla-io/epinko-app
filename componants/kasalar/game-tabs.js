"use client";

import React, { useState, useEffect, useRef } from "react";

const games = [
  {
    id: 1,
    image: "https://placehold.co/300.png?text=Far+Cry+6",
    title: "Far Cry 6",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 2,
    image: "https://placehold.co/300.png?text=GTA+V",
    title: "GTA V",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 3,
    image: "https://placehold.co/300.png?text=Valorant",
    title: "Valorant",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 4,
    image: "https://placehold.co/300.png?text=Roblox",
    title: "Roblox",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/81J5Tg-f0KL.png",
    title: "PUBG",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 6,
    image: "https://placehold.co/300.png?text=League+of+Legends",
    title: "League of Legends",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 7,
    image: "https://placehold.co/300.png?text=Metin2",
    title: "Metin2",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 8,
    image: "https://placehold.co/300.png?text=Minecraft",
    title: "Minecraft",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 9,
    image: "https://placehold.co/300.png?text=FIFA+23",
    title: "FIFA 23",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
];

const GameTabs = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const activeGame = games[activeIndex];
  const [isAnimating, setIsAnimating] = useState(false);
  const [sliderOffset, setSliderOffset] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(60); // px per frame, başta hızlı
  const [targetIndex, setTargetIndex] = useState(null);
  const animationRef = useRef();
  const tabWidth = 180; // Her bir tab'ın yaklaşık genişliği (px)
  const [slideDirection, setSlideDirection] = useState(null); // 'left' veya 'right'
  const [prevActiveIndex, setPrevActiveIndex] = useState(activeIndex);
  const [isSliding, setIsSliding] = useState(false);

  const tabsRef = useRef([]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const el = tabsRef.current[activeIndex];
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activeIndex]);

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

  // Yeni: Zaman kontrollü animasyon fonksiyonu
  const animateSliderTimed = (finalIndex) => {
    let currentIndex = activeIndex;
    let speed = 60; // Başlangıç hızı (ms)
    const startTime = Date.now();
    const totalDuration = 10000; // 10 saniye
    const slowStart = 3000; // 3. saniyeden sonra yavaşlamaya başla
    function step() {
      const elapsed = Date.now() - startTime;
      // Kartları kaydır
      currentIndex = (currentIndex + 1) % games.length;
      setActiveIndex(currentIndex);
      // 5. saniyeden sonra yavaşlat
      if (elapsed > slowStart) {
        // 5-10 sn arası hız yavaşça artsın (ms cinsinden)
        const slowProgress = (elapsed - slowStart) / (totalDuration - slowStart);
        speed = 60 + slowProgress * 340; // 60ms'den 400ms'ye kadar yavaşlat
      }
      setAnimationSpeed(speed);
      // 10. saniyede dur ve final kartta kal
      if (elapsed >= totalDuration) {
        setIsAnimating(false);
        setTargetIndex(null);
        setActiveIndex(finalIndex);
        return;
      }
      animationRef.current = setTimeout(step, speed);
    }
    step();
  };

  // Temizleme (unmount)
  React.useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  // Tab tıklama fonksiyonu (slider hariç)
  const handleTabClick = (newIndex) => {
    if (isAnimating || newIndex === activeIndex) return;
    setSlideDirection(newIndex > activeIndex ? 'left' : 'right');
    setPrevActiveIndex(activeIndex);
    setIsSliding(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsSliding(false);
    }, 350); // animasyon süresi
  };

  // Ekran boyutuna göre görünür kart sayısı ve offset
  const [visibleCount, setVisibleCount] = useState(9);
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
  const offsetCount = Math.floor(visibleCount / 2);

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
        {/* Tab Content */}
        <div className="text-[var(--foreground)] p-6 flex flex-col md:flex-row gap-6">
          <div>
            <div className="relative rounded-lg">
              <img
                src={activeGame.image}
                alt={activeGame.title}
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
            <h2 className="text-2xl font-bold mb-2">{activeGame.title}</h2>
            <p className="text-sm mb-4">{activeGame.description}</p>
            <div className="flex items-center gap-4">
              {/* <span className="px-4 py-2 bg-[var(--label2)] rounded-xl font-semibold">
                {activeGame.originalPrice}
              </span> */}
              <button
                className="px-6 py-2 bg-indigo-400 text-white rounded-lg font-bold text-lg disabled:opacity-50"
                onClick={startAnimation}
                disabled={isAnimating}
              >
                500₺
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="overflow-x-hidden w-full">
          <div
            className="flex items-end justify-center gap-2 w-full relative"
            style={{
              width: "100%",
              minHeight: "160px",
              transition: isAnimating ? "transform 0.1s linear" : "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {Array.from({ length: visibleCount }).map((_, i) => {
              // Ortadaki aktif olacak şekilde, aktifIndex'in etrafındaki offsetCount kadar kartı göster
              const offset = i - offsetCount;
              let gameIndex = (activeIndex + offset + games.length) % games.length;
              const game = games[gameIndex];
              const isActive = offset === 0;
              return (
                <button
                  key={game.id + '-' + i}
                  onClick={() => handleTabClick(gameIndex)}
                  className={`relative flex flex-col items-center justify-center transition-all duration-500 overflow-hidden game-card-top-price
                    ${isActive ? "border-[5px] border-b-0 border-[var(--success)] h-[156px] z-10" : "h-[130px] z-0"}
                    w-[140px] bg-[var(--advert-card-bg)] rounded-lg shadow-md`}
                  style={{
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    opacity: Math.abs(offset) > offsetCount ? 0 : 1,
                    pointerEvents: isAnimating ? "none" : "auto",
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
                  {isActive ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <div
                        className={`absolute w-full h-full top-0 left-0 transition-transform duration-300 ease-in-out
                          ${isSliding && slideDirection === 'left' ? 'translate-x-[-100%]' : ''}
                          ${isSliding && slideDirection === 'right' ? 'translate-x-[100%]' : ''}
                        `}
                        style={{ zIndex: 2 }}
                      >
                        <img
                          src={games[prevActiveIndex].image}
                          alt={games[prevActiveIndex].title}
                          className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent flex flex-col justify-end px-4 pb-2">
                          <h3 className="text-white text-lg font-semibold text-xs clamp-1">
                            {games[prevActiveIndex].title}
                          </h3>
                          <p className="text-xs clamp-1">Lorem Ipsum</p>
                        </div>
                        <div className="absolute text-left z-20 font-semibold top-0 left-1 w-full flex flex-col">
                          <p className="text-md">{games[prevActiveIndex].discountedPrice}</p>
                        </div>
                      </div>
                      <div
                        className={`absolute w-full h-full top-0 left-0 transition-transform duration-300 ease-in-out
                          ${isSliding && slideDirection === 'left' ? 'translate-x-0' : ''}
                          ${isSliding && slideDirection === 'right' ? 'translate-x-0' : ''}
                          ${!isSliding ? '' : 'z-10'}
                        `}
                        style={{
                          transform: isSliding
                            ? slideDirection === 'left'
                              ? 'translateX(100%)'
                              : 'translateX(-100%)'
                            : 'translateX(0%)',
                          zIndex: 3,
                        }}
                      >
                        <img
                          src={game.image}
                          alt={game.title}
                          className="w-full h-full object-cover"
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
                    </div>
                  ) : (
                    <>
                      <img
                        src={game.image}
                        alt={game.title}
                        className={`w-full h-full object-cover grayscale`}
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
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTabs;
