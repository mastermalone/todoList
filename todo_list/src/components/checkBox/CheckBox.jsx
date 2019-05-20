import React from "react";

const Checkbox = props => (
  <div>
    <span>{props.fullName}</span>
    <label>
      <input type="checkbox" {...props} />
    </label>
  </div>
);

export default Checkbox;
