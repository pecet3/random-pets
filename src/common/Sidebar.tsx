import { RiInformationFill } from "react-icons/ri";
import { TbDog, TbCat } from "react-icons/tb";
import { Icon } from "./Icon";

export const Sidebar: React.FC = () => {
  return (
    <>
      <nav className="fixed top-0 my-16 flex w-16 flex-col gap-2 rounded-r-md bg-gray-700 py-8 shadow-2xl shadow-slate-900">
        <a href="/dogs">
          <Icon icon={<TbDog size="28" />} classes="sidebar-icon" />
        </a>
        <a href="/cats">
          <Icon icon={<TbCat size="28" />} classes="sidebar-icon" />
        </a>
        <Icon icon={<RiInformationFill size="28" />} classes="sidebar-icon" />
      </nav>
    </>
  );
};
