import StorySlider from "../../../componants/story-slider/slider";
import AllGamesCategory from "../../../componants/all-games/AllGames"
import NewsSlider from "../../../componants/news/news";
import TextBanner from "../../../componants/text-banner/TextBanner";
import BottomText from "../../../componants/texts/bottom-text"

export default function AllGames() {
  return (
    <>
      <StorySlider />
      <AllGamesCategory />
      <NewsSlider />
      <TextBanner />
      <BottomText />
    </>
  );
}
