import React from "react";
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
    <button
      className="m-0 h-12 rounded-xl bg-teal-600 px-4 py-2 transition-all duration-300 md:hover:rounded-md md:hover:bg-teal-700"
      onClick={onClickButton}
    >
      <div className="flex items-center gap-2 font-bebas text-lg tracking-wide text-lime-300">
        <TbRefresh size="24" />
        <p>New {petType}</p>
      </div>
    </button>
  );
};
