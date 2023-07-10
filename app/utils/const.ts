export const COLORS = ["#c70c0c", "#00C49F", "#FFBB28", "#0088FE"];

export const SSHCOMMAND_SELECTED = {
  RAM: "free",
  CPU: "mpstat",
  MEMORY: "df -h",
} as const;

export const SELECTER_SSH = {
  [SSHCOMMAND_SELECTED.RAM]: {
    name: "RAM",
    code: "free",
  },
  [SSHCOMMAND_SELECTED.CPU]: {
    name: "CPU",
    code: "mpstat",
  },
  [SSHCOMMAND_SELECTED.MEMORY]: {
    name: "MEMORY",
    code: "df -h",
  },
} as const;

export const SSHSETCOMMAND_SELECTED = {
  CREATEBACKUP: "/var/./test.sh",
  DELETEBACKUP: "rm -rf /data/backups/*",
  RESTART: "sudo shutdown -r now",
} as const;

export const SELECTER_SSHSET = {
  [SSHSETCOMMAND_SELECTED.CREATEBACKUP]: {
    name: "crear",
    code: "/var/./test.sh",
    path: [
      "m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z",
      "M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5Z",
    ],
    style:
      "bg-blue-500 text-xs hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-l-lg",
  },
  [SSHSETCOMMAND_SELECTED.DELETEBACKUP]: {
    name: "borrar",
    code: "rm -rf /data/backups/*",
    path: [
      "m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z",
      "M11 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5z",
    ],
    style:
      "bg-blue-500 text-xs hover:bg-blue-600 text-white font-semibold py-4 px-4",
  },
  [SSHSETCOMMAND_SELECTED.RESTART]: {
    name: "refresh",
    code: "sudo shutdown -r now",
    path: [
      "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z",
      "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z",
      "",
    ],
    style:
      "bg-blue-500 text-xs hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-r-lg",
  },
} as const;

export type SelecterValue =
  (typeof SSHCOMMAND_SELECTED)[keyof typeof SSHCOMMAND_SELECTED];
export type SelecterSshSet =
  (typeof SSHSETCOMMAND_SELECTED)[keyof typeof SSHSETCOMMAND_SELECTED];
export type inputTbaleSims = (typeof TABLESIMS_TD)[keyof typeof TABLESIMS_TD];

export const TABLESIMS = {
  CHECK: "CHECK",
  ID: "ID",
  EMPRESA: "Empresa",
  NUMERO: "Numero",
  NUMERO_SIM: "Numero sim",
  PUK: "PUK",
  SIM: "SIM",
  CLIENTE: "Cliente",
  NUMERO_DE_TELEFONO: "Numero de telefono",
  FECHAINICIO: "Fecha inicio",
  VENCIMIENTO: "Vencimiento",
  DIASAVENCER: "Dias a vencer",
  CORREO: "Correo",
  PRECIO: "Precio",
  MG: "MG",
  ACCIONES: "",
} as const;

export const TABLESIMS_TD = {
  [TABLESIMS.CHECK]: {
    name: ".",
    data: "CHECK",
    style: "py-2 text-xs px-4 text-center border-b max-w-10  min-w-full",
  },
  [TABLESIMS.ID]: {
    name: "ID",
    data: "id",
    style: "py-2 text-xs px-4 text-center border-b max-w-10  min-w-full",
  },
  [TABLESIMS.EMPRESA]: {
    name: "Empresa",
    data: "empresa",
    style: "py-2 text-xs px-4 text-center border-b max-w-10  min-w-full",
  },
  [TABLESIMS.NUMERO]: {
    name: "Numero",
    data: "numero",
    style: "py-2 text-xs px-4 text-center border-b w-32  min-w-full",
  },
  [TABLESIMS.NUMERO_SIM]: {
    name: "Numero SIM",
    data: "numerosim",
    style: "py-2 text-xs px-4 text-center border-b w-32  min-w-full",
  },
  [TABLESIMS.PUK]: {
    name: "PUK",
    data: "puk",
    style: "py-2 text-xs px-4 text-center border-b w-32  min-w-full",
  },
  [TABLESIMS.SIM]: {
    name: "SIM",
    data: "sim",
    style: "py-2 text-xs px-4 text-center border-b w-32  min-w-full",
  },
  [TABLESIMS.CLIENTE]: {
    name: "CLIENTE",
    data: "cliente",
    style: "py-2 text-xs px-4 text-center border-b w-32  min-w-full",
  },
  [TABLESIMS.NUMERO_DE_TELEFONO]: {
    name: "Numero de telefono",
    data: "numerodetelefono",
    style: "py-2 text-xs px-4 text-center border-b w-32  min-w-full",
  },
  [TABLESIMS.FECHAINICIO]: {
    name: "Fecha inicio",
    data: "fechainicio",
    style: "py-2 text-xs px-4 text-center border-b w-32  min-w-full",
  },
  [TABLESIMS.VENCIMIENTO]: {
    name: "Vencimiento",
    data: "vencimiento",
    style: "py-2 text-xs px-4 text-center border-b w-32  min-w-full",
  },
  [TABLESIMS.DIASAVENCER]: {
    name: "Dias a vencer",
    data: "Diaavencer",
    style: "py-2 text-xs px-4 text-center border-b w-32  min-w-full",
  },
  [TABLESIMS.CORREO]: {
    name: "Correo",
    data: "correo",
    style: "py-2 text-xs px-4 text-center border-b w-96 min-w-full",
  },
  [TABLESIMS.PRECIO]: {
    name: "Precio",
    data: "valor",
    style: "py-2 text-xs px-4 text-center border-b  w-40 min-w-full",
  },
  [TABLESIMS.MG]: {
    name: "MG",
    data: "Mg",
    style: "py-2 text-xs px-4 text-center border-b  w-40 min-w-full",
  },
  [TABLESIMS.ACCIONES]: {
    name: "Acciones",
    data: "Acciones",
    style:
      "py-4 text-m  px-4 border-b flex flex-row  text-center content-center items-center space-x-1.5",
  },
} as const;
