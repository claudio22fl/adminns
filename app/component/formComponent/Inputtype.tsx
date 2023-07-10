import React from "react";
import { IImpuchip, IInputsTypeProps } from "../../types/types";

export default function Inputtype({
  inputs,
  handleChange,
  formData,
}: IInputsTypeProps) {
  return (
    <>
      {inputs.map(({ id, name, label, tipo, valor }: IImpuchip) => (
        <div key={id} className="w-full px-3 mt-4 mb-6 md:mb-0">
          <label htmlFor={name} className="block">
            {label}
          </label>
          {name === "vencimiento" ? (
            <select
              id={name}
              name={name}
              onChange={handleChange}
              className="border mt-2 h-12 text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
            >
              {Object.assign(valor).map((mes: string) => {
                return (
                  <option key={mes} value={mes}>
                    {mes} Mes
                  </option>
                );
              })}
            </select>
          ) : (
            <input
              autoFocus
              type={tipo}
              value={formData[name]}
              id={name}
              name={name}
              onChange={handleChange}
              className="border mt-2 text-slate-950 border-gray-300 px-4 py-2 rounded-md w-full"
              required={false}
            />
          )}
        </div>
      ))}
    </>
  );
}
