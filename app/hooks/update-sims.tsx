import { IFormDataReset, IImpuchip, ISim } from "../types/types";
import { Dispatch, SetStateAction } from "react";
import { formatDateInputs } from "../utils/format-date";
import Swal from "sweetalert2";
import { inputstabla } from "./mockInputs";

export async function updateSims(
  id: number | undefined,
  refreshTable: () => void,
  setFormData: Dispatch<SetStateAction<IFormDataReset>>,
  filterData: ISim[]
) {
  try {
    const filteredData = filterData.filter((item) => item.id == id);

    if (filteredData.length > 0) {
      filteredData.map((ISim) => {
        const date1 = new Date(formatDateInputs(ISim.fechainicio));
        date1.setMonth(date1.getMonth() + Number(1));

        var inputs = ` <div key ={${ISim.id}} class="grid grid-cols-2">`;
        {
          inputstabla.map(({ name, label, tipo }: IImpuchip) => {
            type ISimKey = keyof typeof ISim;

            inputs += `
            <div key ={${name}} className="w-10">
            <label for="swal-input1" class="block mb-2 text-gray-700">${label}</label>
            <input id="${name}Edit" type=${tipo} class="swal2-input border border-gray-400 px-4 py-2 rounded min-w-20 max-w-full" placeholder="numero" value="${
              name === "vencimiento" || name == "fechainicio"
                ? formatDateInputs(ISim[name])
                : ISim[name as ISimKey]
            }">
              </div>
            `;
          });
        }
        inputs += `</div>`;
        const validar = (dato: string) => {
          return (document.getElementById(dato) as HTMLInputElement)?.value;
        };

        Swal.fire({
          title: "Actializando datos",
          html: inputs,
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Actualizar",
          showLoaderOnConfirm: true,
          preConfirm: () => {
            const json: any = {};
            inputstabla.map(({ name }: IImpuchip) => {
              const paramName = `${name}`;
              json[paramName] = validar(`${name}Edit`);
            });
            return {
              json,
            };
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then(async (result) => {
          if (result.isConfirmed) {
            const rs = result.value?.json;
            var hernes = filteredData;

            inputstabla.map(({ name }: IImpuchip) => {
              hernes = editarDato(id, name, rs?.[name], hernes);
            });

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
            if (response.ok) {
              refreshTable();
              Swal.fire("Actualizado correctamente", "", "success");
            }
          }
        });
      });
    }
  } catch (error) {
    console.log("Error:", error);
  }

  function editarDato(
    id: number | undefined,
    campo: string,
    nuevoValor: any,
    filteredData: ISim[]
  ): any[] {
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
