import { ISim, IserversClave } from "@/app/types/types";
import { Dispatch, SetStateAction, useState } from "react";

export const useSortData = (
  filterData: ISim[],
  setFilterData: Dispatch<SetStateAction<ISim[]>>
) => {
  const [sortVariable, setSortVariable] = useState<string>();
  const [sortAsc, setSortAsc] = useState(false);

  const handleChangeSort = (dato: string) => {
    let newSortAsc = !sortAsc;
    if (sortVariable === dato) {
      newSortAsc = !sortAsc;
    } else {
      newSortAsc = true;
    }

    const sortedData = [...filterData].sort((a, b) => {
      const date1 = new Date();
      const datea = new Date(a[`vencimiento`]);
      const dateb = new Date(b[`vencimiento`]);
      const differenceInMillisecondsA = datea.getTime() - date1.getTime();
      const differenceInMillisecondsB = dateb.getTime() - date1.getTime();
      type ISimKey = keyof typeof a;
      const nameA = Math.floor(
        differenceInMillisecondsA / (1000 * 60 * 60 * 24)
      );
      const nameB = Math.floor(
        differenceInMillisecondsB / (1000 * 60 * 60 * 24)
      );
      if (dato !== "Diaavencer") {
        const nameA = a[dato as ISimKey];
        const nameB = b[dato as ISimKey];

        if (!nameA > !nameB) {
          return newSortAsc ? -1 : 1;
        } else if (!nameA < !nameB) {
          return newSortAsc ? 1 : -1;
        } else {
          return 0;
        }
      }

      if (nameA > nameB) {
        return newSortAsc ? -1 : 1;
      } else if (nameA < nameB) {
        return newSortAsc ? 1 : -1;
      } else {
        return 0;
      }
    });

    setSortVariable(dato);
    setSortAsc(newSortAsc);
    setFilterData(sortedData);
  };

  return { handleChangeSort };
};
