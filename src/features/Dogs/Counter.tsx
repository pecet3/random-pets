import { RefreshButton } from "../../common/RefreshButton";
import { Header } from "../../common/Header";
import { Sidebar } from "../../common/Sidebar";
import { Error } from "../../common/Error";
import { Loading } from "../../common/Loading";
import { MainWrapper } from "../../common/MainWrapper";
import { ImageAndFilters } from "../../common/ImageAndFilters";
import { useGetDogs } from "./useGetDogs";
import { useContext } from "react";
import Context, { ICounter, TContext } from "../../Context/Context";
import { ContextProvider } from "../../Context/Context";
export const Counter: React.FC = () => {
  const { state, add } = useContext(Context) as TContext;
  return (
    <>
      <p>{state.counter}</p>
      <button onClick={() => add("aaaa")}>+1</button>
    </>
  );
};
