import React, { useState } from "react";

function Appbar() {
    const[boole,setboole] = useState(false)
    const handlemenu = () =>{
        setboole(!boole)
        console.log("Clicked");
    }
  return (
    <nav className="mt-5">
      <div className="md:flex justify-between w-5/6 mx-auto md:max-w-7xl">
        <div className="flex justify-between">
        <div>
          <span className="text-4xl font-bold text-green-500">Fruit </span>
          <span className="text-3xl font-thin">Shop</span>
        </div>
        <div className="mt-2 md:hidden">
          <button onClick={handlemenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        </div>
        <div className={`flex justify-end md:block ${boole ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-8 space-y-8 md:space-y-0">
            <li className="menu border-b-4 font-body">
              <a href="" className="font-body">Fruits</a>
            </li>
            <li className="menu">
              <a href="" className="font-body">Vegetables</a>
            </li>
            <li className="menu">
              <a href="" className="font-body">More</a>
            </li>
            <li className="text-green-500 px-4 py-2">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Appbar;
