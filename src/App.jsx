
// import Cart from './pages/Cart';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import Register from './pages/Register';
// import { ProductsPage } from './pages/ProductsPage';
// import ProductDetails from './pages/ProductDetails';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/cart' element={<Cart />} />
//         <Route path='/product-details/:id' element={<ProductDetails />} />
//         <Route path='/products/:category' element={<ProductsPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// RaniaMedhat App.jsx Routing Code

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import User from "./Components/User/User.jsx";
import About_Us from "./Components/About_Us/About_Us.jsx";
import Categories from "./Components/Categories/Categories.jsx";
import Courses from "./Components/Courses/Courses.jsx";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword.jsx";
import Code from "./Components/Code/Code.jsx";
import ResetPassword from "./Components/ResetPassword/ResetPassword.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Notifications from "./Components/Notifications/Notifications.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import UserContextProvider from './Context/userContext.jsx';
UserContextProvider
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

let x = createBrowserRouter([
  {
    path: "",
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
    <>
    <div id="top" className="lg:mt-20 sm:mt-10 bg-white">
      <UserContextProvider>
  {" "}

  <RouterProvider router={x}></RouterProvider>
  
</UserContextProvider>
</div>
    
      
    </>
  );
}

export default App;




