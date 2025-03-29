import EmblaCarousel from "../../componants/home-slider/EmblaCarousel";
import StorySlider from "../../componants/story-slider/slider";
import Advert from "../../componants/advert/advert-tabs";
import PopularGames from "../../componants/popular-games/popular-games";
import NewAdver from "../../componants/new-advert/new-adverts";
import UpSlider from "../../componants/new-games-slider/upSlider";
import DownSlider from "../../componants/new-games-slider/downSlider";
import NewsSlider from "../../componants/news/news";

export default function Home() {
  return (
    <div>
      <StorySlider />
      <EmblaCarousel />
      <Advert />
      <PopularGames />
      <NewAdver />
      <UpSlider />
      <DownSlider />
      <NewsSlider />
    </div>
  );
}
