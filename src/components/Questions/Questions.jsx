import React from "react";
import { useQuiz } from "../../contexts/Quiz";
import ProgressBar from "@ramonak/react-progress-bar";

function Questions({ question }) {
  const { isDarkMode, questionStart, totalQuestions } = useQuiz();

  //
  return (
    <div className=" flex flex-col gap-3 md:gap-[4rem] w-full lg:h-[20rem] justify-between lg:min-w-[23rem] ">
      <div>
        <h1
          className={`${
            isDarkMode
              ? "font-Rubik font-extralight text-[#ABC1E1]"
              : "font-Rubik font-extralight text-[#626C7F]"
          }`}
        >
          Question {questionStart} of {totalQuestions}
        </h1>
        <h3
          className={`${
            isDarkMode
              ? "font-Rubik_Regular text-[1.5rem] md:text-[29px] lg:max-w-[40rem] lg:text-[29px] text-[#FFFFFF] "
              : "font-Rubik_Regular text-[1.5rem] md:text-[29px] lg:max-w-[40rem] lg:text-[29px] text-[#313E51] "
          }`}
        >
          {question}
        </h3>
      </div>
      <ProgressBar
        className="w-full"
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
