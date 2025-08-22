import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { ProductsPage } from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/products/:category" element={<ProductsPage />} />
      </Routes>
      <Toaster position="top-right" /> {/* 👈 add this once */}
    </Router>
  );
}

export default App;
