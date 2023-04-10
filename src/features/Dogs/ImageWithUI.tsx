import { RefreshButton } from "../../common/buttons/RefreshButton";
import { ImageAndFilters } from "../../common/ImageAndFilters";
import Context, { TContext } from "./DogsContext";
import { useContext } from "react";
import { AddButton } from "../../common/buttons/AddButton";

export const ImageWithUI: React.FC = () => {
  const { state, addToArray, getImage } = useContext(Context) as TContext;
  return (
    <>
      <ImageAndFilters image={state.fetch ? state.fetch.message : ""} />
      <RefreshButton action={() => getImage()} petType="Dog" />
      <AddButton action={() => addToArray()} />
    </>
  );
};
