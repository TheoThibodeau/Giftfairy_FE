import { useState } from "react";
import axios from "axios";

const ParameterComponent = ({ data, handler }) => {
  const title = data.title;
  const entries = data.data;
  console.log(data);

  return (
        entries.map((entry) => (
          <div
            key={entry}
            className="flex flex-col align-center w-60 h-50 justify-center text-lg text-slate-500 bg-slate-200 border border-slate-400 p-2"
          >
            <button
              className=""
              key={entry}
              onClick={() => handler(title, entry)}
            >
              {entry}
            </button>  
          </div>
        ))
  );
};
export default ParameterComponent;
