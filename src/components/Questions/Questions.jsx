import React from "react";
import { useQuiz } from "../../contexts/Quiz";
import ProgressBar from "@ramonak/react-progress-bar";

function Questions({ question }) {
  const { isDarkMode, questionStart, totalQuestions } = useQuiz();

  //
  return (
    <div className=" flex flex-col justify-between h-[73%] min-w-[23rem] ">
      <h3
        className={`${
          isDarkMode
            ? "font-Rubix_Regular text-[1.5rem] max-w-[23rem] text-[#FFFFFF] "
            : "font-Rubix_Regular text-[1.5rem] max-w-[23rem] text-[#313E51] "
        }`}
      >
        {question}
      </h3>
      <ProgressBar
        className="w-full h-3"
        height="10px"
        bgColor="#A729F5"
        completed={questionStart}
        maxCompleted={totalQuestions}
        isLabelVisible={false}
      />
    </div>
  );
}

export default Questions;
