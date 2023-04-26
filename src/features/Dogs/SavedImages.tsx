import Context, { TContext } from "./DogsContext";
import { useContext } from "react";
import { nanoid } from "nanoid";
import { TiDelete } from "react-icons/ti";
export const SavedImages = () => {
  const { state, addToArray, setFetchMessage, removeFromList } = useContext(
    Context
  ) as TContext;
  return (
    <section className="my-6 mx-2">
      <div className="grid grid-cols-2 justify-center gap-2 text-center md:grid-cols-3 lg:grid-cols-4 ">
        {state.savedImgs.map((element, index) => (
          <div
            key={nanoid()}
            className="relative transition-all duration-300 lg:hover:z-30 lg:hover:scale-[1.01]"
          >
            <button
              className="absolute -right-2 -top-2 rounded-full bg-slate-300 text-2xl text-red-500"
              onClick={() => removeFromList(index)}
            >
              <TiDelete size="28" />
            </button>
            <button onClick={() => setFetchMessage(index)}>
              <img
                src={element}
                className="m-auto h-48 w-64 rounded-lg object-cover shadow-lg shadow-gray-500 md:h-64 lg:h-96 lg:w-144"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
