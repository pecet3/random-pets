import React from "react";

interface IHeader {
  title: string;
}

export const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <header className="bg-sky-100 p-2 pb-4 md:p-4 lg:bg-transparent">
      <h1 className="font-comics text-4xl text-green-700 md:text-4xl ">
        {title}
      </h1>
    </header>
  );
};
