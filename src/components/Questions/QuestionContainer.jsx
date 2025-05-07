import React from "react";
import { useQuiz } from "../../contexts/Quiz";
import QuestionTileBox from "./QuestionTileBox";

function QuestionContainer() {
  const { data } = useQuiz();

  return (
    <div className="w-full">
      {data.map((s, i) => {
        return <QuestionTileBox {...s} key={i} />;
      })}
    </div>
  );
}

export default QuestionContainer;
