import { useState, useEffect, useMemo } from 'react';
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
import ProductDetailPage from './pages/ProductDetailPage';

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  cardNumber: "",
  expiryDate: "",
  cvv: ""
};

function App() {

  const [ filters, setFilters ] = useState({
    categories: [],
    purity: [],
    availability: [],
  });

  const [ formData, setFormData ] = useState(initialFormData);

  const resetFormData = () => {
    setFormData(initialFormData);
  };

  // Save Cart to Local Storage for persistence
  const [ cart, setCart ] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // CONVERT PRODUCTS OBJECT ARRAYS INTO ONE ARRAY

  /* Used useMemo on 'allProducts' and 'filteredProducts' to stop firing page reset on ShopPage 
  when 'Add to cart' button is clicked on a product */
  
  const allProducts = useMemo(
    () => Object.values(jewelryCollections).flat(),
    []
  );

  // FILTER PRODUCTS
  const filteredProducts = useMemo(
    () =>
      allProducts.filter((product) => {
        const categoryMatch =
          filters.categories.length === 0 ||
          filters.categories.includes(product.category);

        const purityMatch =
          filters.purity.length === 0 ||
          filters.purity.includes(product.purity);

        const availabilityMatch =
          filters.availability.length === 0 ||
          filters.availability.includes(product.availability);

        return categoryMatch && purityMatch && availabilityMatch;
      }),
    [allProducts, filters]
  );

  // Load cart from localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // Increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} addToCart={addToCart} />} />

      <Route element={<Layout cart={cart} filters={filters} setFilters={setFilters} />}>
        <Route path="/collections" element={<CollectionsPage cart={cart} addToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage cart={cart} addToCart={addToCart} filteredProducts={filteredProducts} />} />
        <Route path="/product/:id" element={<ProductDetailPage cart={cart} setCart={setCart} addToCart={addToCart} allProducts={allProducts} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} formData={formData} setFormData={setFormData} resetFormData={resetFormData} />} />
        <Route path="/confirmation" element={<OrderConfirmationPage formData={formData} />} />
      </Route>
    </Routes>
  );
}

export default App;