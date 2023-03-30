import axios from "axios";
import { IFetch, TResponse } from "../../common/models";

export const getDogs = async ({ setResponse }: IFetch) => {
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
