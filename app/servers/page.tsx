"use client";
import SSHCommandSender from "../component/SSHCommandSender";
import { listOfServers } from "../types/types";
import ItemsPerPage from "../component/filterpage/ItemsPerPage";
import CurrentPage from "../component/filterpage/CurrentPage";
import { useTotalPagesServers } from "../hooks/customHooks/useTotalPagesServer";
import { mock_Servers } from "../hooks/mockServer";

export default function page() {
  const {
    currentPage,
    totalPages,
    currentData,
    handleItemsPerPageChange,
    handlePageChange,
  } = useTotalPagesServers(mock_Servers);

  return (
    <main className="container mx-auto justify-center mt-7 px-40">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">
            Gestion de servidores
          </h6>
        </div>
      </div>
      <div className="flex justify-between gap-80  mb-2 mt-8">
        {
          <ItemsPerPage
            handleItemsPerPageChange={handleItemsPerPageChange}
            handlePageChange={handlePageChange}
          />
        }
        {
          <CurrentPage
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        }
      </div>
      <div className="w-full mt-5 grid grid-cols-4 gap-4">
        {currentData.map(({ ip, clave, name }: listOfServers) => (
          <SSHCommandSender key={ip} ip={ip} clave={clave} name={name} />
        ))}
      </div>
    </main>
  );
}
