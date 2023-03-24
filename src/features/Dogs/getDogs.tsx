// import { TResponse } from "./models";

// function request<TResponse>(
//   url: string,
//   // `RequestInit` is a type for configuring
//   // a `fetch` request. By default, an empty object.
//   config: RequestInit = {}

//   // This function is async, it will return a Promise:
// ): Promise<TResponse> {
//   // Inside, we call the `fetch` function with
//   // a URL and config given:
//   return (
//     fetch(url, config)
//       // When got a response call a `json` method on it
//       .then((response) => response.json())
//       // and return the result data.
//       .then((data) => data as TResponse)
//   );

//   // We also can use some post-response
//   // data-transformations in the last `then` clause.
// }
// export function getDogs<TResponse>(
//   url: string,
//   config: RequestInit = {}
// ): Promise<TResponse> {
//   return fetch(url, config)
//     .then((response) => response.json())
//     .then((data) => data as TResponse);
// }

import axios from "axios";

export const getDogs = async () => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    await dispatch(fetchCurrencySuccess(response.data));
  } catch {
    dispatch(fetchCurrencyError());
  }
};
