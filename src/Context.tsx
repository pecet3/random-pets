import React from "react";

export const defaultValue = {
  counter: 2,
};

export type TContext = {
  counter: number;
};

const Context = React.createContext<TContext | null>(defaultValue);

export default Context;
