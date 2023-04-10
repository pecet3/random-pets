import { HiOutlineHeart } from "react-icons/hi";

export interface IAddButton {
  action: () => void;
}
export const AddButton: React.FC<IAddButton> = ({ action }) => {
  return (
    <button
      onClick={() => action()}
      className="m-auto mb-8 flex justify-center gap-2 rounded-md bg-red-400 p-2 text-pink-800"
    >
      <HiOutlineHeart size="24" />
      add to favourite
    </button>
  );
};
