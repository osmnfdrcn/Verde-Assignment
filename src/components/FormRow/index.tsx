import React from "react";

type FormRowProps = {
  children: React.ReactNode;
  classes: string;
};

function FormRow({ children, classes }: FormRowProps) {
  return <div className="classes">{children}</div>;
}

export default FormRow;
