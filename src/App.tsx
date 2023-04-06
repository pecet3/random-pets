import { RouterProvider } from "react-router-dom";
import { router } from "./main";
function App() {
  return (
    <div>
      <div className="bg-gray-300 dark:bg-slate-500">
        <div className="m-auto my-0 max-w-full pb-[100%] text-center ">
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  );
}

export default App;
