"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import Link from "next/link";

const EmblaCarousel = () => {
  const options = {};
  const SLIDE_COUNT = 4;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const containerClass = slides.length <= 6 ? 'flex justify-center embla-thumbs__container' : 'embla-thumbs__container';

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-0 md:gap-4 p-0 md:p-4">
        {/* Sol Kısım - Slider */}
        <div className="col-span-12 md:col-span-8 py-0 px-4 md:px-0 md:p-0">
          <div className="xl:h-64 lg:h-48 md:h-32 flex items-center justify-center">
            <div className="embla">
              <div className="embla__viewport" ref={emblaMainRef}>
                <div className="embla__container">
                  {slides.map((index) => (
                    <div className="embla__slide" key={index}>
                      <div className="embla__slide__number">
                        {/* {index + 1} */}
                        <img className="object-cover rounded-xl w-full" src="https://placehold.co/2000x1000" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="embla-thumbs relative sm-top-custom md-top-custom lg-top-custom xl-top-custom xxl-top-custom">
                <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                  <div className={containerClass}>
                    {slides.map((index) => (
                      <Thumb
                        key={index}
                        onClick={() => onThumbClick(index)}
                        selected={index === selectedIndex}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Sağ Kısım - İki Banner */}
        <div className="sm:pt-4 col-span-12 md:col-span-4 p-4 md:p-0 flex flex-col space-y-4">
          <Link href="/all-games">
            <div className="h-32 md:h-32 lg:h-40 xl:h-56">
              <img
                src="https://placehold.co/200x150"
                alt="Banner 1"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </Link>
          <Link href="/all-games">
            <div className="h-32 md:h-32 lg:h-40 xl:h-56">
              <img
                src="https://placehold.co/200x150"
                alt="Banner 2"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
