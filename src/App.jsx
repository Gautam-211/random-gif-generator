import React from "react";
import { Random } from "./components/Random";
import { Tag } from "./components/Tag";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center background">

      <h1 className="bg-blue-100 rounded-md mt-5 w-11/12 px-2 py-4 text-center backdrop-blur-3xl text-3xl text-blue-800
      font-semibold border-2 border-blue-800">Random GIFS</h1>

      <div className="flex flex-col md:flex-row md:gap-10 w-11/12 items-center justify-center gap-5 mt-[3rem]">
        <Random></Random>
        <Tag></Tag>
      </div>

    </div>
  );
}

export default App;
