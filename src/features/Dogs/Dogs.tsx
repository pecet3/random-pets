import { Sidebar } from "../../common/Sidebar";
import { Header } from "../../common/Header";
import { useEffect, useState } from "react";
import { TResponse } from "./models";
import axios from "axios";

export const Dogs = () => {
  const [response, setResponse] = useState<Promise<TResponse>>();

  const getDogs = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setResponse(getDogs());
    console.log(response.data);
  }, []);
  return (
    <>
      <Sidebar />
      <Header title="Random Dogs" />
    </>
  );
};
