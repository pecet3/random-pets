import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { List } from "./List";

export interface IData {
  person: {
    name: string;
    age?: number;
  }[];
}
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState({
    name: "",
    age: "",
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const personalData: IData = [];

  const onButtonClick = () => {
    personalData.push(...personalData, input);
  };

  return (
    <>
      <form className="flex flex-col">
        <input
          className="border-2 "
          type="text"
          value={input.name}
          name="name"
          placeholder="Enter name"
          onChange={onInputChange}
        />
        <input
          className="border-2 "
          type="number"
          value={input.name}
          name="age"
          placeholder="Enter age"
          onChange={onInputChange}
        />
      </form>
      <button onClick={onButtonClick}>Submit</button>
      <List />
    </>
  );
}

export default App;
