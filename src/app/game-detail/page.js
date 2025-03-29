import GameDetailTop from "../../../componants/game-detail-top/game-detail-top";
import GameProducts from "../../../componants/game-detail-product/game-detail-product"
import GameDetailAdvert from "../../../componants/game-detail-advert/game-detail-advert"
import News from "../../../componants/news/news"

export default function GameDetail() {
  return (
    <>
      <GameDetailTop />
      <GameProducts />
      <GameDetailAdvert />
      <News />
    </>
  );
}
