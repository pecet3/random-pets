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
      <button
        className="mt-2 rounded-lg bg-gray-400 p-2"
        onClick={onClickButton}
      >
        get new pet
      </button>
    </div>
  );
};
