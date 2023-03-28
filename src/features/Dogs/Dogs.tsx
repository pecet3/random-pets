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
      <Sidebar />
      <Header title="Random Dogs" />
      <div className="flex justify-center">
        {response.status === "error" ? (
          <p>error</p>
        ) : (
          response.status === "loading" && <p>loading</p>
        )}
        <img
          className="rounded-2xl p-8"
          src={response && response.status && response.message}
        />
      </div>
    </>
  );
};
