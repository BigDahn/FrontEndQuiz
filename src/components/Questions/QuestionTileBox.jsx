import React from "react";
import { useQuiz } from "../../contexts/Quiz";
import Questions from "./Questions";

function QuestionTileBox({ questions }) {
  const { questionStart, totalQuestions, selectedAnswer, dispatch } = useQuiz();
  console.log(selectedAnswer);

  const disabled = questionStart >= questions.length;

  console.log(disabled);
  const { question, options } = questions[questionStart - 1];

  console.log(questionStart);

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
    <div className=" w-[60rem] h-[27rem]">
      <h1 className="font-Rubik font-extralight">
        Question {questionStart} of {totalQuestions}
      </h1>
      <div className="flex gap-[10rem] items-start justify-between">
        <Questions question={question} />

        <div className="flex flex-col gap-4">
          {options.map((s, i) => {
            return (
              <div
                className="bg-[#FFFFFF] w-[25em] px-4 py-[9px] rounded-md font-Rubix_Regular text-black flex justify-between gap-2"
                key={i}
                role="button"
                onClick={() => dispatch({ type: "select", payload: i })}
              >
                <div className="flex gap-3 items-center ">
                  <h3 className="bg-gray-300 px-4 py-2 rounded-md">
                    {indexToLetter(i)}
                  </h3>
                  <span>{s}</span>
                </div>
                <img src="/assets/images/icon-incorrect.svg" className="w-6" />
              </div>
            );
          })}
          {questionStart >= totalQuestions ? (
            <button className="bg-purple-500 py-3  rounded-md font-Rubix_Regular">
              Submit
            </button>
          ) : (
            <button
              className="bg-purple-500 py-3  rounded-md font-Rubix_Regular"
              onClick={() => {
                dispatch({ type: "next" });
              }}
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionTileBox;
