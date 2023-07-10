import { listOfServers } from "../types/types";

interface Props extends listOfServers {
  commandInput: string;
}

export const executeCommand = async ({ ip, clave, commandInput }: Props) => {
  const response = await fetch(
    `https://ssh.naowgroup.cl/execute-command?command=${commandInput}&url=${ip}&clave=${clave}`,
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
};
