import { RouterProvider } from "react-router-dom";
import { router } from "./main";
function App() {
  return (
    <div
      className="bg-[url('./lightBgImage.jpg')]
     from-gray-800 to-zinc-500
     dark:bg-gradient-to-br
      dark:text-slate-200"
    >
      <div className="m-auto my-0 max-w-full pb-[500px] text-center ">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
