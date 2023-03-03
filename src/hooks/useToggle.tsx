import { useState, useCallback } from "react";

type useToggleProps = {
  initialValue: boolean;
};

const useToggle = () => {
  const [value, setValue] = useState(false);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
};
export default useToggle;
