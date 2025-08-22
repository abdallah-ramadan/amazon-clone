export const loginUser = async ({user}) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};