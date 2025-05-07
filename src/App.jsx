import HomePage from "./components/Home/HomePage";
import { useQuiz } from "./contexts/Quiz";

function App() {
  const { isDarkMode } = useQuiz();
  return (
    <div
      className={`${
        isDarkMode
          ? "w-[100%] h-[100vh] bg-[#3B4D66] animate transition ease-linear duration-600 bg-[url(/assets/images/pattern-background-mobile-dark.svg)] md:bg-[url(/assets/images/pattern-background-tablet-dark.svg)] lg:bg-[url(/assets/images/pattern-background-desktop-dark.svg)] bg-no-repeat bg-cover "
          : "w-[100%] h-[100vh] bg-[#FFFFFF] animate transition ease-linear duration-600 bg-[url(/assets/images/pattern-background-mobile-light.svg)] md:bg-[url(/assets/images/pattern-background-tablet-light.svg)]  lg:bg-[url(/assets/images/pattern-background-desktop-light.svg)] bg-no-repeat bg-cover "
      }`}
    >
      <HomePage />
    </div>
  );
}

export default App;

/*bg-[#FFFFFF]*/
