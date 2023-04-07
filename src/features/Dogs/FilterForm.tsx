import { useState, useEffect } from "react";
interface IForm {
  action: (filter: string) => void;
}
export const FilterForm: React.FC<IForm> = ({ action }) => {
  const [filter, setFilter] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };
  useEffect(() => {
    action(filter);
    console.log(filter);
  }, [filter]);

  return (
    <form>
      <fieldset>
        <legend>Select a filter</legend>
        <p>Sepia</p>
        <input
          type="radio"
          name="filter"
          value="sepia"
          onChange={handleChange}
          checked={filter === "sepia"}
        />
        <p>invert</p>
        <input
          type="radio"
          name="filter"
          value="invert"
          onChange={handleChange}
          checked={filter === "invert"}
        />
        <p>none</p>
        <input
          type="radio"
          name="filter"
          value=""
          onChange={handleChange}
          checked={filter === ""}
        />
      </fieldset>
    </form>
  );
};
