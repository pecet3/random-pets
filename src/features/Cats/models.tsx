import { Dispatch, SetStateAction } from "react";
export type TResponse = {
  message: string;
  status: string;
};

export interface IFetch {
  setResponse: Dispatch<SetStateAction<TResponse>>;
}
