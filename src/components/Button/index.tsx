import { ReactNode } from "react";
type ButtonProps = {
  type: string;
  text: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  let style;
  props.type === "dark"
    ? (style =
        "bg-stone-800 hover:bg-stone-600 text-white text-xs lg:text-sm py-1 lg:py-1 px-5 lg:px-7  rounded-lg  font-semibold ")
    : null;

  props.type === "light"
    ? (style =
        "bg-gray-50 hover:bg-gray-200 text-cool-gray-800  text-xs lg:text-sm py-1 lg:py-1 px-5 lg:px-7 rounded-lg shadow-lg font-semibold border border-gray-50 hover:border-gray-200")
    : null;

  props.type === "rounded"
    ? (style =
        "bg-gray-200 hover:bg-gray-800 text-gray-800 hover:text-white  w-7 h-7 lg:w-9 lg:h-9 rounded-full shadow-lg font-semibold border border-grey-800 flex items-center  justify-center")
    : null;

  return (
    <div className="cursor-pointer ">
      <button
        className={`${style} flex items-center  cursor-pointer disabled:cursor-not-allowed transition ease-in duration-500 tracking-widest`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
