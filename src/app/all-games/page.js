import StorySlider from "../../../componants/story-slider/slider";
import GameListSlider from "../../../componants/game-list-slider/GameListSlider";
import AllGamesCategory from "../../../componants/all-games/AllGames"
import NewsSlider from "../../../componants/news/news";
import TextBanner from "../../../componants/text-banner/TextBanner";

export default function AllGames() {
  return (
    <>
      <StorySlider />
      <GameListSlider />
      <AllGamesCategory />
      <NewsSlider />
      <TextBanner />
    </>
  );
}
