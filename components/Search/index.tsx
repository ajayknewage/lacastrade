"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="py-2 px-4 border-2 border-stroke dark:border-strokedark rounded-md w-min flex items-center">
      <input className="border-none outline-none w-100 dark:bg-boxdark" />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default Search;
