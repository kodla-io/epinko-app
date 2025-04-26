"use client";

import DealOfTheDayCountdown from "../../../componants/deal-of-the-day/deal-countdown";
import DealOfTheDayProducts from "../../../componants/deal-of-the-day/deal-of-the-day-products";
import DealOfTheDayUnknown from "../../../componants/deal-of-the-day/deal-of-the-day-unknown";

const products = [
  {
    badgeText: "%30 İNDİRİM",
    badgeColor: "var(--label2)",
    title: "Valorant 575 VP",
    description: "Sed felis eget velit aliquet di sagittis id consectetur.",
    originalPrice: "25.00",
    discountedPrice: "20.30",
  },
  {
    badgeText: "%30 İNDİRİM",
    badgeColor: "var(--label4)",
    title: "Valorant 575 VP",
    description: "Sed felis eget velit aliquet di sagittis id consectetur.",
    originalPrice: "25.00",
    discountedPrice: "20.30",
  },
  {
    badgeText: "%30 İNDİRİM",
    badgeColor: "var(--label9)",
    title: "Valorant 575 VP",
    description: "Sed felis eget velit aliquet di sagittis id consectetur.",
    originalPrice: "25.00",
    discountedPrice: "20.30",
  },
  {
    badgeText: "%30 İNDİRİM",
    badgeColor: "var(--label7)",
    title: "Valorant 575 VP",
    description: "Sed felis eget velit aliquet di sagittis id consectetur.",
    originalPrice: "25.00",
    discountedPrice: "20.30",
  },
  {
    badgeText: "%30 İNDİRİM",
    badgeColor: "var(--label3)",
    title: "Valorant 575 VP",
    description: "Sed felis eget velit aliquet di sagittis id consectetur.",
    originalPrice: "25.00",
    discountedPrice: "20.30",
  },
  {
    badgeText: "%30 İNDİRİM",
    badgeColor: "var(--label1)",
    title: "Valorant 575 VP",
    description: "Sed felis eget velit aliquet di sagittis id consectetur.",
    originalPrice: "25.00",
    discountedPrice: "20.30",
  },
];

const products2 = [
    {
      badgeText: "??% İNDİRİM",
      badgeColor: "var(--label2)",
      title: "???????????",
      description: "Sed felis eget velit aliquet di sagittis id consectetur.",
      originalPrice: "25.00",
      discountedPrice: "??.??",
    },
    {
      badgeText: "??% İNDİRİM",
      badgeColor: "var(--label4)",
      title: "???????????",
      description: "Sed felis eget velit aliquet di sagittis id consectetur.",
      originalPrice: "25.00",
      discountedPrice: "??.??",
    },
    {
      badgeText: "??% İNDİRİM",
      badgeColor: "var(--label9)",
      title: "???????????",
      description: "Sed felis eget velit aliquet di sagittis id consectetur.",
      originalPrice: "25.00",
      discountedPrice: "??.??",
    },
    {
      badgeText: "??% İNDİRİM",
      badgeColor: "var(--label7)",
      title: "???????????",
      description: "Sed felis eget velit aliquet di sagittis id consectetur.",
      originalPrice: "25.00",
      discountedPrice: "??.??",
    },
    {
      badgeText: "??% İNDİRİM",
      badgeColor: "var(--label3)",
      title: "???????????",
      description: "Sed felis eget velit aliquet di sagittis id consectetur.",
      originalPrice: "25.00",
      discountedPrice: "??.??",
    },
    {
      badgeText: "??% İNDİRİM",
      badgeColor: "var(--label1)",
      title: "???????????",
      description: "Sed felis eget velit aliquet di sagittis id consectetur.",
      originalPrice: "25.00",
      discountedPrice: "??.??",
    },
  ];

export default function DealOfTheDay() {
  return (
    <>
      <DealOfTheDayCountdown />
      <DealOfTheDayProducts items={products} />
      <DealOfTheDayUnknown items={products2} />
    </>
  );
}
