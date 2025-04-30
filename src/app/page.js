import EmblaCarousel from "../../componants/home-slider/EmblaCarousel";
import StorySlider from "../../componants/story-slider/slider";
import Advert from "../../componants/advert/advert-tabs";
import PopularGames from "../../componants/popular-games/popular-games";
import NewAdver from "../../componants/new-advert/new-adverts";
import NewsSlider from "../../componants/news/news";
import GameSlider from "../../componants/game-list-slider/GameListSlider"

export default function Home() {
  return (
    <div>
      <StorySlider />
      <EmblaCarousel />
      <Advert />
      <PopularGames />
      <GameSlider />
      <NewAdver />
      <NewsSlider />
    </div>
  );
}
