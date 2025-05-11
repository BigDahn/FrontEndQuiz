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
              ? "relative translate-x-3 h-5.5 w-5.5 rounded-full bg-white transition-all ease-linear  duration-700"
              : "relative -translate-x-3 h-5.5 w-5.5 rounded-full bg-white  transition-all ease-linear duration-700"
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
