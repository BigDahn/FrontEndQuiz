import React from "react";
import { useQuiz } from "./contexts/Quiz";

function Input() {
  const { isDarkMode, dispatch } = useQuiz();
  return (
    <label
      htmlFor="check"
      className="inline-flex w-[49px] h-6 items-center justify-center rounded-full bg-purple-600 cursor-pointer"
    >
      <input
        type="checkbox"
        id="check"
        name="check"
        checked={isDarkMode}
        className="sr-only"
        onChange={() => dispatch({ type: "toggleTheme" })}
      />
      <div
        className={`${
          isDarkMode
            ? "relative translate-x-3 h-5.5 w-5.5 rounded-full bg-white transition-all ease-linear  duration-600"
            : "relative -translate-x-3 h-5.5 w-5.5 rounded-full bg-white  transition-all ease-linear duration-600"
        }`}
      ></div>
    </label>
  );
}

export default Input;
