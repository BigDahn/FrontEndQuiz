import { useQuiz } from "../../contexts/Quiz";
import Input from "../../Input";

function ThemeToogle() {
  const { isDarkMode } = useQuiz();

  return (
    <div className="flex gap-3 items-center">
      {isDarkMode ? (
        <img src="/assets/images/icon-sun-light.svg" />
      ) : (
        <img src="/assets/images/icon-sun-dark.svg" />
      )}
      <Input />
      {isDarkMode ? (
        <img src="/assets/images/icon-moon-light.svg" />
      ) : (
        <img src="/assets/images/icon-moon-dark.svg" />
      )}
    </div>
  );
}

export default ThemeToogle;
