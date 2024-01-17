"use client";
import {
  faSort,
  faSortAsc,
  faSortDesc,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SortButton = () => {
  const [sort, setSort] = useState<"asc" | "desc" | "none">("none");

  return (
    <span
      onClick={() =>
        setSort((prev) =>
          prev === "none" ? "asc" : prev === "asc" ? "desc" : "none"
        )
      }
      className="cursor-pointer"
    >
      {sort === "none" && <FontAwesomeIcon icon={faSort} />}
      {sort === "asc" && <FontAwesomeIcon icon={faSortAsc} />}
      {sort === "desc" && <FontAwesomeIcon icon={faSortDesc} />}
    </span>
  );
};

export default SortButton;
