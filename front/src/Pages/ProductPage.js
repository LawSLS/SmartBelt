import React from "react";
import ProductsList from "../Components/ProductsList";
import banner from "../Assets/banner.jpg";
import "./css/ProductPage.css";
import Filter from "../Components/Filter"




const ProductPage = () => {
  
  return (
    <div>
      <div className="container-fluid">
        <img className="img-fluid banner" src={banner} alt="banière" />
      </div>
     
      <div>
      <Filter />
    </div>
      <ProductsList />
 
    </div>
  );
};

export default ProductPage;

