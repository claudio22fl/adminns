import { FileSystemData } from "../types/types";

export const parseResult = (result: string): FileSystemData[] => {
    const lines = result.trim().split("\n");
    const data: FileSystemData[] = [];
  
    // Ignorar la primera línea ya que contiene los nombres de las columnas
    for (let i = 1; i < lines.length-4; i++) {
      const line = lines[i].trim();
      const [filesystem, size, used, avail, usePercent, mountedOn] =
        line.split(/\s+/);
  
      data.push({
        filesystem,
        size,
        used,
        avail,
        usePercent,
        mountedOn,
      });
    }
  
    return data;
  };
  
  export const sumSizes = (data: FileSystemData[]): number => {
      let totalSize = 0;

  for (const item of data) {
    let size = 0;

    // Verificar si el tamaño contiene 'G' o 'T'
    if (item.size.includes("G")) {
      // Eliminar el sufijo 'G' y convertir a número
      size = parseFloat(item.size.replace("G", ""));
    } else if (item.size.includes("T")) {
      // Eliminar el sufijo 'T' y convertir a número, multiplicar por 1000
      size = parseFloat(item.size.replace("T", "")) * 1000;
    }

    totalSize += size;
  }

  return totalSize;
  };
  
  export const sumUsed = (data: FileSystemData[]): number => {
    let totalUsed = 0;
  
    for (const item of data) {
      if (item.used.includes("G")) {
        // Eliminar el sufijo 'G' de los valores "used" y convertirlos a números
        const used = parseFloat(item.used.replace("G", ""));
        totalUsed += used;
      }
    }
  
    return totalUsed;
  };
