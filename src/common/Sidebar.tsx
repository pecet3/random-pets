import { RiInformationFill } from "react-icons/ri";
import { TbDog, TbCat } from "react-icons/tb";
import { Icon } from "./Icon";

export const Sidebar: React.FC = () => {
  return (
    <>
      <nav className="sidebar">
        <a href="/dogs">
          <Icon icon={<TbDog size="28" />} classes="sidebar-icon" />
        </a>
        <a href="/cats">
          <Icon icon={<TbCat size="28" />} classes="sidebar-icon" />
        </a>
        <a href="/dogs">
          <Icon icon={<RiInformationFill size="28" />} classes="sidebar-icon" />
        </a>
      </nav>
    </>
  );
};
