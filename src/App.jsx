import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";
import About_Us from "./Components/About_Us/About_Us";
import Categories from "./Components/Categories/Categories";
import Courses from "./Components/Courses/Courses";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Code from "./Components/Code/Code";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Cart from "./Components/Cart/Cart";
import Notifications from "./Components/Notifications/Notifications";
import NotFound from "./Components/NotFound/NotFound";
import UserContextProvider from "./Context/userContext";
import "./App.css";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "user", element: <User /> },
      { path: "About_Us", element: <About_Us /> },
      { path: "courses", element: <Courses /> },
      { path: "categories", element: <Categories /> },
      { path: "register", element: <Register /> },
      { path: "code", element: <Code /> },
      { path: "resetpassword", element: <ResetPassword /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      { path: "cart", element: <Cart /> },
      { path: "notifications", element: <Notifications /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
            <Toaster position="bottom-right" /> 

    </UserContextProvider>
  );
}

export default App;
