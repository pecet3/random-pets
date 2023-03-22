import { RouterProvider } from "react-router-dom";
import { Sidebar } from "./common/Sidebar";
import { router } from "./main";

function App() {
  return (
    <>
      <div className="">
        <div className="bg-gray-200 dark:bg-slate-600">
          <div className="m-auto my-0 max-w-full pb-[100%] text-center">
            <RouterProvider router={router} />
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
