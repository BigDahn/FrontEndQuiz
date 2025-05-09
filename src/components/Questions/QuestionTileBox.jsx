import React from "react";
import { useQuiz } from "../../contexts/Quiz";
import Questions from "./Questions";

function QuestionTileBox({ questions }) {
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

  // const disabled = questionStart >= questions.length;

  const { question, options } = questions[questionStart - 1];

  function indexToLetter(i) {
    if (i === 0) {
      return "A";
    } else if (i === 1) {
      return "B";
    } else if (i === 2) {
      return "C";
    } else if (i === 3) {
      return "D";
    } else {
      return "E";
    }
  }

  //
  return (
    <div className=" w-[60rem] h-[27rem] hover:transition hover:ease-linear hover:duration-700 ">
      <h1
        className={`${
          isDarkMode
            ? "font-Rubik font-extralight text-[#ABC1E1]"
            : "font-Rubik font-extralight text-[#626C7F]"
        }`}
      >
        Question {questionStart} of {totalQuestions}
      </h1>
      <div className="flex gap-[10rem] items-start justify-between">
        <Questions question={question} />

        <div className="flex flex-col gap-4 hover:transition hover:ease-linear hover:duration-700  ">
          {options.map((s, i) => {
            //3B4D66
            return (
              <button
                className={`${
                  isAnswerSubmitted
                    ? s === correctAnswer
                      ? isDarkMode
                        ? "bg-[#3B4D66] shadow-lg cursor-pointer border-green-400 border-2 px-4 w-[27rem] min-h-[4rem]  py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                        : "bg-[#FFFFFF] shadow-lg cursor-pointer w-[27rem] border-green-400 border-2 min-h-[4rem]  px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                      : s === selectedAnswer
                      ? isDarkMode
                        ? "bg-[#3B4D66] shadow-lg cursor-pointer w-[27rem] border-red-400 border-2 px-4 min-h-[4rem]  py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                        : "bg-[#FFFFFF] shadow-lg cursor-pointer w-[27rem] border-red-400 border-2 px-4   py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                      : isDarkMode
                      ? "bg-[#3B4D66] shadow-lg cursor-pointer   w-[27rem]  px-4 py-[9px] rounded-2xl min-h-[4rem] font-Rubix_Regular text-black flex justify-between items-center gap-2"
                      : "bg-[#FFFFFF] shadow-lg cursor-pointer  w-[27rem]  px-4 py-[9px] rounded-2xl min-h-[4rem] font-Rubix_Regular text-black flex justify-between items-center gap-2"
                    : s === selectedAnswer
                    ? isDarkMode
                      ? "bg-[#3B4D66] shadow-lg cursor-pointer border-2 border-[#A729F5] min-h-[4rem]  w-[27rem]  px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                      : "bg-[#FFFFFF] shadow-lg cursor-pointer border-2 border-[#A729F5] min-h-[4rem] w-[27rem]  px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                    : isDarkMode
                    ? "bg-[#3B4D66] shadow-lg cursor-pointer   w-[27rem]  px-4 py-[9px] hover:border-2 hover:border-[#A729F5] min-h-[4rem] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                    : "bg-[#FFFFFF] shadow-lg cursor-pointer  w-[27rem]  px-4 py-[9px] min-h-[4rem] hover:border-2 hover:border-[#A729F5] hover:transition hover:ease-linear hover:duration-700 hover:animate rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                }`}
                key={i}
                role="button"
                onClick={() => dispatch({ type: "select", payload: `${s}` })}
                disabled={isAnswerSubmitted}
              >
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
                        ? "text-[#FFFFFF] text-left max-w-[21rem]"
                        : "text-[#313E51] text-left max-w-[21rem]"
                    }`}
                  >
                    {s}
                  </span>
                </div>
                {isAnswerSubmitted ? (
                  s === correctAnswer ? (
                    <img
                      src="/assets/images/icon-correct.svg"
                      className="w-6"
                    />
                  ) : s === selectedAnswer ? (
                    <img
                      src="/assets/images/icon-incorrect.svg"
                      className="w-6"
                    />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </button>
            );
          })}
          {questionStart >= totalQuestions ? (
            <button
              className={`${
                selectedAnswer
                  ? "bg-purple-500 py-3  rounded-md font-Rubix_Regular text-[#FFFFFF]"
                  : "bg-[#d394fa] py-3  rounded-md font-Rubix_Regular text-[#FFFFFF]"
              }`}
              onClick={() => {
                dispatch({ type: "lastQuestion" });
              }}
            >
              Submit Question
            </button>
          ) : isAnswerSubmitted ? (
            <button
              className="bg-purple-500 py-3  rounded-md font-Rubix_Regular text-[#FFFFFF]"
              onClick={() => {
                dispatch({ type: "next" });
              }}
            >
              Next Question
            </button>
          ) : (
            <button
              className={`${
                selectedAnswer
                  ? "bg-purple-500 py-3  rounded-md font-Rubix_Regular text-[#FFFFFF]"
                  : "bg-[#d394fa] py-3  rounded-md font-Rubix_Regular text-[#FFFFFF]"
              }`}
              onClick={() => {
                dispatch({ type: "submit" });
              }}
            >
              Submit Answer
            </button>
          )}
          {error && (
            <div className="text-red-600 text-center flex items-center gap-2 justify-center font-Rubix_Regular">
              <img src="/assets/images/icon-error.svg" className="w-5" />
              <h3>Please select an answer</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionTileBox;
