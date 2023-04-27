import React from "react";

interface IHeader {
  title?: string;
}

export const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <header
      className="bg-[rgba(255,255,255,0.6)] 
    p-2 pb-4 dark:bg-transparent md:p-4 lg:bg-transparent dark:lg:bg-transparent"
    >
      <h1
        className="font-comics text-4xl font-bold
       tracking-widest text-violet-700 dark:text-pink-500
         lg:text-5xl dark:lg:text-pink-400"
      >
        {title ? title : "Random Pets"}
      </h1>
    </header>
  );
};
