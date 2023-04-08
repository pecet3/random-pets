import React from "react";

export const defaultValue = {
  counter: 10,
};
export interface ICounter {
  counter: number;
}
export type TContext = {
  state: ICounter;
  add: (prop: string | any) => void;
};

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = React.useState<ICounter>(defaultValue);

  const add = (prop: string) => {
    console.log(prop);
  };
  return <Context.Provider value={{ state, add }}>{children}</Context.Provider>;
};

const Context = React.createContext<TContext | null>(null);
export default Context;
