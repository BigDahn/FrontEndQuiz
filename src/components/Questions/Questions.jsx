import React from "react";

function Questions({ question }) {
  return (
    <div>
      <h3 className="font-Rubix_Regular text-[1.5rem] max-w-[23rem] ">
        {question}
      </h3>
    </div>
  );
}

export default Questions;
