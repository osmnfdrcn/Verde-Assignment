type TextAreaProps = {
  id?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  classes?: string;
  value?: any;
};

function TextArea(props: TextAreaProps) {
  const { id, rows, classes, onChange, value } = props;
  return (
    <textarea
      rows={rows}
      id={id}
      onChange={onChange}
      className={classes}
      value={value}
    />
  );
}

export default TextArea;
