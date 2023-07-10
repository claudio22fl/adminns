"use client";
import { executeCommand, validateBackups } from "../hooks/serversApi";
import { ButtonsGrafic } from "../utils/ButtonsGrafic";
import { listOfServers } from "../types/types";
import {
  SSHCOMMAND_SELECTED,
  SelecterSshSet,
  SelecterValue,
} from "../utils/const";
import GraficMemory from "./grafic/GraficMemory";
import GraficRam from "./grafic/GraficRam";
import GraficCpu from "./grafic/GraficCpu";
import Button from "./Button";
import { useFetchSshServer } from "../hooks/customHooks/useFetchSshServer";
import Isloading from "./Isloading";

export default function SSHCommandSender({ ip, clave, name }: listOfServers) {
  const { commandInput, commandOutput, setCommandInput, setCommandOutput } =
    useFetchSshServer(ip, clave, name);

  function setServerData(commandSetServer: SelecterSshSet) {
    executeCommand(ip, clave, commandSetServer);
  }

  const handleButtonClick = (buttonId: SelecterValue) => {
    if (buttonId != commandInput) {
      setCommandOutput("Cargando datos");
      setCommandInput(buttonId);
    }
  };

  return (
    <section className="border border-sky-500 rounded">
      <Button setServerData={setServerData} ip={ip} clave={clave} />
      <h2 className="text-lg font-semibold mb-2 text-center">{name} </h2>

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
