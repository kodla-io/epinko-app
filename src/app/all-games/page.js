"use client";

import React, { useState } from "react";

import StorySlider from "../../../componants/story-slider/slider";
import AllGamesCategory from "../../../componants/all-games/AllGames";
import NewsSlider from "../../../componants/news/news";
import BottomText from "../../../componants/texts/bottom-text";
import FilterAndTabs from "../../../componants/all-games/filter-and-tabs";

export default function AllGames() {
  const [activeTab, setActiveTab] = useState("Tümü");

  return (
    <>
      <FilterAndTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <StorySlider />
      <AllGamesCategory activeTab={activeTab}  />
      <NewsSlider />
      <BottomText />
    </>
  );
}
