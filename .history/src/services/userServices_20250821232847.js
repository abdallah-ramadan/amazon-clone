export const loginUser = async (req, res) => {
  sessionStorage.setItem("user", JSON.stringify(req.user));
};