
export const loginUser = async ({user}) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};
export add

export const logoutUser = async () => {
  sessionStorage.removeItem("user");
};