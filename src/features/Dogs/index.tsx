import { RefreshButton } from "../../common/RefreshButton";
import { Header } from "../../common/Header";
import { Sidebar } from "../../common/Sidebar";
import { Error } from "../../common/Error";
import { Loading } from "../../common/Loading";
import { MainWrapper } from "../../common/MainWrapper";
import { ImageAndFilters } from "../../common/ImageAndFilters";
import { useGetDogs } from "./useGetDogs";
import { useContext } from "react";
import DogsContext from "./dogsContext";
export const Dogs: React.FC = () => {
  const dogs = useContext(DogsContext);
  const { response, setResponse, getDogs } = useGetDogs();
  return (
    <>
      <Header title="Random Dogs" />
      <Sidebar />
      <MainWrapper>
        {response.status === "error" ? (
          <Error />
        ) : response.status === "loading" ? (
          <Loading />
        ) : (
          <ImageAndFilters image={response && response.message} />
        )}
        <RefreshButton action={() => getDogs({ setResponse })} petType="Dog" />
        <p>{dogs.counter}</p>
      </MainWrapper>
    </>
  );
};
