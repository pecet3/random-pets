import axios from "axios";
import { IFetch } from "../../common/models";

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
