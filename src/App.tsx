import { Header } from "./common/Header";
import { Sidebar } from "./common/Sidebar/Sidebar";
function App() {
  return (
    <>
      <div className="">
        <div className="bg-gray-200 dark:bg-slate-600">
          <div className="m-auto my-0 max-w-full pb-[100%] text-center">
            <Header title={"Random Pets"} />
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
