import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageNumber = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`btn btn-xs sm:btn-md join-item ${activeClass ? "bg-base-300 border-base-300" : ""}`}
        onClick={() => handlePageNumber(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageBtns = [];
    pageBtns.push(addPageButton({ pageNumber: 1, activeClass: page === 1 })); //first
    //dots-1
    if (page > 2) {
      pageBtns.push(
        <button className="btn btn-xs sm:btn-md join-item" key="dots-1">
          ...
        </button>,
      );
    }
    if (page !== 1 && page !== pageCount) {
      pageBtns.push(addPageButton({ pageNumber: page, activeClass: true })); //active
    }
    //dots-2
    if (page < pageCount - 1) {
      pageBtns.push(
        <button className="btn btn-xs sm:btn-md join-item" key="dots-2">
          ...
        </button>,
      );
    }
    pageBtns.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount }),
    ); //last

    return pageBtns;
  };
  if (pageCount < 2) return null;
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page > 0 ? page - 1 : 0;
            handlePageNumber(prevPage);
          }}
        >
          PREV
        </button>
        {renderPageButtons()}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page >= pageCount ? pageCount : page + 1;
            handlePageNumber(nextPage);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ComplexPaginationContainer;
