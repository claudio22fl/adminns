"use client";
import React, { useState } from "react";
import { SELECTER_SSHSET, SSHSETCOMMAND_SELECTED } from "../utils/const";
import { sendcomand } from "../hooks/serversApi";

export default function Button({ setServerData, ip, clave }: any) {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      {!showButtons && (
        <div className="flex justify-center top-0 right-0">
          <button onClick={toggleButtons}>
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-bar-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
                />
              </svg>
            </span>
          </button>
        </div>
      )}
      {showButtons && (
        <div className="flex justify-center mt-2 ">
          {Object.entries(SELECTER_SSHSET).map(
            ([key, { name, code, path, style }]) => {
              return (
                <button
                  key={name}
                  onClick={() =>
                    sendcomand(code, name, ip, clave, setServerData)
                  }
                  className={style}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-folder-minus"
                    viewBox="0 0 16 16"
                  >
                    <path d={path[0]} />
                    <path d={path[1]} />
                  </svg>
                </button>
              );
            }
          )}
          <button
            onClick={toggleButtons}
            className="top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full w-4 h-4 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 7.293l5.646-5.647a.5.5 0 0 1 .708.708L8.707 8l5.647 5.646a.5.5 0 0 1-.708.708L8 8.707l-5.646 5.647a.5.5 0 0 1-.708-.708L7.293 8 1.646 2.354a.5.5 0 1 1 .708-.708L8 7.293z"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
