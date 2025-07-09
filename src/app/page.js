"use client";
import { useEffect, useState } from "react";
import EmblaCarousel from "../../componants/home-slider/EmblaCarousel";
import StorySlider from "../../componants/story-slider/slider";
import Advert from "../../componants/advert/advert-tabs";
import PopularGames from "../../componants/popular-games/popular-games";
import NewAdver from "../../componants/advert/new-advert/new-adverts";
import NewsSlider from "../../componants/news/news";
import SingleCategoryCards from "../../componants/category/single-category-cards";
import Particles from './Particles';

export default function Home() {
  return (
    <div className="relative">
      <div style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: 0
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={30}
          speed={0.4}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>
      <div className="relative z-20">
        <StorySlider />
        <EmblaCarousel />
        <Advert />
        <PopularGames />
        <SingleCategoryCards />
        <NewAdver />
        <NewsSlider />
      </div>
    </div>
  );
}
