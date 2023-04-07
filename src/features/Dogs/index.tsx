import { RefreshButton } from "../../common/RefreshButton";
import { Header } from "../../common/Header";
import { useEffect, useState } from "react";
import { TResponse } from "../../common/models";
import { Sidebar } from "../../common/Sidebar";
import { getDogs } from "./getDogs";
import { Error } from "../../common/Error";
import { Loading } from "../../common/Loading";
import { MainWrapper } from "../../common/MainWrapper";
import { ImageAndFilters } from "../../common/ImageAndFilters";
export const Dogs: React.FC = () => {
  const [response, setResponse] = useState<TResponse>({
    message: "",
    status: "loading",
  });
  useEffect(() => {
    setTimeout(() => {
      getDogs({ setResponse });
    }, 1250);
  }, []);
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
          <ImageAndFilters
            image={response && response.status && response.message}
          />
        )}

        <RefreshButton action={() => getDogs({ setResponse })} petType="Dog" />
      </MainWrapper>
    </>
  );
};
