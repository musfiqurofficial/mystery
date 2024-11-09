import React from "react";
import Storyline from "../components/Storyline/Storyline";
import NewsBrief from "../components/Storyline/NewsBrief";
import BreakingNews from "../components/Storyline/BreakingNews";

export default function StorylinePage() {
  return (
    <>
      <Storyline />
      <NewsBrief />
      <BreakingNews />
    </>
  );
}
