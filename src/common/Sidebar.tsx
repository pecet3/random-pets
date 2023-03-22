import { RiInformationFill } from "react-icons/ri";
import { TbDog, TbCat } from "react-icons/tb";
interface IIcon {
  icon: JSX.Element;
}

export const Sidebar: React.FC = () => {
  return (
    <>
      <nav className="fixed top-0 flex w-16 flex-col gap-2 bg-gray-700 py-8 shadow-2xl shadow-slate-900">
        <a href="/dogs">
          <Icon icon={<TbDog size="28" />} />
        </a>

        <Icon icon={<TbCat size="28" />} />
        <Icon icon={<RiInformationFill size="28" />} />
      </nav>
    </>
  );
};
const Icon: React.FC<IIcon> = ({ icon }) => {
  return <div className="sidebar-icon">{icon}</div>;
};
