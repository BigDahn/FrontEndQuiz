import React from "react";
import QuizContainer from "./QuizContainer";
import HomeContent from "./HomeContent";
import ThemeToogle from "../Theme/ThemeToogle";

function HomePage() {
  return (
    <section className="max-w-[70rem]   m-auto w-full h-full flex flex-col gap-[5rem] py-[4rem]    ">
      <div className="flex items-end justify-end ">
        <ThemeToogle />
      </div>

      <div className="flex justify-between ">
        <HomeContent />
        <QuizContainer />
      </div>
    </section>
  );
}

export default HomePage;
