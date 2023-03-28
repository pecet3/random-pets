import { Sidebar } from "../../common/Sidebar";
import { Header } from "../../common/Header";
import { useEffect, useState } from "react";
import { TResponse } from "./models";
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
      <div className="flex justify-center">
        {response.status === "error" ? (
          <div className="mt-24">
            <p className="font-comics text-2xl">error 😪</p>
            <p className="text-1xl mt-2">please refresh the site</p>
          </div>
        ) : response.status === "loading..." ? (
          <p className="font-comics text-2xl">loading...</p>
        ) : (
          <img
            className="rounded-2xl p-8"
            src={response && response.status && response.message}
          />
        )}
      </div>
    </>
  );
};
