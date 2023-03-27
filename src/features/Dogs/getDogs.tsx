import axios from "axios";
export const getDogs = async (setResponse) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    setResponse(response.data);
  } catch (err) {
    console.log(err);
  }
};
