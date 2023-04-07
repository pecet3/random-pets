import { RefreshButton } from "../../common/RefreshButton";
import { Header } from "../../common/Header";
import { useEffect, useState } from "react";
import { TResponse } from "../../common/models";
import { Sidebar } from "../../common/Sidebar";
import { getDogs } from "./getDogs";
import { Error } from "../../common/Error";
import { Loading } from "../../common/Loading";
import { MainWrapper } from "../../common/MainWrapper";
import { FilterForm } from "./FilterForm";
export const Dogs: React.FC = () => {
  const [response, setResponse] = useState<TResponse>({
    message: "",
    status: "loading",
  });
  const [filter, setFilter] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };
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
          <img
            id="image"
            className={`image ${filter}`}
            src={response && response.status && response.message}
          />
        )}
        <form className="my-2 flex justify-center gap-2 font-bebas">
          <span>
            <legend>Sepia</legend>
            <input
              type="radio"
              name="filter"
              value="sepia"
              onChange={handleChange}
              checked={filter === "sepia"}
            />
          </span>
          <span>
            <legend>Invert</legend>
            <input
              type="radio"
              name="filter"
              value="invert"
              onChange={handleChange}
              checked={filter === "invert"}
            />
          </span>
          <span>
            <legend>None</legend>
            <input
              type="radio"
              name="filter"
              value=""
              onChange={handleChange}
              checked={filter === ""}
            />
          </span>
        </form>
        <RefreshButton action={() => getDogs({ setResponse })} petType="Dog" />
      </MainWrapper>
    </>
  );
};
