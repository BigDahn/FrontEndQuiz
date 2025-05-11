import React from "react";
import { useQuiz } from "../../contexts/Quiz";
import Questions from "./Questions";

import OptionsTileBox from "./OptionsTileBox";
import Button from "../../Button";

function QuestionTileBox({ questions }) {
  const { questionStart } = useQuiz();

  const { question, options } = questions[questionStart - 1];

  //
  return (
    <div className=" h-full  ">
      <div className="flex flex-col justify-start gap-3 md:gap-[3rem]  lg:flex-row  lg:gap-[10rem] items-start lg:justify-between h-[100%]">
        <Questions question={question} />

        <OptionsTileBox options={options} />
      </div>
    </div>
  );
}

export default QuestionTileBox;
