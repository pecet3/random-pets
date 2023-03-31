import React from "react";

interface IHeader {
  title: string;
}

export const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <header className="p-2">
      <h1 className="font-comics text-2xl text-green-700 md:text-4xl">
        {title}
      </h1>
    </header>
  );
};
