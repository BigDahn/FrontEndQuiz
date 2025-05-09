import React from "react";
import { useQuiz } from "../../contexts/Quiz";

function Questions({ question }) {
  const { isDarkMode } = useQuiz();

  //
  return (
    <div>
      <h3
        className={`${
          isDarkMode
            ? "font-Rubix_Regular text-[1.5rem] max-w-[23rem] text-[#FFFFFF] "
            : "font-Rubix_Regular text-[1.5rem] max-w-[23rem] text-[#313E51] "
        }`}
      >
        {question}
      </h3>
    </div>
  );
}

export default Questions;
