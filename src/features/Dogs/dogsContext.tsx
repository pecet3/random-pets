import React from "react";

export const defaultValue = {
  counter: 2,
};

export type DogsContext = {
  counter: number;
};

const DogsContext = React.createContext<DogsContext>(defaultValue);

export default DogsContext;
