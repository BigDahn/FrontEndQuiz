import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { quizzes } from "../../data.json";

const QuizContext = createContext();

const initialState = {
  isLoading: true,
  status: "loading",
  isDarkMode: false,
  data: quizzes,
  questionStart: 1,
  totalQuestions: null,
  selectedAnswer: null,
  correctAnswer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleTheme": {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    }
    case "loaded": {
      return {
        ...state,
        isLoading: false,
        status: "ready",
      };
    }
    case "start": {
      const questionLength = state.data.filter(
        (s) => s.title === action.payload
      )[0].questions.length;

      return {
        ...state,
        status: "start",
        data: state.data.filter((s) => s.title === action.payload),
        totalQuestions: questionLength,
      };
    }
    case "next": {
      const number =
        state.questionStart >= state.totalQuestions
          ? 0
          : state.questionStart + 1;
      console.log(number);
      return {
        ...state,
        questionStart: number,
      };
    }
    case "select": {
      const d = state.data[0].questions[state.questionStart - 1].answer;
      console.log(d === action.payload);
      return {
        ...state,
        selectedAnswer: action.payload,
        correctAnswer: d,
      };
    }
  }
}

function FrontEndQuiz({ children }) {
  const [
    {
      status,
      isDarkMode,
      data,
      isLoading,
      questionStart,
      totalQuestions,
      selectedAnswer,
      correctAnswer,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider
      value={{
        status,
        selectedAnswer,
        isDarkMode,
        correctAnswer,
        data,
        isLoading,
        questionStart,
        totalQuestions,
        dispatch,
      }}
    >
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
