import { type } from "os";

 export interface Iservers {
    id?: number;
    ip: string;
    clave: string;
    name?: string;
  }

 export type IserversId = Pick<Iservers, 'id'>;
 export type IserversIp = Pick<Iservers, 'ip'>;
 export type IserversClave = Pick<Iservers, 'clave'>;

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