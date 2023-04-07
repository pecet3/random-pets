import { useState, useEffect } from "react";
import { filters } from "./filters";
interface IForm {
  image: string;
}
export const ImageAndFilters: React.FC<IForm> = ({ image }) => {
  const [filter, setFilter] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div
        className="m-auto mt-8 mb-2 flex max-w-max
        justify-center shadow-2xl shadow-gray-500 dark:shadow-gray-900 sm:mb-4 md:mt-4"
      >
        <img
          className={`m-0 h-[324px] rounded-2xl object-fill md:h-[520px] ${filter}`}
          src={image && image}
        />
      </div>
      <form className="my-2 flex justify-center gap-6 font-bebas">
        {filters &&
          filters.map((element) => (
            <span key={element.name}>
              <legend>{element.name}</legend>
              <input
                type="radio"
                name="filter"
                value={element.value}
                onChange={handleChange}
                checked={filter === element.value}
              />
            </span>
          ))}
      </form>
    </>
  );
};
