import React from "react";
import { IFetch, TResponse } from "./models";
interface IRefresh {
  action: () => void;
}
export const RefreshButton: React.FC<IRefresh> = ({ action }) => {
  const onClickButton = () => {
    action();
  };
  return (
    <div>
      <button onClick={onClickButton}>New pet</button>
    </div>
  );
};
