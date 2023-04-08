import React from "react";

export const defaultValue = {
  counter: 1,
};

const DogsContext = React.createContext(defaultValue);

export default DogsContext;
