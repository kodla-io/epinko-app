import React, { useEffect, useState } from "react";

const pad = (num) => String(num).padStart(2, "0");

const TimerDisplay = ({ startTime }) => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const start = startTime ? new Date(startTime) : new Date();
    const tick = () => {
      const now = new Date();
      const diff = now - start;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setTime({ days, hours, minutes });
    };
    tick();
    const interval = setInterval(tick, 60000); // her dakika güncelle
    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div className="bg-[var(--profile-tab-bg)] text-[var(--foreground)] rounded-md px-4 py-2 text-center text-xs font-medium mt-2 shadow">
      {pad(time.days)} gün {pad(time.hours)} saat {pad(time.minutes)} dakika
    </div>
  );
};

export default TimerDisplay; 