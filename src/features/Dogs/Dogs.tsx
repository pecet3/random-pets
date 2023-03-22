import { Sidebar } from "../../common/Sidebar";
import { Header } from "../../common/Header";
import { useEffect } from "react";
import { getDogs } from "./getDogs";

export const Dogs = () => {
  useEffect(() => {
    try {
      console.log(getDogs());
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <Sidebar />
      <Header title="Random Dogs" />
    </>
  );
};
