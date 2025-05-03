"use client";

import Details from "../../../componants/advert/advert-detail-top";
import Tabs from "../../../componants/advert/advert-detail-tabs";
import Warning from "../../../componants/texts/warning";
import SimilarAdverts from "../../../componants/advert/similar-adverts";

export default function AdvertDetail() {
  return (
    <>
      <Details />
      <Tabs />
      <Warning />
      <SimilarAdverts />
    </>
  );
}
