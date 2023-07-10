import { ISim } from "@/app/types/types";
import { useEffect, useState } from "react";

export const useSearchData = (posts: ISim[]) => {
  const [searchSims, setSearchSims] = useState("");
  const [filterData, setFilterData] = useState<ISim[]>([]);

  useEffect(() => {
    if (searchSims == "") {
      setFilterData(posts);
    }

    setFilterData(
      posts.filter((sims: ISim) => {
        const { numero, numerosim, sim, cliente, correo, empresa } = sims;
        const numeroMatch = numero.toString().includes(searchSims);
        const numerosimMatch = numerosim.toString().includes(searchSims);
        const simMatch = sim.toString().includes(searchSims);
        const clienteMatch = cliente.toString().includes(searchSims);
        const correoMatch = correo.toString().includes(searchSims);
        const empresaMatch = empresa.toString().includes(searchSims);

        return (
          numeroMatch ||
          numerosimMatch ||
          numerosimMatch ||
          simMatch ||
          clienteMatch ||
          correoMatch ||
          empresaMatch
        );
      })
    );
  }, [searchSims, posts]);

  return { filterData, setFilterData, setSearchSims };
};
