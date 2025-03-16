"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const OfferSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  // Slider içerikleri burada tanımlanır
  const slides = [
    {
      image: "https://placehold.co/300x400",
      tag: "30% İndirim",
      price: "19.99₺",
      description: "200 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "20% İndirim",
      price: "29.99₺",
      description: "300 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "30% İndirim",
      price: "19.99₺",
      description: "200 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "20% İndirim",
      price: "29.99₺",
      description: "300 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "30% İndirim",
      price: "19.99₺",
      description: "200 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "20% İndirim",
      price: "29.99₺",
      description: "300 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "30% İndirim",
      price: "19.99₺",
      description: "200 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "20% İndirim",
      price: "29.99₺",
      description: "300 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "30% İndirim",
      price: "19.99₺",
      description: "200 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "20% İndirim",
      price: "29.99₺",
      description: "300 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "30% İndirim",
      price: "19.99₺",
      description: "200 Cash",
    },
    {
      image: "https://placehold.co/300x400",
      tag: "20% İndirim",
      price: "29.99₺",
      description: "300 Cash",
    },
  ];

  return (
    <div className="offer flex justify-center">
      <div className="container">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide" key={index}>
                <img src={slide.image} alt="" className="embla__slide__img" />
                <div className="slide__content">
                  <div className="tag">{slide.tag}</div>
                  <div className="price">{slide.price}</div>
                  <div className="description">{slide.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSlider;
