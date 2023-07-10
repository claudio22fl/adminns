import { IFormDataReset, ISim } from "../types/types";
import { Dispatch, SetStateAction, useState } from "react";
import { formatDate, formatDateInputs } from "../utils/format-date";
import Swal from "sweetalert2";

export async function renewSims(
  id: number,
  refreshTable: () => void,
  setFormData: Dispatch<SetStateAction<IFormDataReset>>,
  filterData: ISim[]
) {
  try {
    Swal.fire({
      title: "Cuantos meses se renobara?",
      input: "number",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Actualizar",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then(async (result) => {
      if (result.isConfirmed) {
        const filteredData = filterData.filter((item) => item.id == id);

        if (filteredData.length > 0) {
          filteredData.map(async (ISim) => {
            const date1 = new Date(formatDateInputs(ISim.vencimiento));
            date1.setMonth(date1.getMonth() + Number(result.value));
            const vencimiento = formatDateInputs(date1.toString());

            const hernes = editarDato(id, "vencimiento", vencimiento);

            const response = await fetch(
              `https://naowgroup.cl/api/chips/${id}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(hernes),
              }
            );
            refreshTable();
          });
        }

        Swal.fire("Actualizado correctamente", "", "success");
      }
    });
  } catch (error) {
    console.log("Error:", error);
  }

  function editarDato(
    id: number | undefined,
    campo: string,
    nuevoValor: any
  ): any[] {
    const filteredData = filterData.filter((item) => item.id == id);
    return filteredData.map((obj) => {
      if (obj.id === id) {
        return {
          ...obj,
          [campo]: nuevoValor,
        };
      }
      return obj;
    });
  }
}
