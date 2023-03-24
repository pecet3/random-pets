import { Sidebar } from "../../common/Sidebar";
import { Header } from "../../common/Header";
import { useEffect, useState } from "react";
import { TResponse } from "./models";
import axios from "axios";

export const Dogs = () => {
  const [response, setResponse] = useState<TResponse>();
  useEffect(() => {
    const getDogs = async (): <TResponse> => {
      try {
        const response = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        console.log(response.data);
      } catch (err) {}
    };
    setResponse(getDogs());
  });

  return (
    <>
      <Sidebar />
      <Header title="Random Dogs" />
    </>
  );
};
