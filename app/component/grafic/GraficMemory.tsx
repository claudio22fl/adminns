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

export default function GraficMemory({ datos }: any) {
  console.log(datos);
  if (datos === "Cargando datos") {
    return <Isloading />;
  }

  try {
    const parsedData = parseResult(datos);
    const data = [
      {
        name: "Uso de memoria",
        Utilizado: sumUsed(parsedData),
        Libre: sumSizes(parsedData) - sumUsed(parsedData),
      },
    ];

    console.log(sumSizes(parsedData));
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
