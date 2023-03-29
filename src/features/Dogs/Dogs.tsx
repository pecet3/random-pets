import { RefreshButton } from "../../common/RefreshButton";
import { Header } from "../../common/Header";
import { useEffect, useState } from "react";
import { TResponse } from "../../common/models";
import { getDogs } from "./getDogs";

export const Dogs: React.FC = () => {
  const [response, setResponse] = useState<TResponse>({
    message: "",
    status: "loading",
  });

  useEffect(() => {
    getDogs({ setResponse });
  }, []);

  return (
    <>
      <Header title="Random Dogs" />
      <div className="flex flex-col justify-center px-60 py-8">
        {response.status === "error" ? (
          <div className="mt-24">
            <p className="font-comics text-2xl">error 😪</p>
            <p className="text-1xl mt-2">please refresh the site</p>
          </div>
        ) : response.status === "loading..." ? (
          <p className="font-comics text-2xl">loading...</p>
        ) : (
          <img
            className="rounded-lg"
            src={response && response.status && response.message}
          />
        )}
        <RefreshButton/>
      </div>
    </>
  );
};
