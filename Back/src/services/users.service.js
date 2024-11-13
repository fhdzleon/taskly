const serviceLogin = async () => {
  try {
    return "User loged";
  } catch (error) {
    throw new Error("Failed for login");
  }
};

const serviceRegister = async () => {
  try {
    return "user Register";
  } catch (error) {
    throw new Error("Failed for register");
  }
};

module.exports = {
  serviceLogin,
  serviceRegister,
};
