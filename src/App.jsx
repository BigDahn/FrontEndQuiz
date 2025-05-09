import { useEffect } from "react";
import HomePage from "./components/Home/HomePage";
import { useQuiz } from "./contexts/Quiz";
import Loading from "./Loading";
import QuestionContainer from "./components/Questions/QuestionContainer";
import QuestionPage from "./components/Questions/QuestionPage";
import ScorePage from "./components/scorePage/ScorePage";

function App() {
  const { isDarkMode, dispatch, isLoading, status, isFisnished } = useQuiz();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "loaded" });
    }, 1000);
  }, [dispatch]);
  return (
    <div
      className={`${
        isDarkMode
          ? "w-[100%] h-[100vh] bg-[#3B4D66] animate transition ease-linear duration-600 flex justify-center items-center bg-[url(/assets/images/pattern-background-mobile-dark.svg)] md:bg-[url(/assets/images/pattern-background-tablet-dark.svg)] lg:bg-[url(/assets/images/pattern-background-desktop-dark.svg)] bg-no-repeat bg-cover "
          : "w-[100%] h-[100vh] bg-[#FFFFFF ] animate transition ease-linear duration-600 flex justify-center items-center  bg-[url(/assets/images/pattern-background-mobile-light.svg)] md:bg-[url(/assets/images/pattern-background-tablet-light.svg)]  lg:bg-[url(/assets/images/pattern-background-desktop-light.svg)] bg-no-repeat bg-cover "
      }`}
    >
      {isLoading && status === "loading" && <Loading />}
      {status === "ready" && <HomePage />}
      {status === "start" && <QuestionPage />}
      {status === "finished" && isFisnished && <ScorePage />}
    </div>
  );
}

export default App;

/*bg-[#FFFFFF]*/
