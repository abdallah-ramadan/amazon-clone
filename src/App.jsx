
import Cart from './pages/Cart'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import { ProductsPage } from './pages/ProductsPage'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from './pages/ProductDetails'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product-details' element={<ProductDetails />} />
          <Route path='/products' element={<ProductsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
