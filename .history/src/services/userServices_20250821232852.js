export const loginUser = async ({}) => {
  sessionStorage.setItem("user", JSON.stringify(req.user));
};