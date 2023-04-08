import React from "react";
import { useGetDogs } from "./useGetDogs";
import { TResponse } from "../../common/models";
export const initialState = {
  fetch: { message: "", status: "" },
  savedImgs: [],
};
export interface IState {
  fetch: TResponse | null;
  savedImgs: string[];
}
export type TContext = {
  state: IState;
  addToArray: () => void;
  getImage: () => void;
};

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const { response, setResponse, getDogs } = useGetDogs();
  const [state, setState] = React.useState<IState>({
    fetch: response,
    savedImgs: [],
  });

  React.useEffect(() => {
    setState(
      (prev) =>
        (prev = {
          fetch: {
            message: response.message,
            status: response.status,
          },
          savedImgs: prev.savedImgs,
        })
    );
    console.log(state);
  }, [response]);

  const addToArray = () => {
    if (state.savedImgs.includes(response.message)) {
      return;
    }
    setState(
      (prev) =>
        (prev = {
          fetch: {
            message: response.message,
            status: response.status,
          },
          savedImgs: [...prev.savedImgs, response.message],
        })
    );
    console.log(state);
  };

  const getImage = () => {
    getDogs({ setResponse });
  };

  return (
    <Context.Provider value={{ state, addToArray, getImage }}>
      {children}
    </Context.Provider>
  );
};

const Context = React.createContext<TContext | null>(null);
export default Context;
