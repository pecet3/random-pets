import React from "react";

interface IHeader {
  title: string;
}

export const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <header className="p-2 pb-4 drop-shadow-md md:p-4 lg:bg-transparent">
      <h1 className="font-comics text-4xl text-green-700 drop-shadow-md lg:text-5xl ">
        {title}
      </h1>
    </header>
  );
};
