import React from "react";
import Heading from "./Heading";
import QuestionContainer from "./QuestionContainer";

function QuestionPage() {
  return (
    <div className="max-w-[70rem] m-auto w-full h-full  flex flex-col gap-[2.4rem] px-[1rem] md:px-[4rem] py-[1.3rem] md:py-[4rem] lg:py-[3rem]">
      <Heading />
      <QuestionContainer />
    </div>
  );
}

export default QuestionPage;
