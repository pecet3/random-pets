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
          <div key={nanoid()} className="relative">
            <button
              className="absolute right-0 -top-2 rounded-full bg-slate-300 text-2xl text-red-500 xl:right-6"
              onClick={() => removeFromList(index)}
            >
              <TiDelete size="28" />
            </button>
            <button onClick={() => setFetchMessage(index)}>
              <img
                src={element && element}
                className="m-auto h-48 w-64 rounded-lg object-fill shadow-lg shadow-gray-500 md:h-64 lg:w-96"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
