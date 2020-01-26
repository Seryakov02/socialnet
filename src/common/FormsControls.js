import React from "react";
import { Field } from "redux-form";

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={hasError ? "error" : null}>
      {children}
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};

export const Textarea = props => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = props => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = "",
  styleField
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
        style={styleField}
      />
      <label>{text}</label>
    </div>
  );
};

export const styleBtn = {
  padding: "3px 5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  display: "inline-block",
  background: "#fff",
  cursor: "pointer",
  width: "80px",
  marginTop: "8px"
};

export const styleField = {
  width: "20%",
  padding: "3px 5px",
  margin: "8px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box"
};
