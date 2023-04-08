import Context, { TContext } from "./DogsContext";
import { useContext } from "react";
import { nanoid } from "nanoid";
export const SavedImages = () => {
  const { state, addToArray } = useContext(Context) as TContext;
  return (
    <>
      <button onClick={() => addToArray()}>Add to List</button>
      <div className="grid grid-cols-2">
        {state.savedImgs.map((element) => (
          <img src={element} key={nanoid()} />
        ))}
      </div>
    </>
  );
};
