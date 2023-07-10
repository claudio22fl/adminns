import { SSHCOMMAND_SELECTED, SelecterValue } from "@/app/utils/const";
import { useEffect, useState } from "react";
import { executeCommand } from "../serversApi";
import { IserversIp } from "@/app/types/types";

export const useFetchSshServer = (
  ip: string,
  clave: string,
  name: string | undefined
) => {
  const [commandOutput, setCommandOutput] = useState("Cargando datos");
  const [commandInput, setCommandInput] = useState<SelecterValue>(
    SSHCOMMAND_SELECTED.RAM
  );

  useEffect(() => {
    setCommandOutput("Cargando datos");
    fetchServerData();

    const interval = setInterval(async () => {
      fetchServerData();
    }, 100000);

    return () => clearInterval(interval);
  }, [name, commandInput]);

  const fetchServerData = async () => {
    setCommandOutput(await executeCommand(ip, clave, commandInput));
  };

  return { commandInput, setCommandOutput, commandOutput, setCommandInput };
};
