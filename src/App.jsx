import { NavLink, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import ProductsProvider from "./context/ProductContext";

function App() {
  return (
    <ProductsProvider>
    <Routes>
      <Route index element={<NavLink to="/products" replace />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="product/:id" element={<DetailsPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<ProductsPage />} />
    </Routes>
    </ProductsProvider>
  )
}

export default App
