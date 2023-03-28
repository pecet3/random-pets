import { Sidebar } from "../../common/Sidebar";
import { Header } from "../../common/Header";
import { useEffect, useState } from "react";
import { TResponse } from "./models";
import { getDogs } from "./getDogs";

export const Dogs: React.FC = () => {
  const [response, setResponse] = useState<TResponse>();

  useEffect(() => {
    getDogs(setResponse);
  }, []);

  return (
    <>
      <Sidebar />
      <Header title="Random Dogs" />
      <div className="flex justify-center">
        <img className="rounded-2xl p-8" src={response && response.message} />
      </div>
    </>
  );
};
