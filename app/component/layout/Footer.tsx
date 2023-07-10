import React from "react";

export default function FotterPage() {
  return (
    <footer className="bg-neutral-200 text-center z-50 text-white dark:bg-neutral-600 mt-10 flex flex-col justify-end">
      <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          Ns
        </a>
      </div>
    </footer>
  );
}
