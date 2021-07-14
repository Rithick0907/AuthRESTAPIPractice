import * as Yup from "yup";

import { CustomForm, Input, SubmitButton } from "../components/form";
import { instance, loginURL } from "../services/httpConfig";

import { Link } from "react-router-dom";
import { StyledLogin } from "./styles";
import UserContext from "../contexts/UserContext";
import { passwordValidation } from "../validate";
import { toast } from "react-toastify";
import { useContext } from "react";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .matches(passwordValidation.regExp, passwordValidation.errorMessage)
    .label("Password"),
});
const Login = () => {
  const userContext = useContext(UserContext);

  const handleSubmit = async (val, { isSubmitting, resetForm }) => {
    const { email, password } = val;
    try {
      const { data } = await instance({
        url: loginURL,
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
      userContext.loginHandler(data.idToken);
    } catch (e) {
      let errorMessage = "Something went wrong";
      if (
        e.response &&
        e.response.data &&
        e.response.data.error &&
        e.response.data.error.message
      ) {
        errorMessage = e.response.data.error.message;
      }
      toast.error(errorMessage);
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
        <h1 className="text-center">Login</h1>
        <Input name="email" placeholder="Email" className="mt-4" />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          className="mt-4"
        />
        <div className="text-center mt-4">
          <SubmitButton type="submit" title="Login" />
          <Link to="signup" className="d-block mt-3">
            Create an Account
          </Link>
        </div>
      </CustomForm>
    </StyledLogin>
  );
};

export default Login;
