import { parseResult, sumSizes, sumUsed } from "@/app/utils/DataCalculations";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Isloading from "../Isloading";
import { roundDecimal } from "@/app/utils/RoundDecimal";

export default function GraficMemory({ datos }: any) {
  if (datos === "Cargando datos") {
    return (
      <div className="text-center w-72 top-20 p-24">
        <Isloading />
      </div>
    );
  }

  try {
    const parsedData = parseResult(datos);
    const data = [
      {
        name: "Uso de memoria",
        Utilizado: roundDecimal(sumUsed(parsedData), 2),
        Libre: roundDecimal(sumSizes(parsedData) - sumUsed(parsedData), 2),
      },
    ];

    return (
      <ResponsiveContainer width={300} height={300}>
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <p className="content">{`Utilizado "${sumSizes(parsedData)}":`}</p>
          <Bar dataKey="Utilizado" stackId="a" fill="#8884d8" />
          <Bar dataKey="Libre" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  } catch {
    return <Isloading />;
  }
}
