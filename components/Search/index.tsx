"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="py-2 px-4 border border-stroke dark:border-strokedark rounded-md w-full md:w-min flex items-center">
      <input className="border-none outline-none w-full md:w-50 dark:bg-boxdark" />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default Search;
