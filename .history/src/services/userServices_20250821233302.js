
export const loginUser = async ({user}) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};


export const logoutUser = async () => {
  sessionStorage.removeItem("user");
};