import React from "react";

export default function ItemsPerPage({
  itemsPerPage,
  handleItemsPerPageChange,
}: any) {
  return (
    <div className="flex items-center mb-4">
      <label htmlFor="itemsPerPage" className="mr-2">
        Mostrar por página:
      </label>
      <select
        defaultValue={8}
        id="itemsPerPage"
        name="itemsPerPage"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        className="border text-slate-950 border-gray-300 px-2 py-1 rounded"
      >
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
        <option value="16">16</option>
      </select>
    </div>
  );
}
