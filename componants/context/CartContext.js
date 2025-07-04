import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{id, count}]
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prev, { ...product, count: 1 }];
      }
    });
    setPopupMessage("Ürün sepete eklendi!");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount, showPopup, popupMessage }}>
      {children}
    </CartContext.Provider>
  );
}; 