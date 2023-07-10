import { type } from "os";

export interface Iservers {
  id?: number;
  ip: string;
  clave: string;
  name?: string;
}

export type IserversId = Pick<Iservers, "id">;
export type IserversIp = Pick<Iservers, "ip">;
export type IserversClave = Pick<Iservers, "clave">;

export type listOfServers = Iservers;

export type graficTypeKey = keyof typeof graficTypes;

export interface FileSystemData {
  filesystem: string;
  size: string;
  used: string;
  avail: string;
  usePercent: string;
  mountedOn: string;
}

export interface IFormData {
  numero: number;
  numerosim: number;
  puk: string;
  sim: number;
  cliente: string;
  numerodetelefono: number;
  fechainicio: string;
  vencimiento: string;
  correo: string;
  valor: number;
  Mg: number;
}

export interface IFormDataReset {
  numero: string;
  numerosim: string;
  puk: string;
  sim: string;
  cliente: string;
  numerodetelefono: string;
  fechainicio: string;
  vencimiento: string;
  correo: string;
  valor: string;
  Mg: string;
  empresa: string;
  marca: string;
  patente: string;
}
export interface IImpuchip {
  id: number;
  name: string;
  label: string;
  tipo: string;
  valor: string[];
}
import { IFormData } from "./formdata";
import { IImpuchip } from "./inputchip";

export interface IInputsTypeProps {
  inputs: IImpuchip[];
  handleChange: (e: {
    target: {
      name: any;
      value: any;
    };
  }) => void;
  formData: IFormData;
}

export interface ISim {
  id: number;
  empresa: string;
  numero: number;
  numerosim: number;
  puk: string;
  sim: number;
  cliente: string;
  numerodetelefono: number;
  fechainicio: string;
  vencimiento: string;
  correo: string;
  valor: number;
  Mg: number;
  Diaavencer?: string;
  Acciones?: string;
}

export interface checkboxesList {
  id: number;
  state: boolean;
}
export type ISimKey = keyof typeof ISim;
