import { Button, Spinner } from "react-bootstrap";

import { useFormikContext } from "formik";

const SubmitButton = ({ title, ...otherAttributes }) => {
  const { isSubmitting } = useFormikContext();
  return (
    <Button disabled={isSubmitting} {...otherAttributes}>
      {isSubmitting ? <Spinner animation="border" /> : title}
    </Button>
  );
};

export default SubmitButton;
