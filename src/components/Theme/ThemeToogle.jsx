import React, { useState } from "react";
import { useQuiz } from "../../contexts/Quiz";

function ThemeToogle() {
  const { isDarkMode, dispatch } = useQuiz();

  //console.log(isDarkMode);

  const [theme, setTheme] = useState(false);

  const handleToogle = () => {
    setTheme(!theme);

    console.log(theme);
  };
  return (
    <div className="flex gap-3 items-center">
      {isDarkMode ? (
        <img src="/assets/images/icon-sun-light.svg" />
      ) : (
        <img src="/assets/images/icon-sun-dark.svg" />
      )}

      <label
        for="check"
        className="inline-flex w-[49px] h-6 items-center justify-center rounded-full bg-purple-600"
      >
        <input
          type="checkbox"
          id="check"
          name="check"
          value={theme}
          className="sr-only"
          onChange={() => handleToogle()}
        />
        <div
          className={`${
            theme
              ? "relative translate-x-3 h-5.5 w-5.5 rounded-full bg-red-400 transition-all ease-in-out  duration-700"
              : "relative -translate-x-3 h-5.5 w-5.5 rounded-full bg-white  transition-all ease-in-out duration-700"
          }`}
        ></div>
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
