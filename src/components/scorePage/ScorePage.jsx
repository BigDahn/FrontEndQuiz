import React from "react";

import Heading from "../Questions/Heading";
import ScoreDetails from "./ScoreDetails";

function ScorePage() {
  return (
    <div className="max-w-[70rem] m-auto w-full px-[2rem] min-h-[100%] flex flex-col gap-[4rem] py-[3rem]  justify-center ">
      <Heading />
      <ScoreDetails />
    </div>
  );
}

export default ScorePage;
