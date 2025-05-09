import { useQuiz } from "../../contexts/Quiz";

function Scores() {
  const { data, dispatch } = useQuiz();

  console.log(data);
  return (
    <section className="min-w-[23rem] flex flex-col gap-3">
      {" "}
      <div className="bg-white shadow-lg flex flex-col items-center rounded-md  py-[2rem] px-[4rem]">
        <h3 className="font-Rubix_Regular text-[26px]">
          {data.map((s) => {
            const { title, icon } = s;
            return (
              <div className="flex items-center gap-2">
                <img src={icon} />
                <h3>{title}</h3>
              </div>
            );
          })}
        </h3>
        <div>
          <h1 className="font-Rubix_Regular text-[100px]">8</h1>
          <p className="font-Rubix_Medium">out of 10</p>
        </div>
      </div>
      <button
        className="bg-[#A729F5] py-4 cursor-pointer rounded-md font-Rubix_Regular font-black text-white"
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
