import React from "react";
import { Icon } from "./Icon";
import { TbDog, TbCat } from "react-icons/tb";
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
        className="mt-2 rounded-lg bg-gray-400 p-2 transition-all duration-300 hover:scale-[1.015] hover:bg-gray-500"
        onClick={onClickButton}
      >
        <div className="flex-raw flex justify-center gap-2">
          <Icon icon={<TbDog size="28" />} classes="mx-auto" />
          get new pet
        </div>
      </button>
    </div>
  );
};
