import EmblaCarousel from "../../componants/home-slider/EmblaCarousel";
import Header from "../../componants/layout/Header";
import StorySlider from "../../componants/story-slider/slider";
import Advert from "../../componants/advert/advert-tabs";
import PopularGames from "../../componants/popular-games/popular-games";

export default function Home() {
  return (
    <div>
      <Header />
      <EmblaCarousel />
      <StorySlider />
      <Advert />
      <PopularGames />
    </div>
    
  );
}
