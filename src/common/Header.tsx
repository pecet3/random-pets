import React from "react";

interface IHeader {
  title: string;
}

export const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <header
      className="bg-[rgba(255,255,255,0.6)] 
    p-2 pb-4 font-bold 
    dark:bg-transparent md:p-4 md:font-normal lg:bg-transparent dark:lg:bg-transparent"
    >
      <h1
        className="font-comics text-4xl tracking-widest
       text-violet-700 dark:text-pink-500 lg:text-5xl
        lg:text-green-700 dark:lg:text-pink-400"
      >
        {title}
      </h1>
    </header>
  );
};
