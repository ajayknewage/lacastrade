"use client";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={() => {}}
      pageRangeDisplayed={5}
      pageCount={5}
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
