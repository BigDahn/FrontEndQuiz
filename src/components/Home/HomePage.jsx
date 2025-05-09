import React from "react";
import QuizContainer from "./QuizContainer";
import HomeContent from "./HomeContent";
import ThemeToogle from "../Theme/ThemeToogle";

function HomePage() {
  return (
    <section className="max-w-[70rem]   m-auto w-full h-full py-[2rem] flex flex-col gap-8 md:gap-[5rem] md:py-[4rem] md:px-[3rem] px-[1.4rem] ">
      <div className="flex items-end justify-end ">
        <ThemeToogle />
      </div>

      <div className="flex flex-col gap-3 md:gap-5 lg:flex-row lg:justify-between ">
        <HomeContent />
        <QuizContainer />
      </div>
    </section>
  );
}

export default HomePage;
