export const passwordValidation = {
  regExp: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  errorMessage:
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
};
