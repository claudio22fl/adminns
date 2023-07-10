import Swal from "sweetalert2";

export function deletesims(id: number | undefined, refreshTable: () => void) {
  Swal.fire({
    title: "Esta seguro?",
    text: "",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, borrar!",
    cancelButtonText: "cancelar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`https://naowgroup.cl/api/chips/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          Swal.fire("Ingresado correctamente", "", "success");
          refreshTable();
        } else {
          Swal.fire("Error al ingresar", "", "error");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
  });
  refreshTable();
}
