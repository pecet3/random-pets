import React, { Component, useState } from "react";
import DogsContext, { defaultValue } from "./dogsContext";

export const DogsProvider = () => {
  const [state, setState] = useState(defaultValue);
  return <DogsContext.Provider value={state}></DogsContext.Provider>;
};
