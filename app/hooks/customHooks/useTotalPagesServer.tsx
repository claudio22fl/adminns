import { ISim, Iservers } from "@/app/types/types";
import { useState } from "react";

export const useTotalPagesServers = (data: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData: ISim[] | any = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e: { target: { value: string } }) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return {
    currentPage,
    totalPages,
    currentData,
    handleItemsPerPageChange,
    handlePageChange,
    setCurrentPage,
  };
};
