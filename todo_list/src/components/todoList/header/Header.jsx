import React, { Fragment } from "react";
import { Field } from "redux-form";
import SubmitButton from "../../submitButon/SubmitButton";

const TodoHeader = props => {
  return (
    <Fragment>
      <div className="form-group">
        <div>HEADER</div>
        <div>
          <Field
            component="input"
            type="text"
            name="enterTodo"
            className="form-control form-inline"
            placeholder="Add a To Do item"
          />
          <Field
            className="btn btn-secondary"
            component={SubmitButton}
            type="submit"
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
