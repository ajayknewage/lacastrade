"use client";
import { Dispatch, FC, SetStateAction } from "react";
import ReactPaginate from "react-paginate";

const Pagination: FC<{
  currentPagination: number;
  setCurrentPagination: Dispatch<SetStateAction<number>>;
  paginationCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  limit: number;
  fetchApi(params: any): void;
}> = ({
  currentPagination,
  setCurrentPagination,
  paginationCount,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 2,
  limit,
  fetchApi,
}) => {
  //pagination handler
  const paginationHandler = (
    event: { selected: number },
    setCurrentPagination: Dispatch<SetStateAction<number>>
  ) => {
    let params: { [key: string]: any } = {};
    setCurrentPagination(event.selected);

    params["isPaginate"] = true;
    params["offset"] = event.selected * limit;

    return params;
  };

  //pagination handler
  const paginationApiHandler = (event: { selected: number }) => {
    let params = {
      ...paginationHandler(event, setCurrentPagination),
    };

    fetchApi(params);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={paginationApiHandler}
      forcePage={currentPagination}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={paginationCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item prev-item"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};

export default Pagination;
