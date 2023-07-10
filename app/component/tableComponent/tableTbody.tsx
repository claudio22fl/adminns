import { IFormDataReset, ISim, checkboxesList } from "@/app/types/types";
import { TABLESIMS_TD } from "@/app/utils/const";
import { formatDate } from "@/app/utils/format-date";
import React, { Dispatch, SetStateAction } from "react";
import buttonsTbody from "./buttonsTbody";

interface Props {
  currentData: ISim[];
  refreshTable: () => void;
  setFormData: Dispatch<SetStateAction<IFormDataReset>>;
  setCheckboxSelecteds: (value: SetStateAction<checkboxesList[]>) => void;
  checkboxLists: checkboxesList[];
}

export default function tBody({
  currentData,
  refreshTable,
  setFormData,
  setCheckboxSelecteds,
  checkboxLists,
}: Props) {
  return (
    <tbody>
      {currentData.map(({ ...ISim }) => (
        <tr
          key={ISim.id}
          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
        >
          {Object.entries(TABLESIMS_TD).map(([key, { data, style }]) => {
            const differenceInMilliseconds =
              new Date(ISim.vencimiento).getTime() - new Date().getTime();
            const differenceInDays = Math.floor(
              differenceInMilliseconds / (1000 * 60 * 60 * 24)
            );
            if (
              data == "CHECK" ||
              data == "fechainicio" ||
              data == "vencimiento" ||
              data == "Acciones" ||
              data == "Diaavencer"
            ) {
              return (
                <td
                  key={data}
                  className={` truncate  transition-transform hover:max-w-full ${style}`}
                >
                  {data === "CHECK" && (
                    <input
                      type="checkbox"
                      name={`${ISim.id}`}
                      id={`${ISim.id}`}
                      checked={
                        checkboxLists.find(
                          (checkbox) => checkbox.id === ISim.id
                        )?.state || false
                      }
                      onChange={() => {
                        setCheckboxSelecteds((prevCheckboxes) =>
                          prevCheckboxes.map((checkboxLists) =>
                            checkboxLists.id === ISim.id
                              ? {
                                  ...checkboxLists,
                                  state: !checkboxLists.state,
                                }
                              : checkboxLists
                          )
                        );
                      }}
                    />
                  )}
                  {data === "Diaavencer" && differenceInDays}
                  {data == "fechainicio" && formatDate(ISim.fechainicio)}
                  {data == "vencimiento" && formatDate(ISim.vencimiento)}
                  {data === "Acciones" &&
                    buttonsTbody(
                      ISim.id,
                      refreshTable,
                      setFormData,
                      currentData
                    )}
                </td>
              );
            } else {
              return (
                <td
                  key={data}
                  className={`truncate min-w-max max-w-0 transition-transform hover:max-w-full ${style}`}
                >
                  {ISim[data]}
                </td>
              );
            }
          })}
        </tr>
      ))}
    </tbody>
  );
}
