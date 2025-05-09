import React from "react";
import Scores from "./Scores";
import { useQuiz } from "../../contexts/Quiz";
import Heading from "../Questions/Heading";

function ScoreDetails() {
  const { isDarkMode } = useQuiz();
  return (
    <div>
      <div className="flex lg:items-start lg:justify-between flex-col lg:flex-row ">
        <div
          className={`${
            isDarkMode
              ? "font-medium  text-white  "
              : "font-medium  text-[#313E51] "
          }`}
        >
          <h1 className="font-Rubix_Regular text-[40px] lg:text-[50px]">
            Quiz Completed
          </h1>
          <h5 className="font-Rubix_Medium text-[40px]">You scored...</h5>
        </div>

        <Scores />
      </div>
    </div>
  );
}

export default ScoreDetails;
