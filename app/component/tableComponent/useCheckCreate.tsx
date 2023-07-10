import { ISim, checkboxesList } from "@/app/types/types";
import { useEffect, useState } from "react";

export const useCheckCreate = (posts: ISim[]) => {
  const [checkboxLists, setCheckboxSelecteds] = useState<checkboxesList[]>([]);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    const newCheckboxes = posts.map(({ id }) => ({
      id: id,
      state: false,
    }));

    setCheckboxSelecteds(newCheckboxes);
  }, [posts]);

  const handleCheckAllChange = () => {
    const updatedCheckboxes = checkboxLists.map((checkbox) => ({
      ...checkbox,
      state: !checkAll,
    }));
    setCheckboxSelecteds(updatedCheckboxes);
    setCheckAll(!checkAll);
  };

  return {
    checkAll,
    checkboxLists,
    setCheckboxSelecteds,
    handleCheckAllChange,
  };
};
