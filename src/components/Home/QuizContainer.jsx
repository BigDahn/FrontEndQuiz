import React from "react";
import { useQuiz } from "../../contexts/Quiz";
import QuizTileBox from "./QuizTileBox";

function QuizContainer() {
  const { data } = useQuiz();

  console.log(data);
  return (
    <div className="flex flex-col gap-3">
      {data.map((s, i) => {
        return <QuizTileBox {...s} key={i} />;
      })}
    </div>
  );
}

export default QuizContainer;
