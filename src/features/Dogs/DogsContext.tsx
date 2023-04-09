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
  setFetchMessage: (index: number) => void;
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
  };

  React.useEffect(() => {
    localStorage.setItem("savedImgs", JSON.stringify(state.savedImgs));
  }, [state.savedImgs]);

  const getImage = () => {
    getDogs({ setResponse });
  };

  const setFetchMessage = (index: number) => {
    setState(
      (prev) =>
        (prev = {
          fetch: {
            message: prev.savedImgs[index],
            status: response.status,
          },
          savedImgs: [...prev.savedImgs],
        })
    );
  };

  return (
    <Context.Provider value={{ state, addToArray, getImage, setFetchMessage }}>
      {children}
    </Context.Provider>
  );
};

const Context = React.createContext<TContext | null>(null);
export default Context;
