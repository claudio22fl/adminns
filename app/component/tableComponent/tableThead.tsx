"use client";
import { TABLESIMS_TD } from "@/app/utils/const";
import React, { useState } from "react";

interface Podts {
  handleChangeSort: (value: string) => void;
}

export default function tableThead(
  handleChangeSort: (value: string) => void,
  handlePageChange: any,
  handleCheckAllChange: () => void,
  checkAll: boolean
) {
  const [showButtons, setShowButtons] = useState(false);

  const handleToggleButtons = () => {
    setShowButtons(!showButtons);
  };
  return (
    <thead className="bg-gray-200 border-b">
      <tr>
        {Object.entries(TABLESIMS_TD).map(([key, { name, data }]) => {
          if (name == ".") {
            return (
              <th key={key}>
                <input
                  type="checkbox"
                  checked={checkAll}
                  onChange={handleCheckAllChange}
                />
                <div className="relative">
                  <button onClick={handleToggleButtons}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-4 h-4 inline ${
                        showButtons ? "transform rotate-180" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {showButtons && (
                    <div className="absolute left-4 top-6 mt-1 bg-white p-2 rounded text-xs">
                      <button className="bg-white text-gray-600 hover:bg-gray-100 px-2 py-1 rounded block">
                        Actulizar
                      </button>
                      <button className="bg-white text-gray-600 hover:bg-gray-100 px-2 py-1 rounded block">
                        Borrar
                      </button>
                    </div>
                  )}
                </div>
              </th>
            );
          }
          return (
            <th
              key={key}
              onClick={() => {
                handlePageChange(1);
                handleChangeSort(data);
              }}
              className="text-xs font-medium text-gray-900 px-4 py-4 text-left hover:bg-gray-400 hover:rounded-t-lg hover:cursor-pointer hover:text-blue-500 select-none"
            >
              {name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
