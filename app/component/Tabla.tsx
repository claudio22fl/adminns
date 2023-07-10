"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";

export const Tableinservers = ({ datos, server }: any) => {
  return (
    <div className="container mx-auto mt-10">
      <table className="min-w-full border-gray-300">
        <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
          <tr>
            <th className="py-2 text-xs px-3 border-b">id</th>
            <th className="py-2 text-xs px-3 border-b">nombre</th>
            <th className="py-2 text-xs px-3 border-b">server</th>
            <th className="py-2 text-xs px-3 border-b">grafico</th>
            <th className="py-2 text-xs px-3 border-b">Total ram</th>
            <th className="py-2 text-xs px-3 border-b">en uso</th>
            <th className="py-2 text-xs px-3 border-b">libre</th>
            <th className="py-2 text-xs px-3 border-b">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {server.map(({ id, ip, clave, name }: any) => (
            <tr
              key={id}
              className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-400"
            >
              <td className="py-2 text-xs px-4 text-center border-b">{id}</td>
              <td className="py-2 text-xs px-4 text-center border-b">{name}</td>
              <td className="py-2 text-xs px-4 text-center border-b">{ip}</td>
              <td className="py-2 text-xs px-4 text-center border-b">{ip}</td>
              <td className="py-2 text-xs px-4 text-center border-b">{ip}</td>
              <td className="py-2 text-xs px-4 text-center border-b">{ip}</td>
              <td className="py-2 text-xs px-4 text-center border-b">{ip}</td>
              <td className="py-4 text-m  px-4 border-b flex flex-row  text-center content-center items-center space-x-1.5">
                <button className="basis-1/4 md:basis-1/3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-clockwise text-rose-700"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                    />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                  </svg>
                </button>
                <Link href={`/sims/${id}`} className="basis-1/4 md:basis-1/3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </Link>
                <button className="basis-1/4 md:basis-1/3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
