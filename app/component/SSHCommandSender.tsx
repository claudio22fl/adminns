"use client";
import React, { useEffect, useState } from "react";
import { executeCommand } from "../hooks/serversApi";
import { ButtonsGrafic } from "../utils/ButtonsGrafic";
import { listOfServers } from "../types/types";
import { SSHCOMMAND_SELECTED, SelecterValue } from "../utils/const";
import GraficMemory from "./grafic/GraficMemory";
import GraficRam from "./grafic/GraficRam";
import GraficCpu from "./grafic/GraficCpu";
import Button from "./Button";

export default function SSHCommandSender({ ip, clave, name }: listOfServers) {
  const [commandOutput, setCommandOutput] = useState("Cargando datos");
  const [commandInput, setCommandInput] = useState<SelecterValue>(
    SSHCOMMAND_SELECTED.RAM
  );
  const [grafic, setGrafic] = useState<JSX.Element>(<></>);

  const graficTypes = {
    free: () => <GraficRam datos={commandOutput} />,
    "df -h": () => <GraficCpu datos={commandOutput} />,
  };

  type graficTypeKey = keyof typeof graficTypes;

  const fetchServerData = async () => {
    setCommandOutput(await executeCommand({ ip, clave, commandInput }));
  };

  useEffect(() => {
    setGrafic(graficTypes[commandInput as graficTypeKey]);
  }, [commandInput]);

  const handleButtonClick = (buttonId: SelecterValue) => {
    setCommandOutput("Cargando datos");
    setCommandInput(buttonId);
  };

  useEffect(() => {
    fetchServerData();
    const interval = setInterval(async () => {
      fetchServerData();
    }, 100000);

    return () => clearInterval(interval);
  }, [commandInput]);

  return (
    <section className="border border-sky-500 rounded">
      <h2 className="text-lg font-semibold mb-2 text-center mt-4">{name} </h2>

      <ButtonsGrafic
        handleButtonClick={handleButtonClick}
        selectedButton={commandInput}
      />
      {commandInput === SSHCOMMAND_SELECTED.RAM && (
        <GraficRam datos={commandOutput} />
      )}
      {commandInput === SSHCOMMAND_SELECTED.MEMORY && (
        <GraficMemory datos={commandOutput} />
      )}
      {commandInput === SSHCOMMAND_SELECTED.CPU && (
        <GraficCpu datos={commandOutput} />
      )}
    </section>
  );
}
