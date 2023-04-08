import { RefreshButton } from "../../common/RefreshButton";
import { ImageAndFilters } from "../../common/ImageAndFilters";
import Context, { TContext } from "./DogsContext";
import { useContext } from "react";

export const Core: React.FC = () => {
  const { state, addToArray, getImage } = useContext(Context) as TContext;
  return (
    <>
      <ImageAndFilters image={state.fetch ? state.fetch.message : ""} />
      <RefreshButton action={() => getImage()} petType="Dog" />
    </>
  );
};
