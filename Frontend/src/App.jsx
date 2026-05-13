import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"

import AdminLogin
from "./pages/AdminLogin"

import AdminDashboard
from "./pages/AdminDashboard"
import AdminProducts
from "./pages/AdminProducts"
import AdminOrders from "./pages/AdminOrders"

function HomePage() {

  return (

    <>

      <Navbar />

      <Hero />

      <Products />

      <Cart />

      <Checkout />

      <About />

      <Contact />

      <Footer />

    </>
  )
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        <Route
          path="/dashboard"
          element={<AdminDashboard />}
        />
       
<Route path="/admin/orders" element={<AdminOrders />} />

<Route path="/admin/products" element={<AdminProducts />} />



      </Routes>

    </BrowserRouter>
  )
}

export default App