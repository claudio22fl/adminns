import { IFormData, IFormDataReset, ISim } from "@/app/types/types";
import { formatDate, formatDateInputs } from "@/app/utils/format-date";
import { useEffect, useState } from "react";

export const useFetchSims = () => {
  const [posts, setPostdata] = useState<ISim[]>([]);

  const date1 = new Date(formatDateInputs(new Date().toString()));
  date1.setMonth(date1.getMonth() + Number(1));

  const [formData, setFormData] = useState<IFormDataReset>({
    numero: "",
    empresa: "",
    marca: "",
    patente: "",
    puk: "",
    numerosim: "",
    sim: "",
    cliente: "",
    numerodetelefono: "",
    fechainicio: formatDateInputs(new Date().toString()),
    vencimiento: formatDateInputs(date1.toString()),
    correo: "",
    valor: "",
    Mg: "",
  });

  const fetchsims = async () => {
    const response = await fetch("http://naowgroup.cl/api/chips", {
      cache: "no-store",
      mode: "cors",
    });
    const json: ISim[] = await response.json();
    if (json.length > 0) {
      setPostdata(json);
    }
  };

  useEffect(() => {
    fetchsims();
  }, []);

  return { posts, fetchsims, setFormData, formData };
};
