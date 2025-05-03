import React from "react";

const AnimatedLabel = ({
  text = "ÇOK SATAN",
  textColor = "white",
  className = "",
}) => {
  return (
    <div
      className={`flex justify-center w-full gap-[2px] rounded-t-md mb-2 ${className}`}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`font-bold text-sm animate-fade-in-up`}
          style={{
            color: textColor,
            animationDelay: `${index * 100}ms`,
            animationFillMode: "both",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedLabel;
