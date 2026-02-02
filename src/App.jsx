import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import "./index.css"
import DefaultLayout from "./layouts/DefaultLayout"
import Product from "./pages/Product"
import NotFound from "./pages/NotFound"
import { BudgetProvider } from "./Context/BudgetContext"


function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </BudgetProvider>
  )
}

export default App

