import { useQuiz } from "../../contexts/Quiz";

function Scores() {
  const { data, dispatch, score, isDarkMode } = useQuiz();

  return (
    <section className="max-w-[25rem] lg:min-w-[25rem]  flex flex-col gap-3 ">
      {" "}
      <div
        className={`${
          isDarkMode
            ? "bg-[#3B4D66] shadow-2xl flex flex-col items-center rounded-2xl  py-[2rem] px-[4rem]"
            : "bg-white shadow-2xl flex flex-col items-center rounded-2xl  py-[2rem] px-[4rem]"
        }`}
      >
        <h3 className="font-Rubik_Regular text-[29px]">
          {data.map((s, i) => {
            const { title, icon } = s;
            return (
              <div className="flex items-center gap-2" key={i}>
                <img src={icon} />
                <h3
                  className={`${
                    isDarkMode
                      ? "font-medium  text-white  font-Rubik_Regular"
                      : "font-medium  text-[#313E51] font-Rubik_Regular"
                  }`}
                >
                  {title}
                </h3>
              </div>
            );
          })}
        </h3>
        <div className="flex flex-col items-center ">
          <h1
            className={`${
              isDarkMode
                ? "font-medium  text-white text-[100px] font-Rubik_Regular"
                : "font-medium  text-[#313E51] text-[100px] font-Rubik_Regular"
            }`}
          >
            {score}
          </h1>
          <p
            className={`${
              isDarkMode
                ? "font-medium  text-white text-[2rem] font-Rubik_Regular"
                : "font-medium  text-[#313E51] text-[2rem] font-Rubik_Regular"
            }`}
          >
            out of 10
          </p>
        </div>
      </div>
      <button
        className="bg-[#A729F5] py-4 cursor-pointer rounded-2xl font-Rubik_Regular font-black text-white"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Play Again
      </button>
    </section>
  );
}

export default Scores;
