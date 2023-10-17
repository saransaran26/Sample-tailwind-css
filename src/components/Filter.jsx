import React, { useState } from "react";

function Filter() {
  const [btns, setbtns] = useState(1);
  return (
    <section className="my-10 py-3 w-2/3 md:w-4/6 mx-auto flex flex-col md:flex-row justify-around">
      <button
        className={`button ${btns === 1 ? "bg-green-500 text-white" : ""} font-body`}
        onClick={() => setbtns(1)}
      >
        Latest
      </button>
      <button
        onClick={() => setbtns(2)}
        className={`button ${btns === 2 ? "bg-green-500 text-white" : ""} font-body`}
      >
        Best Seller
      </button>
      <button
        onClick={() => setbtns(3)}
        className={`button ${btns === 3 ? "bg-green-500 text-white" : ""} font-body`}
      >
        Special
      </button>
    </section>
  );
}

export default Filter;

//font-body border border-slate-300 py-3 px-16 rounded-full transform hover:scale-110 duration-100 my-3 md:my-0 m-2
