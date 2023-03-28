import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { TResponse } from "./models";

interface IFetch {
  setResponse: Dispatch<SetStateAction<TResponse>>;
}
export const getDogs = async ({ setResponse }: IFetch) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    setResponse(response.data);
  } catch {
    setResponse({
      message: "",
      status: "error",
    });
  }
};
