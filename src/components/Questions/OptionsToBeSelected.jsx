import React from "react";
import indexToLetter from "../../utils/Options";
import { useQuiz } from "../../contexts/Quiz";

function OptionsToBeSelected({ s, i }) {
  const { selectedAnswer, correctAnswer, isDarkMode, isAnswerSubmitted } =
    useQuiz();
  return (
    <>
      <div className="flex gap-2 justify-between text-[15px] items-center font-Rubix_Regular">
        <h3
          className={`${
            isAnswerSubmitted
              ? s === correctAnswer
                ? "bg-green-400 px-4 py-2 rounded-md text-white font-bold"
                : s === selectedAnswer
                ? "bg-red-400 px-4 py-2 rounded-md text-white font-bold"
                : "bg-[#F4F6FA] px-4 py-2 rounded-md text-[#626c7F] font-bold"
              : s === selectedAnswer
              ? "bg-[#A729F5] px-4 py-2 rounded-md text-white font-bold"
              : "bg-[#F4F6FA] px-4 py-2 rounded-md text-[#626C7F] font-bold"
          }`}
        >
          {indexToLetter(i)}
        </h3>
        <span
          className={`${
            isDarkMode
              ? "text-[#FFFFFF] text-left lg:max-w-[21rem]"
              : "text-[#313E51] text-left lg:max-w-[21rem]"
          }`}
        >
          {s}
        </span>
      </div>
      {isAnswerSubmitted ? (
        s === correctAnswer ? (
          <img src="/assets/images/icon-correct.svg" className="w-6" />
        ) : s === selectedAnswer ? (
          <img src="/assets/images/icon-incorrect.svg" className="w-6" />
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </>
  );
}

export default OptionsToBeSelected;
