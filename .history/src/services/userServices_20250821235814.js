
export const getUser = () => {
  const user = sessionStorage.getItem("user");
  return  JSON.parse(user) ;
};

export const loginUser = async ({user}) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};
export const  = async ({user}) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const logoutUser = async () => {
  sessionStorage.removeItem("user");
};