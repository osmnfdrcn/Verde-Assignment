type LabelProps = {
  id: string;
  titleText: string;
  classes: string;
};

function Label(props: LabelProps) {
  const { id, titleText, classes } = props;
  return (
    <label htmlFor={id} className={classes}>
      {titleText}
    </label>
  );
}

export default Label;
