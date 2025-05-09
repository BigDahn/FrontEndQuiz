import React from "react";
import Scores from "./Scores";

function ScoreDetails() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="font-Rubix_Regular text-[50px]">Quiz Completed</h1>
        <h5 className="font-Rubix_Medium text-[40px]">You scored...</h5>
      </div>

      <Scores />
    </div>
  );
}

export default ScoreDetails;
