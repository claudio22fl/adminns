"use client";
import Tablachips from "../component/tableComponent/Table";
import { useFetchSims } from "../hooks/customHooks/useFecthSims";
import { inputstabla } from "../hooks/mockInputs";
import Formulariosims from "../component/formComponent/Formulariosims";
import Isloading from "../component/Isloading";
import { formatDateInputs } from "../utils/format-date";

export default function page() {
  const { posts, fetchsims, setFormData, formData } = useFetchSims();

  const clearForm = () => {
    const date1 = new Date(formatDateInputs(new Date().toString()));
    date1.setMonth(date1.getMonth() + Number(1));
    setFormData({
      numero: "",
      empresa: "",
      marca: "",
      patente: "",
      puk: "",
      numerosim: "",
      sim: "",
      cliente: "",
      numerodetelefono: "",
      fechainicio: formatDateInputs(new Date().toString()),
      vencimiento: formatDateInputs(date1.toString()),
      correo: "",
      valor: "",
      Mg: "",
    });
  };

  return (
    <section className="container mx-auto justify-center mt-7 px-40 rounded-xl">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">Agregar SIM</h6>
          <button onClick={() => clearForm()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              color="red"
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-auto px-4 bg-gray-300 lg:px-10 py-10 pt-0 rounded-b-xl">
        <Formulariosims
          refreshTable={fetchsims}
          formData={formData}
          setFormData={setFormData}
          inputstabla={inputstabla}
        />
      </div>

      {posts.length > 0 ? (
        <div className="text-center flex flex-col mt-10 rounded-xl">
          <Tablachips
            posts={posts}
            refreshTable={fetchsims}
            setFormData={setFormData}
          />
        </div>
      ) : (
        <div className="text-center flex flex-col mt-10">
          <Isloading />
        </div>
      )}
    </section>
  );
}
