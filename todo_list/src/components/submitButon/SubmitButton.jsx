import React from "react";

const SubmitButton = ({
  name,
  type,
  className,
  onSubmit,
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
    onSubmit={onSubmit}
  />
);

export default SubmitButton;
