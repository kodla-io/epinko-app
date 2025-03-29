import CategoryGames from "../../../componants/category-games/category-games";
import SteamGameList from "../../../componants/steam-games-list/steam-games-list";
import TextBanner from "../../../componants/text-banner/TextBanner";

export default function SteamGames() {
  return (
    <div>
      <CategoryGames />
      <SteamGameList />
      <div className="mt-10">
        <TextBanner />
      </div>
    </div>
  );
}
