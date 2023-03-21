import { Header } from "./Header";
function App() {
  return (
    <>
      <div className="">
        <div className="bg-gray-200 dark:bg-slate-600">
          <div className="max-w-full m-auto my-0 text-center pb-[100%]">
            <Header title={"Random Pets"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
