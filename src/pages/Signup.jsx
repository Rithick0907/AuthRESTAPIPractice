import * as Yup from "yup";

import { CustomForm, Input, SubmitButton } from "../components/form";
import { instance, signupURL } from "../services/httpConfig";

import { Link } from "react-router-dom";
import { StyledLogin } from "./styles";
import { passwordValidation } from "../validate";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .matches(passwordValidation.regExp, passwordValidation.errorMessage)
    .label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Password Must Match"
  ),
});
const Signup = () => {
  const handleSubmit = async (val, { isSubmitting, resetForm }) => {
    const { email, password } = val;
    try {
      const response = await instance({
        url: signupURL,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email,
          password,
          returnSecureToken: true,
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e);
      resetForm();
    }
  };
  return (
    <StyledLogin>
      <CustomForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <h1 className="text-center">Register</h1>
        <Input name="email" placeholder="Email" className="mt-4" />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          className="mt-4"
        />
        <Input
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          className="mt-4"
        />
        <div className="text-center mt-4">
          <SubmitButton type="submit" title="Register" />
          <Link to="login" className="d-block mt-3">
            Already have an account
          </Link>
        </div>
      </CustomForm>
    </StyledLogin>
  );
};

export default Signup;
