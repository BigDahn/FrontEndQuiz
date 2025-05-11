import React from "react";
import { useQuiz } from "../../contexts/Quiz";

import Button from "../../Button";
import OptionsToBeSelected from "./OptionsToBeSelected";
import ErrorMessage from "./ErrorMessage";

function OptionsTileBox({ options }) {
  const {
    questionStart,
    totalQuestions,
    selectedAnswer,
    correctAnswer,
    isDarkMode,
    isAnswerSubmitted,
    error,
    dispatch,
  } = useQuiz();

  return (
    <div className="flex flex-col gap-3 md:gap-4 w-full  ">
      {options.map((s, i) => {
        //3B4D66
        return (
          <Button
            className={`${
              isAnswerSubmitted
                ? s === correctAnswer
                  ? isDarkMode
                    ? "bg-[#3B4D66] shadow-lg cursor-pointer border-green-400 border-2 px-4 w-full lg:w-[27rem] min-h-[4rem]  py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                    : "bg-[#FFFFFF] shadow-lg cursor-pointer w-full lg:w-[27rem] border-green-400 border-2 min-h-[4rem]  px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                  : s === selectedAnswer
                  ? isDarkMode
                    ? "bg-[#3B4D66] shadow-lg cursor-pointer w-full lg:w-[27rem] border-red-400 border-2 px-4 min-h-[4rem]  py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                    : "bg-[#FFFFFF] shadow-lg cursor-pointer w-full lg:w-[27rem] border-red-400 border-2 px-4   py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                  : isDarkMode
                  ? "bg-[#3B4D66] shadow-lg cursor-pointer w-full  lg:w-[27rem]  px-4 py-[9px] rounded-2xl min-h-[4rem] font-Rubix_Regular text-black flex justify-between items-center gap-2"
                  : "bg-[#FFFFFF] shadow-lg cursor-pointer w-full lg:w-[27rem]  px-4 py-[9px] rounded-2xl min-h-[4rem] font-Rubix_Regular text-black flex justify-between items-center gap-2"
                : s === selectedAnswer
                ? isDarkMode
                  ? "bg-[#3B4D66] shadow-lg cursor-pointer border-2 border-[#A729F5] min-h-[4rem] w-full lg:w-[27rem]  px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                  : "bg-[#FFFFFF] shadow-lg cursor-pointer border-2 border-[#A729F5] min-h-[4rem] w-full lg:w-[27rem]  px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                : isDarkMode
                ? "bg-[#3B4D66] shadow-lg cursor-pointer  w-full lg:w-[27rem]  px-4 py-[9px] hover:border-2 hover:border-[#A729F5] min-h-[4rem] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                : "bg-[#FFFFFF] shadow-lg cursor-pointer  w-full lg:w-[27rem]  px-4 py-[9px] min-h-[4rem] hover:border-2 hover:border-[#A729F5]  rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
            }`}
            key={i}
            role="button"
            onClick={() => dispatch({ type: "select", payload: `${s}` })}
            disabled={isAnswerSubmitted}
          >
            <OptionsToBeSelected s={s} i={i} />
          </Button>
        );
      })}
      {questionStart >= totalQuestions && isAnswerSubmitted ? (
        <Button
          className={`${
            selectedAnswer
              ? "bg-purple-500 py-3  rounded-2xl font-Rubix_Regular text-[#FFFFFF]"
              : "bg-[#d394fa] py-3  rounded-2xl font-Rubix_Regular text-[#FFFFFF]"
          }`}
          onClick={() => {
            dispatch({ type: "lastQuestion" });
          }}
        >
          Submit Question
        </Button>
      ) : isAnswerSubmitted ? (
        <Button
          className="bg-purple-500 py-3  rounded-2xl font-Rubik_Regular text-[#FFFFFF]"
          onClick={() => {
            dispatch({ type: "next" });
          }}
        >
          Next Question
        </Button>
      ) : (
        <Button
          className={`${
            selectedAnswer
              ? "bg-purple-500 py-3  rounded-2xl font-Rubik_Regular text-[#FFFFFF]"
              : "bg-[#d394fa] py-3  rounded-2xl font-Rubik_Regular text-[#FFFFFF]"
          }`}
          onClick={() => {
            dispatch({ type: "submit" });
          }}
        >
          Submit Answer
        </Button>
      )}
      {error && <ErrorMessage />}
    </div>
  );
}

export default OptionsTileBox;
