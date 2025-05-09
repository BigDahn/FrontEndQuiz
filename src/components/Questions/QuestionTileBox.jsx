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

  return (
    <div className=" w-[60rem] h-[27rem] ">
      <h1 className="font-Rubik font-extralight">
        Question {questionStart} of {totalQuestions}
      </h1>
      <div className="flex gap-[10rem] items-start justify-between">
        <Questions question={question} />

        <div className="flex flex-col gap-4 ">
          {options.map((s, i) => {
            //3B4D66
            return (
              <button
                className={`${
                  selectedAnswer
                    ? s === correctAnswer
                      ? isDarkMode
                        ? "bg-[#3B4D66] shadow-lg cursor-pointer w-[27rem] border-green-400 border px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                        : "bg-[#FFFFFF] shadow-lg cursor-pointer w-[27rem] border-green-400 border px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                      : s === selectedAnswer
                      ? isDarkMode
                        ? "bg-[#3B4D66] shadow-lg cursor-pointer w-[27rem] border-red-400 border px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                        : "bg-[#FFFFFF] shadow-lg cursor-pointer w-[27rem] px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                      : isDarkMode
                      ? "bg-[#3B4D66] shadow-lg cursor-pointer w-[27rem]   px-4 py-[9px] rounded-2xl font-Rubix_Regular text-white flex justify-between items-center gap-2"
                      : "bg-[#FFFFFF] shadow-lg cursor-pointer w-[27rem]   px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                    : isDarkMode
                    ? "bg-[#3B4D66] shadow-lg cursor-pointer w-[27rem]   px-4 py-[9px] rounded-2xl font-Rubix_Regular text-white flex justify-between items-center gap-2"
                    : "bg-[#FFFFFF] shadow-lg cursor-pointer w-[27rem]   px-4 py-[9px] rounded-2xl font-Rubix_Regular text-black flex justify-between items-center gap-2"
                }`}
                key={i}
                role="button"
                onClick={() => dispatch({ type: "select", payload: `${s}` })}
                disabled={selectedAnswer}
              >
                <div className="flex gap-2 justify-between text-[15px] items-center ">
                  <h3
                    className={`${
                      selectedAnswer
                        ? s === correctAnswer
                          ? "bg-[#A729F5] px-4 py-2 rounded-md"
                          : s === selectedAnswer
                          ? "bg-[#EE5454] px-4 py-2 rounded-md"
                          : "bg-gray-300 px-4 py-2 rounded-md"
                        : "bg-gray-300 px-4 py-2 rounded-md"
                    }`}
                  >
                    {indexToLetter(i)}
                  </h3>
                  <span className="text-left max-w-[21rem]">{s}</span>
                </div>
                {selectedAnswer &&
                  (s === correctAnswer ? (
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
                  ))}
              </button>
            );
          })}
          {questionStart >= totalQuestions ? (
            <button
              className="bg-purple-500 py-3  rounded-md font-Rubix_Regular"
              onClick={() => {
                dispatch({ type: "lastQuestion" });
              }}
            >
              Submit Question
            </button>
          ) : (
            <button
              className="bg-purple-500 py-3  rounded-md font-Rubix_Regular"
              onClick={() => {
                dispatch({ type: "next" });
              }}
            >
              Submit Question
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
