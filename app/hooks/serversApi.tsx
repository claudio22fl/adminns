import Swal from "sweetalert2";
import { IserversClave, IserversIp } from "../types/types";
import { alertSweet, alertSweetReady } from "../utils/AlertsSweet";
import { SSHSETCOMMAND_SELECTED } from "../utils/const";

export async function executeCommand(
  ip: string,
  clave: string,
  commandInput: string
) {
  const response = await fetch(
    `https://ssh.chileaccesorios.com/execute-command?command=${commandInput}&url=${ip}&clave=${clave}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  if (response.ok) {
    const output = await response.text();
    return output;
  } else {
    const error = await response.text();
    return error;
  }
}
export async function validateBackups(ip: string, clave: string) {
  const response = await fetch(
    `https://ssh.chileaccesorios.com/execute-command?command=ls -l /data/backups/&url=${ip}&clave=${clave}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  if (response.ok) {
    const output = await response.text();
    return output;
  } else {
    const error = await response.text();
    return error;
  }
}

export async function sendcomand(
  comando: string,
  type: string,
  ip: string,
  clave: string,
  setServerData: any
) {
  if (comando === SSHSETCOMMAND_SELECTED.CREATEBACKUP) {
    const validation = (await validateBackups(ip, clave))
      .split(" ")
      .slice(2, 3)[0];
    if (Number(validation.slice(0, 1)) == 0) {
      alertSweet(setServerData, comando, type);
    } else {
      alertSweetReady();
    }
  } else {
    alertSweet(setServerData, comando, type);
  }
}
