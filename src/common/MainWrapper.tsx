import React, { ReactNode } from "react";
interface IWrapper {
  children: ReactNode;
}
export const MainWrapper = ({ children }: IWrapper) => {
  return <main className="mx-1 flex flex-col justify-center">{children}</main>;
};
