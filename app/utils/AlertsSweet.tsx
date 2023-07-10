import Swal from "sweetalert2";

export const alertSweet = (
  setServerData: any,
  comando: string,
  type: string
) => {
  Swal.fire({
    title: "Esta seguro?",
    text: "",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `Si, ${type}`,
    cancelButtonText: "cancelar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        setServerData(comando);
        Swal.fire("completado!", "tarea completada", "success");
      } catch (error) {
        console.log("Error:", error);
      }
    }
  });
};

export const alertSweetReady = () => {
  Swal.fire("Backup ya en proceso");
};
