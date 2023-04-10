import { Dispatch, SetStateAction } from "react";
export type TResponse = {
  message: string;
  status: string;
};

export interface IFetch {
  setResponse: Dispatch<SetStateAction<TResponse>>;
}

export interface IIcon {
  icon: JSX.Element;
  classes?: string;
}
