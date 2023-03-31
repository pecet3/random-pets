import React from "react";
import { Icon } from "./Icon";
import { TbRefresh } from "react-icons/tb";
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
        className="mt-2 rounded-xl bg-teal-300 p-2 transition-all duration-300 hover:rounded-md hover:bg-teal-400"
        onClick={onClickButton}
      >
        <div className="flex-raw flex justify-center gap-2">
          <Icon icon={<TbRefresh size="28" />} classes="mx-auto" />
          get new pet
        </div>
      </button>
    </div>
  );
};
