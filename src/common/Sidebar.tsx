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
        <a>
          <Icon icon={<TbMoon size="28" />} classes="sidebar-icon" />
        </a>
      </nav>
    </>
  );
};
