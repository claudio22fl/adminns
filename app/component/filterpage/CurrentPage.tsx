import React from "react";

export default function CurrentPage({
  totalPages,
  currentPage,
  handlePageChange,
}: any) {
  return (
    <div className="flex justify-center mt-4">
      <nav>
        <ul className="flex items-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                className={`py-2 px-4 mx-1 rounded ${
                  index + 1 === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
