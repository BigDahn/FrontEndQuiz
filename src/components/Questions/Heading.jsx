import React from "react";
import { useQuiz } from "../../contexts/Quiz";
import ThemeToogle from "../Theme/ThemeToogle";

function Heading() {
  const { data } = useQuiz();

  return (
    <div className="flex items-center justify-between ">
      {data.map((s, i) => {
        const { icon } = s;
        return (
          <div className="bg-[#F6E7FF] rounded-md py-2 px-2 shadow-2xl" key={i}>
            <img src={icon} />
          </div>
        );
      })}
      <ThemeToogle />
    </div>
  );
}

export default Heading;
