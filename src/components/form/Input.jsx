import { ErrorMessage, useField } from "formik";

import { Form } from "react-bootstrap";

const Input = ({ name, ...otherAttributes }) => {
  const [field, meta] = useField(name);
  const { error, touched } = meta;
  return (
    <>
      <Form.Control
        isValid={touched && !error}
        isInvalid={touched && !!error}
        {...field}
        {...otherAttributes}
      />
      <ErrorMessage name={name} className="text-danger" component="div" />
    </>
  );
};

export default Input;
