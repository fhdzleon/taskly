export const serviceLogin = async () => {
  try {
    return "User loged";
  } catch (error) {
    throw new Error("Failed for login");
  }
};

export const serviceRegister = async () => {
  try {
    return "user Register now";
  } catch (error) {
    throw new Error("Failed for register");
  }
};
