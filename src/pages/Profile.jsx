import * as Yup from "yup";

import { CustomForm, Input, SubmitButton } from "../components/form";
import { instance, passwordUpdateURL } from "../services/httpConfig";

import { StyledLogin } from "./styles";
import UserContext from "../contexts/UserContext";
import { passwordValidation } from "../validate";
import { toast } from "react-toastify";
import { useContext } from "react";

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
  const userContext = useContext(UserContext);

  const handleSubmit = async (val, { isSubmitting, resetForm }) => {
    const { password } = val;
    try {
      const { data } = await instance({
        url: passwordUpdateURL,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          idToken: userContext.token,
          password,
          returnSecureToken: true,
        },
      });
      console.log(data);
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
