import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import Navbar from "./Components/Navbar";
import FormProductPage from "./Pages/FormProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/addProduct" element={<FormProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
