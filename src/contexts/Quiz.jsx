import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { quizzes } from "../../data.json";

const QuizContext = createContext();

function getStorage() {
  let theme = localStorage.getItem("theme");
  if (theme) {
    return localStorage.getItem("theme");
  }
  return false;
}

const initialState = {
  isLoading: true,
  status: "loading",
  isDarkMode: getStorage(),
  data: quizzes,
  questionStart: 1,
  totalQuestions: null,
  selectedAnswer: null,
  correctAnswer: null,
  error: false,
  score: 0,
  isFinished: false,
  isAnswerSubmitted: false,
};

//console.log(themeToggle());

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
      console.log(state.score);
      return {
        ...state,
        questionStart:
          state.selectedAnswer === null ? state.questionStart : number,
        error: state.selectedAnswer === null ? true : false,
        selectedAnswer: null,
        isFisnished: state.questionStart >= state.totalQuestions ? true : false,
        isAnswerSubmitted: false,
      };
    }
    case "select": {
      return {
        ...state,
        selectedAnswer: action.payload,

        error: false,
      };
    }
    case "submit": {
      const d = state.data[0].questions[state.questionStart - 1].answer;
      const scoreUpdate =
        state.selectedAnswer === d ? state.score + 1 : state.score;

      console.log(scoreUpdate);
      return {
        ...state,
        score: scoreUpdate,
        correctAnswer: state.selectedAnswer ? d : null,
        error: state.selectedAnswer === null ? true : false,
        isAnswerSubmitted: state.selectedAnswer ? true : false,
      };
    }
    case "lastQuestion": {
      return {
        ...state,
        error: state.selectedAnswer === null ? true : false,
        status: state.selectedAnswer ? "finished" : "start",
        isFisnished: state.questionStart >= state.totalQuestions ? true : false,
      };
    }
    case "restart": {
      return {
        ...initialState,
        status: "ready",
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
      isFisnished,
      isAnswerSubmitted,
      score,
      error,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode);
  }, [isDarkMode]);
  return (
    <QuizContext.Provider
      value={{
        status,
        selectedAnswer,
        isDarkMode,
        isFisnished,
        correctAnswer,
        data,
        isLoading,
        questionStart,
        totalQuestions,
        isAnswerSubmitted,
        error,
        score,
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
