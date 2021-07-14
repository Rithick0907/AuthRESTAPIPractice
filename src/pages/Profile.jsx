import * as Yup from "yup";

import { CustomForm, Input, SubmitButton } from "../components/form";

import { Link } from "react-router-dom";
import { StyledLogin } from "./styles";
import { passwordValidation } from "../validate";

const initialValues = {
  password: "",
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required()
    .matches(passwordValidation.regExp, passwordValidation.errorMessage)
    .label("Password"),
});
const Profile = () => {
  const handleSubmit = async (val, { isSubmitting, resetForm }) => {
    console.log(val);
    isSubmitting(false);
    resetForm();
  };
  return (
    <StyledLogin>
      <CustomForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <h1 className="text-center">Update Password</h1>
        <Input
          name="password"
          placeholder="Password"
          type="password"
          className="mt-4"
        />
        <div className="text-center mt-4">
          <SubmitButton type="submit" title="Update" />
        </div>
      </CustomForm>
    </StyledLogin>
  );
};

export default Profile;
