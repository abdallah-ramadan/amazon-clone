
const USER =

export const loginUser = async ({user}) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};
export const addToCart = async ({user}) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const logoutUser = async () => {
  sessionStorage.removeItem("user");
};