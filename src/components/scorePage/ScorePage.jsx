import React from "react";
import { useQuiz } from "../../contexts/Quiz";

function ScorePage() {
  const { isFisnished } = useQuiz();

  console.log(isFisnished);
  return <div>ScorePage</div>;
}

export default ScorePage;
