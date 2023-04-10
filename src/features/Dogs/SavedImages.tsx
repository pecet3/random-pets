import Context, { TContext } from "./DogsContext";
import { useContext } from "react";
import { nanoid } from "nanoid";
import { HiOutlineHeart } from "react-icons/hi";
import { TiDelete } from "react-icons/ti";
export const SavedImages = () => {
  const { state, addToArray, setFetchMessage } = useContext(
    Context
  ) as TContext;
  return (
    <section className="m-2">
      <button
        onClick={() => addToArray()}
        className="m-auto mb-8 flex justify-center gap-2 rounded-md bg-red-400 p-2 text-pink-800"
      >
        <HiOutlineHeart size="24" />
        add to favourite
      </button>
      <div className="grid grid-cols-2 justify-center gap-2 text-center md:grid-cols-3 lg:grid-cols-4 ">
        {state.savedImgs.map((element, index) => (
          <div key={nanoid()} className="relative">
            <button
              className="absolute right-0 -top-2 rounded-full bg-slate-300 text-2xl text-red-500 xl:right-6"
              onClick={() => alert(index)}
            >
              <TiDelete size="28" />
            </button>
            <button onClick={() => setFetchMessage(index)}>
              <img
                src={element}
                className="m-auto h-48 w-64 rounded-lg object-fill md:h-64 lg:w-96"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
