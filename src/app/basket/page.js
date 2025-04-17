import BasketInside from "../../../componants/basket/basket";
import GameSlider from "../../../componants/game-list-slider/GameListSlider";

export default function Basket() {
  return (
    <>
      <BasketInside />
      <div className="container m-auto">
        <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-white text-[30px] py-1 font-bold"
          >
            BENZER ÜRÜNLER
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
      </div>
      <GameSlider />
    </>
  );
}
