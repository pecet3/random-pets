import React from "react";
import { useGetDogs } from "./useGetDogs";
import { TResponse } from "../../common/models";
export const defaultValue = {
  message: "",
  status: "",
};
export interface IState {
  response: TResponse | null;
}
export type TContext = {
  state: TResponse | null;
  add: () => void;
};

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const { response, setResponse, getDogs } = useGetDogs();
  const [state, setState] = React.useState<TResponse>(defaultValue);

  const add = () => {
    setState((prev) => (prev = response));
    console.log(state);
  };
  return <Context.Provider value={{ state, add }}>{children}</Context.Provider>;
};

const Context = React.createContext<TContext | null>(null);
export default Context;
