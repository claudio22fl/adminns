import { formatDate, formatDateInputs } from "@/app/utils/format-date";
import Swal from "sweetalert2";

export const useFormCreate = ({ refreshTable, formData, setFormData }: any) => {
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const date1 = new Date(formData[`fechainicio`]);
    date1.setMonth(date1.getMonth() + Number(e.target.value));

    if (e.target.name === "vencimiento") {
      setFormData({
        ...formData,
        [e.target.name]: formatDateInputs(date1.toString()),
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const date1 = new Date(formatDateInputs(new Date().toString()));
    date1.setMonth(date1.getMonth() + Number(1));
    console.log(formData);
    try {
      const response = await fetch("https://naowgroup.cl/api/chips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Agregado correctamente",
        });

        refreshTable();
      } else {
        Swal.fire("Error al ingresar", "", "error");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return { formData, handleChange, handleSubmit };
};
