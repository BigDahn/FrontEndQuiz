import React from "react";
import { useQuiz } from "../../contexts/Quiz";

function HomeContent() {
  const { isDarkMode } = useQuiz();
  return (
    <div>
      <h2
        className={`${
          isDarkMode
            ? " text-[40px] md:text-[4rem] md:max-w-[30rem] text-white font-Rubik_Regular   "
            : " text-[40px] md:text-[4rem] md:max-w-[30rem] text-[#313E51] font-Rubik_Regular   "
        }`}
      >
        Welcome to the
        <span className="font-Rubik_Medium font-bold"> Frontend Quiz!</span>
      </h2>
      <p
        className={`${
          isDarkMode
            ? "font-Rubik text-white font-extralight"
            : "font-Rubik text-[#313E51]  font-extralight"
        }`}
      >
        Pick a subject to get started.
      </p>
    </div>
  );
}

export default HomeContent;

//
