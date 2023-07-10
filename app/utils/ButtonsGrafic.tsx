import React from "react";
import classNames from "classnames";
import { SELECTER_SSH, SelecterValue } from "./const";

interface props {
  handleButtonClick: (buttonId: SelecterValue) => void;
  selectedButton: SelecterValue;
}

export function ButtonsGrafic({ handleButtonClick, selectedButton }: props) {
  return (
    <div className="flex justify-center">
      {Object.entries(SELECTER_SSH).map(([key, { name, code }]) => {
        return (
          <button
            key={key}
            className={classNames(
              "px-4 text-xs py-2 mr-2 rounded focus:outline-none",
              { "bg-blue-500 text-white": selectedButton === code }
            )}
            onClick={() => handleButtonClick(code)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
