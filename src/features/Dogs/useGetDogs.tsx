import axios from "axios";
import { IFetch, TResponse } from "../../common/models";
import { useEffect, useState, SetStateAction, Dispatch } from "react";

export const useGetDogs = (): {
  response: TResponse;
  getDogs: ({ setResponse }: IFetch) => Promise<void>;
  setResponse: Dispatch<SetStateAction<TResponse>>;
} => {
  const [response, setResponse] = useState<TResponse>({
    message: "",
    status: "loading",
  });
  const getDogs = async ({ setResponse }: IFetch) => {
    try {
      const response = await axios.get<TResponse>(
        "https://dog.ceo/api/breeds/image/random"
      );
      setResponse(response.data);
    } catch {
      setResponse({
        message: "",
        status: "error",
      });
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getDogs({ setResponse });
    }, 1250);
  }, []);
  return { response, setResponse, getDogs };
};
