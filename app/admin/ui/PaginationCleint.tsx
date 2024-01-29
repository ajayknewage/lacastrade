"use client";
import Pagination from "@/components/Pagination";

const PaginationClient = () => {
  return (
    <Pagination
      currentPagination={0}
      fetchApi={(params: any) => {}}
      limit={10}
      paginationCount={5}
      setCurrentPagination={() => {}}
      marginPagesDisplayed={2}
      pageRangeDisplayed={6}
    />
  );
};

export default PaginationClient;
