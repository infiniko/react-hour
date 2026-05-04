import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageNumber = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
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
        {pages.map((p) => {
          return (
            <button
              key={p}
              className={`btn btn-xs sm:btn-md join-item ${p === page ? "bg-base-300 border-base-300" : ""}`}
              onClick={() => handlePageNumber(p)}
            >
              {p}
            </button>
          );
        })}
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

export default PaginationContainer;
