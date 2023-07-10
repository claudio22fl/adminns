"use client";

import { IFormDataReset, ISim, checkboxesList } from "@/app/types/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSearchData } from "./useSearchData";
import { useSortData } from "./useSortData";
import { useTotalPagesServers } from "@/app/hooks/customHooks/useTotalPagesServer";
import ItemsPerPage from "../filterpage/ItemsPerPage";
import tableThead from "./tableThead";
import CurrentPage from "../filterpage/CurrentPage";
import tBody from "./tableTbody";
import { useCheckCreate } from "./useCheckCreate";

type tableChipsProps = {
  posts: ISim[];
  refreshTable: () => void;
  setFormData: Dispatch<SetStateAction<IFormDataReset>>;
};

export default function Tablachips({
  posts,
  refreshTable,
  setFormData,
}: tableChipsProps) {
  const { filterData, setFilterData, setSearchSims } = useSearchData(posts);

  const { handleChangeSort } = useSortData(filterData, setFilterData);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setSearchSims(e.target.value);
    setCurrentPage(1);
  };

  const {
    currentPage,
    totalPages,
    currentData,
    handleItemsPerPageChange,
    handlePageChange,
    setCurrentPage,
  } = useTotalPagesServers(filterData);

  const {
    checkboxLists,
    setCheckboxSelecteds,
    checkAll,
    handleCheckAllChange,
  } = useCheckCreate(filterData);

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => {
          console.log(checkboxLists);
        }}
      >
        <h6 className="text-blueGray-700 text-xl font-bold">Lista de SIM</h6>
      </button>
      <div className="flex justify-around gap-80  mb-2 mt-8">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Buscar..."
            name="Search"
            onChange={handleChange}
            className="pl-10 pr-4 py-2 w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 15l6-6m0 0l-6-6m6 6H3"
              />
            </svg>
          </span>
        </div>

        <div className="relative flex-grow ml-5 w-24">
          <ItemsPerPage
            handleItemsPerPageChange={handleItemsPerPageChange}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>

      <div className="min-w-full mt-10 overflow-x-auto">
        <table className="min-w-full">
          {tableThead(
            handleChangeSort,
            handlePageChange,
            handleCheckAllChange,
            checkAll
          )}
          {tBody({
            currentData,
            refreshTable,
            setFormData,
            setCheckboxSelecteds,
            checkboxLists,
          })}
        </table>
      </div>

      <CurrentPage
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
}
