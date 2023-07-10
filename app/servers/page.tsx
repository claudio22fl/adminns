import React, { useEffect, useState } from "react";
import SSHCommandSender from "../component/SSHCommandSender";
import FotterPage from "../component/Footer";
import { Tableinservers } from "../component/Tabla";
import { listOfServers, type IserversClave, IserversIp } from "../types/types";
import { mock_Servers } from "../hooks/mockServer";
import { SSHCOMMAND_SELECTED, SelecterValue } from "../utils/const";

export default function page() {
  return (
    <main className="container mx-auto justify-center mt-7 px-40">
      <h1 className="text-2xl font-bold my-4">Gráficos de Pastel</h1>
      <div className="w-full flex justify-center space-x-4">
        {mock_Servers.slice(0, 5).map(({ ip, clave, name }: listOfServers) => (
          <SSHCommandSender ip={ip} clave={clave} name={name} />
        ))}
      </div>

      <Tableinservers server={mock_Servers} />

      <FotterPage />
    </main>
  );
}
