import axios from "axios";
import { IFetch } from "./models";

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
