import React from "react";
import Scores from "./Scores";
import { useQuiz } from "../../contexts/Quiz";

function ScoreDetails() {
  const { isDarkMode } = useQuiz();
  return (
    <div className="flex items-start justify-between">
      <div
        className={`${
          isDarkMode
            ? "font-medium  text-white  "
            : "font-medium  text-[#313E51] "
        }`}
      >
        <h1 className="font-Rubix_Regular text-[50px]">Quiz Completed</h1>
        <h5 className="font-Rubix_Medium text-[40px]">You scored...</h5>
      </div>

      <Scores />
    </div>
  );
}

export default ScoreDetails;
