import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import { ProductsPage } from './pages/Products/ProductsPage'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from './pages/ProductDetails'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Products' element={<ProductsPage />} />
          <Route path='/product-details' element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
