import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { quizzes } from "../../data.json";

const QuizContext = createContext();

const initialState = {
  status: "loading",
  isDarkMode: false,
  data: quizzes,
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleTheme": {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    }
  }
}

function FrontEndQuiz({ children }) {
  const [{ status, isDarkMode, data }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <QuizContext.Provider value={{ status, isDarkMode, data, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Context was used outside the parent context");
  return context;
}

export { useQuiz, FrontEndQuiz };
