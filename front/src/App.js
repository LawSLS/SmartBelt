import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Navbar from "./Components/Navbar";
import FormProductPage from "./Pages/FormProductPage";
import Cart from "./Components/Cart";
import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/addProduct" element={<FormProductPage />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
export { CartContext };
