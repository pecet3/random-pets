import Context, { TContext } from "./DogsContext";
import { useContext } from "react";
export const Counter = () => {
  const { state, add } = useContext(Context) as TContext;
  return (
    <>
      <button onClick={() => add()}>+1</button>
    </>
  );
};
