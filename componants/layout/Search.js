import React, { useState, useEffect } from 'react';

const SearchInput = () => {
  const placeholders = [
    "Pubg Mobile Kasalar...",
    "Valorant Skinli Hesap",
    "CS:GO Item Satışı",
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPlaceholder = placeholders[placeholderIndex];

    const typeTimeout = setTimeout(() => {
      setDisplayText((currentText) => {
        if (!isDeleting) {
          return currentPlaceholder.substring(0, currentText.length + 1);
        } else {
          return currentText.substring(0, currentText.length - 1);
        }
      });

      if (!isDeleting && displayText === currentPlaceholder) {
        setTimeout(() => setIsDeleting(true), 100);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
      }
    }, 50);

    return () => clearTimeout(typeTimeout);
  }, [displayText, isDeleting, placeholderIndex, placeholders]);

  return (
    <input
      type="text"
      style={{backgroundColor: "#ffffff14", padding: "15px"}}
      className="pl-3 pr-10 py-2 px-4 w-128 rounded-md focus:outline-none"
      placeholder={displayText}
    />
  );
};

export default SearchInput;
