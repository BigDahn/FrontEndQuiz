import React from "react";
import { useQuiz } from "../../contexts/Quiz";

function ThemeToogle() {
  const { isDarkMode, dispatch } = useQuiz();
  return (
    <div className="flex gap-3 items-center">
      {isDarkMode ? (
        <img src="/assets/images/icon-sun-light.svg" />
      ) : (
        <img src="/assets/images/icon-sun-dark.svg" />
      )}
      <label className="switch">
        <input
          type="checkbox"
          value={isDarkMode}
          onClick={() => dispatch({ type: "toggleTheme" })}
        />
        <span className="slider round"></span>
      </label>
      {isDarkMode ? (
        <img src="/assets/images/icon-moon-light.svg" />
      ) : (
        <img src="/assets/images/icon-moon-dark.svg" />
      )}
    </div>
  );
}

export default ThemeToogle;
