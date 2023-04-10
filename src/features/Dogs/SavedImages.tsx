import Context, { TContext } from "./DogsContext";
import { useContext } from "react";
import { nanoid } from "nanoid";
import { HiOutlineHeart } from "react-icons/hi";
import { TiDeleteOutline } from "react-icons/ti";
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
          <div key={nanoid()} className="">
            <button onClick={() => setFetchMessage(index)}>
              <img
                src={element}
                className="m-auto h-48 w-64 rounded-lg object-fill md:h-64 lg:w-96"
              />
            </button>
            <button
              className="relative right-96 bottom-56 text-2xl text-red-600"
              onClick={() => alert("aaaa")}
            >
              <TiDeleteOutline size="32" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
