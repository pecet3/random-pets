import { RefreshButton } from "../../common/RefreshButton";
import { Header } from "../../common/Header";
import { Sidebar } from "../../common/Sidebar";
import { Error } from "../../common/Error";
import { Loading } from "../../common/Loading";
import { MainWrapper } from "../../common/MainWrapper";
import { ImageAndFilters } from "../../common/ImageAndFilters";
import { useGetDogs } from "./useGetDogs";
import { ContextProvider } from "./DogsContext";
import { SavedImages } from "./SavedImages";
import { Core } from "./Core";
export const Dogs: React.FC = () => {
  const { response, setResponse, getDogs } = useGetDogs();
  return (
    <ContextProvider>
      <Header title="Random Dogs" />
      <Sidebar />
      <MainWrapper>
        {response.status === "error" ? (
          <Error />
        ) : response.status === "loading" ? (
          <Loading />
        ) : (
          // <ImageAndFilters image={response && response.message} />
          <Core />
        )}
        <SavedImages />
      </MainWrapper>
    </ContextProvider>
  );
};
