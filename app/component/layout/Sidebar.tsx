"use client";
import React, { useState } from "react";
import arrowRightIcon from "./icons/arrow-right.svg";
import closeIcon from "./icons/close.svg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed z-40 top-0 left-0 h-screen w-64 bg-gray-200 transition-transform duration-300 
      ${
        isOpen
          ? "transform translate-x-0 ml-0"
          : "transform -translate-x-full ml-20"
      }`}
    >
      <div
        className={`h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 ${
          isOpen ? "dark:bg-gray-800" : ""
        }`}
      >
        <a href="/" className="flex items-center pl-2.5 mb-5">
          <img
            src="http://eberetes.cl/ic_launcher_round.png"
            className=" h-10 mr-3 sm:h-7"
            alt="Flowbite Logo"
          />
          {isOpen ? (
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              MundialGPS
            </span>
          ) : (
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          )}
        </a>
        {isOpen ? (
          <button
            className="absolute top-4 right-4 p-2 bg-gray-500 text-white rounded"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </button>
        ) : (
          <button
            className="absolute top-4 right-4 flex items-center justify-center p-2 bg-gray-500 text-white rounded"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
            <span className="ml-2"></span>
          </button>
        )}
        <div className="mt-4">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/servers"
                className={
                  isOpen
                    ? `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`
                    : `absolute top-20 right-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`
                }
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                {isOpen ? <span className="ml-3">Dashboard</span> : <></>}
              </a>
            </li>
            <li>
              <a
                href="/sims"
                className={
                  isOpen
                    ? `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`
                    : `absolute top-40 right-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 0H5.914a1.5 1.5 0 0 0-1.06.44L2.439 2.853A1.5 1.5 0 0 0 2 3.914V14.5A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0Zm-7 2.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm2 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm2.75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0Zm1.25-.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" />
                </svg>
                {isOpen ? <span className="ml-3">Sims</span> : <></>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
