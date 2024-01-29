"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FC, useEffect, useState } from "react";
let timeout: any = null;

const Search: FC<{
  value: string | null;
  searchHandler: (value: string | null) => void;
}> = ({ value, searchHandler }) => {
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    setSearch(value);
  }, [value]);

  const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchHandler(e.target.value);
    }, 500);
  };

  return (
    <div className="py-2 px-4 border border-stroke dark:border-strokedark rounded-md w-full md:w-min flex items-center">
      <input
        className="border-none outline-none w-full md:w-50 dark:bg-boxdark"
        onChange={handlerSearch}
        value={search || ""}
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default Search;
