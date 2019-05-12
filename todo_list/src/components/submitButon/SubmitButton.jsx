import React from "react";

const SubmitButton = ({
  name,
  type,
  className,
  label,
  input,
  meta: { touched }
}) => (
  <input
    {...input}
    type={type}
    className={className}
    value={label}
    name={name}
  />
);

export default SubmitButton;
