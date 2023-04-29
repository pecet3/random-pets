import React from "react";
import { useGetDogs } from "./useGetDogs";
import { TResponse } from "./models";
export const initialState = {
  fetch: { message: "", status: "" },
  savedImgs: [],
};
export interface IState {
  fetch: TResponse;
  savedImgs: string[];
}
export type TDogsContext = {
  state: IState;
  addToArray: () => void;
  getImage: () => void;
  setFetchMessage: (index: number) => void;
  removeFromList: (index: number) => void;
};

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const { response, setResponse, getDogs } = useGetDogs();

  const [state, setState] = React.useState<IState>({
    fetch: response,
    savedImgs: JSON.parse(localStorage.getItem("savedImgs") || "[]"),
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

  React.useEffect(() => {
    localStorage.setItem("savedImgs", JSON.stringify(state.savedImgs));
  }, [state.savedImgs]);

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

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    moveToTop();
  };

  const removeFromList = (index: number) => {
    setState(
      (prev) =>
        (prev = {
          fetch: {
            message: prev.fetch.message,
            status: prev.fetch.status,
          },
          savedImgs: [
            ...prev.savedImgs.slice(0, index),
            ...prev.savedImgs.slice(index + 1),
          ],
        })
    );
  };

  return (
    <Context.Provider
      value={{ state, addToArray, getImage, setFetchMessage, removeFromList }}
    >
      {children}
    </Context.Provider>
  );
};

const Context = React.createContext<TDogsContext | null>(null);
export default Context;
