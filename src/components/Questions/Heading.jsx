import React from "react";
import { useQuiz } from "../../contexts/Quiz";
import ThemeToogle from "../Theme/ThemeToogle";

function Heading() {
  const { data } = useQuiz();

  return (
    <div className="flex items-center justify-between ">
      {data.map((s) => {
        const { icon } = s;
        return (
          <div className="bg-red-300 rounded-md py-2 px-2 shadow-2xl">
            <img src={icon} />
          </div>
        );
      })}
      <ThemeToogle />
    </div>
  );
}

export default Heading;
