import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Navbar from "./Components/Navbar";
import FormProductPage from "./Pages/FormProductPage";
import React, { useState } from "react";

const priceFilterContext = React.createContext();
const genderFilterContext = React.createContext();
const searchFilterContext = React.createContext();

function App() {
  const [filter, setFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");


  return (
    <div className="App">
      <priceFilterContext.Provider value={{filter, setFilter}}>
      <genderFilterContext.Provider value={{genderFilter, setGenderFilter}}>
      <searchFilterContext.Provider value={{searchFilter, setSearchFilter}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/addProduct" element={<FormProductPage />} />
        </Routes>
      </BrowserRouter>
      </searchFilterContext.Provider>
      </genderFilterContext.Provider>
      </priceFilterContext.Provider>
    </div>
  );
}

export default App;
export {priceFilterContext, genderFilterContext, searchFilterContext};