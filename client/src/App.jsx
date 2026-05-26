import { useState } from 'react';
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';
import CollectionsPage from './pages/CollectionsPage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import jewelryCollections from "./data/products";

function App() {

  const [ filters, setFilters ] = useState({
    categories: [],
    purity: [],
    availability: [],
  });

  // CONVERT PRODUCTS OBJECT ARRAYS INTO ONE ARRAY
  const allProducts = Object.values(jewelryCollections).flat();

  // FILTER PRODUCTS
  const filteredProducts = allProducts.filter((product) => {

    // CATEGORY
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);

    // PURITY
    const purityMatch =
      filters.purity.length === 0 ||
      filters.purity.includes(product.purity);

    // AVAILABILITY
    const availabilityMatch =
      filters.availability.length === 0 ||
      filters.availability.includes(product.availability);

    return (
      categoryMatch &&
      purityMatch &&
      availabilityMatch
    );
  });

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<Layout filters={filters} setFilters={setFilters} />}>
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/shop" element={<ShopPage filteredProducts={filteredProducts} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<OrderConfirmationPage />} />
      </Route>
    </Routes>
  );
}

export default App;