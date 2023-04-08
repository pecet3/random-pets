import Context, { TContext } from "./DogsContext";
import { useContext } from "react";
import { nanoid } from "nanoid";
export const Counter = () => {
  const { state, addToArray } = useContext(Context) as TContext;
  return (
    <>
      <button onClick={() => addToArray()}>+1</button>
      {state.savedImgs.map((element) => (
        <img src={element} key={nanoid()} />
      ))}
    </>
  );
};
