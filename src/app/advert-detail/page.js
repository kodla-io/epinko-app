"use client";

import AdvertDetailFull from "../../../componants/advert/advert-detail-top";
import Warning from "../../../componants/texts/warning";
import SimilarAdverts from "../../../componants/advert/similar-adverts";

export default function AdvertDetailPage() {
  return (
    <>
      <AdvertDetailFull />
      <Warning />
      <SimilarAdverts />
    </>
  );
}
