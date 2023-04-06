import React from "react";
import { Icon } from "./Icon";
import { TbRefresh } from "react-icons/tb";
interface IRefresh {
  action: () => void;
  petType?: string;
}
export const RefreshButton: React.FC<IRefresh> = ({ action, petType }) => {
  const onClickButton = () => {
    action();
  };
  return (
    <div>
      <button
        className="mt-2 rounded-xl bg-teal-300 p-3 transition-all duration-300 md:hover:rounded-md md:hover:bg-teal-400"
        onClick={onClickButton}
      >
        <div className="flex-raw flex justify-center gap-2">
          <Icon icon={<TbRefresh size="24" />} classes="mx-auto" />
          <p className="font-comics">New {petType}</p>
        </div>
      </button>
    </div>
  );
};
