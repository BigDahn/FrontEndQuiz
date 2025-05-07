import React from "react";
import { useQuiz } from "../../contexts/Quiz";

function QuizTileBox({ title, icon }) {
  const { isDarkMode, dispatch } = useQuiz();
  return (
    <section
      className={`${
        isDarkMode
          ? "bg-[#3B4D66] rounded-xl w-[28rem] px-4 py-3 shadow-2xl cursor-pointer "
          : "bg-white rounded-xl w-[28rem] px-4 py-3 shadow-2xl cursor-pointer "
      }`}
      role="button"
      onClick={() => {
        dispatch({ type: "start", payload: title });
      }}
    >
      <div className="flex gap-4 items-center">
        <div className="bg-white px-2 py-2 rounded-md">
          <img src={icon} />
        </div>
        <h2
          className={`${
            isDarkMode
              ? "font-medium  text-white text-[2rem] font-Rubix_Regular"
              : "font-medium  text-[#313E51] text-[2rem] font-Rubix_Regular"
          }`}
        >
          {title}
        </h2>
      </div>
    </section>
  );
}

export default QuizTileBox;
