"use client";
import {
  faSort,
  faSortAsc,
  faSortDesc,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FC, Fragment, SetStateAction } from "react";

export type Sort = {
  field: string;
  type: "desc" | "asc" | "none";
};

const SortButton: FC<{
  field: string;
  sort: Sort;
  setSort: Dispatch<SetStateAction<Sort>>;
  sortHandler: (value: Sort) => void;
}> = ({ field, sort, setSort, sortHandler }) => {
  return (
    <button
      className="cursor-pointer h-10 px-2"
      onClick={() =>
        setSort((prev) => {
          const _sort: Sort = {
            field,
            type:
              field === prev.field
                ? prev.type === "none"
                  ? "asc"
                  : prev.type === "asc"
                  ? "desc"
                  : "none"
                : "asc",
          };

          sortHandler(_sort);

          return _sort;
        })
      }
    >
      {(sort.type === "none" || sort.field !== field) && (
        <FontAwesomeIcon icon={faSort} />
      )}
      {sort.field === field && (
        <Fragment>
          {" "}
          {sort.type === "asc" && <FontAwesomeIcon icon={faSortAsc} />}
          {sort.type === "desc" && <FontAwesomeIcon icon={faSortDesc} />}
        </Fragment>
      )}
    </button>
  );
};

export default SortButton;
