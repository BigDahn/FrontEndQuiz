import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FrontEndQuiz } from "./contexts/Quiz.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FrontEndQuiz>
      <App />
    </FrontEndQuiz>
  </StrictMode>
);
