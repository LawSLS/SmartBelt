import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Navbar from "./Components/Navbar";
import FormProductPage from "./Pages/FormProductPage";
import Cart from "./Components/Cart";
import { useState } from "react";
import React, { createContext } from "react";
import CheckoutPage from "./Pages/CheckoutPage";

const CartContext = createContext();
const priceFilterContext = createContext();
const genderFilterContext = createContext();
const searchFilterContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{ cart, setCart }}>
          <priceFilterContext.Provider value={{ filter, setFilter }}>
            <genderFilterContext.Provider
              value={{ genderFilter, setGenderFilter }}
            >
              <searchFilterContext.Provider
                value={{ searchFilter, setSearchFilter }}
              >
                <Navbar />
                <Routes>
                  <Route path="/" element={<ProductPage />} />
                  <Route path="/addProduct" element={<FormProductPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
              </searchFilterContext.Provider>
            </genderFilterContext.Provider>
          </priceFilterContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
export { CartContext };
export { priceFilterContext, genderFilterContext, searchFilterContext };
