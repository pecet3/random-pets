import React from "react";
import { IFetch, TResponse } from "./models";
interface IRefresh {
  action?: IFetch;
}
export const RefreshButton: React.FC<IRefresh> = ({ action }) => {
  const onClickButton = () => {};
  return (
    <div>
      <button>New pet</button>
    </div>
  );
};
