import { RouterProvider } from "react-router-dom";
import { router } from "./main";
import { Sidebar } from "./common/Sidebar";

function App() {
  return (
    <>
      <div className="">
        <div className="bg-gray-200 dark:bg-slate-600">
          <div className="m-auto my-0 max-w-full pb-[100%] text-center">
            {/* <RouterProvider router={router} /> */}
            <h1>test</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
