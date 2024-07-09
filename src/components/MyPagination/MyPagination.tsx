import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const MyPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getButtonClass = (page: number) =>
    `px-4 py-2 border rounded-lg max-md:text-sm ${
      page === currentPage
        ? "bg-secondary-500 text-white"
        : "bg-white text-secondary-500 border-secondary-200"
    } hover:bg-secondary-100 transition`;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center mt-4 gap-2">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-lg bg-white text-secondary-500 border-secondary-200 hover:bg-secondary-100 max-md:text-sm transition"
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={getButtonClass(page)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-lg bg-white text-secondary-500 border-secondary-200 hover:bg-secondary-100 max-md:text-sm transition"
      >
        Next
      </button>
    </div>
  );
};

export default MyPagination;
