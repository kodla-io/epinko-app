import ProductList from "../../../componants/advert/advert-category-detail-products";
import DoubleSlider from "../../../componants/buy-sell/double-slider";
import ScrollableText from "../../../componants/texts/scroll-text";

export default function AdvertCategoryDetail() {
  return (
    <>
      <ProductList />
      <ScrollableText />
      <div className="mb-6 md:mb-12">
        <DoubleSlider />
      </div>
    </>
  );
}
