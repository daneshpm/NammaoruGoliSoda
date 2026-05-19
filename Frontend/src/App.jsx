import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import ProtectedRoute from "./components/ProtectedRoute"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import AdminProducts from "./pages/AdminProducts"
import AdminOrders from "./pages/AdminOrders"
import Analytics from "./pages/Analytics"

function HomePage() {

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Cart />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} /> */}
      <Route path="/admin" element={<AdminLogin />} />

      <Route path="/dashboard" element={
        <ProtectedRoute><AdminDashboard /></ProtectedRoute>
      } />

      <Route path="/admin/orders" element={
        <ProtectedRoute><AdminOrders /></ProtectedRoute>
      } />

      <Route path="/admin/products" element={
        <ProtectedRoute><AdminProducts /></ProtectedRoute>
      } />

      <Route path="/admin/analytics" element={
        <ProtectedRoute><Analytics /></ProtectedRoute>
      } />
    </Routes>
  )
}

export default App