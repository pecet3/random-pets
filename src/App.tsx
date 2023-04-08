import { RouterProvider } from "react-router-dom";
import { router } from "./main";
import React, { Component, useState } from "react";
import DogsContext, { defaultValue } from "./features/Dogs/dogsContext";

function App() {
  const [state, setState] = useState(defaultValue);

  return (
    <div
      className="bg-[url('./lightBgImage.jpg')]
     from-gray-800 to-zinc-500
     dark:bg-gradient-to-br
      dark:text-slate-200"
    >
      <div className="m-auto my-0 max-w-full pb-[500px] text-center ">
        <DogsContext.Provider value={state}>
          <RouterProvider router={router} />
        </DogsContext.Provider>
      </div>
    </div>
  );
}

export default App;
