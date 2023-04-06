import { RefreshButton } from "../../common/RefreshButton";
import { Header } from "../../common/Header";
import { useEffect, useState } from "react";
import { TResponse } from "../../common/models";
import { Sidebar } from "../../common/Sidebar";
import { getDogs } from "./getDogs";
import { Error } from "../../common/Error";
import { Loading } from "../../common/Loading";

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
      <div className="mx-1 flex flex-col justify-center">
        {response.status === "error" ? (
          <Error />
        ) : response.status === "loading" ? (
          <Loading />
        ) : (
          <img
            className="image"
            src={response && response.status && response.message}
          />
        )}
        <RefreshButton action={() => getDogs({ setResponse })} petType="Dog" />
      </div>
    </>
  );
};
