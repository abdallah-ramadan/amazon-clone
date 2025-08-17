

import './App.css'
<<<<<<< HEAD
import Cart from './pages/Cart'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import ProductDetails from './pages/ProductDetails'
>>>>>>> 3fa5cac (completing page ui)

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
