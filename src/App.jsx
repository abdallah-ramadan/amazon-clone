import './App.css'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartOtherProduct from './components/CartOtherProductItem';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
