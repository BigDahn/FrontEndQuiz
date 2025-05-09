import React from "react";

import Heading from "../Questions/Heading";
import ScoreDetails from "./ScoreDetails";

function ScorePage() {
  return (
    <div className="max-w-[70rem] m-auto w-full h-full px-[1.4rem] flex flex-col gap-[2rem] md:gap-[4rem] md:px-[4rem] lg:px-4 py-[2rem] md:py-[3rem]  lg:justify-center ">
      <Heading />
      <ScoreDetails />
    </div>
  );
}

export default ScorePage;
