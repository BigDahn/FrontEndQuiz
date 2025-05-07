import React from "react";
import Heading from "./Heading";
import QuestionContainer from "./QuestionContainer";

function QuestionPage() {
  return (
    <div className="max-w-[70rem] m-auto flex flex-col gap-[3rem] py-[3rem]">
      <Heading />
      <QuestionContainer />
    </div>
  );
}

export default QuestionPage;
