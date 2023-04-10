import { Header } from "../../common/Header";
import { Sidebar } from "../../common/Sidebar";
import { Error } from "../../common/notifications/Error";
import { Loading } from "../../common/notifications/Loading";
import { MainWrapper } from "../../common/MainWrapper";
import { useGetDogs } from "./useGetDogs";
import { ContextProvider } from "./DogsContext";
import { SavedImages } from "./SavedImages";
import { ImageWithUI } from "./ImageWithUI";
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
          <ImageWithUI />
        )}
        <SavedImages />
      </MainWrapper>
    </ContextProvider>
  );
};
