import { RiInformationFill } from "react-icons/ri";
import { TbDog, TbCat, TbMoon } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";

export const Sidebar: React.FC = () => {
  return (
    <>
      <nav className="sidebar">
        <Link to="/dogs" relative="path">
          <Icon icon={<TbDog size="28" />} classes="sidebar-icon" />
        </Link>
        <Link to="/cats" relative="path">
          <Icon icon={<TbCat size="28" />} classes="sidebar-icon" />
        </Link>
        <Link to="/dogs" relative="path">
          <Icon icon={<RiInformationFill size="28" />} classes="sidebar-icon" />
        </Link>
        <button className="group">
          <Icon icon={<TbMoon size="28" />} classes="sidebar-icon" />
          <div
            className="absolute hidden w-20 rounded-r-md rounded-br-md border-2 border-transparent 
          text-sm text-transparent
          transition-colors duration-300
          group-hover:visible
        group-hover:bg-gray-600 group-hover:text-emerald-500
          lg:invisible lg:left-16 lg:bottom-[34px] lg:block"
          >
            Change to darkmode
          </div>
        </button>
      </nav>
    </>
  );
};
