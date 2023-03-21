import { RiInformationFill } from "react-icons/ri";
import { TbDog, TbCat } from "react-icons/tb";
interface IIcon {
  icon: JSX.Element;
}

export const Sidebar: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 flex w-16 flex-col gap-2 bg-gray-700 py-8 shadow-2xl shadow-slate-900">
        <Icon icon={<TbDog />} />
        <Icon icon={<TbCat />} />
        <Icon icon={<RiInformationFill />} />
      </div>
    </>
  );
};
const Icon: React.FC<IIcon> = ({ icon }) => {
  return <div className="sidebar-icon text-blue-400">{icon}</div>;
};
