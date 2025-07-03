"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Warning from "../../../componants/texts/warning";

// Dynamically import components that might use client-side features
const AdvertDetailFull = dynamic(() => import("../../../componants/advert/advert-detail-top"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-700 h-96 rounded-lg"></div>
});

const SimilarAdverts = dynamic(() => import("../../../componants/advert/similar-adverts"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-700 h-48 rounded-lg mt-4"></div>
});

export default function AdvertDetailPage() {
  return (
    <Suspense fallback={<div className="animate-pulse bg-gray-700 h-screen"></div>}>
      <AdvertDetailFull />
      <Warning />
      <SimilarAdverts />
    </Suspense>
  );
}
