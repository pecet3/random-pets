import { RefreshButton } from "../../common/RefreshButton";
import { Header } from "../../common/Header";
import { Sidebar } from "../../common/Sidebar";
import { Error } from "../../common/Error";
import { Loading } from "../../common/Loading";
import { MainWrapper } from "../../common/MainWrapper";
import { ImageAndFilters } from "../../common/ImageAndFilters";
import { useGetDogs } from "./useGetDogs";
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
