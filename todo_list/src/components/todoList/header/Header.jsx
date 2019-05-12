import React, { Fragment } from "react";
import { Field } from "redux-form";
import SubmitButton from "../../submitButon/SubmitButton";

const TodoHeader = props => {
  return (
    <Fragment>
      <div>
        <div>HEADER</div>
        <div>
          <Field component="input" type="text" name="enterTodo" />
          <Field
            className="btn btn-secondary"
            component={SubmitButton}
            type="button"
            value="Add Todo"
            name="addTodo"
            label="Add Todo"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default TodoHeader;
