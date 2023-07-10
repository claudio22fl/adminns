"use client";
import { roundDecimal } from "@/app/utils/RoundDecimal";
import { COLORS } from "@/app/utils/const";
import { PieChart, Pie, Sector, Cell, Tooltip, Legend } from "recharts";
import Isloading from "../Isloading";

export default function GraficRam({ datos }: any) {
  if (datos === "Cargando datos") {
    return (
      <div className="text-center w-72 top-20 p-24">
        <Isloading />
      </div>
    );
  }
  const splitdata = datos.split(" ");
  const splitDataFinal = splitdata.filter((servers: string) => servers != "");
  const data = [
    {
      name: "En uso",
      value: roundDecimal(Number(splitDataFinal[8] / 1000000), 2),
    },
    {
      name: "Libre",
      value: roundDecimal(Number(splitDataFinal[9] / 1000000), 2),
    },
    {
      name: "Compartido",
      value: roundDecimal(Number(splitDataFinal[10] / 1000000), 2),
    },
    {
      name: "Cache",
      value: roundDecimal(Number(splitDataFinal[11] / 1000000), 2),
    },
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value) => `${value} GB`} />
      <Legend />
    </PieChart>
  );
}
