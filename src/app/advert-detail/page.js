"use client";

import Details from "../../../componants/advert/advert-detail-top";
import Tabs from "../../../componants/advert/advert-detail-tabs";
import Warning from "../../../componants/texts/warning";
import SimilarAdvertsSlider from "../../../componants/advert/similar-adverts-slider";
import DoubleSlider from "../../../componants/buy-sell/double-slider";

export default function AdvertDetail() {
  return (
    <>
      <Details />
      <Tabs />
      <Warning />
      <SimilarAdvertsSlider />
      <DoubleSlider />
    </>
  );
}
