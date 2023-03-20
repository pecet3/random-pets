import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { List } from "./List";

export interface IData {
  person: {
    name?: string;
    age?: number;
  }[];
}
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState({
    name: "",
    age: 0,
  });
  const [personalData, setPersonalData] = useState<IData["person"]>([{}]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const onButtonClick = () => {
    setPersonalData([
      ...personalData,
      typeof input.age !== "number"
        ? {
            name: input.name,
            age: parseInt(input.age),
          }
        : {
            name: input.name,
            age: input.age,
          },
    ]);
  };

  useEffect(() => {
    console.log(personalData);
  }, [personalData]);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };
  return (
    <>
      <form
        className="container gap-1 justify-center flex flex-col"
        onSubmit={onFormSubmit}
      >
        <input
          className="border-2 border-b-green text-gray-dark max-w-sm "
          type="text"
          value={input.name}
          name="name"
          placeholder="Enter name"
          onChange={onInputChange}
        />
        <input
          className="border-2 border-b-blue text-gray-dark max-w-sm"
          type="number"
          value={input.age}
          name="age"
          placeholder="Enter age"
          onChange={onInputChange}
        />
        <button
          onClick={onButtonClick}
          className="border-2 border-b-pink w-20 text-lg p-1"
        >
          Submit
        </button>
      </form>

      <List />
    </>
  );
}

export default App;
