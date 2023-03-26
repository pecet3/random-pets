import { Sidebar } from "../../common/Sidebar";
import { Header } from "../../common/Header";
import { useEffect, useState } from "react";
import { TResponse } from "./models";
import axios from "axios";

export const Dogs: React.FC = () => {
  const [response, setResponse] = useState<TResponse>();

  const getDogs = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setResponse(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);
  return (
    <>
      <Sidebar />
      <Header title="Random Dogs" />
      <img src={response && response.message} />
    </>
  );
};
