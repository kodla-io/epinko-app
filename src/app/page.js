import EmblaCarousel from "../../componants/home-slider/EmblaCarousel";
import Header from "../../componants/layout/Header";
import StorySlider from "../../componants/story-slider/slider";
import Advert from "../../componants/advert/advert-tabs";
import PopularGames from "../../componants/popular-games/popular-games";
import NewAdver from "../../componants/new-advert/new-adverts";
import UpSlider from "../../componants/new-games-slider/upSlider";
import DownSlider from "../../componants/new-games-slider/downSlider";
import NewsSlider from "../../componants/news/news";
import Footer from "../../componants/layout/Fotter"

export default function Home() {
  return (
    <div>
      <Header />
      <EmblaCarousel />
      <StorySlider />
      <Advert />
      <PopularGames />
      <NewAdver />
      <UpSlider />
      <DownSlider />
      <NewsSlider />
      <Footer />
    </div>
  );
}
