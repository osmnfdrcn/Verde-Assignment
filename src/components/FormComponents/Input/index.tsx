type FormInputProps = {
  type: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  placeholder?: string;
  isAutoFocus?: boolean;
  value?: any;
};

function Input(props: FormInputProps) {
  const { type, id, onChange, classes, isAutoFocus, placeholder, value } =
    props;
  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      className={classes}
      autoFocus={isAutoFocus}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default Input;
