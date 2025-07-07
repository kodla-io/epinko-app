"use client";
import EmblaCarousel from "../../componants/home-slider/EmblaCarousel";
import StorySlider from "../../componants/story-slider/slider";
import Advert from "../../componants/advert/advert-tabs";
import PopularGames from "../../componants/popular-games/popular-games";
import NewAdver from "../../componants/advert/new-advert/new-adverts";
import NewsSlider from "../../componants/news/news";
import SingleCategoryCards from "../../componants/category/single-category-cards";

export default function Home() {
  return (
    <div>
      <StorySlider />
      <EmblaCarousel />
      <Advert />
      <PopularGames />
      <SingleCategoryCards />
      <NewAdver />
      <NewsSlider />
    </div>
  );
}
