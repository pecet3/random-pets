import { RouterProvider } from "react-router-dom";
import { router } from "./main";
import { useState } from "react";
import Context, { defaultValue, TContext } from "./Context";

function App() {
  const [state, setState] = useState<TContext>(defaultValue);

  return (
    <div
      className="bg-[url('./lightBgImage.jpg')]
     from-gray-800 to-zinc-500
     dark:bg-gradient-to-br
      dark:text-slate-200"
    >
      <div className="m-auto my-0 max-w-full pb-[500px] text-center ">
        <Context.Provider value={state}>
          <RouterProvider router={router} />
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
