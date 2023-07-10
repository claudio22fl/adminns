export const formatDate = (date: string) => {
  const objDate = new Date(date);
  const year = objDate.getFullYear();
  const month = String(objDate.getMonth() + 1).padStart(2, "0");
  const day = String(objDate.getDate()).padStart(2, "0");

  return `${day}-${month}-${year}`;
};

export const formatDateInputs = (date: string) => {
  const objDate = new Date(date);
  const year = objDate.getFullYear();
  const month = String(objDate.getMonth() + 1).padStart(2, "0");
  const day = String(objDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const formatDataInputs = (data: string) => {
  const objDate = new String(data);

  return `${objDate}`;
};
