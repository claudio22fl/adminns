"use client";
import { IFormData, IFormDataReset, IImpuchip } from "@/app/types/types";
import Inputtype from "./Inputtype";
import { useFormCreate } from "@/app/component/formComponent/useFormCreate";
import { Dispatch, SetStateAction } from "react";

export type IndexPageProps = {
  refreshTable: () => void;
  formData: IFormDataReset;
  setFormData: Dispatch<SetStateAction<IFormDataReset>>;
  inputstabla: IImpuchip[];
};

const IndexPage = ({
  refreshTable,
  formData,
  setFormData,
  inputstabla,
}: IndexPageProps) => {
  const { handleChange, handleSubmit } = useFormCreate({
    refreshTable,
    formData,
    setFormData,
  });

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="grid grid-cols-4 gap-4">
        <Inputtype
          inputs={inputstabla}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
      <div className=" mt-10 text-right">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default IndexPage;
